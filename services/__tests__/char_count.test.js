import getCharMap from '../char_count';
import mockData from '../__mockData__/people.json?page=1&per_page=100.json';


const getEmails = data => (
  data.map(element => element.email_address)
);

describe('getCharMap', () => {
  it('retreives a map with char count for user\'s emails', () => {
    const emails = getEmails(mockData.data);

    const charMap = getCharMap(emails);
    expect(charMap).toBeDefined();
  });

  it('counts chars correctly for mock data', () => {
    const emails = getEmails(mockData.data);

    const charMap = getCharMap(emails);
    expect(charMap.j).toBe(100);
    expect(charMap.o).toBe(100);
    expect(charMap.h).toBe(100);
    expect(charMap.n).toBe(100);
  });
});
