function calculate() {
    var sideLength = ""

    var sideLengthInput = document.getElementById('sideLength').value;
    var sideLength = parseFloat(sideLengthInput);
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    if (!Number.isInteger(sideLength)) {
        area = area.toFixed(2);
        perimeter = perimeter.toFixed(2);
    }


    if (isNaN(sideLength) || sideLength <= 0) {
      alert("Masukkan nilai sisi yang valid");
      return;
    }
  
    var resultHTML = "<h3>Hasil Perhitungan:</h3>";
    resultHTML += `<p><u>Luas Persegi :</u><br>${sideLength} x ${sideLength} = <b>${area}</b></p>`;
    resultHTML += `<p><u>Keliling Persegi :</u><br>${sideLength} x 4 = <b>${perimeter}</b></p>`;
  
    document.getElementById('result').innerHTML = resultHTML;
  }
  
function resetForm() {
  document.getElementById('squareForm').reset();
  document.getElementById('result').innerHTML = "";
}