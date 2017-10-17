import Event from '../components/Event/Event';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });



test('Event component should render as expected', () =>{
  const event = {id: '1', title: "SomeEvent", text: "AtSomePlace", eventAt: "Here"};
  const component = shallow(<Event />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

describe('Event button handles click', () =>{

  it('Delete button clicked', () =>{
    const event = {id: '1', title: "SomeEvent", text: "AtSomePlace", eventAt: "Here"};
    const component = shallow(<Event event={event} />);
    const b = component.find('button');
    b.simulate('click');
    const tree = toJson(component);
    console.log(tree);
  });

});
