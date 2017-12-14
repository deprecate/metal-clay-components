import ClayTable from '../ClayTable';

let component;
let spritemap = 'icons.svg';
let items = [
	{
		columns: [
			{
				href: '#1',
				text: 'suffing-photo.png',
				useEllipse: true,
			},
			{
				text: 'Juan Anton',
			},
			{
				text: '264KB',
			},
			{
				label: 'Approved',
				labelStyle: 'success',
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
				href: '#1',
				text: 'suffing-photo.png',
				useEllipse: true,
			},
			{
				text: 'Juan Anton',
			},
			{
				text: '264KB',
			},
			{
				label: 'Approved',
				labelStyle: 'success',
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

	it('should render a ClayTable with size `lg`', () => {
		component = new ClayTable({
			size: 'lg',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with size `md`', () => {
		component = new ClayTable({
			size: 'md',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with size `sm`', () => {
		component = new ClayTable({
			size: 'sm',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with size `xl`', () => {
		component = new ClayTable({
			size: 'xl',
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

	it('should render a ClayTable with colspan in columns header', () => {
		component = new ClayTable({
			header: [
				{
					colSpan: 2,
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

	it('should render a ClayTable with elementClasses in the columns', () => {
		component = new ClayTable({
			header: [
				{
					elementClasses: 'custom1-column',
					label: 'Foo',
				},
				{
					elementClasses: 'custom2-column',
					label: 'Bar',
				},
			],
			items: [
				{
					columns: [
						{
							elementClasses: 'custom1-column',
							text: 'Foo',
						},
						{
							elementClasses: 'custom2-column',
							text: 'Bar',
						},
					],
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
