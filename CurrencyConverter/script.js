const API_KEY = "fca_live_CyTiLH2aOEp6Ail4xFKrK57knMtDaaKwa4w5MXfb";

async function convertCurrency() {

    const amount = document.getElementById("amount").value;

    const fromCurrency = document.getElementById("from").value;

    const toCurrency = document.getElementById("to").value;

    const CURRENCY_API = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${fromCurrency}`;

    const response = await fetch(CURRENCY_API);

    const data = await response.json();

    console.log(data);

    const rate = data.data[toCurrency];

    const convertedAmount = amount * rate;

    document.getElementById("result").innerText =
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}