
import React from 'react';
import Enzyme from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistWidget from '../client/src/components/ArtistWidget';

import artistData from '../client/src/data/artistData';

Enzyme.configure({ adapter: new Adapter() });

describe('ArtistWidget', () => {
  it('should render correctly in mode', () => {
    const component = shallow(<ArtistWidget artistData={artistData[0]} />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
