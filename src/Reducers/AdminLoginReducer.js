import { ADMIN_DETAILS_FAIL, ADMIN_DETAILS_REQUEST, ADMIN_DETAILS_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS } from "../Constants/adminConstants";


export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true };
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.playload };
        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case ADMIN_LOGOUT:
            return {};
        default:
            return state;
    }
}

export const adminRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADMIN_REGISTER_SUCCESS:
            return {
                loading: false, success: true, RegisterData: action.payload
            }
        case ADMIN_LOGIN_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state;
    }
}


export const adminDetailsReducer = (state = { ADMIN: {} }, action) => {
    switch (action.type) {
        case ADMIN_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ADMIN_DETAILS_SUCCESS:
            return { loading: false, admin: action.payload };
        case ADMIN_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};