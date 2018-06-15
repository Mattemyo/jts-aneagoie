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
