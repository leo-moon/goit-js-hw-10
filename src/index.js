import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchCountries } from './fetchCountries';
import  refs  from './variables';
import shortCard from './short-card';
import countryCard from './country-card';

const DEBOUNCE_DELAY = 300;

refs.input = addEventListener('input', (debounce(mainF, DEBOUNCE_DELAY)));

function mainF(name) {
  controlTrim(name);
  fetchCountries(name)
  .then(response => {
    return response.json();
  })
  .then(countries => {
    countriesCardsChange(countries)
  })
  .catch(() => {
    failureAlarm();
    return});
}

function controlTrim(name){
  if (!name.target.value.trim().length) {return};
}

function clearScreen() {
  refs.ul.innerHTML = "";
  refs.div.innerHTML = "";
}

function infoAlarm () {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function failureAlarm () {
  Notify.failure('Oops, there is no country with that name');
}

function countryCardOnScreen(country) {
  const makeCard = countryCard(...country);
  refs.div.innerHTML = makeCard;
}

function countriesCardsChange (countries) {
  clearScreen();
  const countriesItems = countries.length;
  if (countriesItems > 10) {
    infoAlarm();
    return
  }
  if (countriesItems > 1) {
    refs.ul.innerHTML = shortCard(countries);
    return
  }
  countryCardOnScreen(countries);
}