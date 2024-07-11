let num = 20
let num1 = 30
if (num <= num1) {
    console.log(true);
}else{
    console.log(false);
}

let num2 = 10
let num3 = 10
if (num2 == num3) {
    console.log("iguales");
}else{
    console.log("diferente");
}

let num4 = 35
let num5 = 30

if (num4 > num5) {
    console.log(num4);
}
if (num5 > num4) {
    console.log(num5);
}
if (num4 == num5) {
    console.log("iguales");
}

let num6 = 6
let num7 = 15
let num8 = 10

if (num6 < num7 & num6 < num8) {
    console.log(num6);
}

if (num7 < num6 & num7 < num8) {
    console.log(num7);
}

if (num8 < num7 & num8 < num6) {
    console.log(num8);
}

let persona1 = {
    nombre: "Eduard",
    edad: 30,
    altura: 185
}
let persona2 = {
    nombre: "Juan",
    edad: 35,
    altura: 180
}

if (persona1.altura < persona2.altura) {
    console.log("Eduard es mas alto");
}else{
    console.log("juan es mas alto");
}

if (persona1.edad < persona2.edad ) {
    console.log("Eduard es mas viejo");
}else{
    console.log("juan es mas viejo");
}

let nombre1 = prompt("ingrese nombre")
let edad1 = prompt("ingrese edad")
let altura1 = prompt("ingrese altura")
let vision1 = prompt("ingrese vision")

if (edad1 >= 18 & altura1 >= 150 & vision1 >=8) {
    console.log("aprobado"+nombre1);
} else(
    console.log("no aprueba"+nombre1)
)


let nombre2 = prompt("ingrese nombre")
let pase = prompt("vip o normal")
let entrada = prompt("entrada si o no")

if (nombre2 === "Eduard" || pase === "vip") {
 console.log("Bienvenido" + nombre2)
} else if (entrada = true) {
    let usarentrada = confirm("desea utilizar entrada?")
    if (usarentrada == true) {
        console.log("Bienvenido" + nombre2)
    }
} else{
    let comprarEntrada = confirm("desea comprar entrada")
    if (comprarEntrada == true) {
        let dinero = prompt("ingrese dinero disponible")
        if (dinero >= 1000) {
            console.log("Bienvenido" + nombre2)
        }else {
            console.log("no cuentas con el dinero suficiente")
        }
    }
    else{
        console.log("hasta luego")
    }
}


let numeroIncognita = prompt("adivida el numero 1 al 10")

if (numeroIncognita === 8) {
    console.log("ganaste")
    let segundoIntento = prompt("segundo intento")
    if (segundoIntento === 8) {
    console.log("ganaste")    
    }
    let tercerIntento = prompt("ultimo intento")
    if (tercerIntento === 8) {
        console.log("ganaste")
    }
    else{
        console.log("suerte parra la proxima")
    }
}


const numeroAdivinar = 7
let numeroIngresado = parseInt(prompt("Ingresa un numero de 1 a 10"))

if(numeroIngresado > numeroAdivinar){
    alert("El número que ingresaste es mayor que el numero correcto")
    numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10: "))
    if(numeroIngresado > numeroAdivinar){
        alert("El número que ingresaste es mayor que el numero correcto")
        numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10: "))
        if(numeroIngresado == numeroAdivinar){
            alert("Ganaste, adivinaste el número correcto")
        }else{
            alert("Fallaste")
        }
    }else if(numeroIngresado < numeroAdivinar){
        alert("El número que ingresaste es menor que el numero correcto")
        numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10: "))
    } if(numeroIngresado == numeroAdivinar){
        alert("Ganaste, adivinaste el número")
    }else{
        alert("Fallaste")
   
    }
    
}else if(numeroIngresado < numeroAdivinar && (numeroIngresado >0)){

    alert("El número que ingresaste es menor que el numero correcto")
    numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10: "))
    if(numeroIngresado > numeroAdivinar){
        alert("El número que ingresaste es mayor que el numero correcto")
        numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10: "))
        if(numeroIngresado == numeroAdivinar){
            alert("Ganaste, adivinaste el número correcto")
        }else{
            alert("Fallaste")
        }
    }else if(numeroIngresado < numeroAdivinar){
        alert("El número que ingresaste es menor que el numero correcto")
        numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10: "))
    } if(numeroIngresado == numeroAdivinar){
        alert("Ganaste, adivinaste el número")
    }else{
        alert("Fallaste")
   
    }
}else {
    alert("Ganaste, haz adivinado el número correcto")
}

