import * as actions from './actions';

describe('actions', () => {

  describe('should create a new action with NEW_GAME as type', () => {
    it('newGame', () => {
      const action = actions.newGame(actions.NEW_GAME);
      expect(action.type).toEqual(actions.NEW_GAME);
    });
  });

  describe('should create a new action with type MAKE_GUESS and random guess.', () => {
    it('makeGuess', () => {
      const guess = Math.round(Math.random() * 100);
      const action = actions.makeGuess(guess);
      expect(action.type).toEqual(actions.MAKE_GUESS);
      expect(action.guess).toEqual(guess);
    });
  });

  describe('should create a new action with type TOGGLE_INFO_MODAL', () => {
    it('toggleInfoModal', () => {
      const action = actions.toggleInfoModal();
      expect(action.type).toEqual(actions.TOGGLE_INFO_MODAL);
    });
  });

});