import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayIcon.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 */
class ClayIcon extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayIcon.STATE = {
  /**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
  id: Config.string(),

  /**
	 * Flag to indicate if the icon should be monospaced.
	 * @instance
	 * @memberof ClayIcon
	 * @type {?bool}
	 * @default false
	 */
  monospaced: Config.bool().value(false),

  /**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 * @default undefined
	 */
  spritemap: Config.string().required(),

  /**
	 * The name of the Clay SVG Icon e.g. `plus`.
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 * @default undefined
	 */
  symbol: Config.string().required(),
};

Soy.register(ClayIcon, templates);

export {ClayIcon};
export default ClayIcon;
