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

// VARIABLES Y FUNCIONES PARA ABRIR Y CERRAR MODAL DE VIDRIOS
let secVidrios = document.querySelector(".vidrio-sec");
let secProducto = document.querySelector(".prod-sec")
let abrirModal = function() {
	secVidrios.style.display = "flex";
	secProducto.style.display = "none";
}
let cerrarModal = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
}