//On va chercher les différents éléments de notre page
const pages = document.querySelectorAll(".page")
const header = document.querySelector(".indication")
const nbPages = pages.length // Nombre de pages du formulaire
let pageActive = 1





// Evenement sur la touche coté droite
//window.addEventListener("keydown", (event) => {
//  if (event.isComposing || event.keyCode === 39) {
//  	pageSuivante();
//    return;
//  }
  // do something
//});



// Evenement sur la touche coté gauche
//window.addEventListener("keydown", (event) => {
//  if (event.isComposing || event.keyCode === 37) {
//  	pagePrecedante();
//    return;
//  }
  // do something
//});








//On attend le chargement de la page
window.onload = () => {



	//On affiche la première page du formlaire
	document.querySelector(".page").style.display = "initial"

	//On affiche le numéro des pages dans l'entête
	//On parcourt la liste des pages
	pages.forEach((page, index) => {
		//On créer l'élément "numéro de page"
		let element = document.createElement("div")
		element.classList.add("page-num")
		element.id = "num" + (index + 1)
		if(pageActive === index + 1){
			element.classList.add("active")
		}
		element.innerHTML = index + 0
		header.appendChild(element)
	})


	// On gère les boutons "suivant"
	let boutonsNext = document.querySelectorAll(".next")

	for(let boutonNext of boutonsNext) {
		boutonNext.addEventListener("click", pageSuivante)
	}

	// On gère les boutons "précédent"
	let boutonsPrevious = document.querySelectorAll(".previous")

	for(let boutonPrevious of boutonsPrevious) {
		boutonPrevious.addEventListener("click", pagePrecedante)
	}
}


/*
** Cette fonction fait avancer le formulaire d'une page
*/


function pageSuivante() {
	// On masque toutes les pages
	for(let page of pages) {
		page.style.display = "none"
	}

	// On affiche la page suivante
	this.parentElement.parentElement.nextElementSibling.style.display = "initial"

	//On remonte tout en haut de la page
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

	// On "désactive" la page active
	document.querySelector(".active").classList.remove("active")

	// On incrémente pageActive
	pageActive++

	// On "active" le nouveau numéro
	document.querySelector("#num"+pageActive).classList.add("active")
}




function pagePrecedante() {
	// On masque toutes les pages
	for(let page of pages) {
		page.style.display = "none"
	}

	// On affiche la page précédente
	this.parentElement.parentElement.previousElementSibling.style.display = "initial"

	//On remonte tout en haut de la page
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

	// On "désactive" la page active
	document.querySelector(".active").classList.remove("active")

	// On incrémente pageActive
	pageActive--

	// On "active" le nouveau numéro
	document.querySelector("#num"+pageActive).classList.add("active")
}
















