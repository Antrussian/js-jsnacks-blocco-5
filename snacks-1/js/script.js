/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.

*/

const automobili = [
    { marca: 'Toyota', modello: 'Corolla', alimentazione: 'benzina' },
    { marca: 'Ford', modello: 'Focus', alimentazione: 'diesel' },
    { marca: 'Tesla', modello: 'Model 3', alimentazione: 'elettrico' },
    { marca: 'Fiat', modello: '500', alimentazione: 'gpl' },
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'benzina' },
    { marca: 'Renault', modello: 'Clio', alimentazione: 'diesel' },
    { marca: 'Nissan', modello: 'Leaf', alimentazione: 'elettrico' },
    { marca: 'Opel', modello: 'Corsa', alimentazione: 'metano' },
    { marca: 'Mercedes', modello: 'Classe-A', alimentazione: 'diesel' },
    { marca: 'Chevrolet', modello: 'Bolt', alimentazione: 'elettrico' }
  ];
  
  const autoBenzina = automobili.filter(auto => auto.alimentazione === 'benzina');
  const autoDiesel = automobili.filter(auto => auto.alimentazione === 'diesel');
  const altreAuto = automobili.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');

  console.log(autoBenzina, autoDiesel, altreAuto);