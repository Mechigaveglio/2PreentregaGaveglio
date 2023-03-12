alert ("Bienvenido a BankCoderhouse, vamos a simular su prestamo")

function Persona(nombre) {
    this.nombre = nombre.toUpperCase();
    this.saludar = function(){ alert ("Hola"+ " " + this.nombre)};
}
const personanueva = new Persona(prompt("ingrese su nombre"));

personanueva.saludar();


class Cliente {
    constructor(nombreyapellido, edad, salario, clienteregistrado) {
        this.nombreyapellido = nombreyapellido;
        this.edad = parseInt(edad);
        this.salario = parseFloat(salario);
        this.clienteregistrado = clienteregistrado;
    
    }
}
const NuevoCliente = new Cliente (prompt("Ingrese su nombre y apellido"), prompt("Ingrese su edad"), prompt("Ingrese su salario"), prompt("Ud. es cliente ya registrado del banco?"))


alert( ` Su nombre y apellido es ${NuevoCliente.nombreyapellido}
Su edad es ${NuevoCliente.edad} años
Su salario es de $${NuevoCliente.salario}
¿Ud. ya es cliente registrado del banco?: ${NuevoCliente.clienteregistrado}`);

const cashBackbienvenida = [{pesos: 0, pesos: 1500, pesos: 5000}]
let cashback= 0

    if ( NuevoCliente.clienteregistrado == `si` ) {
        cashback = cashBackbienvenida[1]

        alert( `Su cashback de bienvenida es 1500$`)

    } else if ( NuevoCliente.clienteregistrado == `no`) {
        cashback = cashBackbienvenida[2]

        alert( `Su cashback de bienvenida es 5000$`)
    }  else {
        cashback = cashBackbienvenida[0]

    }   
    
    let montoMaximoaprestar = NuevoCliente.salario* 4
    alert("Tu monto maximo de prestamo segun tu sueldo es:" + montoMaximoaprestar)

    let montoSolicitado = parseInt(prompt("Ingresá el monto solicitado de tu prestamo"));
    let cuotasSolicitadas= parseInt(prompt("Ingresá la cantidad de cuotas para devolver el préstamo, tenes desde 6 hasta 36"))

    let tnaMensual= 0.035 

    function simularCuotas (prestamo, cuotas, tasadeinteres) {
        cuotasprestamo = (prestamo * tasadeinteres) / cuotas
    }
    simularCuotas (montoSolicitado, cuotasSolicitadas, tnaMensual)
    
    alert( "para su prestamo solicitado de:" + " " + montoSolicitado + " " +"y sus"+ " " + cuotasSolicitadas + " " + "cuotas pedidas con su correspondiente tasa mensual de:" + " " + tnaMensual + " " + "le corresponde una cuota de:"+" " + cuotasprestamo)

const arrayDeTelefonosdeNuevosClientes = []

    for(let i = 0 ;i<5;i++){
    let telefonoAAgregar = prompt('Ingrese su telefono')
    if(telefonoAAgregar === '0'){
        arrayDeTelefonosdeNuevosClientes.unshift(telefonoAAgregar) 
    }else{
        arrayDeTelefonosdeNuevosClientes.push(telefonoAAgregar) 
    }
    
    console.log(arrayDeTelefonosdeNuevosClientes) 
     
    }

    const datosArrayDeTelefonosdeNuevosClientes = [
    {nombre: "Juan", numero: 0},
    {nombre: "Lucia", numero: 291453474},
    {nombre: "Pedro", numero: 11123897},
    {nombre: "Marina", numero: 12321324},
    {nombre: "Lucas", numero: 4531342},]
    
 
   const busquedaTelefono1= datosArrayDeTelefonosdeNuevosClientes.find((el)=> el.nombre ==="Pedro")

   const busquedaTelefono2 = datosArrayDeTelefonosdeNuevosClientes.find((el) => el.nombre=== "Lucas")
   
   console.log(busquedaTelefono1) 
   console.log(busquedaTelefono2) 