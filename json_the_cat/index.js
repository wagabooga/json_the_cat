const { fetchBreedDescription } = require('./breedFetcher');

const arg = process.argv.splice(2);

fetchBreedDescription(arg, (error, description) => {
  if (error) {
    return console.log(error);
  }
  return console.log(description);
});