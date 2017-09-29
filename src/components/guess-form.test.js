import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme'
import {GuessForm} from './guess-form';
import Adapter from 'enzyme-adapter-react-15';
import * as actions from '../actions';
Enzyme.configure({adapter: new Adapter()});


describe('<GuessForm />', () => {

  describe('Should render without crashing.', () => {
    it('<GuessForm/> renders', () => {
      shallow(<GuessForm />);
    });
  });

  describe('Should dispatch a guess.', () => {
    it('<GuessForm /> makes a guess', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<GuessForm dispatch={dispatch}/>);
      let instance = wrapper.instance();
      instance = Object.assign(instance, {input: {value: 25}});
      instance.submitGuess({preventDefault:()=>{}});
      expect(dispatch).toHaveBeenCalledWith(actions.makeGuess(instance.input.value));
    });
  });

});