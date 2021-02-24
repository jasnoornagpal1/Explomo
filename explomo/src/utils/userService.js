import { token } from "morgan";

import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Something went wrong!');
  })
  // Object parameter destructuring here
  .then(({  token  }) => {
    tokenService.setToken(token);
  });
}

export default {
  signup
};