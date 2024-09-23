import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from './counterSlice'
import userReducer from './userSlice'

// console.log(counterReducer)

const store = configureStore({

    reducer:{
       user : userReducer

    }

})

console.log(store);

export default store
