/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1
 * @param {*} obj2
 */
function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const property in obj1) {
    if (typeof obj1[property] === "object")
      return compareObjects(obj1[property], obj2[property]);
    if (!obj2[property] || obj2[property] !== obj1[property]) return false;
  }
  return true;
}

module.exports = compareObjects;
