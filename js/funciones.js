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

function lightwindows_cerrar() {
	if ( has_Class(lightw.perfil, 'visible') ) {
		lightw.perfil.classList.remove("visible");
	}
	if ( has_Class(lightw.lw_usuario_editar, 'visible') ) {
		lightw.lw_usuario_editar.classList.remove("visible");
	}
	if ( has_Class(lightw.lw_usuario_eliminar, 'visible') ) {
		lightw.lw_usuario_eliminar.classList.remove("visible");
	}
	if ( has_Class(lightw.lw_usuario_agregar, 'visible') ) {
		lightw.lw_usuario_agregar.classList.remove("visible");
	}
	if ( has_Class(lightw.bg, 'visible') ) {
		lightw.bg.classList.remove("visible");
	}
}

function lightwindow() {
	lightw.btn_perfil = document.querySelector(".js--lightwindow_btn--perfil");
	lightw.perfil = document.querySelector(".js--lightwindow--perfil");
	lightw.cerrar = document.querySelectorAll(".js--lightwindow_btn--cerrar");

	lightw.btn_editar_user = document.querySelectorAll(".js--usuario_btn--editar");
	lightw.btn_eliminar_user = document.querySelectorAll(".js--usuario_btn--eliminar");
	lightw.btn_agregar_user = document.querySelectorAll(".js--usuario_btn--agregar");


	lightw.lw_usuario_editar = document.querySelector(".js--lightwindow--usuario_editar");
	lightw.lw_usuario_eliminar = document.querySelector(".js--lightwindow--usuario_eliminar");
	lightw.lw_usuario_agregar = document.querySelector(".js--lightwindow--usuario_agregar");

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
			lightwindows_cerrar();
		});
	});

	Array.prototype.forEach.call(lightw.btn_editar_user, function(btn){
		btn.addEventListener("click", function() {
			if ( !has_Class(lightw.bg, 'visible') ) {
				lightw.bg.classList.add("visible");
			}
			if ( !has_Class(lightw.lw_usuario_editar, 'visible') ) {
				lightw.lw_usuario_editar.classList.add("visible");
			}
		});
	});

	Array.prototype.forEach.call(lightw.btn_eliminar_user, function(btn){
		btn.addEventListener("click", function() {
			if ( !has_Class(lightw.bg, 'visible') ) {
				lightw.bg.classList.add("visible");
			}
			if ( !has_Class(lightw.lw_usuario_eliminar, 'visible') ) {
				lightw.lw_usuario_eliminar.classList.add("visible");
			}
		});
	});

	Array.prototype.forEach.call(lightw.btn_agregar_user, function(btn){
		btn.addEventListener("click", function() {
			if ( !has_Class(lightw.bg, 'visible') ) {
				lightw.bg.classList.add("visible");
			}
			if ( !has_Class(lightw.lw_usuario_agregar, 'visible') ) {
				lightw.lw_usuario_agregar.classList.add("visible");
			}
		});
	});
}

document.addEventListener('keyup', function(e){
	// esc
	if ( e.code === "Escape" || e.keyCode === 27 ) {
		lightwindows_cerrar()

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