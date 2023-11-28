/*
Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

function fondaArray(array1, array2) {
    const arrayFuso = [];

    for (let i = 0; i < array1.length; i++) {
        arrayFuso.push(array1[i], array2[i]);
    }

    return arrayFuso;
}


const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const arrayFuso = fondaArray(array1, array2);

console.log(arrayFuso);