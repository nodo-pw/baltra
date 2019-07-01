// Codigo js para página Baltra

document.createElement( "picture" );

//
// Variables
//
//

var enc = {};
var men = {};
var lightw = {};

//
// Helpers
//
//

function $sel( sel ) {
	return document.querySelector( sel );
}

function has_Class(el, cls) {
	return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function $selall( sel ) {
	return document.querySelectorAll( sel );
}

function findAncestor (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}


//
// Funciones generales
//
//

function encabezado(){
	enc.btn = document.querySelector(".js--encabezado__icono");
	enc.menu = document.querySelector(".js--encabezado__perfil");

	if ( enc.btn ) {
		enc.btn.addEventListener("click", function () {
			enc.menu.classList.toggle('visible');
		});
	}
}
function menu(){
	men.btns = document.querySelectorAll(".js--menu__btn");
	men.hamb = document.querySelectorAll(".js--menu__hamb");
	men.sidebar = document.querySelector(".js--sidebar");

	Array.prototype.forEach.call(men.btns, function(btn){
		btn.addEventListener("click", function() {
			men.data = btn.getAttribute("data-menu");
			men.submenu = document.querySelector(".js--submenu[data-menu='" + men.data + "']");
			if ( men.submenu ) {
				men.btn = btn.querySelector(".menu__link");
				men.btn.classList.toggle("visible");
				men.submenu.classList.toggle("visible");
			}
		});
	});

	Array.prototype.forEach.call(men.hamb, function(hamb){
		hamb.addEventListener("click", function () {
			men.sidebar.classList.toggle("visible");

			if ( has_Class(men.sidebar, 'visible') ) {
				lightw.bg.classList.add("visible");
			} else {
				lightw.bg.classList.remove("visible");
			}
		});
	});
}
function lightwindow() {
	lightw.btn_perfil = document.querySelector(".js--lightwindow_btn--perfil");
	lightw.perfil = document.querySelector(".js--lightwindow--perfil");
	lightw.cerrar = document.querySelectorAll(".js--lightwindow_btn--cerrar");

	if ( lightw.btn_perfil ) {
		lightw.btn_perfil.addEventListener('click', function () {
			lightw.perfil.classList.toggle("visible");
			if ( has_Class(lightw.perfil, 'visible') && !has_Class(lightw.bg, 'visible')  ) {
				lightw.bg.classList.add("visible");
			}
			if ( !has_Class(lightw.perfil, 'visible') && has_Class(lightw.bg, 'visible')  ) {
				lightw.bg.classList.remove("visible");
			}
		});
	}

	Array.prototype.forEach.call(lightw.cerrar, function(btn){
		btn.addEventListener("click", function() {
			if ( has_Class(lightw.perfil, 'visible') || has_Class(lightw.bg, 'visible') ) {
				lightw.perfil.classList.remove("visible");
				lightw.bg.classList.remove("visible");
			}
		});
	});
}

document.addEventListener('keyup', function(e){
	console.log(e.keyCode)
	// esc
	if ( e.code === "Escape" || e.keyCode === 27 ) {
		if ( has_Class(lightw.perfil, 'visible') || has_Class(lightw.bg, 'visible') ) {
			lightw.perfil.classList.remove("visible");
			lightw.bg.classList.remove("visible");
		}

		if ( has_Class(enc.menu, 'visible') ) {
			enc.menu.classList.remove('visible');
		}
	}
});

document.addEventListener('DOMContentLoaded', function(){
	encabezado();
	menu();
	lightwindow();

	lightw.bg = document.querySelector(".js--lightwindow__bg");
});