// VARIABLES Y FUNCIONES PARA ABRIR Y CERRAR LISTA DE NAV (SELECCIONAR PRODUCTO)
let prodDiv = document.querySelector("#prodList");

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

let displayChange2 = function () {
	if (secVidrios.style.display === "none") {
		secVidrios.style.display = "flex";
		secProducto.style.display = "none";
		secPrecios.style.display = "none";
	} else {
		secVidrios.style.display = "none";
		secProducto.style.display = "flex";
		secPrecios.style.display = "none";
	}
};
let cerrarModalVidrio = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
	secPrecios.style.display = "none";
}
let displayChange3 = function () {
	if (secPrecios.style.display === "none") {
		secPrecios.style.display = "flex";
		secProducto.style.display = "none";
		secVidrios.style.display = "none";
	} else {
		secPrecios.style.display = "none";
		secProducto.style.display = "flex";
		secVidrios.style.display = "none";
	}
};
let cerrarModalPrecio = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
	secPrecios.style.display = "none";
}

