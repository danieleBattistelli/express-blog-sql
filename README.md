
### Esercizio express-blog-api-crud

Milestone 1
Come prima cosa, creiamo un controller per i nostri post, in una cartella `controllers.`
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone

Milestone 2
Ora passiamo ad implementare le logiche delle nostre CRUD:
- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (`console.log`) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
Bonus
- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

Milestone 3
Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log`
Milestone 3*
Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
Testiamolo con postman.

Milestone 4
Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.
:stelle: Bonus
- In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

Milestone 5
-Inserire  un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.
- Se viene chiamato un endpoint con parametro inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.
Bonus:

// ESERCIZIO 1
// Scrivi una funzione filterByLength che accetta un array di stringhe e un numero minimo di caratteri. Restituisci un nuovo array contenente solo le stringhe con una lunghezza maggiore o uguale al numero dato.
// 
// Esempio di invocazione della funzione: 
const words = ["apple", "cat", "banana", "dog"]
filterByLength(words, 4); 


// ESERCIZIO 2
// Calcola la somma e la media dei primi 10 numeri.

// ESERCIZIO 3
// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// ESERCIZIO 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

// ESERCIZIO 5
// Scrivi una funzione getNames che accetta un array di oggetti con proprietà name e age, e restituisce un array contenente solo i nomi delle persone maggiorenni (età ≥ 18).

// Esempio Input:

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 21 }
];

getNames(people);
// Output: ["Bob", "David"]

### Dati

### Esecuzione logica

### Output

