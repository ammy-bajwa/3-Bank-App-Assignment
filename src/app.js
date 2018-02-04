import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './router/AppRoutes';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import { addAccount } from './actions/account';

const store = configureStore()
store.dispatch(addAccount({name:'Amir Ali',amount:234}));
// store.dispatch(addAccount({name:'Talha Ali'}));


const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));
