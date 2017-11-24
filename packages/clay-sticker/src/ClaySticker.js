import 'clay-icon';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClaySticker.soy.js';

/**
 * Implementation of the Metal Clay Link.
 */
class ClaySticker extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClaySticker.STATE = {
	/**
	 * Render ClayIcon in the ClaySticker element.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.shapeOf({
		spritemap: Config.string().required(),
		symbol: Config.string().required(),
	}),

	/**
	 * Id to be applied to the sticker element.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Sets the text or HTML to be rendered inside sticker.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?html|string|undefined}
	 * @default undefined
	 */
	label: Config.any(),

	/**
	 * Flag to indicate if the sticker should be positioned on the outside
	 * corners when position is defined.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?bool}
	 * @default false
	 */
	outside: Config.bool().value(false),

	/**
	 * Sticker position if not static. Available positions are `bottom-left`,
	 * `bottom-right`, `top-right`.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?string|undefined}
	 * @default undefined
	 */
	position: Config.oneOf([
		'bottom-left',
		'bottom-right',
		'top-left',
		'top-right',
	]),

	/**
	 * Sticker size. Available sizes are `sm`, `lg`, `xl`.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.oneOf(['lg', 'sm', 'xl']),

	/**
	 * Shape of the sticker. Available shapes are `circle`, `rounded`.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?string}
	 * @default rounded
	 */
	shape: Config.oneOf(['circle', 'rounded']).value('rounded'),

	/**
	 * Sticker style. Available sizes are: `danger`, `dark`, `info`, `light`,
	 * `primary`, `secondary`, `success`, `warning`.
	 * @instance
	 * @memberof ClaySticker
	 * @type {?string}
	 * @default primary
	 */
	style: Config.oneOf([
		'danger',
		'dark',
		'info',
		'light',
		'primary',
		'secondary',
		'success',
		'warning',
	]).value('primary'),
};

defineWebComponent('clay-sticker', ClaySticker);

Soy.register(ClaySticker, templates);

export {ClaySticker};
export default ClaySticker;
