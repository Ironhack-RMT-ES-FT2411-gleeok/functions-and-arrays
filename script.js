console.log("probando")

// sintaxis
function miFuncion( /* opcionalmente tendremos parametros de entrada*/ ) {

  // el codigo a ejecutar cada vez que la funcion sea invocada

  return /* opcionalmente retornaremos un valor de la funcion */

}

// como la invocamos?
miFuncion( /* opcionalmente tendremos los argumentos que usará la funcion */ )


function imprimirNombre( persona ) {
  // los parametros son variables que reciben los argumentos de entrada
  // let persona = "Kurt"
  // console.log(persona)
  console.log(`Hola ${persona}`)
}

imprimirNombre("Kurt")

imprimirNombre("Victor")
imprimirNombre("Mariluz")
imprimirNombre("Miguel")



// return

function sumarDosNumeros( num1, num2 ) {

  let suma = num1 + num2
  //console.log(suma)

  return suma // return siempre va a ser lo ultimo que ejecuta

  console.log(suma) // esto nunca se ejecuta
}

// ...

let total = sumarDosNumeros( 10, 12 )
console.log(total)



let staff1 = "jorge"
let staff2 = "juliette"
let staff3 = "leidy"


function capitalizar(staffName) {
  // let staffName = ???
  let staffCap = staffName[0].toUpperCase() + staffName.slice(1)
  return staffCap
}

let staff1Cap = capitalizar(staff1)
let staff2Cap = capitalizar(staff2)
let staff3Cap = capitalizar(staff3)

console.log(`nuestro maravilloso staff cuenta con: ${staff1Cap}, ${staff2Cap} y ${staff3Cap}`)

// forma de hacerlo con la funcion invocada al momento de necesitarla
console.log(`nuestro maravilloso staff cuenta con: ${capitalizar(staff1)}, ${capitalizar(staff2)} y ${capitalizar(staff3)}`)

