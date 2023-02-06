// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createCards } from './create-cards.js';
import { cardWindow } from './modal.js';
import { fetchData } from './fetch.js';

const formElement = document.getElementById('form');
const select = document.getElementById('select');
const inputSearch = document.getElementById('input');
const containerCards = document.getElementById('container-cards');
const modalButton = document.getElementById('modal__button');
const modal = document.getElementById('modal');
const buttonTheme = document.getElementById('button-theme');
const textMode = document.getElementById('text-mode');

const paintCards = async data => {
  const newFragment = createCards(data);
  containerCards.innerHTML = '';
  containerCards.append(newFragment);
};

const getInicialCards = async () => {
  const data = await fetchData('https://restcountries.com/v3.1/all');
  paintCards(data);
};

getInicialCards();

formElement.addEventListener('submit', async e => {
  e.preventDefault();
  const country = e.target.search.value;

  const data = await fetchData(`https://restcountries.com/v3.1/name/${country}`);
  paintCards(data);
});

select.addEventListener('change', async e => {
  const region = e.target.value;
  const data = await fetchData(`https://restcountries.com/v3.1/region/${region}`);
  paintCards(data);
});

containerCards.addEventListener('click', e => {
  modal.classList.add('modal--show');

  cardWindow(e.target.dataset.name);
});

modalButton.addEventListener('click', e => {
  modal.classList.remove('modal--show');
});

buttonTheme.addEventListener('click', e => {
  console.dir(e.target);
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    buttonTheme.src = 'assets/images/moon-solid.svg';
    textMode.textContent = 'Dark mode';
  } else {
    buttonTheme.src = 'assets/images/sun-solid.svg';
  }
});
