import 'clay-checkbox';
import 'clay-dropdown';
import 'clay-icon';
import 'clay-label';
import 'clay-link';
import 'clay-progress-bar';
import 'clay-sticker';
import {actionsItemsValidator, columnsValidator} from './items_validator';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayTableItem.soy.js';

/**
 * Metal ClayTableItem component.
 */
class ClayTableItem extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayTableItem.STATE = {
	/**
	 * List of items to display in the actions menu.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: actionsItemsValidator,

	/**
	 * List of the columns in the row.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?array|undefined}
	 * @default undefined
	 */
	columns: columnsValidator,

	/**
	 * Name of the content renderer to use template variants.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	contentRenderer: Config.string(),

	/**
	 * Flag to indicate if the item is disabled or not.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?bool}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * Table group separator.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	group: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Flag to indicate if the item is selectable.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?bool}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the item is selected or not.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?bool}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),
};

defineWebComponent('clay-table-item', ClayTableItem);

Soy.register(ClayTableItem, templates);

export {ClayTableItem};
export default ClayTableItem;
