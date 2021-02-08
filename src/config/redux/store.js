const {createStore} = require("redux");

const initialState = {
    dataBlog: [],
    name: 'prastowo'
}
//untuk mengirimkan value atau state(global)
//state adalah value state global
//default value initialState
const reducer = (state = initialState, action) => {
    return state;
}
const store = createStore(reducer);

export default store;