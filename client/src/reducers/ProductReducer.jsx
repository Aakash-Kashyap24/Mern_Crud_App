import {
    ADD_DATA_REQUEST,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAIL,
    DELETE_DATA_REQUEST,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAIL,
    UPDATE_DATA_REQUEST,
    UPDATE_DATA_SUCCESS,
    UPDATE_DATA_FAIL,
    GET_ALL_DATA_REQUEST,
    GET_ALL_DATA_SUCCESS,
    GET_ALL_DATA_FAIL,
    SEND_DATA_REQUEST,
    SEND_DATA_SUCCESS,
    SEND_DATA_FAIL,
    CLEAR_ERRORS,
} from '../constants/ProductConstants.jsx';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA_REQUEST:
        case DELETE_DATA_REQUEST:
        case UPDATE_DATA_REQUEST:
        case GET_ALL_DATA_REQUEST:
        case SEND_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: false,
            };
        case ADD_DATA_FAIL:
        case DELETE_DATA_FAIL:
        case UPDATE_DATA_FAIL:
        case GET_ALL_DATA_FAIL:
        case SEND_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload),
                loading: false,
            };
        case UPDATE_DATA_SUCCESS:
            return {
                ...state,
                data: state.data.map((item) =>
                    item.id === action.payload.id ? action.payload.data : item
                ),
                loading: false,
            };
        case GET_ALL_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case SEND_DATA_SUCCESS:
            // Handle success logic for sending data
            return {
                ...state,
                loading: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                loading:false,
                error: null,
            };
        default:
            return state;
    }
};

export default DataReducer;
