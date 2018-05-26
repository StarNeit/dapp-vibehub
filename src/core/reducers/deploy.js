import constants from '../types';

const initialState = {
    deploy_bot: [],
    err_deploy_bot: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.DEPLOYBOT_REQUEST:
            return {
                ...state
            }
        case constants.DEPLOYBOT_FAILED:
            return{
                ...state,
                deploy_bot: action.payload,
                err_deploy_bot: ''
            }
        case constants.DEPLOYBOT_SUCCESS:
            return{
                ...state,
                deploy_bot: [],
                err_deploy_bot: action.payload
            }
        default:
            return state;
    }
}