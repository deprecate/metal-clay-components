import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayCheckbox.soy.js';

/**
 * Implementation of the Metal Clay Checkbox.
 */
class ClayCheckbox extends Component {
	/**
	 * @inheritDoc
	 */
	syncIndeterminate() {
		this.refs.input.indeterminate = this.indeterminate;
	}
}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
ClayCheckbox.STATE = {
	/**
	 * Flag to indicate if checkbox is checked.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 * @default false
	 */
	checked: Config.bool().value(false),

	/**
	 * Flag to indicate if checkbox is disabled.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?string}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if label should be hide.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 * @default false
	 */
	hideLabel: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?string}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Flag to indicate if checbkox's checked state is indeterminate.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 * @default false
	 */
	indeterminate: Config.bool().value(false),

	/**
	 * Flag to indicate if input should be wrapped to be inline or not.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?bool}
	 * @default false
	 */
	inline: Config.bool().value(false),

	/**
	 * Label of the input. Required for accesibility.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {!string|html}
	 * @default undefined
	 */
	label: Config.any().required(),

	/**
	 * Name to be applied to the element.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?string}
	 * @default undefined
	 */
	name: Config.string(),

	/**
	 * Value to be applied to the element.
	 * @instance
	 * @memberof ClayCheckbox
	 * @type {?string}
	 * @default undefined
	 */
	value: Config.string(),
};

defineWebComponent('clay-checkbox', ClayCheckbox);

Soy.register(ClayCheckbox, templates);

export {ClayCheckbox};
export default ClayCheckbox;
