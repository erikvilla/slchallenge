const fs = require('fs');

const get = url => new Promise((resolve, reject) => {
  const pathArray = url.split('/');
  const path = pathArray[pathArray.length - 1];
  // Get userID from supplied url string
  // Load user json data from a file in de subfolder for mock data
  fs.readFile(`./services/__mockData__/${path}.json`, 'utf8', (err, data) => {
    if (err) reject(err);
    // Parse the data as JSON and put in the key entity (just like the request library does)
    resolve({ data: JSON.parse(data) });
  });
});

const axios = { get };
export default axios;
