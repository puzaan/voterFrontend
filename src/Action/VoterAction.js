import axios from "axios";
import { VOTER_LIST_FAIL, VOTER_LIST_REQUEST, VOTER_LIST_SUCCESS } from "../Constants/voterConstants";

export const listAllVoter = () => async (dispatch, getState) => {
    try {
        dispatch({ type: VOTER_LIST_REQUEST });
        const { adminLogin: { adminInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        };


        const { data } = await axios.get(
            `https://polar-beach-17297.herokuapp.com/api/voter`,
            config
        );

        dispatch({
            type: VOTER_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: VOTER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};



export const listBoothAllVoter = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: VOTER_LIST_REQUEST });
        const { adminLogin: { adminInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `http://localhost:5000/api/booth/${id}/vooter`,
            config
        );

        dispatch({
            type: VOTER_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: VOTER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};