import React from 'react';
import {render} from 'react-dom';
import Counter from './Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {legacy_createStore as createStore} from 'redux'
import './index.css';

//declare initial state
const initialState = {
  count:0
};

/*declare action: action is a JS object that describes a change we want to make
and must have a 'type' property*/

//take previous state as argument and return new state

function reducer(state=initialState,action){
  console.log(action);
   switch (action.type){
      case 'INCREMENT':
        return {
        count:state.count+1
        };
      case 'DECREMENT':
        return{
          count:state.count-1
        };
      case 'RESET':
        return state;
      default:
        return state;
    };
};

//changes happen one way only: action->reducer->new state

const store = createStore(reducer);

const App= ()=>(
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />,document.getElementById('root'));

