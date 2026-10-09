const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("./greet.js");

test("greet by name", ()=>{
    assert.strictEqual(greet("Kumaran"), "Hello Kumaran, Welcome to learning-dev");
})