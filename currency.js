document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('form').onsubmit = function () {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_myS7b2P2JXDlYFRf8IUkvCZIReMJubCdu0XawUHu')
        .then(response => response.json())
        .then(rates => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = rates.data[currency];
            if (rate !== undefined) {
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            } else {
                document.querySelector('#result').innerHTML = 'Invalid currency.';
            }

        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false
    }


});