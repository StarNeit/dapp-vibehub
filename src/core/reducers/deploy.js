import constants from '../types';

const initialState = {
    deploy_bot: 0,
    err_deploy_bot: '',

    dbots: [],
    err_get_dbots: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.DEPLOYBOT_REQUEST:
            return {
                ...state
            }
        case constants.DEPLOYBOT_SUCCESS:
            return{
                ...state,
                deploy_bot: 1,
                err_deploy_bot: ''
            }
        case constants.DEPLOYBOT_FAILED:
            return{
                ...state,
                deploy_bot: -1,
                err_deploy_bot: action.payload
            }

        case constants.GETBOTLIST_REQUEST:
            return {
                ...state
            }
        case constants.GETBOTLIST_SUCCESS:
            return{
                ...state,
                dbots: action.payload,
                err_get_dbots: ''
            }
        case constants.GETBOTLIST_FAILED:
            return{
                ...state,
                dbots: [],
                err_get_dbots: action.payload
            }
        default:
            return state;
    }
}