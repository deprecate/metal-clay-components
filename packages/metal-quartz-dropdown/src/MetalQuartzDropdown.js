'use strict';

import Component from 'metal-component';
import core from 'metal';
import dom from 'metal-dom';
import MetalQuartzIcon from 'metal-quartz-icon';
import Soy from 'metal-soy';
import { EventHandler } from 'metal-events';
import { validators } from 'metal-state';

import templates from './MetalQuartzDropdown.soy';

/**
 * Dropdown Metal Quartz component.
 */
class MetalQuartzDropdown extends Component {
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

		this.renderDropdownMenu = true;

		MetalQuartzDropdown.instances.push(this);

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
MetalQuartzDropdown.STATE = {
	/**
	 * The dropdown's body content.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {string}
	 * @default undefined
	 */
	body: {
		isHtml: true
	},

	/**
	 * The items to add to the dropdown-menu.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {array}
	 * @default undefined
	 */
	dropdownItems: {
		validator: validators.array
	},

	/**
	 * The CSS class to toggle when opening and closing the dropdown.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {string}
	 * @default `open`
	 */
	dropdownOpenClass: {
		validator: validators.string,
		value: 'open'
	},

	/**
	 * The HTML element to use on .dropdown.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {string}
	 * @default `div`
	 */
	dropdownContainerElement: {
		validator: validators.string,
		value: 'div'
	},

	/**
	 * The configuration for the dropdown-toggle
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {!Object}
	 * @default undefined
	 */
	dropdownToggle: {
		validator: validators.object
	},

	/**
	 * Flag indicating if the dropdown is expanded (open) or not.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {boolean}
	 * @default false
	 */
	expanded: {
		value: false
	},

	/**
	 * The dropdown's header content.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {string}
	 * @default undefined
	 */
	header: {
		isHtml: true
	}
};

/**
 * An array of all MetalQuartzDropdown's that are created on the page.
 */
MetalQuartzDropdown.instances = [];

Soy.register(MetalQuartzDropdown, templates);

export default MetalQuartzDropdown;