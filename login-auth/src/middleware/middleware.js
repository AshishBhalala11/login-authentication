import axios from "axios";
import { Navigate } from "react-router-dom";
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
      setTimeout(() => {
        Store.dispatch({ type: 'SET_LOADING', payload: false })
        window.location.href = '/account/login'
      }, 3000);
    })
}