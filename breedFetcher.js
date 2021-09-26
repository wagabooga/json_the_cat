const request = require("request");
const http = require("http");
let arg = process.argv.splice(2);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;

function fetcher(url) {
  // request url, with an error check, response, and the HTML body
  request(url, function(error, response, body) {
    // request failed
    if (error) {
      return console.log(`error:`, error); // Print the error if one occurred
    }
    const data = JSON.parse(body);
    // breed not found
    if (!data[0]) {
      return console.log("breed not found");
    } else {
      return console.log(data[0]);
    }

  });
}

fetcher(url);
// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);