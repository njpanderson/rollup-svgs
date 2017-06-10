// import the glyp map and the sprite creator function from svg-sprite
import GLYPHS, { attachSVG } from './img/svg-sprite';

/**
 * Run the SVG attachment function - this places an <svg> tag on the page
 * containing all of the individual SVG files as <symbol> tags with IDs that
 * inherit from their filenames.
 */
attachSVG();

var glyph, svg, use;

/**
 * The below code will add some SVGs to the page. This is just an example of how
 * the tags could be generated, but in reality you might do this with a UI
 * framework like React.
 */
for (glyph in GLYPHS) {
	// create the svg and use tags, using the appropriate namespace
	svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

	// create the width/height attributes on the svg
	svg.setAttribute('width', 32);
	svg.setAttribute('height', 32);

	// set the xhlink:href attribute of the use tag to match the glyph's ID
	use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', GLYPHS[glyph]);

	// insert use into svg, svg into the document
	svg.appendChild(use);
	document.body.appendChild(svg);
}