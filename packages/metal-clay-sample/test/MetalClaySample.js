'use strict';

import MetalClaySample from '../src/MetalClaySample';

let sample;

describe('MetalClaySample', function() {
	afterEach(() => {
		if (sample) {
			sample.dispose();
		}
	});

	it('should generate the content markup', function() {
		sample = new MetalClaySample(
			{
				content: 'foo'
			}
		);

		assert.strictEqual(sample.element.outerHTML, __html__['test/fixture/testDefaultMetalClaySample.html'].trim());
	});

	it('should append elementClasses to the outer element', function() {
		sample = new MetalClaySample(
			{
				content: 'foo',
				elementClasses: 'css-class'
			}
		);

		assert.strictEqual(sample.element.outerHTML, __html__['test/fixture/testElementClassesMetalClaySample.html'].trim());
	});

	it('should have an role attribute if specified', function() {
		sample = new MetalClaySample(
			{
				content: 'main content',
				elementClasses: 'css-class',
        role: 'main'
			}
		);

		assert.strictEqual(sample.element.outerHTML, __html__['test/fixture/testRoleAttributeMetalClaySample.html'].trim());
	});

});
