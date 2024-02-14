import fs from 'fs';
import assert from 'assert';
import * as util from './worksheet/utility.js';
import { test, msg } from './dobbin/harness.js';

let dir = "./worksheet/";
let pathUtil = "utility.js";


test(`${pathUtil} should be accessible within the ${dir} folder.`, () => {
  try {
    fs.accessSync(dir + pathUtil, fs.constants.F_OK);
    assert.ok(true, pathUtil + " is accessible");
  } catch (e) {
    assert.fail(pathUtil + " is missing - did you delete it?");
  }
});

test(`${pathUtil} should have an exported subtract function`, () => {
  assert.strictEqual(util.subtract(4, 3), 1, "subtract is not giving the expected answer (4-3=1)");
  assert.strictEqual(util.subtract(0, 0), 0, "subtract is not giving the expected answer (0-0=0)");
  assert.strictEqual(util.subtract(1000, 1000), 0, "subtract is not giving the expected answer (1000-1000=0)");
  assert.strictEqual(util.subtract(1, 2), -1, "subtract is not giving the expected answer (1-2=-1)");
});

test(`Add the 'export' keyword to the the add function in ${pathUtil}`, () => {
  assert.ok(util.add, "The add function cannot be reached.  Is it exported?");
  assert.strictEqual(util.add(4, 3), 7, "4+3=7");
  assert.strictEqual(util.add(0, 0), 0, "0+0=0");
  assert.strictEqual(util.add(1000, 1000), 2000, "1000+1000=2000");
});

test('Create a function called compare that accepts two arrays of numbers and compares the contents.', () => {
  assert.ok(util.compare, "The compare function cannot be reached.  Is it exported?");
  assert.ok(
    typeof util.compare === "function",
    "Create a function called compare."
  );
  assert.ok(util.compare([1], [1]), "two arrays with 1, should pass");
  assert.ok(util.compare([1, 2, 3], [1, 2, 3]), "two identical arrays, should pass");
  assert.ok(util.compare([4, 7, 11, 17], [4, 7, 11, 17]), "two arrays, four idential elements each, should pass");
  assert.ok(!util.compare([4, 7, 11, 17], [4, 7, 11]), "different length arrays that start the same, should not pass");
  assert.ok(!util.compare([4, 7, 11, 17], [4, 7, 11, 3]), "different arrays that start the same, should not pass");
  assert.ok(!util.compare([4, 7, 11, 17], [4, 17, 7, 11]), "two arrays in different order, should not pass");
  assert.ok(!util.compare([], [4, 17, 7, 11]), "two arrays, one empty, should not pass");
});

test('Create and export a function called largest that accepts an array of numbers and returns the largest.', () => {
  assert.ok(util.largest, "The largest function cannot be reached.  Is it exported?");
  assert.ok(typeof util.largest === "function", "Create a function called largest.");
  assert.ok(util.largest([0, 1, 2]) == 2, "2 is the largest of 0,2 & 2");
  assert.ok(util.largest([1, 1, 3]) == 3, "2 is the largest of 1,1 & 3");
  assert.ok(util.largest([2, 2, 2]) == 2, "2 is the largest of 2, 2 & 2");
  assert.ok(util.largest([1, 2, 3, 4, 5, 6, 7, 8, 3, -5]) == 8, "8 is th largest");
  assert.ok(util.largest([1]) == 1, "single element array works");
});

test("Create and export a function called zeroest that accepts an array of integer numbers and returns the one closest to zero", () => {
  assert.ok(util.zeroest, "The zeroest function cannot be reached.  Is it exported?");
  assert.ok(typeof util.zeroest === "function", "Create a function called zeroest.");
  assert.strictEqual(util.zeroest([10, 20, 30, 40, 50]), 10, "10 is the closest to zero");
  assert.strictEqual(util.zeroest([10, 20, 30, 40, 50, -20]), 10, "10 is the closest to zero");
  assert.strictEqual(util.zeroest([10, 20, -30, 40, 50, -40, -20]), 10, "10 is the closest to zero");
  assert.strictEqual(util.zeroest([10, 20, 30, -40, 50, -20, 0]), 0, "0 is the closest to zero");
  assert.strictEqual(util.zeroest([1, -1, 2, -3]), 1, "1 is the closest to zero - where +/- are equal we choose the positive");
});

msg("All tests pass");
