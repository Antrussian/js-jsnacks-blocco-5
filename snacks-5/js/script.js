/*
Creare un array di oggetti di squadre di volley.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Generare numeri random al posto delle nelle proprietà:
punti fatti e falli subiti

*/

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squadreVolley = [
    {
        nome: 'Squadra 1',
        puntiFatti: generaNumeroCasuale(0, 100),
        falliSubiti: generaNumeroCasuale(0, 20)
    },
    {
        nome: 'Squadra 2',
        puntiFatti: generaNumeroCasuale(0, 100),
        falliSubiti: generaNumeroCasuale(0, 20)
    },
    {
        nome: 'Squadra 3',
        puntiFatti: generaNumeroCasuale(0, 100),
        falliSubiti: generaNumeroCasuale(0, 20)
    },

];

console.log(squadreVolley);
