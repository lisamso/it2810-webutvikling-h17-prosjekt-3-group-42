import Note from '../components/Note/Note';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });



test('Note component should render as expected', () =>{
  const component = shallow(<Note />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
