import {createAction} from 'redux-actions';
import * as types from '../constants/ActionTypes';
import config from '../constants/Config.js';

export const Load = createAction(types.LOAD, {});