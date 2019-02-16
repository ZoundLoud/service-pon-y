import React from 'react';
import Enzyme from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FollowButton from '../client/src/components/FollowButton';


Enzyme.configure({ adapter: new Adapter() });


it('should be possible to click Follow Button', () => {
  const component = mount(<FollowButton isFollowing={false} />);
  component
    .find('button')
    .simulate('click');
  expect(component.contains('Following')).toEqual(true);
  component.unmount();
});
