const initialState = {
    name: 'prastowo'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'nugroho'
        }
    }
    return state;
}

export default globalReducer;