
import ls from "local-storage";
import * as actions from '../actionTypes';

const appState = {
    login: false || ls.get("authSession"),
    articles: [],
    username: null,
    tags: [],
    userDetails: {} 
};

export default function(state=appState,action){
    switch(action.type){
        case actions.SET_LOGIN:{
            return {
                ...state,
                login: action.payload.login
            }
        }
        case actions.SET_USER_NAME:{
            return {
                ...state,
                username: action.payload.username
            }
        }
        case actions.SET_MY_ARTICLES:{
            return {
                ...state,
                articles: action.payload.articles
            }
        }
        case actions.SET_TAGS:{
            return {
                ...state,
                tags: action.payload.tags
            }
        }
        case actions.SET_USER_DETAILS:{
            return {
                ...state,
                userDetails: action.payload.user_details
            }
        }
        default:
            return state;
    }
}