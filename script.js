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

    const errorMsgTransfer = (errorText) => {
        return error.innerHTML = `${errorText}`
    }

    const outputMsgTransfer = (outputText) => {
        return outputMsg.innerHTML = `${outputText}`
    }

    const calculateCurrency = () => {
        outputMsgClear();
        errorMsgClear();
        let result = ""
        switch (true) {
            case (startCurrency.value <= 0):
                return errorMsgTransfer("Wprowadzona kwota musi być wieksza niż 0");
            case (startCurrencySelector.value == endCurrencySelector.value):
                result = `${startCurrency.value} ${endCurrencySelector.value}`;
                break;
            case (startCurrencySelector.value == "PLN" && endCurrencySelector.value == "EUR"):
                result = `${startCurrency.value * 0.22} ${endCurrencySelector.value}`;
                break;
            case (startCurrencySelector.value == "PLN" && endCurrencySelector.value == "USD"):
                result = `${(startCurrency.value * 0.23).toFixed(2)} ${endCurrencySelector.value}`;
                break;
            case (startCurrencySelector.value == "EUR" && endCurrencySelector.value == "PLN"):
                result = `${(startCurrency.value * 4.65).toFixed(2)} ${endCurrencySelector.value}`;
                break;
            case (startCurrencySelector.value == "EUR" && endCurrencySelector.value == "USD"):
                result = `${(startCurrency.value * 1.06).toFixed(2)} ${endCurrencySelector.value}`;
                break;
            case (startCurrencySelector.value == "USD" && endCurrencySelector.value == "PLN"):
                result = `${(startCurrency.value * 4.38).toFixed(2)} ${endCurrencySelector.value}`;
                break;
            case (startCurrencySelector.value == "USD" && endCurrencySelector.value == "EUR"):
                result = `${(startCurrency.value * 0.94).toFixed(2)} ${endCurrencySelector.value}`;
                break;
        }
        return result;
    }

    const calculateCurrencyResult = () => {
        const calculatedResult = calculateCurrency();
        const txt = "Kwota po przeliczeniu wynosi: "
        return outputMsgTransfer(`${txt} ${calculatedResult}`);
    }

    const init = () => {
        startCurrency.addEventListener("input", () => {
            calculateCurrencyResult();
        });

        startCurrencySelector.addEventListener("change", () => {
            calculateCurrencyResult();
        });

        endCurrencySelector.addEventListener("change", () => {
            calculateCurrencyResult();
        });
    };
    init();
}