import React from 'react'

type CurrencyExchangePropsType = {
    currenciesName: string[];
    currentCurrency: string;
    currencyRate: number;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
    changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
    changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};

export const CurrencyExchange: React.FC<CurrencyExchangePropsType> = (props) => {
    let {
        currenciesName, currentCurrency, currencyRate, isBuying, amountOfBYN, amountOfCurrency, changeCurrencyField,
        changeAction, changeCurrentCurrency
    } = props

    const viewCurrency = isBuying ? (
        <>
            <label>
                You give the next amount of BYN:
                <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label>
            <label>
                You get the next amount of {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
        </>

    ) : (
        <>
            <label>
                You give the next amount of {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
            <label>
                You get the next amount of BYN:
                <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label>
        </>
    )

    return (
        <div className="currency">
            <h2>Currency exchange</h2>
            <div className="currency-names">
                <p>Current currency:</p>
                <ul>
                    {currenciesName.map((currency: string, index: number) => {
                        return (
                            <li
                                key={`${index}-${currency}`}
                                className={`currencies ${currentCurrency === currency ? 'activeCurrency' : null}`}
                                onClick={changeCurrentCurrency}
                                data-currency={currency}
                            >
                                {currency}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="currency-action">
        <span className={isBuying ? 'active' : ''} data-action="buy" onClick={changeAction}>
          Buy
        </span>
                <span className={isBuying ? '' : 'active'} data-action="sell" onClick={changeAction}>
          Sell
        </span>
            </div>
            <div className="fields">
                <p>Currency rate: {currencyRate}</p>
                {viewCurrency}
            </div>
        </div>
    )
}