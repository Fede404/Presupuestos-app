// VARIABLES Y FUNCIONES PARA ABRIR Y CERRAR LISTAS DE NAV
let prodDiv = document.querySelector("#prodList");
let vidrioDiv = document.querySelector("#vidrioList")

let displayChange = function () {
	if (prodDiv.style.display === "none") {
		prodDiv.style.display = "flex";
	} else {
		prodDiv.style.display = "none";
	}
};

let displayChange2 = function () {
	if (vidrioDiv.style.display === "none") {
		vidrioDiv.style.display = "flex";
	} else {
		vidrioDiv.style.display = "none";
	}
};
