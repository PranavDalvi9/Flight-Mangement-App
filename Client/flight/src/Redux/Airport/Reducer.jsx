import {ADD_AIRPORT, ADD_AIRPORT_LOADING, ADD_AIRPORT_ERROR } from "./Actions"

const initState = {
    loading : false,
    error: false,
    airports: []
};

export const airportReducer = (store = initState, {type , payload}) => {
    // console.log(store)
    switch (type){
        case ADD_AIRPORT_LOADING: 
        return{...store, loading: true};

        case ADD_AIRPORT:
            return{...store, loading:false, airports: [...payload], error:false};

        case ADD_AIRPORT_ERROR:
            return{...store, loading:false, error:true, todos:[]};

        default :
        return store;   
    }
}