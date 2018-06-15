const fetch = require('node-fetch');
const { getPeoplePromise, getPeople } = require('./script2');

it('calls swapi to get people', (done) => {
  expect.assertions(1);
  return getPeople(fetch).then(({ count, results }) => {
    expect(count).toEqual(87);
  });
});

it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return getPeoplePromise(fetch).then(({ count, results }) => {
    expect(count).toEqual(87);
    expect(results.length).toBeGreaterThan(5);
  });
});

it('getPeople returns count and results', () => {
  const mochFetch = jest.fn().mochReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );
  expect.assertions(2);
  return swapi.getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
  });
});
