import reducer from './reducer';
import * as actions from './actions';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: 0,
      showInfoModal: false
    }
  });

  describe('should set the state to a new game state', () => {
    it('NEW_GAME', () => {
      const state = reducer(initialState, actions.newGame());
      expect(state.correctAnswer).not.toEqual(initialState.correctAnswer);
    });
  });

  describe('should return state when no state is passsed', () => {
    it('NEW_GAME', () => {
      const state = reducer(undefined, actions.newGame());
      expect(state).not.toBeUndefined();
    });
  });

  describe('should make a guess and update the guess in the state', () => {
    it('MAKE_GUESS', () => {
      const state = reducer(initialState, actions.makeGuess(32));
      expect(state.guesses[0]).toEqual(32);
    });
  });

  describe('should return feedback of You\'re Ice Cold...', () => {
    it('MAKE_GUESS', () => {
      const guess = initialState.correctAnswer - 51;
      const state = reducer(initialState, actions.makeGuess(guess));
      expect(state.feedback).toBe('You\'re Ice Cold...');
    });
  });

  describe('should return feedback of You\'re Cold...', () => {
    it('MAKE_GUESS', () => {
      const guess = initialState.correctAnswer - 30;
      const state = reducer(initialState, actions.makeGuess(guess));
      expect(state.feedback).toBe('You\'re Cold...');
    });
  });

  describe('should return feedback of You\'re Warm', () => {
    it('MAKE_GUESS', () => {
      const guess = initialState.correctAnswer - 10;
      const state = reducer(initialState, actions.makeGuess(guess));
      expect(state.feedback).toBe('You\'re Warm');
    });
  });

  describe('should return feedback of You\'re Hot!', () => {
    it('MAKE_GUESS', () => {
      const guess = initialState.correctAnswer - 1;
      const state = reducer(initialState, actions.makeGuess(guess));
      expect(state.feedback).toBe('You\'re Hot!');
    });
  });

  describe('should return feedback of You got it!', () => {
    it('MAKE_GUESS', () => {
      const guess = initialState.correctAnswer;
      const state = reducer(initialState, actions.makeGuess(guess));
      expect(state.feedback).toBe('You got it!');
    });
  });

  describe('should toggle the information modal', () => {
    it('TOGGLE_INFO_MODAL', () => {
      const modalStatus = initialState.showInfoModal;
      const state = reducer(initialState, actions.toggleInfoModal());
      expect(state.showInfoModal).toEqual(!modalStatus);
    });
  });

});