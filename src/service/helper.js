const arrayToString = array => {
  let str = "";
  array.forEach((item, i) => {
    i === array.length - 1 ? (str += item) : (str += `${item}, `);
  });
  return str;
};

export { arrayToString };
