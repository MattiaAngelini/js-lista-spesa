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

// Creo variabile con l'indice 'i' a 0 e ad ogni iterazione, 
//se 'i' è minore della lunghezza dell'array 'list',
// esegue console log, 
// incremento 'i' di 1,
// e procede con la successiva iterazione.

// Il ciclo termina quando indice diventa uguale o superiore alla 
//lunghezza della list.
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

