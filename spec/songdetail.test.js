
import React from 'react';
import Enzyme from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SongDetailWidget from '../client/src/components/songDetailWidget';

import artistData from '../client/src/data/artistData';
import songData from '../client/src/data/songData';

Enzyme.configure({ adapter: new Adapter() });


const toggleTruncate = () => false;
describe('SongDetailWidget', () => {
  it('should render correctly with dummy data', () => {
    const component = shallow(<SongDetailWidget artistData={artistData} songData={songData[0]} truncated toggleTruncate={toggleTruncate} />);
    expect(component).toMatchSnapshot();
  });

  it('should expand when clicking show more', () => {
    const component = shallow(<SongDetailWidget artistData={artistData} songData={songData[0]} truncated toggleTruncate={toggleTruncate} />);
    component.find('div.showMoreText')
      .simulate('click');
    expect(component.contains('Show more')).toEqual(true);
  });
});
