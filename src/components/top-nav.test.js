import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter: new Adapter()});

import * as actions from '../actions';
import {TopNav} from './top-nav';

describe('<TopNav />', () => {

  describe('Should render without crashing', () => {
    it('<TopNav /> renders', () => {
      shallow(<TopNav />);
    });
  });

  describe('Should dispatch a new game when the new game link is clicked', () => {
    it('<TopNav /> dispatched a new game', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<TopNav dispatch={dispatch}/>);
      const instance = wrapper.instance();
      instance.newGame({preventDefault:()=>{}});
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('Should dispatch a info modal toggle when the What? link is clicked', () => {
    it('<TopNav /> dispached toggle info modal', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const instance = wrapper.instance();
      instance.toggleInfoModal({preventDefault:()=>{}});
      expect(dispatch).toHaveBeenCalledWith(actions.toggleInfoModal());
    });
  });
});