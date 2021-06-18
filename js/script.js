// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// creo array da filtrare
const nani = ["Brontolo", "Eolo", "Pisolo", "Cucciolo", "Mammolo", "Dotto", "Gongolo"];
// creo allocazione nani filtrati
const naniFiltrati = [];
// prendo le due posizioni
const index1 = parseInt(prompt("Inserisci un numero fra 0 e 6"));
const index2 = parseInt(prompt("Inserisci un altro numero maggiore o uguale a quello di prima"));

// procedo con forEach
nani.forEach((nano, index) => {
    if (index >= index1 && index <= index2){
        naniFiltrati.push(nano);
    }
});

console.log(naniFiltrati);