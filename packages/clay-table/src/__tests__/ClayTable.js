import ClayTable from '../ClayTable';

let component;
let spritemap = 'icons.svg';
let items = [
	{
		columns: [
			{
				text: 'suffing-photo.png',
				cellContent: true,
			},
			{
				text: 'Juan Anton',
			},
			{
				text: '264KB',
			},
			{
				labels: [
					{
						label: 'Approved',
						style: 'success',
					},
				],
			},
			{
				text: '15 Minutes Ago',
			},
			{
				text: '15 Minutes Ago',
			},
		],
	},
	{
		columns: [
			{
				text: 'suffing-photo.png',
				cellContent: true,
			},
			{
				text: 'Juan Anton',
			},
			{
				text: '264KB',
			},
			{
				labels: [
					{
						label: 'Approved',
						style: 'success',
					},
				],
			},
			{
				text: '15 Minutes Ago',
			},
			{
				text: '15 Minutes Ago',
			},
		],
	},
];

describe('ClayTable', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayTable({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with classes', () => {
		component = new ClayTable({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with id', () => {
		component = new ClayTable({
			id: 'myId',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with multiples items', () => {
		component = new ClayTable({
			items: items,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with multiples columns in header', () => {
		component = new ClayTable({
			header: [
				{
					label: 'Title',
				},
				{
					label: 'Author',
				},
				{
					label: 'Size',
				},
				{
					label: 'Status',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should fail when no spritemap is passed', () => {
		expect(() => {
			component = new ClayTable();
		}).toThrow();
	});
});
