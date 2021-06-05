{
    const calculateExchange = (payment, currency) => {
        const rateEURO = 4.55
        const rateUSD = 3.74


        switch (currency) {
            case "euro":
                return exchange = payment / rateEURO

            case "USD":
                return exchange = payment / rateUSD

        }
    };

    const updateExchangeText = (payment, exchange, currency) => {
        const exchangeElement = document.querySelector(".js-exchange");
        exchangeElement.innerHTML = `${payment.toFixed(2)} PLN =  ${exchange.toFixed(2)} ${currency} `;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();


        const paymentElement = document.querySelector(".js-payment");
        const currencyElement = document.querySelector(".js-currency");


        const payment = +paymentElement.value;
        const currency = currencyElement.value;

        const exchange = calculateExchange(payment, currency);

        updateExchangeText(payment, exchange, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    };

    init();
}