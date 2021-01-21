import {combineReducers, createStore, Store} from 'redux'
import {currencyReducer} from './currencyReducer'

const reducers = combineReducers({
    currency: currencyReducer,
})
export type GlobalStateType = ReturnType<typeof reducers>;

export const store: Store = createStore(reducers)
