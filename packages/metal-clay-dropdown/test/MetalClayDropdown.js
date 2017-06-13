'use strict';

import { async } from 'metal';
import dom from 'metal-dom';
import MetalClayDropdown from '../src/MetalClayDropdown';

describe('MetalClayDropdown', function() {
	let dropdown;

	afterEach(function() {
		if (dropdown) {
			dropdown.dispose();
		}
	});

	it('should append elementClasses to the outer element.', function() {
		dropdown = new MetalClayDropdown({
			elementClasses: 'dropdown-wide',
			dropdownToggle: {
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		assert(dom.hasClass(dropdown.element, 'dropdown-wide'));
	});

	it('should use li, div elements as the container for dropdown, respectively.', function() {
		const elArray = ['li', 'div'];

		for (const el of elArray) {
			dropdown = new MetalClayDropdown({
				dropdownContainerElement: el,
				dropdownToggle: {
					elementClasses: 'btn btn-link',
					href: '#1',
					label: 'Dropdown Toggle'
				},

				dropdownItems: [{
					href: '#1',
					label: 'Dropdown Item 1'
				}]
			});

			assert(dom.match(dropdown.element, el + '.dropdown'));

			dropdown.dispose();
		}
	});

	it('should default to div if dropdownParentElement is not defined.', function() {
		dropdown = new MetalClayDropdown({
			dropdownToggle: {
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		assert.ok(dom.match(dropdown.element, 'div.dropdown'));
	});

	it('should add class `show` to dropdown when clicked', function(done) {
		dropdown = new MetalClayDropdown({
			dropdownToggle: {
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		dom.triggerEvent(dropdown.element.querySelector('.btn.btn-link'), 'click');

		async.nextTick(function() {
			assert.ok(dom.hasClass(document.querySelector('.dropdown'), 'show'));

			done();
		});
	});

	it('should add a custom CSS class to dropdown when clicked', function(done) {
		dropdown = new MetalClayDropdown({
			dropdownOpenClass: 'opened',

			dropdownToggle: {
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		dom.triggerEvent(dropdown.element.querySelector('.btn.btn-link'), 'click');

		async.nextTick(() => {
			assert.ok(dom.hasClass(document.querySelector('.dropdown'), 'opened'));

			done();
		});
	});
});