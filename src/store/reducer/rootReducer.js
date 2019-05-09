import { combineReducers } from 'redux'
import myObjectReducer from './myObjectReducer'
import beerReducer from './beerReducer'


const rootReducer = combineReducers({
    myEntries: myObjectReducer,
    beers: beerReducer

});

export default rootReducer