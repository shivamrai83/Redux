import {createStore, applyMiddleware} from 'redux'
import {CakeReducer, IcecreamReducer} from './cakeReducers'
import logger from 'react-logger'
import {combineReducers} from 'redux'

const rootReducer=combineReducers({
cake:CakeReducer,
icecream:IcecreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log(store.getState())
export default store;