const googleSearch = require('./script');

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];
it('is a silly test', () => {
  expect('hello').toBe('hello');
});

describe('googleSearch', () => {
  it('is searching google', () => {
    expect(googleSearch('texttext', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('works with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
