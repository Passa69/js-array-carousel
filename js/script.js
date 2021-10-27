// Consegna: Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello come nella foto allegata.
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
// ...
// 1. creare html e css OK
// 2. aggiungere uno per volta gli elementi => for OK
// 3. stampare su pagina solo il primo elemento grande e selezionare solo uno di quelli piccoli OK
// 4. aggiungere i click alle frecce OK
    // 4.1 creare una variabile per il conteggio degli elementi OK
    // 4.2 aggiungere la funzine click con la variabile precedente OK
    // 4.3 ripetere gli stessi passaggi per il senso opposto ??


// array
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// creare i contenuti delle macroaree utilizzando gli array
const itemsCont = document.querySelector(".items");
const thumbsCont = document.querySelector(".thumbs");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");

let item = "";
let thumbs = "";

// ciclo di aggiunta 
for (let i=0; i < items.length; i++) {
    thumbs += 
    `<div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>`;

    item += 
    `<div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}.</p>
        </div>
    </div>`;
}

itemsCont.innerHTML = item;
document.getElementsByClassName("item")[0].classList.add("active");

thumbsCont.innerHTML += thumbs;
document.getElementsByClassName("thumb")[0].classList.add("active");

// aggiunta click next
let activePosition = 0;

document.querySelector(".next").addEventListener(`click`, 
    function() {

        activePosition = activePosition + 1;

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }

);

// aggiunta click prev
let activePositions = 4;

document.querySelector(".prev").addEventListener(`click`, 
    function() {

        activePositions = activePositions - 1;

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePositions].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePositions].classList.add("active");
    }

);