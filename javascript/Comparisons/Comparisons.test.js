const { sortYear, sortTitle, compareYear, compareTitle } = require('./your-sort-functions');
const { Movies } = require('./movies');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    const sortedTitles = movies.map((m) => m.title);
    const expectedTitles = [
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ];
    expect(sortedTitles).toEqual(expectedTitles);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    const sortedTitles = movies.map((m) => m.title);
    const expectedTitles = [
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ];
    expect(sortedTitles).toEqual(expectedTitles);
  });

  test('compareYear function correctly compares movie years', () => {
    const yearOne = { year: 2000 };
    const yearTwo = { year: 2001 };
    const result = compareYear(yearOne, yearTwo);
    expect(result).toBeLessThan(0);
  });

  test('compareTitle function correctly compares movie titles', () => {
    const titleOne = { title: 'The Intouchables' };
    const titleTwo = { title: 'Valkyrie' };
    const result = compareTitle(titleOne, titleTwo);
    expect(result).toBeLessThan(0);
  });
});
