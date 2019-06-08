import getCharMap from '../char_count';
import mockData from '../__mockData__/people.json?page=1&per_page=100.json';
import expectedMap from './char_count_test_data';

const getEmails = data => data.map(element => element.email_address);

describe('getCharMap', () => {
  it("retreives a map with char count for user's emails", () => {
    const emails = getEmails(mockData.data);

    const charMap = getCharMap(emails);
    expect(charMap).toBeDefined();
  });

  it('counts chars correctly for mock data', () => {
    const emails = getEmails(mockData.data);
    const charMap = getCharMap(emails);
    expect(charMap).toMatchObject(expectedMap);
  });
});
