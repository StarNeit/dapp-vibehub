import { combineReducers } from 'redux';
import deploy from './deploy';
import test from './test';

export default combineReducers ({
    deploy,
    test
});