// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const select = document.getElementById('select');
const containerCards = document.getElementById('container-cards');
const inputSearch = document.getElementById('input');
const cardElement = document.getElementsByClassName('.card');

const fetchData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  createCards(data);
};

const createCards = array => {
  containerCards.innerHTML = '';
  const fragment = document.createDocumentFragment();

  array.forEach(country => {
    const countryName = country.name.common;

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    fragment.append(cardElement);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card__container');
    cardElement.append(imageContainer);

    const imgElement = document.createElement('img');
    imgElement.classList.add('card__image');
    imgElement.src = country.flags.png;
    imageContainer.append(imgElement);

    const cardInformation = document.createElement('div');
    cardInformation.classList.add('card__information');
    cardElement.append(cardInformation);

    const h2Element = document.createElement('h2');
    h2Element.textContent = countryName;
    cardInformation.append(h2Element);

    const pElement = document.createElement('p');
    pElement.textContent = `Population:${country.population}`;
    cardInformation.append(pElement);
    const pElement2 = document.createElement('p');
    pElement2.textContent = `Region: ${country.region}`;
    cardInformation.append(pElement2);
    const pElement3 = document.createElement('p');
    pElement3.textContent = `Capital: ${country.capital}`;
    cardInformation.append(pElement3);
  });

  containerCards.append(fragment);
  // cardWindow();
};

// const cardWindow = () => {};

// cardElement.addEventListener('click', e => {
//   console.log(e.target.value);
// });

inputSearch.addEventListener('change', e => {
  const country = e.target.value;

  fetchData(`https://restcountries.com/v3.1/name/${country}`);
});

select.addEventListener('change', e => {
  const region = e.target.value;
  fetchData(`https://restcountries.com/v3.1/region/${region}`);
});
