'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import { validators } from 'metal-state';

import templates from './MetalQuartzCheckbox.soy.js';

/**
 * Implementation of the Metal Quartz Checkbox.
 */
class MetalQuartzCheckbox extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzCheckbox.STATE = {
	checkboxInline: {
		validator: validators.array
	},

	/**
	 * Sets the checked attribute on the checkbox input.
	 * @instance
	 * @memberof MetalQuartzCheckbox
	 * @type {!boolean}
	 * @default undefined
	 */
	checked: {
		validator: validators.boolean
	},

	/**
	 * Sets the disabled attribute on the checkbox input.
	 * @instance
	 * @memberof MetalQuartzCheckbox
	 * @type {!boolean}
	 * @default undefined
	 */
	disabled: {
		validator: validators.boolean
	},

	/**
	 * Renders the checkbox label text.
	 * @instance
	 * @memberof MetalQuartzCheckbox
	 * @type {?string}
	 * @default undefined
	 */
	label: {
		isHtml: true
	},

	/**
	 * Sets the name attribute on the checkbox input.
	 * @instance
	 * @memberof MetalQuartzCheckbox
	 * @type {?string}
	 * @default undefined
	 */
	name: {
		validator: validators.string
	}
};

Soy.register(MetalQuartzCheckbox, templates);

export default MetalQuartzCheckbox;