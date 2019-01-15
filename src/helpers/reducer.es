// @flow

import common from 'modules/common/ducks/index.es';
import example from 'modules/example/ducks/index.es';
import {combineReducers} from 'redux';

const reducers = {
    common,
    example,
};

export type TReducers = typeof reducers;

export default combineReducers(reducers);
