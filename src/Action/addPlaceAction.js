import axios from 'axios'
import { PLACE_CREATE_FAIL, PLACE_CREATE_REQUEST, PLACE_CREATE_SUCCESS, PLACE_LIST_FAIL, PLACE_LIST_REQUEST, PLACE_LIST_SUCCESS } from "../Constants/addPlaceConstants"

export const addPlaceAction = (userId, provision, district, fedConstituency, provConstituency, localBody, ward, booth) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PLACE_CREATE_REQUEST
        })
        const { adminLogin: { adminInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        };

        const { data } = await axios.post(`http://localhost:5000/api/user/${userId}/assigned`,
            { provision, district, fedConstituency, provConstituency, localBody, ward, booth}, config
        )
        dispatch({
            type: PLACE_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PLACE_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const listAllPlace = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PLACE_LIST_REQUEST });
        const { adminLogin: { adminInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        };


        const { data } = await axios.get(
            `http://localhost:5000/api/place/all`,
            config
        );

        dispatch({
            type: PLACE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PLACE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};