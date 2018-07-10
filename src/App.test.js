
import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Box from './box.component';


configure({ adapter: new Adapter() });

describe('Component: App', () => {
  const items = ['uno', '223'];
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

  it('List length should be ok',() => {
    expect(comp.find('.list-item').length).toEqual(items.length);
  });

  it('Every list item has the right content', () => {
    comp
      .find('.list-item')
      .forEach((node, i) => {
        expect(node.text()).toEqual(items[i]);
      });
  });

  it('loadItemsToList should fill the empty list', () => {
    let newList = [];
    expect(newList.length).toEqual(0);

    newList = comp.instance().loadItemstoList([]);
    expect(newList.length).toEqual(2);
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

