import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import ActionRedux from '../components/Chatbox/ActionRedux';


const reducers = combineReducers({
    action: ActionRedux,

});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
});