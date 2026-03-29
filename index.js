/**
 * gogo - Node.js entry point
 */

function main() {
  console.log('Welcome to gogo!');
}

if (require.main === module) {
  main();
}

module.exports = { main };
