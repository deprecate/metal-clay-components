'use strict';

import MetalClayIcon from '../MetalClayIcon';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let clayIcon;

describe('MetalClayIcon', function() {
	afterEach(() => {
		if (clayIcon) {
			clayIcon.dispose();
		}
	});

	it('should generate markup for icon `add-cell`', function() {
		clayIcon = new MetalClayIcon(
			{
				spritemap: spritemap,
				symbol: 'add-foo'
			}
		);

                console.log(clayIcon.element.outerHTML);
		expect(clayIcon.element.outerHTML).toMatchSnapshot();
	});
});
