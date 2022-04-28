
export const FLIGHT_ADD_LOADING = "FLIGHT_ADD_LOADING";
export const FLIGHT_ADD_SUCCESS = "FLIGHT_ADD_SUCCESS";
export const FLIGHT_ADD_FAILURE = "FLIGHT_ADD_FAILURE";
// export const FLIGHT_GET = "FLIGHT_GET";
// export const LOGOUT = "LOGOUT"
 
export const flightAddLoading = () => ({
    type : FLIGHT_ADD_LOADING
});

export const flightAddSuccess = (payload) => ({
    type : FLIGHT_ADD_SUCCESS,
    payload
});

export const flightAddFailure =() => ({
    type: FLIGHT_ADD_FAILURE
})

// export const logout = () => ({
  // type : LOGOUT
// })

export const login = ({username, password}) => (dispatch)=> {
    // const dispatch = useDispatch();

    dispatch(loginLoading())
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify({username,password}),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => dispatch(loginSuccess({username,token:res.token})))
    .catch((err) => dispatch(loginFailure()))
}

