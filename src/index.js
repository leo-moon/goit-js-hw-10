import './css/styles.css';
import debounce from 'lodash.debounce';
import shortCard from './1';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.querySelector('#search-box'),
  ul   : document.querySelector('.country-list'),
}

refs.input = addEventListener('input', (debounce(fetchCountries, DEBOUNCE_DELAY)));

function fetchCountries(name) {
  // console.log(name.target.value.length);
  if (!name.target.value.length) {return};
  const countryName = `https://restcountries.com/v3.1/name/${name.target.value.trim()}?name`;
  fetch(countryName)
  .then(response => {
    if (!response.ok) {
      console.log('alarm'); 
      // alert('AAaaaaaaaaaaaa')
      return}
    return response.json();
  })
  .then(countries => {
    refs.ul.innerHTML = "";
    const countriesItems = countries.length;
    console.log(countries.length);
    if (countriesItems > 10) {console.log('very much'); return}
    if (countriesItems > 1) {
      console.log('so much'); 
      const make = shortCard(countries);
      refs.ul.innerHTML = make;
      return
    }
    console.log('big card'); 
  })
  .catch(() => {console.log('jjjkljkljkljkl'); return});
}


// Напиши функцию fetchCountries(name) которая делает HTTP-запрос на ресурс name 
// и возвращает промис с массивом стран - результатом запроса. 
// Вынеси её в отдельный файл fetchCountries.js 
// и сделай именованный экспорт.
