/**
 * External dependencies
 */
import type { ForwardedRef } from 'react';
import { css } from '@emotion/react';

/**
 * WordPress dependencies
 */
import {
	useMemo,
	useState,
	useCallback,
	useReducer,
	useRef,
} from '@wordpress/element';
import isShallowEqual from '@wordpress/is-shallow-equal';

/**
 * Internal dependencies
 */
import {
	contextConnect,
	useContextSystem,
	WordPressComponentProps,
} from '../../ui/context';
import { useCx } from '../../utils/hooks/use-cx';
import { View } from '../../view';
import { NavigatorContext } from '../context';
import type {
	NavigatorProviderProps,
	NavigatorLocation,
	NavigatorContext as NavigatorContextType,
	Screen,
} from '../types';
import { patternMatch } from '../utils/router';

type MatchedPath = ReturnType< typeof patternMatch >;
type ScreenAction = { type: string; screen: Screen };

function screensReducer(
	state: Screen[] = [],
	action: ScreenAction
): Screen[] {
	switch ( action.type ) {
		case 'add':
			return [ ...state, action.screen ];
		case 'remove':
			return state.filter( ( s: Screen ) => s.id !== action.screen.id );
	}

	return state;
}

function UnconnectedNavigatorProvider(
	props: WordPressComponentProps< NavigatorProviderProps, 'div' >,
	forwardedRef: ForwardedRef< any >
) {
	const { initialPath, children, className, ...otherProps } =
		useContextSystem( props, 'NavigatorProvider' );

	const [ locationHistory, setLocationHistory ] = useState<
		NavigatorLocation[]
	>( [
		{
			path: initialPath,
		},
	] );
	const [ screens, dispatch ] = useReducer( screensReducer, [] );
	const currentMatch = useRef< MatchedPath >();
	const matchedPath = useMemo( () => {
		let currentPath: string | undefined;
		if (
			locationHistory.length === 0 ||
			( currentPath =
				locationHistory[ locationHistory.length - 1 ].path ) ===
				undefined
		) {
			currentMatch.current = undefined;
			return undefined;
		}

		const resolvePath = ( path: string ) => {
			const newMatch = patternMatch( path, screens );

			// If the new match is the same as the current match,
			// return the previous one for performance reasons.
			if (
				currentMatch.current &&
				newMatch &&
				isShallowEqual(
					newMatch.params,
					currentMatch.current.params
				) &&
				newMatch.id === currentMatch.current.id
			) {
				return currentMatch.current;
			}

			return newMatch;
		};

		const newMatch = resolvePath( currentPath );
		currentMatch.current = newMatch;
		return newMatch;
	}, [ screens, locationHistory ] );

	const addScreen = useCallback(
		( screen: Screen ) => dispatch( { type: 'add', screen } ),
		[]
	);

	const removeScreen = useCallback(
		( screen: Screen ) => dispatch( { type: 'remove', screen } ),
		[]
	);

	const goTo: NavigatorContextType[ 'goTo' ] = useCallback(
		( path, options = {} ) => {
			setLocationHistory( ( prevLocationHistory ) => {
				const { focusTargetSelector, ...restOptions } = options;

				const newLocation = {
					...restOptions,
					path,
					isBack: false,
					hasRestoredFocus: false,
				};

				if ( prevLocationHistory.length < 1 ) {
					return [ newLocation ];
				}

				return [
					...prevLocationHistory.slice( 0, -1 ),
					// Assign `focusTargetSelector` to the previous location in history
					// (the one we just navigated from).
					{
						...prevLocationHistory[
							prevLocationHistory.length - 1
						],
						focusTargetSelector,
					},
					newLocation,
				];
			} );
		},
		[]
	);

	const goBack: NavigatorContextType[ 'goBack' ] = useCallback( () => {
		setLocationHistory( ( prevLocationHistory ) => {
			if ( prevLocationHistory.length <= 1 ) {
				return prevLocationHistory;
			}
			return [
				...prevLocationHistory.slice( 0, -2 ),
				{
					...prevLocationHistory[ prevLocationHistory.length - 2 ],
					isBack: true,
					hasRestoredFocus: false,
				},
			];
		} );
	}, [] );

	const navigatorContextValue: NavigatorContextType = useMemo(
		() => ( {
			location: {
				...locationHistory[ locationHistory.length - 1 ],
				isInitial: locationHistory.length === 1,
			},
			params: matchedPath ? matchedPath.params : {},
			match: matchedPath ? matchedPath.id : undefined,
			goTo,
			goBack,
			addScreen,
			removeScreen,
		} ),
		[ locationHistory, matchedPath, goTo, goBack, addScreen, removeScreen ]
	);

	const cx = useCx();
	const classes = useMemo(
		// Prevents horizontal overflow while animating screen transitions.
		() => cx( css( { overflowX: 'hidden' } ), className ),
		[ className, cx ]
	);

	return (
		<View ref={ forwardedRef } className={ classes } { ...otherProps }>
			<NavigatorContext.Provider value={ navigatorContextValue }>
				{ children }
			</NavigatorContext.Provider>
		</View>
	);
}

/**
 * The `NavigatorProvider` component allows rendering nested views/panels/menus
 * (via the `NavigatorScreen` component and navigate between these different
 * view (via the `NavigatorButton` and `NavigatorBackButton` components or the
 * `useNavigator` hook).
 *
 * @example
 * ```jsx
 * import {
 *   __experimentalNavigatorProvider as NavigatorProvider,
 *   __experimentalNavigatorScreen as NavigatorScreen,
 *   __experimentalNavigatorButton as NavigatorButton,
 *   __experimentalNavigatorBackButton as NavigatorBackButton,
 * } from '@wordpress/components';
 *
 * const MyNavigation = () => (
 *   <NavigatorProvider initialPath="/">
 *     <NavigatorScreen path="/">
 *       <p>This is the home screen.</p>
 *        <NavigatorButton path="/child">
 *          Navigate to child screen.
 *       </NavigatorButton>
 *     </NavigatorScreen>
 *
 *     <NavigatorScreen path="/child">
 *       <p>This is the child screen.</p>
 *       <NavigatorBackButton>
 *         Go back
 *       </NavigatorBackButton>
 *     </NavigatorScreen>
 *   </NavigatorProvider>
 * );
 * ```
 */
export const NavigatorProvider = contextConnect(
	UnconnectedNavigatorProvider,
	'NavigatorProvider'
);

export default NavigatorProvider;
