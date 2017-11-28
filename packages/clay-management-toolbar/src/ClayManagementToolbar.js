import 'clay-button';
import 'clay-checkbox';
import 'clay-dropdown';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import itemsValidator from './items_validator';
import templates from './ClayManagementToolbar.soy.js';

/**
 * Metal ClayManagementToolbar component.
 */
class ClayManagementToolbar extends Component {
	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleFilterDoneButtonClick_(event) {
		this.emit('filterDone', event);
	}

	/**
	 * Continues the propagation of the plus button clicked event
	 * @param {!Event} event
	 * @private
	 */
	handlePlusButtonClicked_(event) {
		this.emit('plusButtonClicked', event);
	}

	/**
	 * Continues the propagation of the select all button clicked event
	 * @param {!Event} event
	 * @private
	 */
	handleSelectAllClicked_(event) {
		this.emit('selectAllClicked', event);
	}

	/**
	 * Continues the propagation of the checkbox changed event
	 * @param {!Event} event
	 * @private
	 */
	handleSelectPageCheckboxChanged_(event) {
		this.emit('selectPageCheckboxChanged', event);
	}

	/**
	 * Continues the propagation of the sorting button clicked event
	 * @private
	 */
	handleSortingButtonClicked_() {
		this.emit('sortingButtonClicked', {
			sortingOrder: this.sortingOrder,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayManagementToolbar.STATE = {
	/**
	 * List of items to display in the actions menu on active state.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: itemsValidator,

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * List of filter menu items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?array|undefined}
	 * @default undefined
	 */
	filterItems: itemsValidator,

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Flag to indicate if the managment toolbar will control the selection of
	 * elements.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?bool|undefined}
	 * @default undefined
	 */
	selectable: Config.bool().value(false),

	/**
	 * Number of selected items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?number|undefined}
	 * @default undefined
	 */
	selectedItems: Config.number(),

	/**
	 * Sorting order.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default asc
	 */
	sortingOrder: Config.oneOf(['asc', 'desc']).value('asc'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?string|undefined}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?number|undefined}
	 * @default undefined
	 */
	totalItems: Config.number(),

	/**
	 * List of view items.
	 * @instance
	 * @memberof ClayManagementToolbar
	 * @type {?array|undefined}
	 * @default undefined
	 */
	viewTypes: itemsValidator,
};

defineWebComponent('clay-management-toolbar', ClayManagementToolbar);

Soy.register(ClayManagementToolbar, templates);

export {ClayManagementToolbar};
export default ClayManagementToolbar;
