const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("../public/script.js");

test('greet("World") returns "Hello, World!"', () => {
  assert.equal(greet("World"), "Hello, World!");
});
