import constants from '../types';
import api from '../api';
import { push } from 'react-router-redux';

export const getTestData = userId => dispatch => {

    dispatch({
        type: constants.GETTESTDT_REQUEST
    });
    api.test.getData2().then(test => {
        dispatch({
            type: constants.GETTESTDT_SUCCESS,
            payload: test.data,
        });
    })
        .catch(error => {
            console.log(error.response.data.errors);
            dispatch({
                type: constants.GETTESTDT_FAILED,
                payload: error.response.data.errors
            });
        });
};