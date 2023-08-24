"use strict";
let cards = document.querySelectorAll(".card");
let container = document.querySelector(".container");
var backCardsImg;
(function (backCardsImg) {
    backCardsImg["I1"] = "mao 1s";
    backCardsImg["I2"] = "stalin 1s";
    backCardsImg["I3"] = "lenin 1s";
    backCardsImg["I4"] = "polPot 1s";
    backCardsImg["I5"] = "hochimi 1s";
    backCardsImg["I6"] = "fidel 1s";
    backCardsImg["I7"] = "che 1s";
    backCardsImg["I8"] = "karl 1s";
})(backCardsImg || (backCardsImg = {}));
var URLimg;
(function (URLimg) {
    URLimg["I1"] = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mao_Zedong_1959.jpg/640px-Mao_Zedong_1959.jpg";
    URLimg["I2"] = "https://cdn.pensador.com/img/authors/jo/se/joseph-stalin-l.jpg";
    URLimg["I3"] = "https://s4.static.brasilescola.uol.com.br/be/2020/04/vladimir-lenin.jpg";
    URLimg["I4"] = "https://www.algosobre.com.br/images/stories/assuntos/biografias/Pol%20Pot.jpg";
    URLimg["I5"] = "https://upload.wikimedia.org/wikipedia/commons/1/1c/Ho_Chi_Minh_1946.jpg";
    URLimg["I6"] = "https://upload.wikimedia.org/wikipedia/commons/4/4a/Fidel_Castro_1950s.jpg";
    URLimg["I7"] = "https://www.prensa-latina.cu/wp-content/uploads/2022/10/Ernesto-Che-Guevara.jpg";
    URLimg["I8"] = "https://www.coladaweb.com/wp-content/uploads/2015/11/20151108-karl-max.jpg";
})(URLimg || (URLimg = {}));
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const chavesEmbaralhadas = shuffleArray(Object.keys(backCardsImg));
const valoresEmbaralhados = chavesEmbaralhadas.map(chave => backCardsImg[chave]);
const chavesEmbaralhadasURL = shuffleArray(Object.keys(URLimg));
const valoresEmbaralhadosURL = chavesEmbaralhadas.map(chave => URLimg[chave]);
function check(card) {
    if (card === cards[0]) {
        cards[0].style.animation = (valoresEmbaralhados[0]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[0])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[1]) {
        cards[1].style.animation = (valoresEmbaralhados[1]);
        setTimeout(() => {
            card.style.background = `url(${valoresEmbaralhadosURL[1]}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[2]) {
        cards[2].style.animation = (valoresEmbaralhados[2]);
        setTimeout(() => {
            card.style.background = `url(${valoresEmbaralhadosURL[2]}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[3]) {
        cards[3].style.animation = (valoresEmbaralhados[3]);
        setTimeout(() => {
            card.style.background = `url(${valoresEmbaralhadosURL[3]}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[4]) {
        cards[4].style.animation = (valoresEmbaralhados[4]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[4])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[5]) {
        cards[5].style.animation = (valoresEmbaralhados[5]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[5])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[6]) {
        cards[6].style.animation = (valoresEmbaralhados[0]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[0])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[7]) {
        cards[7].style.animation = (valoresEmbaralhados[1]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[1])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[8]) {
        cards[8].style.animation = (valoresEmbaralhados[2]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[2])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[9]) {
        cards[9].style.animation = (valoresEmbaralhados[3]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[3])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[10]) {
        cards[10].style.animation = (valoresEmbaralhados[4]);
        setTimeout(() => {
            card.style.background = `url(${valoresEmbaralhadosURL[4]}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[11]) {
        cards[11].style.animation = (valoresEmbaralhados[5]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[5])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[12]) {
        cards[12].style.animation = (valoresEmbaralhados[6]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[6])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[13]) {
        cards[13].style.animation = (valoresEmbaralhados[7]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[7])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[14]) {
        cards[14].style.animation = (valoresEmbaralhados[6]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[6])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
    else if (card === cards[15]) {
        cards[15].style.animation = (valoresEmbaralhados[7]);
        setTimeout(() => {
            card.style.background = `url(${(valoresEmbaralhadosURL[7])}) no-repeat center center / cover `;
            card.style.removeProperty("animation");
        }, 950);
    }
}
let save = 0;
let card1 = "";
let card2 = "";
let card1Position = "";
let card2Position = "";
function checkValues(card1, card2) {
    save = 3
    setTimeout(() => {
        save = 0
    },3500)
    if (card1Position === card2Position) {
        save = 3
        card1Position.style.removeProperty("animation");
        card1Position.classList.add("rotateCard");
        setTimeout(() => {
            card1Position.style.removeProperty("background");
            card1Position.classList.remove("rotateCard");
        }, 1000);
        setTimeout(() => {
            save = 0
        }, 1500000);
        card1 = ""
        card2 = ""
    }
    else if (card1 === card2) {
        card1Position.style.pointerEvents = "none"
        card2Position.style.pointerEvents = "none"
        setTimeout(function () {
            card1Position.style.removeProperty("animation");
            card2Position.style.removeProperty("animation");
            card1Position.style.animation = "correct 1s infinite"
            card2Position.style.animation = "correct 1s infinite"
        }, 1200);
        card1 = ""
        card2 = ""
    }
    else {
        setTimeout(function () {
            card1Position.style.removeProperty("animation");
            card2Position.style.removeProperty("animation");
        }, 1300);
        setTimeout(() => {
            card1Position.classList.add("rotateCard");
            card2Position.classList.add("rotateCard");
        }, 2200);
        setTimeout(() => {
            card1Position.style.removeProperty("background");
            card2Position.style.removeProperty("background");
            card1Position.classList.remove("rotateCard");
            card2Position.classList.remove("rotateCard");
        }, 2800);
        card1 = ""
        card2 = ""
    }
}

let func = ""
cards.forEach((card) => {
    card.addEventListener("click", func = function deck() {
        if (save === 0) {
            check(card);
            card1 = getComputedStyle(card).animation;
            card1Position = card;
            save = 1;
        }
        else if (save === 1) {
            check(card);
            card2 = getComputedStyle(card).animation;
            card2Position = card;
            checkValues(card1, card2);
        }
    });
});
