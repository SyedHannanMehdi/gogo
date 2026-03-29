/**
 * gogo - Node.js entry point
 */

function main() {
  console.log('Welcome to gogo!');
}

module.exports = { main };

if (require.main === module) {
  main();
}
