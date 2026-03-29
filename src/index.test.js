/**
 * Basic tests for gogo entry point
 */

const { main } = require('./index');

// Simple assertion helper
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
  console.log(`✅ PASS: ${message}`);
}

// Tests
assert(typeof main === 'function', 'main should be a function');

try {
  main(); // should not throw
  assert(true, 'main() runs without errors');
} catch (err) {
  assert(false, `main() threw unexpectedly: ${err.message}`);
}

console.log('\nAll tests passed! 🎉');
