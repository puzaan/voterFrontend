import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userListReducer} from './Reducers/UserLoginReducer'
import { adminLoginReducer } from './Reducers/AdminLoginReducer'
import { boothListReducer } from './Reducers/BoothsReducers'
import { voterListReducer, BoothVoterListReducer } from './Reducers/VoterReducer'
import { placeAssigneReducer, placeAssigneListReducer} from './Reducers/addPlaceReduicer'
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    adminLogin: adminLoginReducer,
    boothList: boothListReducer,
    voterList: voterListReducer,
    userList: userListReducer,
    addPlace: placeAssigneReducer,
    placeList: placeAssigneListReducer,
    boothVoter: BoothVoterListReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null;

const initialState = {
    adminLogin: {
        adminInfo: adminInfoFromStorage
    },
    userLogin: {
        userInfo: userInfoFromStorage,
    },
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)
export default store
