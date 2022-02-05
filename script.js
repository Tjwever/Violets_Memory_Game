//Default variables
const selectedCard = document.querySelectorAll('.card');
const frozenTheme = document.querySelector('.frozen-avatar')
const moanaTheme = document.querySelector('.moana-avatar')
const princessTheme = document.querySelector('.princess-avatar')

//Card capture variables
const frozenCard = document.querySelector('.frozen')
const moanaCard = document.querySelector('.moana')
const princessCard = document.querySelector('.princess')

frozenTheme.addEventListener('click', () => {
  console.log('clicked') 
})

const createCard = () => {
   let div = document.createElement('div');
   let cardFront = document.createElement('div');
   let cardBack = document.createElement('div');
   let frontImg = document.createElement('img');
   let backImg = document.createElement('img');

   //Creating and adding the container to the main tags
   div.classList = 'card'
   document.getElementById('cards-container').appendChild(div);
   
   //Creating the front and back of the card
   cardFront.classList = 'card-front'
   cardFront.classList.add('card-face')
   document.querySelector('.card').appendChild(cardFront);

   cardBack.classList = 'card-back'
   cardBack.classList.add('card-face')
   document.querySelector('.card').appendChild(cardBack);

   //Adding the img tag and class
   frontImg.classList = 'frozen'
   document.querySelector('.card-front').appendChild(frontImg).src = "assets/Frozen/Completed Photos/frozen1.jpg";
   backImg.classList = 'frozen'
   document.querySelector('.card-back').appendChild(backImg).src = "assets/Misc/backCardFrozen.jpg";
   
}

const generateCard = () => {
   
}

selectedCard.forEach((myCard) => {
	myCard.addEventListener('click', () => {
      removeVisible();
		myCard.classList.add('visible');
	});
});

function removeVisible() {
   selectedCard.forEach((myCard) => {
      myCard.classList.remove('visible');
   })
}