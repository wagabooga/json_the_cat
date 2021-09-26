const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    // request failed
    if (error) {
      return callback(error, null); // Print the error if one occurred
    }
    const data = JSON.parse(body);
    // breed not found
    if (!data[0]) {
      return callback("breed not found", null);
    } else {
      return callback(null, data[0].description);
    }
  });
};




module.exports = { fetchBreedDescription };

// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);