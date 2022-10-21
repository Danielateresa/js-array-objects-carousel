/* Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1 (opzionale):
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2  (opzionale):
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3  (opzionale):
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

STRUTTURA DATI:
Ecco la struttura dati da usare (le immagini sono le stesse della volta scorsa) */

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//seleziono l'elemento slider dalla DOM
const sliderEl = document.querySelector('.slider');

let active = 0;
//popolare dinamicamente il carosello.
for (let i = 0; i < images.length; i++) {
    let imgobj = images[i];

    //console.log(imgobj.image);




    const markup = `<img class="${i === 0 ? 'active' : ''}" src="./assets/${imgobj.image}" alt=""><h2 class="${i === 0 ? 'active' : ''}">${imgobj.title}</h2><p class=" ${i === 0 ? 'active' : ''}">${imgobj.text}</p>`
    //console.log(markup);
    sliderEl.insertAdjacentHTML('beforeend', markup);
}

//Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
//recuper gli elementi dalla DOM 

const buttonNextEl = document.querySelector('.next');
const buttonPrevEl = document.querySelector('.prev');

//console.log(buttonNextEl);

//evento click next
buttonNextEl.addEventListener('click', function () {


})