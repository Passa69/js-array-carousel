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