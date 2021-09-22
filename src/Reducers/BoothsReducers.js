import { BOOTHS_CREATE_FAIL, BOOTHS_CREATE_REQUEST, BOOTHS_CREATE_SUCCESS, BOOTHS_LIST_FAIL, BOOTHS_LIST_REQUEST, BOOTHS_LIST_SUCCESS, BOOTH_DETAILS_FAIL, BOOTH_DETAILS_REQUEST, BOOTH_DETAILS_SUCCESS } from "../Constants/BoothConstants";

export const boothListReducer = (state = { booths: [] }, action) => {
    switch (action.type) {
        case BOOTHS_LIST_REQUEST:
            return {  loading: true, booths: [] };
        case BOOTHS_LIST_SUCCESS:
            return {
                loading: false,
                booths: action.payload,
            };
        case BOOTHS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// export const boothCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//         case BOOTHS_CREATE_REQUEST:
//             return { loading: true };
//         case BOOTHS_CREATE_SUCCESS:
//             return { loading: false, success: true, booth: action.payload };
//         case BOOTHS_CREATE_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };


//product: { reviews: [] }

export const boothDetailsReducer = (state = { dataCol: { voter: [] } }, action) => {
    switch (action.type) {
        case BOOTH_DETAILS_REQUEST:
            return { ...state, loading: true };
        case BOOTH_DETAILS_SUCCESS:
            return { loading: false, dataCol: action.payload };
        case BOOTH_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};