
import ls from "local-storage";
import {createSlice} from '@reduxjs/toolkit';


export const app = createSlice({
    name: 'app',
    initialState:{
        login: false || ls.get("authSession"),
        articles: [],
        username: null,
        tags: [],
        userDetails: {} 
    },
    reducers:{
        setLogin: (state,action)=>{
            state.login = action.payload;
        },
        setUserName: (state,action)=>{
            state.username = action.payload;    
        },
        setMyArticles: (state,action)=>{
            state.articles = action.payload;
        },
        setUnits: (state,action)=>{
            
            state.articles[action.payload.articleIndex].units = action.payload.units;
        },
        setTags: (state,action)=>{
            state.tags = action.payload;
        },
        setUserDetails: (state,action)=>{
            state.userDetails = action.payload;
        }
    }
});

export const {setLogin,setUserName,setMyArticles,setUnits,setTags,setUserDetails} = app.actions;
export default app.reducer;
