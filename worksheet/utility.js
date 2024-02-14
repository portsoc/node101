/**
 * Teh subtract function is complete and ready for use.
 */
export function subtract(a,b) {
  return a-b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a,b) {
  return a+b;
}

/**
 * Create a function called compare that accepts two arrays of numbers
 * and compares the contents.  It should return true if the arrays are
 * identical and false otherwise.
 *
 * i.e. you've done this before, so you're now reusing your own code
 * and turning it into a module.
 */
export function compare(a,b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Create and export a function called zeroest that accepts an array of
// integer numbers and returns the one closest to zero.  where a negative
// and positive number are equally close to zero, the positive number
// should be returned.
export function zeroest(arr) {
  let closest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i]) < Math.abs(closest)) {
      closest = arr[i];
    }
  }
  return closest;
}

// Create and export a function called largest that accepts an array of
// numbers and returns the largest.
export function largest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

