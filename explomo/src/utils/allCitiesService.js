const BASE_URL = '/api/allCities/';

export function getAllCities() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export default {
    getAllCities
}
