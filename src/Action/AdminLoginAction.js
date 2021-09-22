import axios from 'axios'

import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT } from '../Constants/adminConstants'

export const logout = () => async (dispatch) => {
    localStorage.removeItem("adminInfo");
    dispatch({
        type: ADMIN_LOGOUT,
    });
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST,
        });

        const { data } = await axios.post("https://polar-beach-17297.herokuapp.com/api/admin/login", {
            email,
            password,
        });
        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            playload: data,
        });
        // to save ADMIN ingo into local storage
        localStorage.setItem("adminInfo", JSON.stringify(data));
    } catch (err) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};
