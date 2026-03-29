/**
 * Basic test suite for issue #10 (ceshi)
 */

describe('ceshi', () => {
  it('should pass a basic sanity check', () => {
    expect(true).toBe(true);
  });

  it('should correctly add two numbers', () => {
    const add = (a, b) => a + b;
    expect(add(1, 2)).toBe(3);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });

  it('should handle string operations', () => {
    const greet = (name) => `Hello, ${name}!`;
    expect(greet('world')).toBe('Hello, world!');
    expect(greet('gogo')).toBe('Hello, gogo!');
  });
});
