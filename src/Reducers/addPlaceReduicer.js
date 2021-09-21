import { PLACE_CREATE_FAIL, PLACE_CREATE_REQUEST, PLACE_CREATE_SUCCESS } from "../Constants/addPlaceConstants";

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