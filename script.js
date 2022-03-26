let logs = document.getElementById("logs");
let meters = document.getElementById("meters");
let feet = document.getElementById("feet");
let feetCal = document.getElementById("feetCal");
let metersCal = document.getElementById("metersCal")
let liters = document.getElementById("liters");
let gallonsCal = document.getElementById("gallonsCal");
let gallons = document.getElementById("gallons");
let litersCal = document.getElementById("litersCal");
let kilos = document.getElementById("kilos");
let kilosCal = document.getElementById("kilosCal");
let pounds = document.getElementById("pounds");
let poundsCal = document.getElementById("poundsCal")
logs.addEventListener("keyup", loggy);

function loggy(){
    meters.textContent = logs.value;
    feet.textContent = logs.value;
    feetCalc = logs.value * 3.281;
    feetCal.textContent = feetCalc.toFixed(3);
    metersCalc = logs.value / 3.281;
    metersCal.textContent = metersCalc.toFixed(3);
    liters.textContent = logs.value;
    gallons.textContent = logs.value;
    gallonsCalc = logs.value / 3.785;
    gallonsCal.textContent = gallonsCalc.toFixed(3);
    litersCalc = logs.value * 3.785;
    litersCal.textContent = litersCalc.toFixed(3);
    kilos.textContent = logs.value;
    poundsCalc = logs.value * 2.205;
    poundsCal.textContent = poundsCalc.toFixed(3);
    pounds.textContent = logs.value;
    kilosCalc = logs.value / 2.205;
    kilosCal.textContent = kilosCalc.toFixed(3);
}
