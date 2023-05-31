import axios from "axios";
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

// Add new data
export const addData = (newData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_DATA_REQUEST });

        const response = await axios.post("api/v1/data", newData);

        dispatch({
            type: ADD_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({
            type: ADD_DATA_FAIL,
            payload: errorMessage,
        });
    }
};

// Get all data
export const getAllData = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_DATA_REQUEST });

        const response = await axios.get("api/v1/data");

        dispatch({
            type: GET_ALL_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({
            type: GET_ALL_DATA_FAIL,
            payload: errorMessage,
        });
    }
};

// Get data by ID

// Update data by ID
export const updateDataById = (Id, updatedData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_DATA_REQUEST });

        const response = await axios.put(`api/v1/data/${Id}`, updatedData);

        dispatch({
            type: UPDATE_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({
            type: UPDATE_DATA_FAIL,
            payload: errorMessage,
        });
    }
};

// Delete data by ID
export const deleteDataById = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_DATA_REQUEST });


        const response = await axios.delete(`api/v1/data/${id}`);

        dispatch({
            type: DELETE_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({
            type: DELETE_DATA_FAIL,
            payload: errorMessage,
        });
    }
};


// Send data by email
export const sendDataByEmail = (itemData) => async (dispatch) => {
    try {
        dispatch({ type: SEND_DATA_REQUEST });
        console.log("itemData", itemData)

        const response = await axios.post("api/v1/data/send-email", {itemData });

        dispatch({
            type: SEND_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({
            type: SEND_DATA_FAIL,
            payload: errorMessage,
        });
    }
};


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,

    });
}