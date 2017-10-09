import ClayPagination from '../ClayPagination.js';

let clayPagination;
let icon = 'icons.svg';

describe('ClayPagination', function() {
  afterEach(() => {
    if (clayPagination) {
      clayPagination.dispose();
    }
  });

  it('should render a pagination markup', () => {
    clayPagination = new ClayPagination({
      spritemap: icon,
      total: 1,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  it('should render a pagination with total of the pages visible', () => {
    clayPagination = new ClayPagination({
      spritemap: icon,
      total: 4,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  // eslint-disable-next-line
  it('should render a pagination with 4 pages visible and 3 pages in dropdown', () => {
    clayPagination = new ClayPagination({
      spritemap: icon,
      total: 7,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  // eslint-disable-next-line
  it('should render a pagination with 4 pages visible and 3 pages in dropdown with page active in dropdown', () => {
    clayPagination = new ClayPagination({
      spritemap: icon,
      total: 7,
      page: 5,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  // eslint-disable-next-line
  it('shound render a pagination with active last page and disabled angle-right', () => {
    clayPagination = new ClayPagination({
      page: 7,
      spritemap: icon,
      total: 7,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  // eslint-disable-next-line
  it('should render a pagination with all pages visible, ellipse range for 10 and active page 7', () => {
    clayPagination = new ClayPagination({
      ellipseRange: 10,
      page: 7,
      spritemap: icon,
      total: 10,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  it('should render a pagination with dropdown and change url links', () => {
    clayPagination = new ClayPagination({
      baseHref: '?page=',
      ellipseRange: 10,
      page: 7,
      spritemap: icon,
      total: 12,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  it('should render a pagination with dropdown and offset', () => {
    clayPagination = new ClayPagination({
      offset: 780,
      page: 7,
      spritemap: icon,
      total: 800,
    });

    expect(clayPagination).toMatchSnapshot();
  });

  // eslint-disable-next-line
  it('should calculate exactly how many items in the dropdown with random numbers', () => {
    const getRandomInt = (min = 200, max = 10000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };

    for (let i = 0; i < 3; i++) {
      const getNumberToRandom = getRandomInt();

      clayPagination = new ClayPagination({
        offset: 200,
        spritemap: icon,
        total: getNumberToRandom,
      });

      const itemsToDropdown =
        getNumberToRandom -
        clayPagination.offset +
        1 -
        clayPagination.ellipseRange +
        3 -
        1;

      expect(clayPagination._rangeEllipse().length).toEqual(itemsToDropdown);
    }
  });
});
