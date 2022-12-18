import axios from "axios";
import { Store } from "../store/configureStore";

export const checkUserAuth = (isRedirect = true) => {
  Store.dispatch({ type: 'SET_LOADING', payload: true });
  axios.get("http://localhost:8000/api/auth/token",
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("login"))?.token
      }
    }).then((response) => {
      if (response.status === 200) {
        Store.dispatch({ type: 'SET_PERMISSION', payload: true });
      }
      Store.dispatch({ type: 'SET_LOADING', payload: false });
    }).catch((error) => {
      Store.dispatch({ type: 'SET_PERMISSION', payload: false });
      Store.dispatch({ type: 'SET_LOADING', payload: false });
      if (isRedirect) {
        setTimeout(() => {
          window.location.href = '/account/login';
        }, 3000);
      }
    })
}

export const setLocalStorageData = (data) => {
  localStorage.setItem("login", JSON.stringify({
    userLogin: true,
    token: data.access_token
  }));
}

export const removeLocalStorageData = () => {
  localStorage.removeItem("login");
}