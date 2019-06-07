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

  return people;
};

export default getPersonalInformation;
