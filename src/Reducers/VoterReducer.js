import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_RESET, USER_LIST_SUCCESS } from "../Constants/LogInConstants";
import { VOTER_LIST_FAIL, VOTER_LIST_REQUEST, VOTER_LIST_SUCCESS } from "../Constants/voterConstants";

export const voterListReducer = (state = { voters: [] }, action) => {
    switch (action.type) {
        case VOTER_LIST_REQUEST:
            return {...state, loading: true, voters: [] };
        case VOTER_LIST_SUCCESS:
            return {
                loading: false,
                voters: action.payload,
            };
        case VOTER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// export const userListReducer = (state = { users: [] }, action) => {
//     switch (action.type) {
//         case USER_LIST_REQUEST:
//             return { ...state, loading: true };
//         case USER_LIST_SUCCESS:
//             return { loading: false, user: action.payload };
//         case USER_LIST_FAIL:
//             return { loading: false, error: action.payload };
//         case USER_LIST_RESET:
//             return { users: [] };

//         default:
//             return state;
//     }
// };