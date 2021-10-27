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

let item = "";
let thumbs = "";

// ciclo di aggiunta 
for (let i=0; i < items.length; i++) {
    thumbs += 
    `<div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>`;

    item += 
    `<div class="item active">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}.</p>
        </div>
    </div>`;
}

itemsCont.innerHTML = item;
thumbsCont.innerHTML = thumbs;