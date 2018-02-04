import React from 'react';
import { createStore } from 'redux';
import uuid from 'uuid';

//Add account
const addAccount = ({
    name = '',
    password = '',
    amount = 0
 } = {}) => ({
        type: 'ADD_ACCOUNT',
        account: {
            id: uuid(),
            name,
            password,
            amount
        }
    });
//Remove account
const removeAccount = ({ id } = {}) => ({
    type: 'REMOVE_ACCOUNT',
    id
});
//Deposit Amount
const depositAmount = ({ id } = {}, depositAmount) => ({
    type: 'DEPOSIT_AMOUNT',
    id,
    depositAmount
});
//WithDraw Amount
const withDrawAmount = ({ id } = {}, withDraeAmount) => ({
    type: 'WITHDRAW_AMOUNT',
    id,
    withDraeAmount
});
const store = createStore((state = [], action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return [
                ...state,
                action.account
            ];
        case 'REMOVE_ACCOUNT':
            return state.filter(({ id }) => id !== action.id);
        case 'DEPOSIT_AMOUNT':
            return state.map((account) => {
                if (account.id == action.id)
                    return {
                        ...account,
                        amount: account.amount + action.depositAmount
                    };
                else {
                    return account;
                };
            });
        case 'WITHDRAW_AMOUNT':
            return state.map((account) => {
                if (account.id == action.id) {
                    return {
                        ...account,
                        amount: account.amount - action.withDraeAmount
                    }
                }
                else {
                    return account
                }
            });


    }

});

const accountOne = store.dispatch(addAccount({
    name: 'Amir',
    password: '',
    amount: 4000
}));
const accountTwo = store.dispatch(addAccount({
    name: 'Ali',
    password: '',
    amount: 6000
}));
store.dispatch(depositAmount({ id: accountTwo.account.id }, 23))
store.dispatch(withDrawAmount({ id: accountOne.account.id }, 23))


console.log(store.getState());

