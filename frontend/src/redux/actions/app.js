import * as actions from '../actionTypes';

export const setUserName=(username)=>{
    return {
        type:actions.SET_USER_NAME,
        payload:{
            username:username
        }
    }
}
export const setLogin=(login)=>{
    return {
        type:actions.SET_LOGIN,
        payload:{
            login:login
        }
    }
}
export const setArticles=(articles)=>{
    return {
        type:actions.SET_MY_ARTICLES,
        payload:{
            articles: articles
        }
    }
}
export const setTags=(tags)=>{
    return {
        type:actions.SET_TAGS,
        payload:{
            tags:tags
        } 
    }
}
export const setUserDetails=(userDetails)=>{
    return {
        type:actions.SET_USER_DETAILS,
        payload:{
            userDetails:userDetails
        }
    }
}