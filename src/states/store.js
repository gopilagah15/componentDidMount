import { configureStore } from "@reduxjs/toolkit";

import incdecR from './reducers/index.js';

export default configureStore({
    reducer:{
        number: incdecR
    }
})

