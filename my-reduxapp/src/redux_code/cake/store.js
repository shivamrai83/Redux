import {createStore} from 'redux'
import {CakeReducer, IcecreamReducer} from './cakeReducers'

import {combineReducers} from 'redux'

const rootReducer=combineReducers({
cake:CakeReducer,
icecream:IcecreamReducer
})
const store = createStore(rootReducer);
console.log(store.getState())
export default store;