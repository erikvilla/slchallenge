import React from 'react';
import renderer from 'react-test-renderer';

import CharMapPanel from '../char_map_panel';
import mockData from '../__mockData__/char_map_panel';

describe('Enzyme', () => {
  it('Renders a table for 100 persons', () => {
    const charMap = mockData;
    const component = renderer.create(<CharMapPanel charMap={charMap} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
