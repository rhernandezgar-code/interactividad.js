var nombre = "Regina";
let edad = 21;
const pi = Math.PI;
const TAU = Math.PI * 2;
let esMayorDeEdad = edad >= 18;

nombre = "Luis";
edad = 23;
console.log("Hello " + nombre);

function saludar(_nombre="Mundo") {
    alert("Hola"+_nombre);

}
saludar();
saludar(nombre);
saludar("Ana");