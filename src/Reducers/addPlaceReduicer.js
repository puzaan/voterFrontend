import { PLACE_CREATE_FAIL, PLACE_CREATE_REQUEST, PLACE_CREATE_SUCCESS, PLACE_LIST_FAIL, PLACE_LIST_REQUEST, PLACE_LIST_SUCCESS } from "../Constants/addPlaceConstants";

export const placeAssigneReducer = (state = {}, action) => {
    switch (action.type) {
        case PLACE_CREATE_REQUEST:
            return { loading: true };
        case PLACE_CREATE_SUCCESS:
            return { loading: false, placeInfo: action.playload };
        case PLACE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export const placeAssigneListReducer = (state = { places: [] }, action) => {
    switch (action.type) {
        case PLACE_LIST_REQUEST:
            return { loading: true, places: [] };
        case PLACE_LIST_SUCCESS:
            return {
                loading: false,
                places: action.payload,
            };
        case PLACE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

