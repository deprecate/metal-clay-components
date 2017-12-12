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
					text: 'Foo',
					useEllipse: true,
				},
				{
					text: 'Bar',
					url: '#1',
				},
				{
					text: 'Foo',
				},
				{
					text: 'Bar',
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
					text: 'Name',
					useEllipse: true,
				},
			],
			spritemap: spritemap,
			stickerLabel: 'AA',
			stickerStyle: 'primary',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with ClayProgressBar in the column', () => {
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
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with actionItems', () => {
		component = new ClayTableItem({
			actionItems: [
				{
					label: 'Option 1',
					url: '#1',
				},
				{
					label: 'Option 2',
					separator: true,
					url: '#2',
				},
				{
					label: 'Option 3',
					url: '#3',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with actionItems and quick menu', () => {
		component = new ClayTableItem({
			actionItems: [
				{
					icon: 'trash',
					label: 'Option 1',
					quickAction: true,
					url: '#1',
				},
				{
					icon: 'download',
					label: 'Option 2',
					quickAction: true,
					separator: true,
					url: '#2',
				},
				{
					icon: 'info-circle-open',
					label: 'Option 3',
					quickAction: true,
					url: '#3',
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
					text: 'Foo',
					useEllipse: true,
				},
				{
					text: 'Bar',
					url: '#1',
				},
				{
					text: 'Foo',
				},
				{
					text: 'Bar',
				},
			],
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem selected', () => {
		component = new ClayTableItem({
			columns: [
				{
					text: 'Foo',
					useEllipse: true,
				},
				{
					text: 'Bar',
					url: '#1',
				},
				{
					text: 'Foo',
				},
				{
					text: 'Bar',
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
					text: 'Foo',
					useEllipse: true,
				},
				{
					text: 'Bar',
					url: '#1',
				},
				{
					text: 'Foo',
				},
				{
					text: 'Bar',
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
					text: 'Foo',
					useEllipse: true,
				},
				{
					text: 'Bar',
					url: '#1',
				},
				{
					text: 'Foo',
				},
				{
					text: 'Bar',
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
					text: 'Foo',
					useEllipse: true,
				},
				{
					text: 'Bar',
					url: '#1',
				},
				{
					text: 'Foo',
				},
				{
					text: 'Bar',
				},
			],
			inputValue: 'value',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render the ClayTableItem with group', () => {
		component = new ClayTableItem({
			group: 'Group 1',
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
