import { fetchData } from './fetch.js';

const cardWindow = async a => {
  console.dir(a);
  const data = await fetchData(`https://restcountries.com/v3.1/name/${a}`);
  console.log(data[0].name.nativeName);
};

export { cardWindow };
