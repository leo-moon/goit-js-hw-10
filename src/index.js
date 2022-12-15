import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import  shortCard from './short-card';
import countryCard from './country-card';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.querySelector('#search-box'),
  ul   : document.querySelector('.country-list'),
  div  : document.querySelector('.country-info')
}

refs.input = addEventListener('input', (debounce(fetchCountries, DEBOUNCE_DELAY)));



function fetchCountries(name) {
  if (!name.target.value.length) {return};
  const countryName = `https://restcountries.com/v3.1/name/${name.target.value.trim()}?name&capital&languages&population&flags`;
  fetch(countryName)
  .then(response => {
    if (!response.ok) {
      console.log('alarm');
      return}
    return response.json();
  })
  .then(countries => {
    clearScreen();
    const countriesItems = countries.length;
    console.log(countries.length, countries);
    if (countriesItems > 10) {
      infoAlarm();
      return
    }
    if (countriesItems > 1) {
      const make = shortCard(countries);
      refs.ul.innerHTML = make;
      return
    }
    countryCardOnScreen(countries);
  })
  .catch(() => {
    failureAlarm();
    return});
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