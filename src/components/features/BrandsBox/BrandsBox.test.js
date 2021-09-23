import React from 'react';
import { shallow } from 'enzyme';
import BrandsBox from './BrandsBox';

describe('Component BrandsBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<BrandsBox />);
    expect(component).toBeTruthy();
  });
});
