'use strict';

import ClayNavigationBar from '../ClayNavigationBar';

let navbar;
const spritemap = 'icons.svg';

describe('ClayNavigationBar', function() {
	afterEach(() => {
		if (navbar) {
			navbar.dispose();
		}
	});

	it('should render a navbar with one element', function() {
		navbar = new ClayNavbar({
			items: [{title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should render an inverted colored navbar with one element', function() {
		navbar = new ClayNavbar({
			inverted: true,
			items: [{title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should render a navbar with one active element', function() {
		navbar = new ClayNavbar({
			items: [{active: true, title: 'Page 1', url: '#1'}],
			spritemap: spritemap,
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should render a navbar with more than one element', function() {
		navbar = new ClayNavbar({
			items: [
				{title: 'Page 1', url: '#1'},
				{title: 'Page 2', url: '#2'},
			],
			spritemap: spritemap,
		});

		expect(navbar).toMatchSnapshot();
	});

	it('should fail when no items are passed', function() {
		expect(() => {
			navbar = new ClayNavbar({
				spritemap: spritemap,
			});
		}).toThrow();
	});

	it('should fail when no title is passed on each page', function() {
		expect(() => {
			navbar = new ClayNavbar({
				items: [{url: '#1'}],
				spritemap: spritemap,
			});
		}).toThrow();
	});

	it('should fail when no url is passed on each page', function() {
		expect(() => {
			navbar = new ClayNavbar({
				items: [{title: 'Page 1'}],
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
