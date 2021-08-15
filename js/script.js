// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function getInterGearFilter(array, min, max){
    const filteredArray = array.filter((el, i) => i > min && i < max);
    return filteredArray;
}

function getInterGearRForEach(array, min, max){
    filteredArray = [];
    array.forEach((el, i) =>{
        if(i > min && i < max){
            filteredArray.push(el);
        }
    });
    return filteredArray;
}

const nums = [0,1,2,3,4,5,6,7,8,9,10];


console.log("Filter: ",getInterGearFilter(nums, 1,5));
console.log("ForEach: ", getInterGearRForEach(nums, 5,8));

