function convert() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}
