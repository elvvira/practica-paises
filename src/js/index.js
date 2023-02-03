// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createCards } from './create-cards.js';
import { cardWindow } from './modal.js';
import { fetchData } from './fetch.js';

const select = document.getElementById('select');
const inputSearch = document.getElementById('input');
const containerCards = document.getElementById('container-cards');
const modalButton = document.getElementById('modal__button');
const modal = document.getElementById('modal');

const paintInitialCards = async () => {
  const data = await fetchData('https://restcountries.com/v3.1/all');
  const newFragment = createCards(data);
  containerCards.innerHTML = '';
  containerCards.append(newFragment);
};

paintInitialCards();

inputSearch.addEventListener('change', e => {
  const country = e.target.value;
  fetchData(`https://restcountries.com/v3.1/name/${country}`);
});

select.addEventListener('change', e => {
  const region = e.target.value;
  fetchData(`https://restcountries.com/v3.1/region/${region}`);
});

containerCards.addEventListener('click', e => {
  // console.log(e.target);
  modal.classList.add('modal--show');

  cardWindow(e.target.dataset.name);
});

modalButton.addEventListener('click', e => {
  modal.classList.remove('modal--show');
});
