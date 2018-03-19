import axios from 'axios';

export const endpoint = axios.create({
    baseURL: "http://api-vanhack-event-sp.azurewebsites.net/api/v1"
});

const getResponseData = response => response.data;

const Api = {
    signIn: (login, password) =>
        endpoint.post(`/Customer/auth?email=${login}&password=${password}`)
            .then(getResponseData),
    loadStores: () =>
        endpoint.get(`/Store`).then(getResponseData),
    loadCousines: () =>
        endpoint.get(`/Cousine`).then(getResponseData)
}

export default Api;