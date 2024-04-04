import Alpine from "alpinejs";
import htmx from "htmx.org";

window.Alpine = Alpine;
window.htmx = htmx;
Alpine.start();
// wait until wp object is available

// keep trying until wp object is available
if (typeof wp !== "undefined") {
	let tailwindTypographyClasses = ["prose", "has-global-padding"];

	wp.domReady(() => {
		// _.forEach(wp.blocks.getBlockTypes(), function (blockType) {
		// 	let blockStyles = wp.data
		// 		.select('core/blocks')
		// 		.getBlockStyles(blockType.name);
		// 	if (!_.isEmpty(blockStyles)) {
		// 		_.forEach(_.pluck(blockStyles, 'name'), function (blockStyle) {
		// 			wp.blocks.unregisterBlockStyle(blockType.name, blockStyle);
		// 		});
		// 	}
		// });

		/**
Example:

wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'paragraph-1',
    label: 'Paragraph 1',
});

*/
		wp.blocks.registerBlockStyle("core/button", {
			name: "btn-1",
			label: "Button 1",
		});
		wp.blocks.registerBlockStyle("core/button", {
			name: "btn-2",
			label: "Button 2",
		});
		wp.blocks.registerBlockStyle("core/button", {
			name: "btn-3",
			label: "Button 3",
		});
		wp.blocks.registerBlockStyle("core/button", {
			name: "btn-4",
			label: "Button 4",
		});
	});
}
