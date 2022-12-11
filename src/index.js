import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.querySelector('#search-box')
}

refs.input = addEventListener('input', (debounce(fetchCountries, DEBOUNCE_DELAY)));

function fetchCountries(name) {
  console.log(name, name.target.value.trim());
  const countryName = 'https://restcountries.com/v3.1/name/' + name.target.value.trim();
  // fetch('https://restcountries.com/v3.1/name/canada')
  fetch(countryName);
}.then()


// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/name/peru
// https://restcountries.com/v3.1/name/united

// Напиши функцию fetchCountries(name) которая делает HTTP-запрос на ресурс name 
// и возвращает промис с массивом стран - результатом запроса. 
// Вынеси её в отдельный файл fetchCountries.js 
// и сделай именованный экспорт.
