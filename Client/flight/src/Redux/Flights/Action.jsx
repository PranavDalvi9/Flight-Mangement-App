
export const FLIGHT_ADD_LOADING = "FLIGHT_ADD_LOADING";
export const FLIGHT_ADD_SUCCESS = "FLIGHT_ADD_SUCCESS";
export const FLIGHT_ADD_FAILURE = "FLIGHT_ADD_FAILURE";


export const flightAddLoading = () => ({
  type: FLIGHT_ADD_LOADING
});

export const flightAddSuccess = (payload) => ({
  type: FLIGHT_ADD_SUCCESS,
  payload
});

export const flightAddFailure = () => ({
  type: FLIGHT_ADD_FAILURE
})



export const postFlight = (data) => (dispatch) => {
  // const dispatch = useDispatch();

  dispatch(flightAddLoading())
  fetch("http://localhost:8080/Flights", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => dispatch(flightAddSuccess(res.data)))
    .catch((err) => dispatch(flightAddFailure()))
}

