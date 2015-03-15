var mainNavCrops = document.getElementById('main-nav-crops'),
	mainNavMonths = document.getElementById('main-nav-months'),
	svgSow = document.getElementById('sow'),
	svgHarvest = document.getElementById('harvest'),
	menuCrops = document.getElementById('menu-crops'),
	menuMonths = document.getElementById('menu-months'),
	menuCloseCrops = document.getElementById('close-menu-crops'),
	menuCloseMonths = document.getElementById('close-menu-months'),
	selectedCropName = "",
	selectedCropInside = "",
	selectedCropOutside = "",
	selectedCropHarvest = ""
	;

var vegData = [
	{
		name: "Asparagus",
		inside: "011100000000",
		outside: "000010000000",
		harvest: "000011000000"
	},
	{
		name: "Aubergine",
		inside: "011100000000",
		outside: "000011000000",
		harvest: "000000111100"
	},
	{
		name: "Beetroot",
		inside: "000000000000",
		outside: "001111000000",
		harvest: "000001111100"
	}
];

/************ OPEN AND CLOSE MENUS ************/

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



/************ CLICK CROPS ************/

function processCrop(cropTitle) {

	selectedCropName = cropTitle;

	//hide menu
	menuCrops.classList.toggle( 'visible' );

	//search through vegData to find matching name
	for( i=0; i<vegData.length; i++) {

		if (selectedCropName == vegData[i].name) {

			selectedCropInside = vegData[i].inside;
			selectedCropOutside = vegData[i].outside;
			selectedCropHarvest = vegData[i].harvest;

			var testColour = document.getElementById('sow-outside-dec');
			console.log(testColour.fill);

		}

	}


	

	//highlight graph parts dependant on data set

	

}


//Add event listenr for each crop menu item
var cropSelection = document.getElementsByClassName('menu-crops-item');
for( i=0; i<cropSelection.length; i++) {

	cropSelection[i].addEventListener("click", function(){
		processCrop(this.title);
	});

}



/************ OPEN MENUS FUNCTION ************/

function menuOpen( menuChoice ) {
	var mainMenuId = menuChoice.srcElement.id
	.replace( 'main-nav-','' )
	.replace( 'close-menu-','' );

	var menuSelection = document.getElementById( 'menu-' + mainMenuId );
	menuSelection.classList.toggle( 'visible' );
	
}