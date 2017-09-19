import 'clay-button';
import 'clay-icon';
import Dropdown from 'metal-dropdown';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import templates from './ClayDropdown.soy.js';

/**
 * Implementation of the Metal Clay Dropdown.
 */
class ClayDropdown extends Dropdown {
	/**
	 * @inheritDoc
	 */
	rendered() {
		// TODO DEBOUNCE
	}

	/**
	 * Handles Search in Dropdown.
	 * @param {!Event} event
	 * @protected
	 */
	_handleSearch(event) {
		// let value = event.delegateTarget.value;
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDropdown.STATE = {
	/**
     * Element selector used to position dropdown according to trigger position.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default .dropdown-toggle
     */
	alignElementSelector: Config.string()
		.value('.dropdown-toggle')
		.internal(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	expanded: Config.bool(),

	/**
     * Position in which item indicator symbols will be placed. Needed if any
     * item has indicators.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string|undefined}
	 * @default undefined
     */
	indicatorsPosition: Config.oneOf(['left', 'right']),

	/**
	 * List of menu items.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {!Array}
	 * @default undefined
	 */
	items: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool(),
			checked: Config.bool(),
			disabled: Config.bool(),
			indicatorSymbol: Config.string(),
			label: Config.string().required(),
			url: Config.string().required(),
			inputName: Config.string(),
			type: Config.oneOf(['checkbox', 'header', 'radio', 'separator']),
		}),
	).required(),

	/**
	 * Flag to indicate if menu has a search field and search through elements
     * is possible.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	searchable: Config.bool(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {?string}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Label of the trigger button.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {!string}
	 * @default undefined
	 */
	triggerLabel: Config.any().required(),

	/**
	 * Style of the trigger button.
	 * @instance
	 * @memberof ClayDropdown
	 * @type {!string}
	 * @default unstyled
	 */
	triggerStyle: Config.oneOf([
		'borderless',
		'link',
		'primary',
		'secondary',
		'unstyled',
	]).value('unstyled'),
};

Soy.register(ClayDropdown, templates);

export { ClayDropdown };
export default ClayDropdown;
