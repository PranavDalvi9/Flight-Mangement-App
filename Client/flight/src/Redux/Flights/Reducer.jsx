import { FLIGHT_ADD_LOADING, FLIGHT_ADD_SUCCESS, FLIGHT_ADD_FAILURE } from "./Action"

const initState = {
    error: false,
    loading: false,
    data: []
};

export const flightReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case FLIGHT_ADD_LOADING:
            return { ...store, loading: true };

        case FLIGHT_ADD_SUCCESS:
            return {
                ...store,
                error: false,
                loading: false,
                data: [...store.data, payload]
            };

        case FLIGHT_ADD_FAILURE:
            return {
                ...initState
            }

        default:
            return store
    }
}