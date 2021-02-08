const {createStore} = require("redux");

const initialState = {
    dataBlogs: [],
    name: 'prastowo'
}
//untuk mengirimkan value atau state(global)
//state adalah value state global
//default value initialState
const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlogs: action.payload
        }
    }
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'nugroho'
        }
    }
    return state;
}
const store = createStore(reducer);

export default store;