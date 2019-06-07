import React from 'react';
import renderer from 'react-test-renderer';
import PeopleTable from '../people_table';
import mockData from '../__mockData__/people_table';

describe('Enzyme', () => {
  it('Renders a table for 100 persons', () => {
    const people = mockData.data;
    const component = renderer.create(<PeopleTable people={people} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
