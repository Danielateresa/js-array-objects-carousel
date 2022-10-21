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

let activeImg = 0;
let activeh2 = 0;
let activep = 0;
//popolare dinamicamente il carosello.
for (let i = 0; i < images.length; i++) {
    let imgobj = images[i];

    //console.log(imgobj.image);

    const markup = `<img class="${i === activeImg ? 'active' : ''}" src="./assets/${imgobj.image}" alt="">
    <h2 class="${i === activeh2 ? 'active' : ''}">${imgobj.title}</h2><p class=" ${i === activep ? 'active' : ''}">${imgobj.text}</p>`
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


    //prendo dal dom gli elementi attivi img, h2 e p
    const activeimages = document.querySelectorAll('.slider > img');
    const activeh2s = document.querySelectorAll('.slider > h2');
    const activeps = document.querySelectorAll('.slider > p');

    //metto in una costante gli elementi img, h2 e p attivi
    const imgVisible = activeimages[activeImg];
    const h2Visible = activeh2s[activeh2];
    const pVisible = activeps[activep];

    //console.log(allimages[active]);
    //console.log(imgVisible, h2Visible, pVisible);

    //rimuovo la classe active dagli elementi visibili
    imgVisible.classList.remove('active');
    h2Visible.classList.remove('active');
    pVisible.classList.remove('active');

    //incremento l'elemento attivo di 1 per aumentare
    activeImg++
    activeh2++
    activep++

    //condizione per creare il ciclo infinito
    if (activeImg === images.length) {
        //incremento l'elemento attivo di 1 per scalare
        activeImg = 0
        activeh2 = 0
        activep = 0


        //seleziono seconda immagine, h2 e p per aggiungere la classe active
        const prevImg = activeimages[activeImg];
        const prevh2 = activeh2s[activeh2];
        const prevp = activeps[activep];

        console.log(prevImg, prevh2, prevp);

        prevImg.classList.add('active');
        prevh2.classList.add('active');
        prevp.classList.add('active');
    } else {
        //seleziono seconda immagine, h2 e p per aggiungere la classe active
        const nextImg = activeimages[activeImg];
        const nexth2 = activeh2s[activeh2];
        const nextp = activeps[activep];

        console.log(nextImg, nexth2, nextp);

        nextImg.classList.add('active');
        nexth2.classList.add('active');
        nextp.classList.add('active');
    }


})

//ora devo far ricomparire l'immagine precedente con il tasto prev

buttonPrevEl.addEventListener('click', function () {


    //prendo dal dom gli elementi attivi img, h2 e p
    const activeimages = document.querySelectorAll('.slider > img');
    const activeh2s = document.querySelectorAll('.slider > h2');
    const activeps = document.querySelectorAll('.slider > p');

    //metto in una costante gli elementi img, h2 e p attivi
    const imgVisible = activeimages[activeImg];
    const h2Visible = activeh2s[activeh2];
    const pVisible = activeps[activep];

    //console.log(allimages[active]);
    //console.log(imgVisible, h2Visible, pVisible);

    //rimuovo la classe active dagli elementi visibili
    imgVisible.classList.remove('active');
    h2Visible.classList.remove('active');
    pVisible.classList.remove('active');

    //incremento l'elemento attivo di 1 per scalare
    activeImg--
    activeh2--
    activep--

    //condizione----------------------

    if (activeImg === 0) {
        //incremento l'elemento attivo di 1 per scalare
        activeImg = images.length
        activeh2 = images.length
        activep = images.length

        images.reverse()
        console.log(images);

        activeImg--
        activeh2--
        activep--

        const prevImg = activeimages[activeImg];
        const prevh2 = activeh2s[activeh2];
        const prevp = activeps[activep];

        console.log(prevImg, prevh2, prevp);

        prevImg.classList.add('active');
        prevh2.classList.add('active');
        prevp.classList.add('active');
    } else {
        //seleziono seconda immagine, h2 e p per aggiungere la classe active


        const prevImg = activeimages[activeImg];
        const prevh2 = activeh2s[activeh2];
        const prevp = activeps[activep];

        console.log(prevImg, prevh2, prevp);

        prevImg.classList.add('active');
        prevh2.classList.add('active');
        prevp.classList.add('active');
    }
})