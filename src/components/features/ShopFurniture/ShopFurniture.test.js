import React from 'react';
import { shallow } from 'enzyme';
import ShopFurniture from './ShopFurniture';

describe('Component ShopFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShopFurniture />);
    expect(component).toBeTruthy();
  });
});
