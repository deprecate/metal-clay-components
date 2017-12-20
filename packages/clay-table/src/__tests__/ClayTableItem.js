import ClayTableItem from '../ClayTableItem';

let component;
let spritemap = 'icons.svg';

describe('ClayTableItem', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayTableItem({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with id', () => {
		component = new ClayTableItem({
			id: 'myId',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with custom element class', () => {
		component = new ClayTableItem({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with columns', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					url: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with user sticker in the column', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Name',
					useEllipse: true,
				},
			],
			spritemap: spritemap,
			stickerLabel: 'AA',
			stickerStyle: 'primary',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with custom classes in column of sticker', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Name',
					useEllipse: true,
				},
			],
			spritemap: spritemap,
			stickerElementClasses: 'custom-column',
			stickerLabel: 'AA',
			stickerStyle: 'primary',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render ClayTableItem with sticker with image in column', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Name',
					useEllipse: true,
				},
			],
			spritemap: spritemap,
			stickerImageSrc: 'image.png',
			stickerImageAlt: 'Image',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render ClayTableItem with sticker shape `rounded`', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Name',
					useEllipse: true,
				},
			],
			spritemap: spritemap,
			stickerImageSrc: 'image.png',
			stickerImageAlt: 'Image',
			stickerShape: 'rounded',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with progress bar in the column', () => {
		component = new ClayTableItem({
			columns: [
				{
					progressBar: {
						value: 40,
					},
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with label in the column', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Approved',
					labelStyle: 'success',
					type: 'label',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with action menu', () => {
		component = new ClayTableItem({
			actionItems: [
				{
					label: 'Option 1',
					href: '#1',
				},
				{
					label: 'Option 2',
					separator: true,
					href: '#2',
				},
				{
					label: 'Option 3',
					href: '#3',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with custom classes in column of `action menu`', () => {
		component = new ClayTableItem({
			actionItems: [
				{
					label: 'Option 1',
					href: '#1',
				},
				{
					label: 'Option 2',
					separator: true,
					href: '#2',
				},
				{
					label: 'Option 3',
					href: '#3',
				},
			],
			actionColumnElementClasses: 'custom-column',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with quick action menu', () => {
		component = new ClayTableItem({
			actionItems: [
				{
					icon: 'trash',
					label: 'Option 1',
					quickAction: true,
					href: '#1',
				},
				{
					icon: 'download',
					label: 'Option 2',
					quickAction: true,
					separator: true,
					href: '#2',
				},
				{
					icon: 'info-circle-open',
					label: 'Option 3',
					quickAction: true,
					href: '#3',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem selectable', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with custom classes in columns of selectable', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			selectable: true,
			selectableElementClasses: 'custom-column',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem selected', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem disabled', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			selectable: true,
			disabled: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with input name', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			inputName: 'name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with input value', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			inputValue: 'value',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayTableItem and emit an event on itemToggle', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		const spy = jest.spyOn(component, 'emit');

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});

	it('should render the ClayTableItem with button', () => {
		component = new ClayTableItem({
			columns: [
				{
					label: 'Foo',
					useEllipse: true,
				},
				{
					label: 'Bar',
					href: '#1',
				},
				{
					label: 'Foo',
				},
				{
					label: 'Bar',
					buttonStyle: 'primary',
					type: 'button',
				},
			],
			inputValue: 'value',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should fail when no spritemap is passed', () => {
		expect(() => {
			component = new ClayTableItem();
		}).toThrow();
	});
});
