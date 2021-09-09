import get from './modules/helper/getElement.js';
import getData from './modules/fetchData.js';
import displayData from './modules/displayData.js';

const btn = get('.btn');

const showData = async () => {
  const data = await getData();
  displayData(data);
};

btn.addEventListener('click', showData);
