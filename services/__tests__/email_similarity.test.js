import getSimilarityMap from '../email_similarity';
import mockData from '../__mockData__/people.json?page=1&per_page=100.json';

const getEmails = data => data.map(element => element.email_address);

describe('email similarity service', () => {
  it('returns a valid map', () => {
    const emails = getEmails(mockData.data);

    const similarityMap = getSimilarityMap(emails);
    expect(similarityMap).toBeDefined();
  });

});
