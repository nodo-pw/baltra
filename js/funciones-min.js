document.createElement("picture");var enc={},men={},lightw={};function $sel(i){return document.querySelector(i)}function has_Class(i,e){return i.className&&new RegExp("(\\s|^)"+e+"(\\s|$)").test(i.className)}function $selall(i){return document.querySelectorAll(i)}function findAncestor(i,e){for(;(i=i.parentElement)&&!i.classList.contains(e););return i}function encabezado(){enc.btn=document.querySelector(".js--encabezado__icono"),enc.menu=document.querySelector(".js--encabezado__perfil"),enc.btn&&enc.btn.addEventListener("click",function(){enc.menu.classList.toggle("visible")})}function menu(){men.btns=document.querySelectorAll(".js--menu__btn"),men.hamb=document.querySelectorAll(".js--menu__hamb"),men.sidebar=document.querySelector(".js--sidebar"),Array.prototype.forEach.call(men.btns,function(i){i.addEventListener("click",function(){men.data=i.getAttribute("data-menu"),men.submenu=document.querySelector(".js--submenu[data-menu='"+men.data+"']"),men.submenu&&(men.btn=i.querySelector(".menu__link"),men.btn.classList.toggle("visible"),men.submenu.classList.toggle("visible"))})}),Array.prototype.forEach.call(men.hamb,function(i){i.addEventListener("click",function(){men.sidebar.classList.toggle("visible"),has_Class(men.sidebar,"visible")?lightw.bg.classList.add("visible"):lightw.bg.classList.remove("visible")})})}function lightwindows_cerrar(){lightw.perfil&&has_Class(lightw.perfil,"visible")&&lightw.perfil.classList.remove("visible"),lightw.lw_usuario_editar&&has_Class(lightw.lw_usuario_editar,"visible")&&lightw.lw_usuario_editar.classList.remove("visible"),lightw.lw_usuario_eliminar&&has_Class(lightw.lw_usuario_eliminar,"visible")&&lightw.lw_usuario_eliminar.classList.remove("visible"),lightw.lw_usuario_agregar&&has_Class(lightw.lw_usuario_agregar,"visible")&&lightw.lw_usuario_agregar.classList.remove("visible"),lightw.lw_config_actualizar&&has_Class(lightw.lw_config_actualizar,"visible")&&lightw.lw_config_actualizar.classList.remove("visible"),lightw.bg&&has_Class(lightw.bg,"visible")&&lightw.bg.classList.remove("visible")}function lightwindow(){lightw.btn_perfil=document.querySelector(".js--lightwindow_btn--perfil"),lightw.perfil=document.querySelector(".js--lightwindow--perfil"),lightw.cerrar=document.querySelectorAll(".js--lightwindow_btn--cerrar"),lightw.btn_editar_user=document.querySelectorAll(".js--usuario_btn--editar"),lightw.btn_eliminar_user=document.querySelectorAll(".js--usuario_btn--eliminar"),lightw.btn_agregar_user=document.querySelectorAll(".js--usuario_btn--agregar"),lightw.btn_actualizar_config=document.querySelectorAll(".js--config_btn--actualizar"),lightw.lw_usuario_editar=document.querySelector(".js--lightwindow--usuario_editar"),lightw.lw_usuario_eliminar=document.querySelector(".js--lightwindow--usuario_eliminar"),lightw.lw_usuario_agregar=document.querySelector(".js--lightwindow--usuario_agregar"),lightw.lw_config_actualizar=document.querySelector(".js--lightwindow--configuraciones"),lightw.btn_perfil&&lightw.btn_perfil.addEventListener("click",function(){lightw.perfil.classList.toggle("visible"),has_Class(lightw.perfil,"visible")&&!has_Class(lightw.bg,"visible")&&lightw.bg.classList.add("visible"),!has_Class(lightw.perfil,"visible")&&has_Class(lightw.bg,"visible")&&lightw.bg.classList.remove("visible")}),Array.prototype.forEach.call(lightw.cerrar,function(i){i.addEventListener("click",function(){lightwindows_cerrar()})}),Array.prototype.forEach.call(lightw.btn_editar_user,function(i){i.addEventListener("click",function(){has_Class(lightw.bg,"visible")||lightw.bg.classList.add("visible"),has_Class(lightw.lw_usuario_editar,"visible")||lightw.lw_usuario_editar.classList.add("visible")})}),Array.prototype.forEach.call(lightw.btn_eliminar_user,function(i){i.addEventListener("click",function(){has_Class(lightw.bg,"visible")||lightw.bg.classList.add("visible"),has_Class(lightw.lw_usuario_eliminar,"visible")||lightw.lw_usuario_eliminar.classList.add("visible")})}),Array.prototype.forEach.call(lightw.btn_agregar_user,function(i){i.addEventListener("click",function(){has_Class(lightw.bg,"visible")||lightw.bg.classList.add("visible"),has_Class(lightw.lw_usuario_agregar,"visible")||lightw.lw_usuario_agregar.classList.add("visible")})}),Array.prototype.forEach.call(lightw.btn_actualizar_config,function(i){i.addEventListener("click",function(){has_Class(lightw.bg,"visible")||lightw.bg.classList.add("visible"),has_Class(lightw.lw_config_actualizar,"visible")||lightw.lw_config_actualizar.classList.add("visible")})})}document.addEventListener("keyup",function(i){"Escape"!==i.code&&27!==i.keyCode||(lightwindows_cerrar(),has_Class(enc.menu,"visible")&&enc.menu.classList.remove("visible"))}),document.addEventListener("DOMContentLoaded",function(){encabezado(),menu(),lightwindow(),lightw.bg=document.querySelector(".js--lightwindow__bg")});