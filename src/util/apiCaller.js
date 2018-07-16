const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=8c81f9c';

export default function callApi(queryString, method = 'get', body, options) {
    return fetch(`${API_URL}${queryString}`)
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


