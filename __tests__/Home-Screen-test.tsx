/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import HomeScreen from '../src/screens/homeScreen/HomeScreen';
import SimpleHeader from '../src/component/headers/SimpleHeader';
import { FlatList } from 'react-native';
import { shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

it('should render the HomeScreen component', () => {
    // Arrange
    const props = {}
  
    // Act
    const wrapper = shallow(<HomeScreen {...props} />)
  
    // Assert
    expect(wrapper).toHaveLength(1)
    expect(wrapper.find(SimpleHeader)).toHaveLength(1)
    expect(wrapper.find(FlatList)).toHaveLength(1)
  })

  it('should render the correct number of pokemons', () => {
    // Arrange
    const props = {
      data: {
        results: [
          {
            name: "Pikachu",
          },
          {
            name: "Eevee",
          },
        ],
      },
    }
  
    // Act
    const wrapper = shallow(<HomeScreen {...props} />)
  
    // Assert
    expect(wrapper.find(FlatList).children().length).toEqual(2)
  })



  it('should render the pokemon name correctly', () => {
    // Arrange
    const props = {
      data: {
        results: [
          {
            name: "Pikachu",
          },
          {
            name: "Eevee",
          },
        ],
      },
    }
  
    // Act
    const wrapper = shallow(<HomeScreen {...props} />)
  
    // Assert
    expect(wrapper.find(FlatList).children().at(0).find(Text).text()).toEqual("Pikachu")
    expect(wrapper.find(FlatList).children().at(1).find(Text).text()).toEqual("Eevee")
  })
