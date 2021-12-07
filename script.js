const selectedCard = document.querySelectorAll('.card');

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