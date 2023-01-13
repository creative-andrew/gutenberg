/**
 * WordPress dependencies
 */
import { Popover } from '@wordpress/components';
import { useContext, useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { BlockList } from '../';
import { __unstableUseBlockElement as useBlockElement } from '../block-list/use-block-props/use-block-refs';

export default function LayoutPopover( {
	layoutClientId,
	focusedClientId,
	children,
} ) {
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );
	const [ coverElementStyle, setCoverElementStyle ] = useState( null );
	const focusedBlockElement = useBlockElement( focusedClientId );
	const layoutBlockElement = useBlockElement( layoutClientId );

	// useBlockElement is unable to return the document's root block list.
	// __unstableElementContext seems to provide this.
	const rootBlockListElement = useContext(
		BlockList.__unstableElementContext
	);

	useEffect( () => {
		const resolvedLayoutElement =
			layoutBlockElement ?? rootBlockListElement;
		if ( ! focusedBlockElement || ! resolvedLayoutElement ) {
			return;
		}

		const { ownerDocument } = focusedBlockElement;
		const { defaultView } = ownerDocument;

		const update = () => {
			// The popover is positioned to the top of the block list that provides the layout
			// and left of the 'focused' block.
			setPopoverAnchor( {
				ownerDocument,
				getBoundingClientRect() {
					const layoutRect =
						resolvedLayoutElement.getBoundingClientRect();
					const focusedBlockRect =
						focusedBlockElement.getBoundingClientRect();

					return new defaultView.DOMRect(
						layoutRect.x,
						focusedBlockRect.y,
						layoutRect.width,
						focusedBlockRect.height
					);
				},
			} );

			// The cover element is an inner element within the popover. It has the width of the layout
			// and height of the focused block, and also matches any padding of the layout.
			setCoverElementStyle( {
				position: 'absolute',
				width: resolvedLayoutElement.offsetWidth,
				height: focusedBlockElement.offsetHeight,
			} );
		};

		// Observe any resizes of both the layout and focused elements.
		const resizeObserver = defaultView.ResizeObserver
			? new defaultView.ResizeObserver( update )
			: undefined;
		resizeObserver?.observe( resolvedLayoutElement );
		resizeObserver?.observe( focusedBlockElement );
		update();

		return () => {
			resizeObserver?.disconnect();
		};
	}, [ focusedBlockElement, layoutBlockElement, rootBlockListElement ] );

	return (
		<Popover
			anchor={ popoverAnchor }
			placement="top-start"
			className="block-editor__alignment-visualizer"
			animate={ false }
			focusOnMount={ false }
			flip={ false }
			resize={ false }
			variant="unstyled"
			__unstableInline
		>
			<div
				className="block-editor__alignment-visualizer-cover-element"
				style={ coverElementStyle }
			>
				{ children }
			</div>
		</Popover>
	);
}
