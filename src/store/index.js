import { createStore } from "redux";

const initialState = {
    count : 10,
    x:0
};

const reducer = (state = initialState, action) =>{
    console.log('reducer berjalan',action);
    return state;
}

const store = createStore(reducer);

export default store;