let edad = parseInt(prompt("ingresar edad"))
 
if (edad >= 0 && edad <= 12) {
    alert("eres un infante")
}
else if (edad >= 13 && edad <= 18) {
    alert("eres un adolecente")
}
else if (edad >= 19 && edad <= 44) {
    alert("eres un adulto")
}
else if (edad >= 45 && edad <=99 ) {
    alert("eres un anciano")
}else if (edad >= 100) {
    let pregunta = prompt("esa es tue edad?")
    if (pregunta === "si") {
        alert ("ok")
    }else if (pregunta === "no") {
        alert ("ya sabia")
    }
}

let jugador1 = prompt("Ingrese piedra, papel o tijera: ")
let jugador2 = prompt("Ingrese piedra, papel o tijera: ")

if ((jugador1 == "piedra" && jugador2 == "tijera") || (jugador1 == "papel" && jugador2 == "piedra") || (jugador1 == "tijera" && jugador2 == "papel")) {
    alert("Ganó el jugador 1")
}else if((jugador2 == "piedra" && jugador1 == "tijera") || (jugador2 == "papel" && jugador1 == "piedra") || (jugador2 == "tijera" && jugador1 == "papel")){
    alert("Ganó el jugador 2")
}else if(jugador1 === jugador2){
    alert("Empate")
}else{
    alert("Respuesta no valida")
}

let coloresDelMundo = prompt("ingrese color para un sinificado")

switch (coloresDelMundo) {
    case "Blanco":
        alert("ausencia de color")
        break;
    case "Negro":
        alert("ausencia de color")
        break;
    case "Verde":
        alert("color de la naturaleza")
        break;
    case "Azul":
        alert("color del agua")
        break;
    case "Amarillo":
        alert("color del sol")
        break;
    case "Rojo":
        alert("color del fuego")
        break;
    case "Marron":
        alert("color de la tierra")
        break;
    default:
        alert("Excelente elección, no lo teníamos pensado.")
        break;
}

let valor1 = parseInt(prompt("Ingresa el primer número: "))
let operacion = prompt("Indica la operacion ingresando uno de los siguientes signos: +, -, *, /")
let valor2 = parseInt(prompt("Ingresa el segundo número: "))


if (operacion === "+") {
    let resultado = valor1 + valor2
    alert(" La suma de " + valor1 + " y " + valor2 + " es: " + resultado)
} else if (operacion === "-") {
    resultado = valor1 - valor2
    alert("La resta de " + valor1 + " y " + valor2 + " es: " + resultado)
} else if (operacion === "*") {
    resultado = valor1 * valor2
    alert("La multiplicación de " + valor1 + " y " + valor2 + " es: " + resultado)
} else if (operacion === "/") {
    if (valor2 !== 0) {
        resultado = valor1 / valor2
        alert("La división de " + valor1 + " entre " + valor2 + " es: " + resultado)
    } else {
        alert("ERROR: No se puede dividir por cero")
    }
} else {
    alert("Operación no válida. Las opciones son: suma(+), resta(-), multiplicacion(*), division(/");
}

let nombre_dni = prompt("Ingrese su nombre: ")
let apellido_dni = prompt("Ingrese su apellido: ")
let fecha_dni = prompt("Ingrese su fecha de nacimiento: ")
let pais_dni = prompt("Ingrese su pais: ")
let direccion_dni = prompt("Ingrese su direccion: ")

let confirmacion = confirm(nombre_dni + " "+ apellido_dni + " "+ fecha_dni + " "+ pais_dni + " "+ direccion_dni + " ¿Son correctos sus datos?" )
if(confirmacion === true){
    let dni = {
        nombre: nombre_dni,
        apellido: apellido_dni,
        fecha: fecha_dni,
        pais: pais_dni,
        direccion: direccion_dni
    }
    
    console.table(dni)
    alert("Registro exitoso")
}else{
    alert("Vuelva a intentarlo en 1 mes")
}