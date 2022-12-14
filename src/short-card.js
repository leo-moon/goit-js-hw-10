// export 
function shortCard (countries) {
  // console.log('countries', countries);
  let li = '';
  for (const country of countries) {
    // console.log('country', country, country.flags);
    li += `<li>
            <h3>
              <img class = flag 
                  src = "${ country.flags.png }" 
                  alt = 'flag'>
              ${country.name.official}
            </h3>
          </li>`;
    // console.log('li', li)
  }
  return li
}

export default shortCard;
