const createCards = array => {
  const fragment = document.createDocumentFragment();

  array.forEach(country => {
    const countryName = country.name.common;

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.name = countryName;
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

  return fragment;
};

export { createCards };
