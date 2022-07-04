const URL = 'https://restcountries.com/v3.1/name';
const param = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
    return fetch(`${URL}/${name}?${param}`).then(resp => {
        if (resp.ok) {
            return resp.json();
        }
    // throw new Error(resp.statusText);
    });
}