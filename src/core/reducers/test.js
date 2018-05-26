import constants from '../types';

const initialState = {
    test_data: '',
    err_test_data: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GETTESTDT_REQUEST:
            return {
                ...state
            }
        case constants.GETTESTDT_FAILED:
            return{
                ...state,
                err_test_data: action.payload
            }
        case constants.GETTESTDT_SUCCESS:
            return{
                test_data: action.payload,
                err_test_data: ''
            }
        default:
            return state;
    }
}