import ClayDropdown from '../ClayDropdown';

let dropdown;

describe('ClayDropdown', function() {
	afterEach(() => {
		if (dropdown) {
			dropdown.dispose();
		}
	});

	it('should generate the default markup', () => {
		dropdown = new ClayDropdown({
			items: [
				{
					label: 'Item 1',
					url: 'Item1url',
				},
			],
			triggerLabel: 'Trigger',
		});

		expect(dropdown).toMatchSnapshot();
	});
});
