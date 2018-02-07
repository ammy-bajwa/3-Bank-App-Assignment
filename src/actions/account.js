import uuid from 'uuid';

//Add account
export const addAccount = ({
    name = '',
    password = '',
    amount = 0,
    type = ''
 } = {}) => ({
        type: 'ADD_ACCOUNT',
        account: {
            id: uuid(),
            name,
            password,
            amount,
            type
        }
    });
//Remove account
export const removeAccount = ( id ) => ({
    type: 'REMOVE_ACCOUNT',
    id
});
//Deposit Amount
export const depositAmount = ( id , depositAmount) => ({
    type: 'DEPOSIT_AMOUNT',
    id,
    depositAmount
});
//WithDraw Amount
export const withDrawAmount = ( id , withDrawAmount) => ({
    type: 'WITHDRAW_AMOUNT',
    id,
    withDrawAmount
});
//edit Account

export const editAccount = (id,updates) => ({
    type:'EDIT_ACCOUNT',
    id,
    updates
})