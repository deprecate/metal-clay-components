import 'clay-dropdown';
import 'clay-icon';
import 'clay-link';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayPagination.soy.js';

/**
 * Metal Clay Pagination component.
 */
class ClayPagination extends Component {
  /**
   * @inheritDoc
   */
  created() {
    this._lastState = {
      page: this.page,
    };

    this.on('changeRequest', this._changeRequestFn, true);
  }

  /**
   * Create items in dropdown if pages exceeds ellipseRange.
   * @return {Array} array with items if total is greater that ellipseRange
   * @private
   */
  _rangeEllipse() {
    const {baseHref, ellipseRange, offset, page, total} = this;

    if (total > ellipseRange)
      return this._range(ellipseRange + offset, total + 1).map(element => {
        let active = page == element ? true : false;
        return {
          label: String(element),
          active: active,
          url: `${baseHref}${element}`,
        };
      });
  }

  /**
   * @inheritDoc
   */
  _range(start, count) {
    return Array.apply(0, Array(count))
      .map((element, index) => {
        return index >= start - 3 && index < count - 1 ? index : false;
      })
      .filter(element => {
        return element != false;
      });
  }

  /**
   * @inheritDoc
   */
  _changeRequestFn(event) {
    this._setState(event.state);
  }

  /**
   * @inheritDoc
   */
  _dispatchEvent(state) {
    this.emit('changeRequest', {
      lastState: this._lastState,
      state: state,
      total: this.total,
    });
  }

  /**
   * Handle event and navigate to the previous page.
   * @private
   */
  _handleClickPrev() {
    const {page} = this;

    this._dispatchEvent({
      page: page - 1,
    });
  }

  /**
   * Handle event and emit click of the item.
   * @private
   */
  _handleClickItem() {
    this.emit('clickItem');
  }

  /**
   * Handle event and navigate to the next page.
   * @private
   */
  _handleClickNext() {
    const {page} = this;

    this._dispatchEvent({
      page: page + 1,
    });
  }

  /**
   * @inheritDoc
   */
  _setState(state) {
    this.page = state.page;

    this._lastState = state;
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPagination.STATE = {
  /**
   * href initial with page increment.
   * @instance
   * @memberof ClayPagination
   * @type {?string}
   * @default #
   */
  baseHref: Config.string().value('#'),

  /**
   * Range of the ellipse.
   * @instance
   * @memberof ClayPagination
   * @type {?number}
   * @default 6
   */
  ellipseRange: Config.number().value(6),

  /**
   * Create items in dropdown if pages exceeds ellipseRange.
   * @instance
   * @memberof ClayPagination
   * @type {?array}
   * @default []
   * @private
   */
  _itemsEllipse: Config.setter('_rangeEllipse')
    .internal()
    .value([]),

  /**
   * Initial page offset.
   * @instance
   * @memberof ClayPagination
   * @type {?number}
   * @default 1
   */
  offset: Config.number().value(1),

  /**
   * Home page to render on the screen.
   * @instance
   * @memberof ClayPagination
   * @type {?number}
   * @default 1
   */
  page: Config.number().value(1),

  /**
   * The path to the SVG spritemap file containing the icons.
   * @instance
   * @memberof ClayPagination
   * @type {!string}
   * @default undefined
   */
  spritemap: Config.string().required(),

  /**
   * Total number of page.
   * @instance
   * @memberof ClayPagination
   * @type {!number}
   * @default 1
   */
  total: Config.number()
    .value(1)
    .required(),
};

Soy.register(ClayPagination, templates);

export {ClayPagination};
export default ClayPagination;
