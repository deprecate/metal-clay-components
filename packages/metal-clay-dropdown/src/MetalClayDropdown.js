'use strict';

import Component from 'metal-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';
import { EventHandler } from 'metal-events';
import { Config } from 'metal-state';

import 'metal-clay-icon';

import templates from './MetalClayDropdown.soy';

/**
 * Dropdown Metal Quartz component.
 */
class MetalClayDropdown extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		super.attached();
		this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this.eventHandler_ = new EventHandler();

		MetalClayDropdown.instances.push(this);

		this.on('expandedChanged', this.syncDropdownState_);
		this.syncDropdownState_();
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Closes the dropdown.
	 */
	close() {
		this.expanded = false;
	}

	/**
	 * Checks if the dropdown is currently open.
	 * @return {boolean}
	 */
	isOpen() {
		return this.expanded;
	}

	/**
	 * Handles document click in order to hide menu.
	 * @param {!Event} event
	 * @protected
	 */
	handleDocClick_(event) {
		if (this.element.contains(event.target)) {
			return;
		}

		if (this.expanded) {
			this.close();
		}
	}

	/**
	 * Opens the dropdown.
	 */
	open() {
		this.expanded = true;
	}

	/**
	 * Syncs the dropdown css based on the expanded state.
	 * @protected
	 */
	syncDropdownState_() {
		this.dropdownState = this.expanded ? ` ${this.dropdownOpenClass}` : '';
	}

	/**
	 * Toggles the dropdown, closing it when open or opening it when closed.
	 */
	toggle() {
		this.expanded = !this.expanded;
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalClayDropdown.STATE = {
	/**
	 * The dropdown's body content.
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {string}
	 * @default undefined
	 */
	body: {
		isHtml: true
	},

	/**
	 * The items to add to the dropdown-menu.
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {array|undefined}
	 * @default undefined
	 */
	dropdownItems: Config.array(),

	/**
	 * The CSS class to toggle when opening and closing the dropdown.
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {string}
	 * @default `open`
	 */
	dropdownOpenClass: Config.string().value('open'),

	/**
	 * The HTML element to use on .dropdown.
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {string}
	 * @default `div`
	 */
	dropdownContainerElement: Config.string().value('div'),

	/**
	 * The configuration for the dropdown-toggle
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {!Object|undefined}
	 * @default undefined
	 */
	dropdownToggle: Config.object(),

	/**
	 * Flag indicating if the dropdown is expanded (open) or not.
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {boolean}
	 * @default false
	 */
	expanded: Config.bool().value(false),

	/**
	 * The dropdown's header content.
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {string|undefined}
	 * @default undefined
	 */
	header: {
		isHtml: true
	},

	/**
	 * Says if the Dropdown Menu will be rendered or not.
	 * @instance
	 * @memberof MetalClayDropdown
	 * @type {boolean}
	 * @default false
	 */
	renderDropdownMenu: Config.bool().value(true)
};

/**
 * An array of all MetalClayDropdown's that are created on the page.
 */
MetalClayDropdown.instances = [];

Soy.register(MetalClayDropdown, templates);

export default MetalClayDropdown;