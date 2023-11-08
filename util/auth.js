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
  const reponse = await axios.post(endpoint, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(reponse.data);
}

export async function createUser(email, password) {
  await auth("signup", email, password);
}

export async function login(email, password) {
  await auth("login", email, password);
}
