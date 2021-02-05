import React from 'react'
import { combineReducers, createStore } from 'redux'
//import { reducer as formReducer } from 'redux-form'
import layersReducer from './layersReducer'


let reducers = combineReducers({
    layersList: layersReducer,
    //form: formReducer
})

let store = createStore(reducers)

window.store = store

export default store;

