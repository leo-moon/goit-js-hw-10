function countryCard(country) {
  let i = 0;
  let languages ='';
  for (const l in country.languages) {
    languages += country.languages[l] + ', ';
    i += 1;
  };
  languages = languages.slice(0, languages.length - 2);
  const lang = (i === 1) ? 'language': 'languages';
  const card =
    `
      <h2>
        <img class = flag 
            src = "${ country.flags.svg }" 
            alt = 'flag'>
        ${country.name.official}
      </h2>
      <p class = "text">capital:   <span class = "span">${country.capital}</span></p>
      <p class = "text">population:   <span class = "span">${country.population}</span></p>
      <p class = "text">${lang}:   <span class = "span">${languages}</span></p>
    `
return card
}

export default countryCard