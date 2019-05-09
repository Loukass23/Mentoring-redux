import { combineReducers } from 'redux'
import myObjectReducer from './myObjectReducer'


const rootReducer = combineReducers({
    myEntries: myObjectReducer,

});

export default rootReducer