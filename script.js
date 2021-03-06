//Default variables
const frozenTheme = document.querySelector(".frozen-avatar");
const moanaTheme = document.querySelector(".moana-avatar");
const princessTheme = document.querySelector(".princess-avatar");
const easy = document.querySelector(".easy")
const normal = document.querySelector(".normal")

//Theme variables
const titleChange = document.querySelector(".title-change");
const header = document.querySelector("header")

//Card capture variables
const frozenCard = document.querySelector(".frozen");
const moanaCard = document.querySelector(".moana");
const princessCard = document.querySelector(".princess");

//Difficulty setting
easy.addEventListener('click', () => {
  normal.classList.remove('toggle');
  easy.classList.add('toggle');
})
normal.addEventListener('click', () => {
  easy.classList.remove('toggle');
  normal.classList.add('toggle');
})

//Theme Switch
frozenTheme.addEventListener("click", () => {
  titleChange.innerHTML = 'Frozen'
  header.style.backgroundColor = 'rgb(74, 8, 105)'
  generateCard();
});
moanaTheme.addEventListener("click", () => {
  titleChange.innerHTML = 'Moana'
  header.style.backgroundColor = 'rgb(8, 105, 60)'
  generateCard();
});
princessTheme.addEventListener("click", () => {
  titleChange.innerHTML = 'Princess'
  header.style.backgroundColor = 'rgb(190, 86, 156)'
  generateCard();
});

//Generating the cards
const generateCard = () => {
  //Generating the numbers for the card assignment
  let deck = [];
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 2; j++) {
      deck.push(i);
    }
  }
  //Randomizing the order of numbers
  deck.sort(() => Math.random() - 0.5);

  //Now that the array is made, I will loop through each number, and assign a card to it
  deck.forEach((item) => {
    //Card Divs
    let card = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("div");
    //Card Images
    let frontImg = document.createElement("img");
    let backImg = document.createElement("img");

    //Adding classes to the divs
    card.classList = "card";
    front.classList = "card-front";
    front.classList.add("card-face");
    back.classList = "card-back";
    back.classList.add("card-face");

    //Creating the Images
    frontImg.classList = "frozen";
    backImg.classList = "frozen";
    frontImg.src = "assets/Frozen/completed_photos/frozen" + item + ".jpg";
    backImg.src = "assets/Misc/backCardFrozen.jpg";

    //Appending all the divs to the proper locations
    document.getElementById("cards-container").appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    front.appendChild(frontImg);
    back.appendChild(backImg);
  });

  selected();
  console.log(deck);
};

const selected = () => {
  const selectedCard = document.querySelectorAll(".card");
  selectedCard.forEach((myCard) => {
    myCard.addEventListener("click", () => {
      if (selectedCard.length < 34) {
        removeVisible();
        myCard.classList.add("visible");
        console.log("clicked");
      }
    });
  });

  function removeVisible() {
    selectedCard.forEach((myCard) => {
      myCard.classList.remove("visible");
    });
  }
};

generateCard();
