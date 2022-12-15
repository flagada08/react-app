import {
    Navigate,
    useLocation
} from "react-router-dom";

export const setToken = (token) => {

    // set token in localStorage
    localStorage.setItem('azertyToken', token)
}

export const fetchToken = () => {

    // fetch the token
    return localStorage.getItem('azertyToken')
}

export function RequireToken({children}) {

    let auth = fetchToken()
    let location = useLocation();

    // if no token set in localStorage, redirect user
    if(!auth) {
        
        return <Navigate to="/react-app/" state={{from: location}} />
    }

    // return all children route
    return children;
}