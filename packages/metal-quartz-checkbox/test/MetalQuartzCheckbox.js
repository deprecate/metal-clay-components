'use strict';

import dom from 'metal-dom';
import MetalQuartzCheckbox from '../src/MetalQuartzCheckbox';

let component;

describe('MetalQuartzCheckbox', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the correct markup for a single checkbox', () => {
		component = new MetalQuartzCheckbox({
			checked: true,
			disabled: true,
			elementClasses: 'checkbox-default',
			label: 'Checkbox 1 Label',
			name: 'myUniqueCheckboxName_!!11!'
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzCheckbox.html'].trim());
	});

	it('shound render the correct markup for an inline checkbox', () => {
		component = new MetalQuartzCheckbox({
			checkboxInline: [{
				checked: true,
				label: 'Inline 1'
			}, {
				label: 'Inline 2'
			}, {
				checked: true,
				disabled: true,
				label: 'Inline 3'
			}, {
				label: 'Inline 4'
			}, {
				label: 'Inline 5'
			}, {
				label: 'Inline 6'
			}]
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzCheckboxInline.html'].trim());
	});
});
