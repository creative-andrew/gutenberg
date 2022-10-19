/**
 * WordPress dependencies
 */
import {
	store as coreStore,
	useResourcePermissions,
} from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import useNavigationEntityTypes from './use-navigation-entity-types';

export default function useNavigationMenu( ref ) {
	const permissions = useResourcePermissions( 'navigation', ref );

	const entityConfig = useNavigationEntityTypes( ref );

	return useSelect(
		( select ) => {
			const {
				canCreate,
				canUpdate,
				canDelete,
				isResolving,
				hasResolved,
			} = permissions;

			const {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,
			} = selectNavigationMenus( select, ref, entityConfig );

			const {
				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,
			} = selectExistingMenu( select, ref, entityConfig );

			return {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,

				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,

				canSwitchNavigationMenu: ref
					? navigationMenus?.length > 1
					: navigationMenus?.length > 0,

				canUserCreateNavigationMenu: canCreate,
				isResolvingCanUserCreateNavigationMenu: isResolving,
				hasResolvedCanUserCreateNavigationMenu: hasResolved,

				canUserUpdateNavigationMenu: canUpdate,
				hasResolvedCanUserUpdateNavigationMenu: ref
					? hasResolved
					: undefined,

				canUserDeleteNavigationMenu: canDelete,
				hasResolvedCanUserDeleteNavigationMenu: ref
					? hasResolved
					: undefined,
			};
		},
		[ ref, permissions ]
	);
}

function selectNavigationMenus( select, _ref, entityConfig ) {
	const { getEntityRecords, hasFinishedResolution, isResolving } =
		select( coreStore );

	const args = [ ...entityConfig, { per_page: -1, status: 'publish' } ];

	return {
		navigationMenus: getEntityRecords( ...args ),
		isResolvingNavigationMenus: isResolving( 'getEntityRecords', args ),
		hasResolvedNavigationMenus: hasFinishedResolution(
			'getEntityRecords',
			args
		),
	};
}

function selectExistingMenu( select, ref, entityConfig ) {
	if ( ! ref ) {
		return {
			isNavigationMenuResolved: false,
			isNavigationMenuMissing: true,
			navigationMenu: null,
		};
	}

	const { getEntityRecords, getEditedEntityRecord, hasFinishedResolution } =
		select( coreStore );

	const navigationMenus = getEntityRecords( ...entityConfig, {
		per_page: 1, // only the 1 record is required.
		name: ref, // fetch by slug
	} );

	const hasNavigationMenu = navigationMenus?.length;
	let args = [];

	if ( hasNavigationMenu ) {
		args = [ ...entityConfig, navigationMenus[ 0 ]?.id ];

		console.log( { args } );
	}

	const editedNavigationMenu = hasNavigationMenu
		? getEditedEntityRecord( ...args )
		: null;

	const hasResolvedNavigationMenu = hasNavigationMenu
		? hasFinishedResolution( 'getEditedEntityRecord', args )
		: null;

	// Only published Navigation posts are considered valid.
	// Draft Navigation posts are valid only on the editor,
	// requiring a post update to publish to show in frontend.
	// To achieve that, index.php must reflect this validation only for published.
	const isNavigationMenuPublishedOrDraft =
		editedNavigationMenu?.status === 'publish' ||
		editedNavigationMenu?.status === 'draft';

	return {
		isNavigationMenuResolved: hasResolvedNavigationMenu,
		isNavigationMenuMissing:
			hasResolvedNavigationMenu &&
			( ! hasNavigationMenu || ! isNavigationMenuPublishedOrDraft ),

		// getEditedEntityRecord will return the post regardless of status.
		// Therefore if the found post is not published then we should ignore it.
		navigationMenu: isNavigationMenuPublishedOrDraft
			? editedNavigationMenu
			: null,
	};
}
