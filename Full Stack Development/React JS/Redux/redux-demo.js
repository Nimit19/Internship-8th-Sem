const redux = require('redux');


const counterReducer = (state = {counter: 0}, action) => {

    if(action.type === 'increment'){
        return { counter : state.counter + 1 };
    }

    if(action.type === 'decrement'){
        return { counter : state.counter - 1 }
    }

    return state;
}

const store = redux.createStore(counterReducer);

const CounterSubscriber = () => {
    const counterValue = store.getState();
    console.log(counterValue);
    
}

store.subscribe(CounterSubscriber);

store.dispatch({type : "increment"});
store.dispatch({type : "increment"});
store.dispatch({type : "increment"});
store.dispatch({type : "decrement"});