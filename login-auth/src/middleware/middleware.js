import axios from "axios";
import { Store } from "../store/configureStore";

export const checkUserAuth = () => {
  Store.dispatch({ type: 'SET_LOADING', payload: true })
  axios.get("http://localhost:8000/api/auth/token",
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("login"))?.token
      }
    }).then((response) => {
      if (response.status === 200) {
        Store.dispatch({ type: 'SET_PERMISSION', payload: true })
      }
      Store.dispatch({ type: 'SET_LOADING', payload: false })
    }).catch((error) => {
      Store.dispatch({ type: 'SET_PERMISSION', payload: false })
      Store.dispatch({ type: 'SET_LOADING', payload: false })
      setTimeout(() => {
        window.location.href = '/account/login'
      }, 3000);
    })
}