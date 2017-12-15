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
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './ClayTableItem.soy.js';

/**
 * Metal ClayTableItem component.
 */
class ClayTableItem extends Component {
	/**
	 * Handle input of type `checkbox` for add class `table-active` in tr.
	 * @param {!Event} event
	 * @private
	 */
	handleItemToggled_(event) {
		dom.toggleClasses(this.element, 'table-active');

		this.emit('itemToggled', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayTableItem.STATE = {
	/**
	 * CSS classes to be applied to the td of the actions menu.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	actionColumnElementClasses: Config.string(),

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
	 * CSS classes to be applied to the td of the selectable.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	selectableElementClasses: Config.string(),

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

	/**
	 * CSS classes to be applied to the td of the sticker.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	stickerElementClasses: Config.string(),

	/**
	 * Alternate text of the image sticker.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	stickerImageAlt: Config.string(),

	/**
	 * Source of the image to be rendered inside the sticker.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	stickerImageSrc: Config.string(),

	/**
	 * Sets the text to be rendered inside sticker.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string|undefined}
	 * @default undefined
	 */
	stickerLabel: Config.string(),

	/**
	 * Shape of sticker.  Available shapes are `circle`, `rounded`.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string}
	 * @default circle
	 */
	stickerShape: Config.string().value('circle'),

	/**
	 * Sticker style. Available sizes are: `danger`, `dark`, `info`, `light`,
	 * `primary`, `secondary`, `success`, `warning`.
	 * @instance
	 * @memberof ClayTableItem
	 * @type {?string}
	 * @default primary
	 */
	stickerStyle: Config.oneOf([
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

defineWebComponent('clay-table-item', ClayTableItem);

Soy.register(ClayTableItem, templates);

export {ClayTableItem};
export default ClayTableItem;
