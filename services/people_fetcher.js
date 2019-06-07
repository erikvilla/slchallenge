import axios from 'axios';
import _ from 'underscore';

import V2_CONFIG from './sl_api_config';

const buildHeaders = () => ({
  headers: {
    Authorization: `bearer ${process.env.SL_API_TOKEN}`,
  },
});

const getPersonalInformation = async (page = 1, perPage = 100) => {
  const queryString = `?page=${page}&per_page=${perPage}`;
  const headers = buildHeaders();
  const url = `${V2_CONFIG.BASE_ENDPOINT}${V2_CONFIG.PATHS.PEOPLE}${queryString}`;

  const response = await axios.get(url, headers);

  const relevantFields = [
    'first_name',
    'last_name',
    'email_address',
    'title',
  ];

  const people = response.data.data.map(person => (
    _.pick(person, relevantFields)
  ));

  const nextPage = response.data.metadata.paging.next_page;

  return { people, nextPage };
};

const getAllPersonalInformation = async () => {
  let nextPageIndex = 1;
  let peopleArray = [];
  do {
    const response = await getPersonalInformation(nextPage);
    const { people, nextPage } = response;
    peopleArray = peopleArray.concat(people);
    nextPageIndex = nextPage;
  }
  while (nextPageIndex);
  return { people: peopleArray };
};

export default getPersonalInformation;

export { getPersonalInformation, getAllPersonalInformation };
