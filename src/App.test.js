
import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Box from './box.component';


configure({ adapter: new Adapter() });

describe('Component: App', () => {
  const items = ['Learn react', 'rest', 'go out'];
  const comp = shallow(<App />);

  it('should match its empty snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  it('should render a h1 title', () => {
    expect(comp.find('h1').length).toEqual(1);
  });

  it('should render the Box Component', () => {
    expect(comp.containsMatchingElement(<Box />)).toEqual(true);
  });

  // it('should add an item based on the value in the state', () => {
  //   const component = shallow(<App />);
  //   const preventDefault = jest.fn();
  //   component.setState({
  //     items
  //   });
  //   component.find('form').simulate('submit', { preventDefault });
  //   expect(toJson(component)).toMatchSnapshot();
  //   expect(preventDefault).toBeCalled();
  // });
});

