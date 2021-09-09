import getNames from './helper/getNames.js';
import pickRandomName from './helper/pickRandomName.js';

const generateRandomName = () => {
  // Fetch names
  const firstNames = getNames('first');
  const lastNames = getNames('last');

  // Pick a random name from each list
  const firstName = pickRandomName(firstNames.data);
  const lastName = pickRandomName(lastNames.data);

  // Return a full name
  return `${firstName}${lastName}`;
};

export default generateRandomName;
