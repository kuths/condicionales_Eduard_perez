// Ejercicio 1
(function () {
  let botoncalcular = document.getElementById("botoncalcular");
  botoncalcular.addEventListener("click", btncalcular);

  function btncalcular() {
    let altura = document.getElementById("altura");
    let valaltura = parseFloat(altura.value) / 100;
    let peso = document.getElementById("peso");
    let valpeso = parseFloat(peso.value);

    let imc = valpeso / (valaltura * valaltura);
    document.getElementById(
      "resultado"
    ).textContent = `Tu IMC es: ${imc.toFixed(2)}`;
  }
})();

// Ejercicio 2

let conversionRate = 1 / 4100;

function convertirPesos() {
  let pesosInput = document.getElementById("pesos");
  let dolaresInput = document.getElementById("dolares");

  let pesos = parseFloat(pesosInput.value);

  if (!isNaN(pesos)) {
    let dolares = pesos * conversionRate;
    dolaresInput.value = dolares.toFixed(2);
  } else {
    dolaresInput.value = "";
  }
}

function convertirDolares() {
  let dolaresInput = document.getElementById("dolares");
  let pesosInput = document.getElementById("pesos");

  let dolares = parseFloat(dolaresInput.value);

  if (!isNaN(dolares)) {
    let pesos = dolares / conversionRate;
    pesosInput.value = pesos.toFixed(2);
  } else {
    pesosInput.value = "";
  }
}

