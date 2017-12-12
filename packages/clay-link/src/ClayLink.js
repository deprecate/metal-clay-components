import 'clay-icon';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayLink.soy.js';

/**
 * Implementation of the Metal Clay Link.
 */
class ClayLink extends ClayComponent {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLink.STATE = {
	/**
	 * Aria label attribute for the anchor element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	ariaLabel: Config.string(),

	/**
	 * Aria Expanded attribute for the anchor element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	ariaExpanded: Config.bool(),

	/**
	 * The css class to act as a button. If this is defined `style` param is
	 * ignored.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	buttonStyle: Config.oneOf(['borderless', 'link', 'primary', 'secondary']),

	/**
	 * Data to add to the element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?object}
	 * @default undefined
	 */
	data: Config.object(),

	/**
	 * Sets the download attribute on the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	download: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Sets the HTML attribute href on the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Icon to be rendered in the link.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Render position of the ClayIcon in the ClayLink element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string}
	 * @default left
	 */
	iconAlignment: Config.oneOf(['left', 'right']).value('left'),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Sets the text or HTML to be rendered inside the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?html|string|undefined}
	 * @default undefined
	 */
	label: Config.any(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * The css class that colors the button.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	style: Config.oneOf(['secondary']),

	/**
	 * Sets the HTML attribute target on the anchor tag.
	 * @instance
	 * @memberof ClayLink
	 * @type {?string|undefined}
	 * @default undefined
	 */
	target: Config.string(),
};

defineWebComponent('clay-link', ClayLink);

Soy.register(ClayLink, templates);

export {ClayLink};
export default ClayLink;
