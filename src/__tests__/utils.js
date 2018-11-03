import { capitalize } from '../utils'

describe('test utils', function () {

  it('should capitalize a string', () => {
    expect(capitalize('capitalize me!')).toBe('Capitalize me!')
  });
});
