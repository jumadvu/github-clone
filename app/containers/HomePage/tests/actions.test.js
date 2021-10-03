import { GET_REPOSITORIES } from '../constants';

import { getRepositories } from '../actions';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: GET_REPOSITORIES,
        repositories: fixture,
      };

      expect(getRepositories(fixture)).toEqual(expectedResult);
    });
  });
});
