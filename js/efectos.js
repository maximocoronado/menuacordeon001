$(document).ready(function() {
	$('.menu li:has(ul)').click(function(e){
		e.preventDefault();
		
		if ($(this).hasClass('activado')){
						
		} else {
			$('.menu li').removeClass('activado');
			$('.menu li ul').slideUp();			
			$('.menu li').find('.derecha').removeClass('fa-chevron-up').addClass('fa-chevron-down');
			
			$(this).addClass('activado')
			$(this).find('.derecha').removeClass('fa-chevron-down');
			$(this).children('ul').slideDown();			
		}
	});
	
	$('.menu li ul li').click(function(){
		if ($(this).hasClass('subactivado')){
			
		} else {
			$('.menu li ul li').removeClass('subactivado');			
			$(this).addClass('subactivado')
		}		
	});
	
	$('.menu li ul li a').click(function(){
		//window.location.href = $(this).attr("href");
		document.getElementById('mworkspace').src = $(this).attr("href");		
	});
	
	/*--PARA EL MENU SUPERIOR EN PANTALLAS PEQUEÑAS--*/
	// $('.btn-menu').click(function(){
		// $('.contenedor-menu .menu').slideToggle();
	// });
	
	 // $(window).resize(function(){
		// if ($(document).width() > 450){
			// $('.contenedor-menu .menu').css({'display' : 'block'});
		// }
		
		// if ($(document).width() < 450){
			// $('.contenedor-menu .menu').css({'display' : 'none'});
			// $('.menu li').removeClass('activado');
			// $('.menu li ul').slideUp();
			// $('.menu li').find('.derecha').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		// }
	// }); 
	/*--FIN PARA EL MENU SUPERIOR EN PANTALLAS PEQUEÑAS--*/
});

function IrIframe(m,e) {
	// alert("1");
	
	if (e == "#") {
		
	} else {
		document.getElementById('mworkspace').src = e; //--Inicio y demas del 1er. nivel
		
		$('.menu li').removeClass('activado');
		$('.menu li ul').slideUp();			
		$('.menu li').find('.derecha').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		
		document.getElementById(m).classList.add('activado');
	}
}