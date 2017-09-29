import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Game from './game';
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({adapter: new Adapter()});

describe('<Game />', () => {

  describe('Should render without crashing', () => {
    it('<Game /> renders', () => {
      shallow(<Game />);
    });
  });

})
