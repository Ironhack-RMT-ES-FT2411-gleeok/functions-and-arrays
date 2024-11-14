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


// function capitalizar(staffName) {
//   // let staffName = ???
//   let staffCap = staffName[0].toUpperCase() + staffName.slice(1)
//   return staffCap
// }

const capitalizar = (staffName) => {
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



// tipos de funciones



// funcion de declaración (más usada)
function funcionDeDeclaración() {
  // ...
}

// function de expresión (menos usada)
const functionDeExpresion = function() {
  // ...
}

// funcion de flecha (usada bastante, sobre en callbacks)
const functionDeFlecha = () => {
  // ...
}

funcionDeDeclaración()
functionDeExpresion()
functionDeFlecha()



// Arrays

let miArray = [ "hola", "adios", 40, true, false, undefined, null, [ "patata" ], {name: "bob"}, () => {/* ... */} ]

console.log(miArray)


let cities = ["Madrid", "Mallorca", "Barcelona", "Tarragona", "Sevilla", "Valencia"]


console.log(cities.length)

console.log(cities[0])

console.log(cities[0].length)
console.log(cities[0][0])

console.log(cities[cities.length - 1][0])


let ultimaCiudad = cities[cities.length - 1]
let ultimoCaracter = ultimaCiudad[ultimaCiudad.length - 1]

console.log(ultimoCaracter)


// metodos

let indexOfTarragona = cities.indexOf("Tarragona")
console.log(indexOfTarragona) 

// si no existiera, nos daría -1

let isMadridInCities = cities.includes("Madrid")
console.log(isMadridInCities)

let twoMiddleCities = cities.slice(2, 4) // no include la posición ultima
console.log(twoMiddleCities)


// mutabilidad


let string = "hola"

console.log(string[0])

string[0] = "H"

// los strings y todo tipo de data primitiva es inmutable

string = string[0].toUpperCase() + string.slice(1)

console.log(string)


const friends = ["Ross", "Monica", "Rachel", "Phoebe", "Joey", "Chandler"]
// const indica que no puede tener otro valor

friends[0] = "Mike"

// los arrays y objetos si son data mutable
// no todos los metodos mutan el array original

console.log(friends)

console.log(friends.slice(2,4))
console.log(friends)


// metodos que si mutan el array original

let removedFriend = friends.pop() 
// 1. eliminar el ultimo elemento del array
// 2. opcionalmente nos devuelve el elemento que se ha removido
console.log(friends)
console.log(removedFriend)

let removedFriend2 = friends.shift() 
// 1. eliminar el primer elemento del array
// 2. opcionalmente nos devuelve el elemento que se ha removido
console.log(friends)
console.log(removedFriend2)

friends.push( "Janice" ) // agregar al final
console.log(friends)

friends.unshift( "Gunther" ) // agregar al inicio
console.log(friends)


// splice()

// friends.splice(3, 2)
// console.log(friends)

let elementosRemovidos = friends.splice(2, 0, "Robert", "Victor")
// 1. la posición donde inicia el cambio
// 2. la cantidad de elementos a cortar
// 3 - o más. opcionalmente un elmento a agregar

console.log(friends)
console.log(elementosRemovidos)

