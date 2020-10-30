import { DashboardData } from "../DataJson/Dashboard";
import { LoginData } from "../DataJson/Login";
import { LOGIN } from "./Actions";
const initialState = {
    loginData: LoginData,
    DashboardData : DashboardData
}
export const reducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN : 
            return {...state, loginData:{...state.loginData, isLoggedIn:!state.loginData.isLoggedIn}}
        default :
            return state
    }
}