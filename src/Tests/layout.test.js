import React from 'react';
import Navbar from '../components/layout/Navbar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Navbar>', () => {
   let wrapper = null;

   beforeAll(() => {
      wrapper = shallow(<Navbar />);
   });

   it('renders without errors', () => {
      expect(wrapper.find('[data-testid="navbar"]')).toHaveLength(1);
   });
   it('renders menu icon', () => {
      expect(wrapper.find('[data-testid="menuIcon"]')).toHaveLength(1);
   });
});
