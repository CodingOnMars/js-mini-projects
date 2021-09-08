const pickRandomName = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export default pickRandomName;
