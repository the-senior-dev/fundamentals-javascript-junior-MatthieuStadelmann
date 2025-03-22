/**
 * Returns the data type of the given variable.
 * 
 * @param {*} variable - The variable whose data type is to be determined.
 * @returns {string} - The data type of the variable.
 */
function getDataType(variable) {
  if (typeof variable === "undefined") {
    return "undefined";
  }
  if (typeof variable === "string") {
    return "string";
  }
  if (typeof variable === "number") {
    return "number"
  }
  if (typeof variable === "symbol") {
    return "symbol";
  }
  if (typeof variable === "bigint") {
    return "bigint";
  }

  if (typeof variable === "boolean") {
    return "boolean";
  }
  if (Array.isArray(variable) || typeof variable === "object" || !typeof variable) {
    return "object";
  }
}

module.exports = getDataType;