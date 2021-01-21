import {useDispatch as _useDispatch} from 'react-redux'

export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'currency/redux/actions/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'currency/redux/actions/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'currency/redux/actions/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => ({
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, payload: {amountOfBYN, amountOfCurrency}} as const)

export type ChangeAction = ReturnType<typeof ChangeActionAC>
export const ChangeActionAC = (isBuying: boolean) =>
    ({type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, payload: {isBuying}}as const)

export type ChangeCurrentCurrencyType = ReturnType<typeof changeCurrentCurrencyAC>
export const changeCurrentCurrencyAC = (currentCurrency: string) =>
    ({type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, payload: {currentCurrency}}as const)

//ActionsType
export type ActionsType = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType
export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: ActionsType) => dispatch(ac)
}