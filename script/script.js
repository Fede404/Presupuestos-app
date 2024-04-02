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

// VARIABLES Y FUNCIONES PARA ABRIR Y CERRAR MODALLES 
let secVidrios = document.querySelector(".vidrio-sec");
let secProducto = document.querySelector(".prod-sec")
let secPrecios = document.querySelector(".precios-sec");
let abrirModalVidrio = function() {
	secVidrios.style.display = "flex";
	secProducto.style.display = "none";
	secPrecios.style.display = "none";
}
let cerrarModalVidrio = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
	secPrecios.style.display = "none";
}
let abrirModalPrecio = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "none";
	secPrecios.style.display = "flex";
}
let cerrarModalPrecio = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
	secPrecios.style.display = "none";
}

