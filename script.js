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
   let cardClass = document.createElement('div');

   div.classList.add('card')
   document.getElementById('cards-container').appendChild(div);
   
   cardClass.classList.add('card-front')
   cardClass.classList.add('card-face')
   document.querySelector('.card').appendChild(cardClass);
   
}

createCard();

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