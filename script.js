{
    const startCurrency = document.getElementById("js-startCurrency");
    const outputMsg = document.getElementById("js-output");
    const error = document.getElementById("js-error");
    const startCurrencySelector = document.getElementById("js-startCurrencyOption");
    const endCurrencySelector = document.getElementById("js-endCurrencyOption");

    const outputMsgClear = () => {
        outputMsg.innerHTML = "";
        outputMsg.classList.toggle("hidden", (startCurrency.value <= 0));
    }
    const errorMsgClear = () => {
        error.innerHTML = "";
        error.classList.toggle("hidden", (startCurrency.value > 0));
    }

    const calculateCurrency = () => {
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
    }
    startCurrency.addEventListener("input", () => {
        outputMsgClear();
        errorMsgClear();
        calculateCurrency();
    });

    startCurrencySelector.addEventListener("change", () => {
        outputMsgClear();
        errorMsgClear();
        calculateCurrency(); 
    });

    endCurrencySelector.addEventListener("change", () => {
        outputMsgClear();
        errorMsgClear();
        calculateCurrency(); 
    });

}