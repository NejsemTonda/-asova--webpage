let currentIndex = 0;

function showConcert(index) {
  const offset = -index * 100 + '%';
  const concertList = document.querySelector('.concert-list');
  concertList.style.transform = 'translateX(' + offset + ')';

  var concertElements = document.querySelectorAll('.concert');

  concertElements.forEach(function(element) {
	element.classList.add('hidden');
  	element.classList.remove('visible');
	element.disabled = true;
  });
  concertElements[index].classList.remove('hidden');
  concertElements[index].classList.add('visible');
  concertElements[index].disabled = false;
}

function prevConcert() {
  const concerts = document.querySelectorAll('.concert');
  currentIndex = (currentIndex - 1 + concerts.length) % concerts.length;
  showConcert(currentIndex);
}

function nextConcert() {
  const concerts = document.querySelectorAll('.concert');
  currentIndex = (currentIndex + 1) % concerts.length;
  showConcert(currentIndex);
}

