import axios from "axios";

export const ADD_AIRPORT = "ADD_AIRPORT";
export const ADD_AIRPORT_LOADING = "ADD_AIRPORT_LOADING";
export const ADD_AIRPORT_ERROR = "ADD_AIRPORT_ERROR";

export const addAirport = (payload) => ({
    type: ADD_AIRPORT,
    payload
})

export const addAirportLoading = () => ({
    type: ADD_AIRPORT_LOADING
})

export const addAirportError = () => ({
    type: ADD_AIRPORT_ERROR
    
})


export const getAirportData = () => (dispatch) => {
        dispatch(addAirportLoading())
    fetch('http://localhost:8080/Airports')
    .then((res) => res.json())
    .then((res) =>dispatch(addAirport(res)))
    .catch((err)=> dispatch(addAirportError()))
    // .then(() => reduxDispatch())
}

export const postAirportData = (dataa) => (dispatch) => {
    dispatch(addAirportLoading())
// fetch('http://localhost:8080/Airports')
// .then((res) => res.json())
// .then((res) =>dispatch(addAirport(res)))
// .catch((err)=> dispatch(addAirportError()))
// .then(() => reduxDispatch())


axios.post("http://localhost:8080/Airports", {dataa}).then((res) =>dispatch(addAirport(res.data))).catch((err)=> dispatch(addAirportError()))
}