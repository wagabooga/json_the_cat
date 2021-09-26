const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error message & null for description for an invalid breed, via callback', (done) => {
    fetchBreedDescription('asdasdasd', (err, desc) => {
      // we expect an error for this scenario so error should not be null
      assert.isNotNull(err);

      // we expect desc to be null
      assert.isNull(desc);

      done();
    });
  });
});