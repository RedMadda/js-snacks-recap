// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// creo array da filtrare
const nani = ["Brontolo", "Eolo", "Pisolo", "Cucciolo", "Mammolo", "Dotto", "Gongolo"];
// creo allocazione nani filtrati
let naniFiltrati = [];
// prendo le due posizioni
let index1 = parseInt(prompt("Inserisci un numero fra 0 e 6"));
let index2 = parseInt(prompt("Inserisci un altro numero maggiore o uguale a quello di prima"));

// function filtriamo(array, num1, num2){
// // ** procedo con forEach
// array.forEach((nano, index) => {
//     if (index >= num1 && index <= num2){
//         naniFiltrati.push(nano);
//     }
// });
// }

// filtriamo(nani,index1,index2);


// console.log(
//     `Il primo indice inserito è: ${index1};
//      Il secondo indice inserito è: ${index2};
//      L'array filtrato fra i due indexes è: ${naniFiltrati};
//     `
//     ); 

// **procedo con filter
function filtraPerIndici(array, num1, num2){

    const arrayFiltrato = array.filter((element, index) => {

        if(index >= num1 && index <= num2){
            return element;
        } else if(num2 < num1){
            alert("Errore nella scelta dei numeri, num2 è minore di num1. Ricarica e riprova.")
        }

    });
    //ho trovato il mio arrayFiltrato. Lo visualizzo:
    document.getElementById("print").innerHTML += arrayFiltrato;
}

filtraPerIndici(nani,index1,index2);
