
let provincias = [];
let montoProvincia = [] ;


function cargaDatos() {
    let x = prompt("Ingresa la provincia de residencia");
    provincias[0] = x;
    let y = Number(prompt("Ingrese el monto total facturado:"))
          montoProvincia [0] = y;
 
    let f  = Number (prompt("en cuantas provincias facturo ")) 

    if (f == 0) {
        alert("Usted no entra en el convenio multilateral")
        
    } else {
         
     for (let i = 1; i <= f; i++) {
        provincias.push (prompt("ingresa la provincia donde facturó"));
        montoProvincia.push (prompt("Ingrese el monto facturado en esta provincia:"))
    
     }
    

     let pagoResidencia = 80


     let resultadosPrevios = [] ;
     let resultados = [] ;



for (let index = 1; index <= f; index++) {
    
    resultadosPrevios[index] = montoProvincia[0]   / montoProvincia[index]

   // resultados [index] = (resultadosPrevios[index] * 20 ) / 100

}


alert(`El pago a ${provincias[0]} es de ${pagoResidencia} % `)

for (let g = 1; g <= f; g++) {
    
  
    alert(`El pago a ${provincias[g]} es de ${resultadosPrevios[g]} % `)
}
}

}


cargaDatos();  


//AGREGADO DE OBJETOS PARA LA ENTREGA

const todasProvincias =  Object.assign({}, provincias)

const todosMontos = Object.assign({}, montoProvincia )

console.log(todasProvincias);
console.log(montoProvincia);


let  filtro = Number (prompt("facturaciones mayores a :"))

function filtrado(filtro) {
   
    let arrayFiltro = [];

for (let i = 0; i<resultadosPrevios.lenght; i++) {
  
    var currentNumber = numbers[i];
  
    if (currentNumber > filtro) {

   arrayFiltro.push(currentNumber)
  }
  
}


filtrado();

console.log(arrayFiltro);

 }

