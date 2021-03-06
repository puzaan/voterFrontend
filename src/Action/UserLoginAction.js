import axios from 'axios'
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../Constants/LogInConstants';


export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({
        type: USER_LOGOUT,
    });
};
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const { data } = await axios.post("https://polar-beach-17297.herokuapp.com/api/user/login", {
            email,
            password,
        });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            playload: data,
        });
        // to save user ingo into local storage
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

export const registerAction = (name, sex, dob, password, phone, address, email) =>async(dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const { data } = await axios.post('http://localhost:5000/api/user/register', {
            name, sex, dob, password, phone, address, email
        })
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const getUserDetails = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(
            "http://localhost:5001/api/users/profile",
            config
        );

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};


export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        });

        const { adminLogin: { adminInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        };

        const { data } = await axios.get("https://polar-beach-17297.herokuapp.com/api/user/alluser", config);

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: USER_LIST_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};