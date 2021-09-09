import get from './helper/getElement.js';
import randomCompanyName from './generateRandomName.js';
import { hideLoading } from './helper/toggleLoading.js';

const userName = get("[data-id='name']");
const phone = get("[data-id='phone']");
const email = get("[data-id='email']");
const nickname = get("[data-id='username']");
const userImage = get('.card__image');
const companyName = get("[data-id='company-name']");
const companySlogan = get("[data-id='phrase']");

const displayData = (data) => {
  if (data) {
    hideLoading();
  }
  userName.textContent = data.name;
  phone.textContent = data.phone;
  email.textContent = data.email;
  nickname.textContent = data.username;
  userImage.src = data.image;
  companyName.textContent = randomCompanyName();
  companySlogan.textContent = data.slogan;
};

export default displayData;
