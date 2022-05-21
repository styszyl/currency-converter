let startCurrency = document.getElementById("js-startCurrency");
let endCurrency = document.getElementById("js-endCurrency");
let startCurrencySelector = document.getElementById("js-startCurrencyOption");
let endCurrencySelector = document.getElementById("js-endCurrencyOption");
let outputMsg = document.getElementById("js-output");
let error = document.getElementById("js-error");

startCurrency.addEventListener("input", () => {
    outputMsg.innerHTML = "";
    outputMsg.classList.toggle("hidden", (startCurrency.value <= 0));
    error.innerHTML = "";
    error.classList.toggle("hidden", (startCurrency.value > 0));
    switch (true) {
        case (startCurrency.value <= 0):
            error.innerHTML = "Wprowadzona kwota musi być wieksza niż 0";
            break;
        case (startCurrencySelector.value == endCurrencySelector.value):
            outputMsg.innerHTML = `Kwota po przeliczeniu wynosi : ${startCurrency.value} ${endCurrencySelector.value}`;
            break;
        case (startCurrencySelector.value == "PLN" && endCurrencySelector.value == "EUR"):
            outputMsg.innerHTML = `Kwota po przeliczeniu wynosi : ${startCurrency.value * 0.22} ${endCurrencySelector.value}`;
            break;
        case (startCurrencySelector.value == "PLN" && endCurrencySelector.value == "USD"):
            outputMsg.innerHTML = `Kwota po przeliczeniu wynosi : ${(startCurrency.value * 0.23).toFixed(2)} ${endCurrencySelector.value}`;
            break;
        case (startCurrencySelector.value == "EUR" && endCurrencySelector.value == "PLN"):
            outputMsg.innerHTML = `Kwota po przeliczeniu wynosi : ${(startCurrency.value * 4.65).toFixed(2)} ${endCurrencySelector.value}`;
            break;
        case (startCurrencySelector.value == "EUR" && endCurrencySelector.value == "USD"):
            outputMsg.innerHTML = `Kwota po przeliczeniu wynosi : ${(startCurrency.value * 1.06).toFixed(2)} ${endCurrencySelector.value}`;
            break;
        case (startCurrencySelector.value == "USD" && endCurrencySelector.value == "PLN"):
            outputMsg.innerHTML = `Kwota po przeliczeniu wynosi : ${(startCurrency.value * 4.38).toFixed(2)} ${endCurrencySelector.value}`;
            break;
        case (startCurrencySelector.value == "USD" && endCurrencySelector.value == "EUR"):
            outputMsg.innerHTML = `Kwota po przeliczeniu wynosi : ${(startCurrency.value * 0.94).toFixed(2)} ${endCurrencySelector.value}`;
            break;
    }
});