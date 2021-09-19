import { BOOTHS_CREATE_FAIL, BOOTHS_CREATE_REQUEST, BOOTHS_CREATE_SUCCESS, BOOTHS_LIST_FAIL, BOOTHS_LIST_REQUEST, BOOTHS_LIST_SUCCESS } from "../Constants/BoothConstants";

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