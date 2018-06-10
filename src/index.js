import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store'
import bandReducer from './reducers/band_reducer'
import BandInputComponent from './components/band_input_component'

function render(){
  const store = createStore(reducer)
  ReactDOM.render(<BandInputComponent store = {store}/>, document.getElementById('container'))
}
