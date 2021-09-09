import { showLoading } from './helper/toggleLoading.js';
import { hideLoading } from './helper/toggleLoading.js';
import get from './helper/getElement.js';

const userURL = 'https://randomuser.me/api/';
const sloganURL = 'https://corporatebs-generator.sameerkumar.website/';
const errorText = get('.error');

const getData = async () => {
  showLoading();
  try {
    const response = await Promise.all([fetch(userURL), fetch(sloganURL)]);

    // Get user data
    const userData = await response[0].json();
    const person = userData.results[0];
    // console.log(person);
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { username } = person.login;
    const { first, last } = person.name;

    // Get slogan phrase
    const sloganData = await response[1].json();
    const { phrase: slogan } = sloganData;
    // console.log(slogan);

    return {
      phone,
      email,
      image,
      username: `@${username}`,
      name: `${first} ${last}`,
      slogan,
    };
  } catch (error) {
    console.log(error);
    hideLoading();
    errorText.classList.add('error--active');
    setTimeout(() => errorText.classList.remove('error--active'), 7000);
  }
};

export default getData;
