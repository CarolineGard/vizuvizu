// The function checks if the passed value is undefined/null or the lenght of object/string = 0
const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && Object.trim().length === 0)
  );
};

module.exports = isEmpty;
