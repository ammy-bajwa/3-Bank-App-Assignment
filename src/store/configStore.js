import React from 'react';
import {createStore} from 'redux';
import accountReducer from '../reducers/accountReducer.js';

export default () => {
    const store = createStore(accountReducer);
    return store
}

