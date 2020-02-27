
import { expect } from 'chai';
import { mythical } from '../app/index';

describe('unicorns are real', () => {
  context('What is the difference between a carrot and a unicorn', () => {
    it('The first is a bunny feast, the other is a funny beast', () => {
      const result = mythical('magical');
      expect(result).to.equal('=== magical ===');
    });
  });
});
