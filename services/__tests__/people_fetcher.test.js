import getPersonalInformation from '../people_fetcher';

// jest.mock('axios');

describe('getPersonalInformation', () => {
  it('returns 100 entities from people endpoint by default', async () => {
    const data = await getPersonalInformation();
    expect(data).toBeDefined();
    expect(data.length).toBe(100);
  });
});

describe('getPersonalInformation', () => {
  it('fields only contain personal information', async () => {
    const data = await getPersonalInformation();

    const people = data.filter((entity) => {
      const hasFirstName = entity.first_name !== undefined;
      const hasLastName = entity.last_name !== undefined;
      const hasEmail = entity.email_address !== undefined;
      const hasTitle = entity.title !== undefined;
      const hasFourFields = Object.keys(entity).length === 4;
      return hasFirstName && hasLastName && hasEmail && hasTitle && hasFourFields;
    });

    expect(people.length).toBe(100);
  });
});
