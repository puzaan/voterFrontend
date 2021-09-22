import axios from "axios";
import { BOOTHS_LIST_FAIL, BOOTHS_LIST_REQUEST, BOOTHS_LIST_SUCCESS, BOOTH_DETAILS_FAIL, BOOTH_DETAILS_REQUEST, BOOTH_DETAILS_SUCCESS } from "../Constants/BoothConstants";


export const listAllBooth = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BOOTHS_LIST_REQUEST });
        const { adminLogin: { adminInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        };


        const { data } = await axios.get(
            `https://polar-beach-17297.herokuapp.com/api/booth`,
            config
        );

        dispatch({
            type: BOOTHS_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: BOOTHS_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


export const listBoothDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: BOOTH_DETAILS_REQUEST });
        const { adminLogin: { adminInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `https://polar-beach-17297.herokuapp.com/api/booth/${id}`,
            config
        );

        dispatch({
            type: BOOTH_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: BOOTH_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};