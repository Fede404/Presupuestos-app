// VARIABLES DIVS MODALES Y LISTA DE PRODUCTO
let prodDiv = document.querySelector("#prodList");
let secVidrios = document.querySelector(".vidrio-sec");
let secProducto = document.querySelector(".prod-sec")
let secPrecios = document.querySelector(".precios-sec");
let secPresupuestos = document.querySelector(".hojaPresupuesto-sec")

//FUNCIÓN ALTERNAR DIV LISTA DE PRODUCTOS CON BOTÓN DE NAV
let displayChange = function () {
	if (prodDiv.style.display === "none") {
		prodDiv.style.display = "flex";
	} else {
		prodDiv.style.display = "none";
	}
};

// FUNCIÓN ALTERNAR ENTRE DIVS PRINCIPAL Y VIDRIOS CON BOTÓN DE NAV
let displayChange2 = function () {
	if (secVidrios.style.display === "none") {
		secVidrios.style.display = "flex";
		secProducto.style.display = "none";
		secPrecios.style.display = "none";
		secPresupuestos.style.display = "none";
	} else {
		secVidrios.style.display = "none";
		secProducto.style.display = "flex";
		secPrecios.style.display = "none";
		secPresupuestos.style.display = "none";
	}
};

// FUNCIÓN CERRAR MODAL VIDRIO CON BOTÓN VOLVER
let cerrarModalVidrio = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
	secPrecios.style.display = "none";
	secPresupuestos.style.display = "none";
}

// FUNCIÓN ALTERNAR ENTRE DIVS PRINCIPAL Y PRCIOS CON BOTÓN DE NAV
let displayChange3 = function () {
	if (secPrecios.style.display === "none") {
		secPrecios.style.display = "flex";
		secProducto.style.display = "none";
		secVidrios.style.display = "none";
		secPresupuestos.style.display = "none";
	} else {
		secPrecios.style.display = "none";
		secProducto.style.display = "flex";
		secVidrios.style.display = "none";
		secPresupuestos.style.display = "none";
	}
};

// FUNCIÓN CERRAR MODAL DE PRECIO
let cerrarModalPrecio = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
	secPrecios.style.display = "none";
	secPresupuestos.style.display = "none";
}

// FUNCIÓN ABRIR MODAL PRESUPUESTO CON BOTÓN DE HEADER
let abrirModalPresupuesto = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "none";
	secPrecios.style.display = "none";
	secPresupuestos.style.display = "flex";
}

// FUNCIÓN CERRAR MODAL PRESUPUESTO
let cerrarModalPresupuesto = function() {
	secVidrios.style.display = "none";
	secProducto.style.display = "flex";
	secPrecios.style.display = "none";
	secPresupuestos.style.display = "none";
} 

