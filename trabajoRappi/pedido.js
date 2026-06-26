let nombreCliente = "Carlos Perez";
let ciudadCliente = "Bogota";
const clienteEsPrime = true; 


let mensajePrime;

if (clienteEsPrime === true) {
    mensajePrime = "tienes acceso a Rappi Prime";
} else {
    mensajePrime = "no eres usuario Rappi Prime";
}


console.log("Hola " + nombreCliente + ", tu pedido a " + ciudadCliente + " (" + mensajePrime + ").");