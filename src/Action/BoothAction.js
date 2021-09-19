import axios from "axios";
import { BOOTHS_LIST_FAIL, BOOTHS_LIST_REQUEST, BOOTHS_LIST_SUCCESS } from "../Constants/BoothConstants";


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
            `http://localhost:5000/api/booth`,
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