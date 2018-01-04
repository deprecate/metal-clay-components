import ClayCardGrid from '../ClayCardGrid';

let component;

let items = [
	{
		items: [
			{
				downloadHref: '#sabers',
				title: 'Sabers',
				type: 'folder',
			},
			{
				downloadHref: '#scripts',
				title: 'Scripts',
				type: 'folder',
			},
		],
		label: 'Folders',
	},
	{
		items: [
			{
				director: 'George Lucas',
				downloadHref: '#',
				image: './swepisode1.jpg',
				rating: 10,
				releaseDate: 'May 19th 1999',
				status: ['Error', 'Pending'],
				title: 'Episode I: The Phantom Menace',
				type: 'MOV',
			},
			{
				director: 'George Lucas',
				downloadHref: '#',
				rating: 50,
				releaseDate: 'May 12th 2002',
				status: ['Watched'],
				title: 'Episode II: Attack of the Clones',
				type: 'MOV',
			},
			{
				director: 'George Lucas',
				downloadHref: '#',
				image: './swepisode3.jpg',
				rating: 60,
				releaseDate: 'May 12th 2005',
				status: ['Watched'],
				title: 'Episode III: Revenge of the Sith',
				type: 'MOV',
			},
			{
				director: 'George Lucas',
				downloadHref: '#',
				image: './swepisode4.jpg',
				rating: 90,
				releaseDate: 'May 25th 1977',
				status: ['Watched'],
				title: 'Episode IV: A New Hope',
				type: 'MOV',
			},
			{
				director: 'Irvin Kershner',
				downloadHref: '#',
				image: './swepisode5.jpg',
				rating: 100,
				releaseDate: 'May 21th 1980',
				status: ['Watched'],
				title: 'Episode V: The Empire Strikes Back',
				type: 'MOV',
			},
			{
				director: 'Richard Marquand',
				downloadHref: '#',
				image: './swepisode6.jpg',
				rating: 90,
				releaseDate: 'May 25th 1983',
				status: ['Watched'],
				title: 'Episode VI: Return of the Jedi',
				type: 'MOV',
			},
			{
				director: 'J. J. Abrams',
				downloadHref: '#',
				image: './swepisode7.jpg',
				rating: 70,
				releaseDate: 'December 14th 2015',
				status: ['Watched'],
				title: 'Episode VII: The Force Awakens',
				type: 'MOV',
			},
			{
				director: 'Rian Johnson',
				downloadHref: '#',
				image: './swepisode8.jpg',
				rating: 0,
				releaseDate: 'December 9th 2017',
				status: ['Pending'],
				title: 'Episode VIII: The Last Jedi',
				type: 'MOV',
			},
		],
		label: 'Saga',
	},
	{
		items: [
			{
				director: 'Gareth Edwards',
				downloadHref: '#',
				image: './swrogueone.jpg',
				rating: 70,
				releaseDate: 'December 10th 2016',
				status: ['Watched'],
				title: 'Rogue One: A Star Wars Story',
				type: 'MKV',
			},
			{
				director: 'Ron Howard',
				downloadHref: '#',
				image: './swsolo.jpg',
				rating: 0,
				releaseDate: 'May 25th 2018',
				status: ['Pending'],
				title: 'Solo: A Star Wars Story',
				type: 'MKV',
			},
		],
		label: 'Expanded Universe',
	},
	{
		items: [
			{
				character: 'Darth Vader',
				initials: 'DV',
				side: 'dark',
				type: 'character',
			},
			{
				character: 'Emperor Palpatine',
				initials: 'EP',
				side: 'dark',
				type: 'character',
			},
			{
				character: 'Han Solo',
				initials: 'HS',
				side: 'light',
				type: 'character',
			},
			{
				character: 'Kylo Ren',
				initials: 'KR',
				side: 'dark',
				type: 'character',
			},
			{
				character: 'Leia Organa',
				initials: 'LO',
				side: 'light',
				type: 'character',
			},
			{
				character: 'Luke Skywalker',
				initials: 'LS',
				side: 'light',
				type: 'character',
			},
			{
				character: 'Yoda',
				initials: 'Y',
				side: 'light',
				type: 'character',
			},
		],
		label: 'Characters',
	},
];

const schema = [
	{
		contentRendererMap: {
			character: 'user',
			folder: 'horizontal',
			MKV: 'file',
		},
		fieldsMap: {
			contentRenderer: 'type',
			description: 'director',
			fileType: 'type',
			href: 'downloadHref',
			icon: 'type',
			imageAlt: 'title',
			imageSrc: 'image',
			initials: 'initials',
			labels: 'status',
			title: 'title',
			userColor: 'side',
			username: 'character',
		},
		fileTypeStylesMap: {
			MOV: 'danger',
		},
		iconsMap: {
			folder: 'folder',
			MOV: 'video',
			MKV: 'video',
		},
		labelStylesMap: {
			'Watched': 'success',
			'Pending': 'warning',
			'*': 'info',
		},
		userColorsMap: {
			light: 'primary',
			dark: 'danger',
		},
	},
];

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayCardGrid', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCardGrid({
			items: items,
			schema: schema,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with classes', () => {
		component = new ClayCardGrid({
			elementClasses: 'my-custom-class',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardGrid with id', () => {
		component = new ClayCardGrid({
			id: 'myId',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable items ClayCardGrid and emit an event on item toggle selection', () => {
		component = new ClayCardGrid({
			items: items,
			schema: schema,
			selectable: true,
			spritemap: spritemap,
		});

		const spy = jest.spyOn(component, 'emit');

		component.element.querySelector('ul li input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});
});
