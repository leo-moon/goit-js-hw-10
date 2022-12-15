export function fetchCountries(name) {
  const countryName = `https://restcountries.com/v3.1/name/${name.target.value.trim()}?name&capital&languages&population&flags`;
  return fetch(countryName)
};

// export default fetchCountries;