var inches = document.getElementById("inches");
var centim = document.getElementById("centimeter");
inches.addEventListener("input", function () {
    var inchesV = parseFloat(inches.value);
    var result = inchesV * 2.54;
    centim.value = result;
    if (inchesV <= 0) {
        centim.value = 0;
    }
});
centim.addEventListener("input", function () {
    var centimV = parseFloat(centim.value);
    var result = centimV * 0.393701;
    inches.value = result.toFixed(6);
    if (centimV <= 0) {
        inches.value = 0;
    }
});
