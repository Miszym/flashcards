import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../components/pages/Main';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<Main>', () => {
   let wrapper = null;
   beforeAll(() => {
      wrapper = shallow(<Main />);
   });

   it('renders without errors', () => {
      expect(wrapper.find('[data-testid="main"]')).toHaveLength(1);
   });
   it('renders menu', () => {
      expect(wrapper.find(Link)).toHaveLength(3);
   });
});
