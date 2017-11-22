import 'clay-link';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayNavbar.soy.js';

/**
 * Metal Clay Navbar component.
 */
class ClayNavbar extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('transitionend', this.handleTransitionEnd_, true);
	}

	/**
	 * Check the click and set transition true.
	 * @param {!Event} event
	 * @private
	 */
	handleClickToggler_() {
		if (!this.isTransitioning_) {
			this.isTransitioning_ = true;
		}
	}

	/**
	 * Handle css transition end.
	 * @param {!Event} event
	 * @private
	 */
	handleTransitionEnd_(event) {
		const element = this.element.querySelector('.navbar-collapse');
		if (
			element == event.target &&
			this.isTransitioning_ &&
			!this.visible_
		) {
			this.visible_ = true;
			this.isTransitioning_ = false;
		} else if (element == event.target) {
			this.visible_ = false;
			this.isTransitioning_ = false;
		}
	}

	/**
	 * @inheritDoc
	 */
	syncIsTransitioning_() {
		const elementCollapse = this.element.querySelector('.navbar-collapse');

		if (this.isTransitioning_ && !this.visible_) {
			const heightCollapse = elementCollapse.querySelector('.container')
				.clientHeight;

			elementCollapse.setAttribute(
				'style',
				`height: ${heightCollapse}px`
			);
		} else if (this.isTransitioning_ && this.visible_) {
			elementCollapse.setAttribute('style', 'height: 0');
			elementCollapse.removeAttribute('style');
		}
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayNavbar.STATE = {
	/**
	 * The display style attribute.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {?boolean}
	 * @default false
	 */
	inverted: Config.bool().value(false),

	/**
	 * The toggle animation.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {?boolean}
	 * @default false
	 * @private
	 */
	isTransitioning_: Config.bool()
		.value(false)
		.internal(),

	/**
	 * List of items to show in the Navbar.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {!Array}
	 * @default undefined
	 */
	items: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool().value(false),
			title: Config.string().required(),
			url: Config.string().required(),
		})
	).required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * Navmenus visible in mobile when click in the button.
	 * @instance
	 * @memberof ClayNavbar
	 * @type {?bool}
	 * @default false
	 * @private
	 */
	visible_: Config.bool()
		.value(false)
		.internal(),
};

defineWebComponent('clay-navbar', ClayNavbar);

Soy.register(ClayNavbar, templates);

export {ClayNavbar};
export default ClayNavbar;
