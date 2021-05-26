let formElement = document.querySelector(".js-form");
let paymentElement = document.querySelector(".js-payment");
let currencyElement = document.querySelector(".js-currency");
let exchangeElement = document.querySelector(".js-exchange");


let rateEURO = 4.55
let rateUSD = 3.74

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let payment = +paymentElement.value;
    let currency = currencyElement.value;

    let exchange;

    switch (currency) {
        case "euro":
            exchange = payment / rateEURO
            break;
        case "USD":
            exchange = payment /rateUSD
            break;

    }
    exchangeElement.innerHTML = `${payment.toFixed(2)} PLN =  ${exchange.toFixed(2)} ${currency} `;





});