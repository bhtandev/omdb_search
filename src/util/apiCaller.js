const API_URL = 'www.omdbapi.com/?i=tt3896198&apikey=8c81f9c';

export default function callApi(queryString, method = 'get', body, options) {
    let apiUrl = (location.protocol != 'https:')? 'http://' + API_URL :  'https://' + API_URL;
    return fetch(`${apiUrl}${queryString}`)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
        if (!response.ok) {
            return Promise.reject(json);
        }
        return json;
    })
    .then(
        response => response,
    );
}


