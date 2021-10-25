// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅" + "Assertion passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🚨" + "Assertion failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("yes", "yes");
assertEqual(3, 4);
