import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import {Header} from './header';
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({adapter: new Adapter()});

import * as actions from '../actions';
import reducer from '../reducer';

describe('<Header />', () => {

  describe('Should render without crashing.', () => {
    it('<Header /> renders', () => {
      shallow(<Header />);
    });
  });
});