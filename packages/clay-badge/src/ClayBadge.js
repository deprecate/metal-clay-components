'use strict';

import 'clay-icon';
import templates from './ClayBadge.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

/**
 * Metal Clay Badge component.
 */
class ClayBadge extends Component {}

/**
 * State definition.
 * @static
 * #type {!Object}
 */
ClayBadge.STATE = {
	/**
	 * Render ClayIcon in the ClayBadge element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.shapeOf({
		alignment: Config.oneOf(['left', 'right']),
		monospaced: Config.bool(),
		spritemap: Config.string().required(),
		symbol: Config.string().required(),
	}),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	id: Config.string(),

	/**
	 * The label of the badge element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|html|undefined}
	 * default undefined
	 */
	label: Config.any(),

	/**
	 * The size of the badge element.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	size: Config.oneOf(['sm', 'lg']),

	/**
	 * Shape of the badge.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	shape: Config.oneOf(['pill']),

	/**
	 * HREF in all badge.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	href: Config.string(),

	/**
	 * Badge style color.
	 * @instance
	 * @memberof ClayBadge
	 * @type {?string|undefined}
	 * default undefined
	 */
	style: Config.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]).value('primary'),
};

Soy.register(ClayBadge, templates);

export { ClayBadge };
export default ClayBadge;
