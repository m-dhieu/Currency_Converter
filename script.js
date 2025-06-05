/*
Currency Converter Script:
Define currencies
Create condition to facilitate conversion of one currency to another
*/

const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convert-btn').addEventListener('click', function(event) {
        event.preventDefault();
        const from = document.getElementById('currency-from').value;
        const to = document.getElementById('currency-to').value;
        const amount = parseFloat(document.getElementById('amount').value);

        const resultCell = document.getElementById('conversion-result');

        if (!amount || amount < 0) {
            resultCell.textContent = "Please enter a valid amount.";
            return;
        }
        if (currencies[from] && currencies[to]) {
            const conv = (amount * currencies[to]) / currencies[from];
            resultCell.textContent = `${amount} ${from} = ${conv.toFixed(2)} ${to}`;
        } else {
            resultCell.textContent = "Currency not found!";
        }
    });
});
