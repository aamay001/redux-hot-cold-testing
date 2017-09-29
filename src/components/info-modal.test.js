import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter: new Adapter()});

import {InfoModal} from './info-modal';
import * as actions from '../actions';

describe('<InfoModal />', () => {
  describe('Should render without crashing.', () => {
    it('<InfoModal /> renders', () => {
      shallow(<InfoModal />);
    });
  });

  describe('Should dispatch toggle Info modal when closing the modal', () => {
    it('<InfoModal /> closes modal', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<InfoModal dispatch={dispatch}/>);
      const instance = wrapper.instance();
      instance.hide({ preventDefault : ()=>{} });
      expect(dispatch).toHaveBeenCalledWith(actions.toggleInfoModal());
    });
  });
});