import {configureStore} from '@reduxjs/toolkit'

//reducers
import appReducer from './reducers/app';

const store = configureStore({
    reducer:{
        app: appReducer
    }
});

export default store;