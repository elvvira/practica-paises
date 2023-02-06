import { fetchData } from './fetch.js';

const modalTitle = document.getElementById('modal-title');
const nativeName = document.getElementById('native-name');
const population = document.getElementById('population');
const region = document.getElementById('region');
const subRegion = document.getElementById('sub-region');
const capital = document.getElementById('capital');
const level = document.getElementById('level');
const currencies = document.getElementById('currencies');
const languages = document.getElementById('languages');
const flag = document.getElementById('flag');
const borderButtons = document.getElementById('border-buttons');

const cardWindow = async value => {
  const data = await fetchData(`https://restcountries.com/v3.1/name/${value}`);

  const allCurrencies = Object.keys(data[0].currencies);
  const allLenguages = Object.keys(data[0].languages);
  const allTld = Object.keys(data[0].tld);

  console.dir(data[0].tld[allTld[0]]);

  modalTitle.textContent = value;
  nativeName.textContent = ' ' + data[0].name.official;
  population.textContent = ' ' + data[0].population;
  region.textContent = ' ' + data[0].region;
  subRegion.textContent = ' ' + data[0].subregion;
  capital.textContent = ' ' + data[0].capital;
  level.textContent = ' ' + data[0].tld[allTld[0]];
  currencies.textContent = ' ' + data[0].currencies[allCurrencies[0]].name;
  languages.textContent = ' ' + data[0].languages[allLenguages[0]];
  flag.src = data[0].flags.png;

  const fragment = document.createDocumentFragment();
  for (let index = 0; index < data[0].borders.length; index++) {
    const borderCountries = document.createElement('button');
    borderCountries.classList.add('button__border');
    borderCountries.textContent = data[0].borders[index];
    fragment.append(borderCountries);
  }
  borderButtons.append(fragment);
};

export { cardWindow };
