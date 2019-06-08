const fs = require('fs');
const faker = require('faker');

const file = './people.json?page=2&per_page=100.json';
const data = JSON.parse(fs.readFileSync(file).toString());
data.data.forEach((person) => {
  // eslint-disable-next-line no-param-reassign
  person.email_address = faker.internet.email();
});

fs.writeFile(file, JSON.stringify(data));
