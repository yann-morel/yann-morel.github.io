const logo = document.querySelector('section.logo');

const FPS = 60;

// Position et vitesse initiales
let xPosition = 50;
let yPosition = 50;
let xSpeed = 2;
let ySpeed = 2;

function update() {
	if (!logo) return;
	logo.style.left = xPosition + 'px';
	logo.style.top = yPosition + 'px';
}

setInterval(() => {
	if (!logo) return;

	// Utilisation de || corrects au lieu de ││
	if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
		xSpeed = -xSpeed;
	}
	
	if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
		ySpeed = -ySpeed;
	}
	
	xPosition += xSpeed;
	yPosition += ySpeed;
	
	update();
}, 1000 / FPS);