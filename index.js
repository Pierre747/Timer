// Créer la logique de compte à rebours

let totalSeconds;
let interval;

const form = document.querySelector('form'); // On récupère notre élément form

const countDown = () => {
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;

	let sec = seconds < 10 ? '0' + seconds : seconds; // Pour que nous affichions toujours deux chiffres pour les secondes

	countdownDisplay.textContent = minutes + ' : ' + sec;
	if (totalSeconds > 0) {
		totalSeconds--;
	} else {
		countdownDisplay.textContent = "Time's up !";
		clearInterval(interval);
	}
};

form.addEventListener('submit', (e) => {
	e.preventDefault(); // Toujours penser à éviter le rechargement de la page avec le comportement du form

	if (isNaN(choice.value)) {
		// On vérifie que l'utilisateur saisit un chiffre
		alert('please type a number');
	} else {
		totalSeconds = choice.value * 60;
		choice.value = ''; // On vide l'input une fois le submit effectué
		clearInterval(interval); // Pour éviter les bugs si un user venait à relancer un compteur en même temps qu'un déjà fonctionnel
		interval = setInterval(countDown, 1000);
	}
});
