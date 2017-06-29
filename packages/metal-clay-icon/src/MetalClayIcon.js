'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import {validators} from 'metal-state';

import templates from './MetalClayIcon.soy.js';

/**
 * Implementation of the Metal Clay Icon.
 */
class MetalClayIcon extends Component {

	syncSymbol(value) {
		this.label = value;

	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalClayIcon.STATE = {
	/**
	 * The description for the aria-label attribute
	 * @instance
 	 * @memberof MetalClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	label: {
		setter: val => val ? val.replace(/-/g, ' ') : ''
	},

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof MetalClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: {
		validator: validators.string
	},

	/**
	 * The name of the Clay SVG Icon e.g. `plus`.
	 * @instance
	 * @memberof MetalClayIcon
	 * @type {?string}
	 * @default undefined
	 */
	symbol: {
		validator: validators.string
	}
};

Soy.register(MetalClayIcon, templates);

export default MetalClayIcon;