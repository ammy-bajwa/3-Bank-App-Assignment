
export default (state = [], action) => {
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
        case 'EDIT_ACCOUNT':
            return state.map((account) => {
                if (account.id === action.id) {
                    return {
                        ...account,
                        ...action.updates
                    };
                } else {
                    return account;
                }
                });
        default:
            return state;
    }

}