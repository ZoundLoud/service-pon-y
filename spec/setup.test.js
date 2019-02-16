import React from 'react';
import Enzyme from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistWidget from '../client/src/components/ArtistWidget';
import FollowButton from '../client/src/components/FollowButton';

Enzyme.configure({ adapter: new Adapter() });

describe('ArtistWidget', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ArtistWidget debug />);

    expect(component).toMatchSnapshot();
  });
});

it('should be possible to click Follow Button', () => {
  const component = mount(<FollowButton />);
  component
    .find('button')
    .simulate('click');
  expect(component).toMatchSnapshot();
  component.unmount();
});
