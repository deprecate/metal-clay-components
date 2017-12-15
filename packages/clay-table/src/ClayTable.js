import './ClayTableItem';
import 'clay-link';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import dom from 'metal-dom';
import itemsValidator from './items_validator';
import Soy from 'metal-soy';

import templates from './ClayTable.soy.js';

/**
 * Metal ClayTable component.
 */
class ClayTable extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.eventHandler_.add(
			dom.delegate(
				document,
				'click',
				'body',
				this.handleClickDocument_.bind(this)
			),
			dom.delegate(this.element, 'focus', 'tr', this.handleFocus_)
		);
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this.eventHandler_ = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Handle click in document for remove the class `table-focus` of tr.
	 * @private
	 */
	handleClickDocument_() {
		dom.removeClasses(this.element.querySelectorAll('tr'), 'table-focus');
	}

	/**
	 * Handle focus the tr for add class `table-focus`.
	 * @private
	 */
	handleFocus_(event) {
		const getFirstTable = dom.closest(event.target, 'table');
		const getFirstTr = dom.closest(event.target, 'tr');

		dom.removeClasses(getFirstTable.querySelectorAll('tr'), 'table-focus');
		dom.addClasses(getFirstTr, 'table-focus');
	}

	/**
	 * Handle button sort in header.
	 * @private
	 */
	handleSortColumn_(event) {
		this.emit('sortClick', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayTable.STATE = {
	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayTable
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Used to render the header of a column.
	 * @instance
	 * @memberof ClayTable
	 * @type {?array|undefined}
	 * @default undefined
	 */
	header: Config.arrayOf(
		Config.shapeOf({
			colSpan: Config.number(),
			elementClasses: Config.string(),
			label: Config.string(),
			sort: Config.bool().value(false),
			sortDirection_: Config.oneOf(['down', 'up']).value('down'),
		})
	),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayTable
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * List the items of the table.
	 * @instance
	 * @memberof ClayTable
	 * @type {?array|undefined}
	 * @default undefined
	 */
	items: itemsValidator,

	/**
	 * Table responsive sizes. Available `lg`, `md`, `sm` and `xl`.
	 * @instance
	 * @memberof ClayTable
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.oneOf(['lg', 'md', 'sm', 'xl']),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayTable
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),
};

defineWebComponent('clay-table', ClayTable);

Soy.register(ClayTable, templates);

export {ClayTable};
export default ClayTable;
