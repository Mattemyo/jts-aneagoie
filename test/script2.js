const fetch = require('node-fetch');

const getPeoplePromise = (fetch) =>
  fetch('https://swapi.co/api/people')
    .then((res) => res.json())
    .then(({ count, results }) => ({
      count,
      results,
    }));

const getPeople = async (fetch) => {
  try {
    const response = await fetch('https://swapi.co/api/people');
    const { count, results } = await response.json();
    console.log(results);
    return {
      count,
      results,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getPeoplePromise,
  getPeople,
};
