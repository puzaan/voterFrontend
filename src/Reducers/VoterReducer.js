import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_RESET, USER_LIST_SUCCESS } from "../Constants/LogInConstants";
import { BOOTH_VOTER_LIST_FAIL, BOOTH_VOTER_LIST_REQUEST, BOOTH_VOTER_LIST_SUCCESS, VOTER_LIST_FAIL, VOTER_LIST_REQUEST, VOTER_LIST_SUCCESS } from "../Constants/voterConstants";

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

export const BoothVoterListReducer = (state = { boothVoter: [] }, action) => {
    switch (action.type) {
        case BOOTH_VOTER_LIST_REQUEST:
            return { ...state, loading: true, boothVoter: [] };
        case BOOTH_VOTER_LIST_SUCCESS:
            return {
                loading: false,
                boothVoter: action.payload,
            };
        case BOOTH_VOTER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

