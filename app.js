
let provincias = [];
let montoProvincia = [] ;


   
   let x = prompt("Ingresa la provincia de residencia");
   provincias[0] = x;
   let y = Number(prompt("Ingrese el monto total facturado:"))
         montoProvincia [0] = y;

   let f  = Number (prompt("en cuantas provincias facturo ")) 
        
    for (let i = 1; i <= f; i++) {

        let x = prompt("Ingresa la provincia donde facturaste");
        provincias[i] = x;

        let y = Number(prompt("Ingrese el monto facturado en esta provincia:"))
         montoProvincia [i] = y;
    }
    


let pagoResidencia = 80

let resultadosPrevios = [] ;
let resultados = [] ;
for (let index = 1; index <= f; index++) {
    
    resultadosPrevios[index] = (montoProvincia[index]/montoProvincia[0]) * 100
    resultados [index] = (resultadosPrevios[index] / 100) * 20    
}

alert(`El pago a ${provincias[0]} es de ${pagoResidencia} % `)

for (let g = 1; g <= f; g++) {
    
  
    alert(`El pago a ${provincias[g]} es de ${resultados[g]} % `)
}






