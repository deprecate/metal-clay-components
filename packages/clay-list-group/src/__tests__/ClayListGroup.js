import ClayListGroup from '../ClayListGroup';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let component;

let actionItems = [
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
];

let actionItemsWithQuickItems = [
	{
		indicatorSymbol: 'trash',
		label: 'Option 1',
		quickAction: true,
		url: '#1',
	},
	{
		indicatorSymbol: 'download',
		label: 'Option 2',
		quickAction: true,
		separator: true,
		url: '#2',
	},
	{
		indicatorSymbol: 'info-circle-open',
		label: 'Option 3',
		quickAction: true,
		url: '#3',
	},
];

describe('ClayListGroup', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayListGroup({
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with classes', () => {
		component = new ClayListGroup({
			elementClasses: 'my-custom-class',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with id', () => {
		component = new ClayListGroup({
			id: 'myId',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup', () => {
		component = new ClayListGroup({
			items: [
				{
					description: 'Description 1',
					title: 'Item 1',
					url: '#1',
				},
				{
					description: 'Description 2',
					title: 'Item 2',
					url: '#2',
				},
				{
					description: 'Description 3',
					title: 'Item 3',
					url: '#3',
				},
			],
			selectable: true,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayListGroup with header title', () => {
		component = new ClayListGroup({
			items: [
				{
					title: 'Item 1',
				},
			],
			title: 'Group Header 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayListGroup({
			events: {itemToggled: spy},
			items: [
				{
					title: 'Item 1',
				},
			],
			selectable: true,
		});

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should fail when no items are passed', function() {
		expect(() => {
			component = new ClayListGroup();
		}).toThrow();
	});
});
