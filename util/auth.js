import axios from "axios";
import firebaseConfig from "../config";

const API_KEY = firebaseConfig.apiKey;
const SIGNUP_URL = firebaseConfig.signUpUrl;
const SIGNIN_URL = firebaseConfig.signInUrl;

async function auth(mode, email, password) {
  let endpoint = "";
  switch (mode) {
    case "signup":
      endpoint = SIGNUP_URL + API_KEY;
      break;
    case "login":
      endpoint = SIGNIN_URL + API_KEY;
      break;
    default:
      endpoint = "";
      break;
  }
  const response = await axios.post(endpoint, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return auth("signup", email, password);
}

export function login(email, password) {
  return auth("login", email, password);
}
