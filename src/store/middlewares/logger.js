const logger = (store) => (next) => (action) => {
  const result = next(action);
  console.log('❤ ✔ By Mello 😃');
  return result;
};

export default logger