let pedido = {
  nombreCliente: "Carlos Perez",
  ciudadCliente: "Bogota",
  clienteEsPrime: true,
  productos: ["Pizza ", "ArrozChino ", "CocaCola "]
};


console.log(pedido.nombreCliente);


let mensajePrime;

if (pedido.clienteEsPrime === true) {
    mensajePrime = "tienes acceso a Rappi Prime";
} else {
    mensajePrime = "no eres usuario Rappi Prime";
}


pedido.productos.push(" Merengon");


pedido.productos.pop();

let estado = "en pedido";

console.log("Hola " + pedido.nombreCliente + ", tu pedido a " + pedido.ciudadCliente + " (" + mensajePrime + ")." + "Sus productos son :" + pedido.productos + ". y su estado es: " + estado);

console.log("El nombre del cliente es: " + pedido.nombreCliente)

let estado1 = "En progreso"

console.log("ahora tu pedido esta : " + estado1)