/* Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos */

// Función true

function always() {
  return true;
}

// Asincronía setTimeout

setTimeout(() => {
  console.log("Hola soy una promesa");
}, 5000);

// Función generadora

function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id >= 10) {
      return id;
    }
    yield id * 2;
  }
}

const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

