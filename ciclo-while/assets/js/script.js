//Consegna:
//Data una lista della spesa:
//const list = [
//    'Latte',
//    'Cacao',
//    'Insalata',
//    'Carote',
//    'Pomodori',
//    'Piatti pronti'
//];
//Stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente.
//Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.

//START 
const list = [
    'latte', 
    'pomodori',
    'cacao',
    'insalata',
    'carote', 
    'pomodori',
    'piatti pronti',
]

//Creo costante per selezionare ul nel dom.
const listContainer = document.querySelector('.list-items');
console.log(listContainer)

// Inizializzo una variabile i a 0 che verrà
// utilizzata come indice per accedere agli elementi dell'array.
let i = 0;

//il ciclo continuerà finché l'indice i è minore della lunghezza dell'array.
while(i < list.length) {
    const item = list[i];

    // Incrementa il valore dell'indice i di 1. Una volta che l'indice i 
    // diventa uguale o superiore alla lunghezza dell'array "list",
    // la condizione (nelle parentesi tonde) diventa falsa,
    // e il ciclo while termina.
    i++;

    // Aggiungi un nuovo elemento <li> al contenuto di listContainer,
    //e concateno i valori della variabile item in un tag <li>
    listContainer.innerHTML += `<li>${item}</li>`;

}