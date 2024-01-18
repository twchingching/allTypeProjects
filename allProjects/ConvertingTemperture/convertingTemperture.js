function convertingToCelcus () {
    const inputValue = document.getElementById("inputFahrenheit").value;
    let totalCelciusDegrees = (inputValue - 32) * 5/9 + " °C";
    document.getElementById("displayCelcius").innerHTML = Math.trunc(parseFloat(totalCelciusDegrees));
}

function convertingToFahrenheit () {
    const inputValue = document.getElementById("inputCelcius").value;
    let totalFahrenheitDegrees = ((inputValue * 9/5) + 32) + " °F";
    document.getElementById("displayFahrenheit").innerHTML = Math.trunc(parseFloat(totalFahrenheitDegrees));

}