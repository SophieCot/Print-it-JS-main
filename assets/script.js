const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Index du slide affiché
let index = 0

// Selection des éléments du DOM
const dots = document.querySelector('.dots')
const img = document.querySelector('.banner-img')
const title = document.querySelector('#banner p')
let arrowLeft = document.querySelector('.arrow_left')
let arrowRight = document.querySelector('.arrow_right')

// Fonction pour gérer le clic sur la flèche gauche
function clickLeft() {
	arrowLeft.addEventListener('click', () => changeSlide("left"));
}
clickLeft() // Appel de la fonction pour ajouter l'événement

// Fonction pour gérer le clic sur la flèche droite
function clickRight() {
	arrowRight.addEventListener('click', () => changeSlide("right"));
}

clickRight() // Appel de la fonction pour ajouter l'événement


// Fonction pour changer le slide affiché en fonction de la direction
let changeSlide = function (type) {
	if (type === 'right') { // on clique sur le bouton de droite 
		index++; // Incrémente l'index pour passer au slide suivant
		if (index >= slides.length) ( // Si l'index dépasse le nombre de slides, on revient au premier
			index = 0
		)
	} else if (type === 'left') { // on clique sur le boutin de gauche
		index-- // Décrément l'index pour passer au slide précédent
		if (index < 0) ( // Si l'index est négatif, on passe au dernier slide
			index = slides.length - 1
		)
	}
	setIndex(index) // Met à jour l'affichage avec le nouvel index
}

// Fonction pour créer les points de navigation (dots) en bas du diaporama
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div") // Crée un nouvel élément div pour le point
		dot.classList.add("dot") // Ajoute la classe CSS pour le style
		dots.appendChild(dot) // Ajoute le point au conteneur des points
		if (i == index) ( // Ajoute une classe spéciale au point correspondant au slide courant
			dot.classList.add("dot_selected")
		)
	}
}
createDots() // Appel de la fonction pour créer les points

// Fonction pour mettre à jour l'affichage du diaporama en fonction de l'index
function setIndex(i) {
	// Vérifie que l'index est dans les limites des points de navigation
	if (i > dotPoints.length) {
		return;
	}
	index = i; // Met à jour l'index courant

	// Retire la classe 'dot_selected' de tous les points
	dotPoints.forEach((element) => {
		element.classList.remove("dot_selected")
	})
	// Ajoute la classe 'dot_selected' au point correspondant au nouvel index
	dotPoints[index].classList.add("dot_selected")
	// Met à jour l'image et le texte du slide en fonction du nouvel index
	img.src = "./assets/images/slideshow/" + slides[index].image
	title.innerHTML = slides[index].tagLine
}
// Sélection de tous les points de navigation (dots) créés précédemment
const dotPoints = document.querySelectorAll(".dots .dot")
// Ajoute un événement de clic à chaque point de navigation pour changer de slide lorsqu'un point est cliqué
for (let i = 0; i < dotPoints.length; i++) {
	dotPoints[i].addEventListener("click", (event) => {
		console.log('Jai clique sur le bouton ' + i) // Affiche dans la console quel point a été cliqué
		setIndex(i) // Met à jour l'affichage du diaporama avec le nouvel index

	})

}



