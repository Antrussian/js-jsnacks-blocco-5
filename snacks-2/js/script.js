/*Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const persone = [
  { nome: 'Mario', cognome: 'Rossi', eta: 25 },
  { nome: 'Anna', cognome: 'Verdi', eta: 18 },
  { nome: 'Luca', cognome: 'Bianchi', eta: 30 },
];

const frasiPersone = persone.map(persona => {
  let frase = `${persona.nome} ${persona.cognome} ${persona.eta} anni `;

  if (persona.eta >= 18) {
    frase += 'può guidare.';
  } else {
    frase += 'non può guidare.';
  }

  return frase; 
});

console.log(frasiPersone);
