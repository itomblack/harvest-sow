var mainNavCrops = document.getElementById('main-nav-crops'),
	mainNavMonths = document.getElementById('main-nav-months'),
	svgSow = document.getElementById('sow'),
	svgHarvest = document.getElementById('harvest'),
	menuCrops = document.getElementById('menu-crops'),
	menuMonths = document.getElementById('menu-months'),
	menuCloseCrops = document.getElementById('close-menu-crops'),
	menuCloseMonths = document.getElementById('close-menu-months');


mainNavCrops.addEventListener("click", function(){
	menuOpen(event);
});

mainNavMonths.addEventListener("click", function(){
	menuOpen(event);
});

menuCloseCrops.addEventListener("click", function(){
	menuOpen(event);
});

menuCloseMonths.addEventListener("click", function(){
	menuOpen(event);
});



function menuOpen( menuChoice ) {
	var mainMenuId = menuChoice.srcElement.id
	.replace( 'main-nav-','' )
	.replace( 'close-menu-','' );

	var menuSelection = document.getElementById( 'menu-' + mainMenuId );
	menuSelection.classList.toggle( 'visible' );
	
}