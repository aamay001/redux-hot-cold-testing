import React from 'react';
import Enzyme, {shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter: new Adapter()});

import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {

  describe('Should render without crashing', () => {
    it('<GuessSection /> renders', () => {
      shallow(<GuessSection />);
    });
  });
});