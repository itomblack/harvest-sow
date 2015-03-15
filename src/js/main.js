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

	function makeActive(chosenRingActive, ringPrefix) {
		chosenRingActive.classList.remove("svg-inactive");
		chosenRingActive.classList.add(ringPrefix + "-active");
	}


	function makeInactive(chosenRingInactive) {
		chosenRingInactive.classList.add("svg-inactive");
		chosenRingInactive.classList.remove("harvest-active");
	}

	selectedCropName = cropTitle;

	//hide menu
	menuCrops.classList.toggle( 'visible' );

	//search through vegData to find matching name
	for( i=0; i<vegData.length; i++) {

		if (selectedCropName == vegData[i].name) {

					selectedCropInside = vegData[i].inside;
					selectedCropOutside = vegData[i].outside;
					selectedCropHarvest = vegData[i].harvest;

					for( x=0; x< 12; x++) {

						var selectedInsideSegment = document.getElementById('sow-inside-' + x);
						var selectedOutsideSegment = document.getElementById('sow-outside-' + x);
						var selectedHarvestSegment = document.getElementById('harvest-' + x);

						if (selectedCropInside.charAt(x) == "1") {
							makeActive(selectedInsideSegment, "sow-inside");
						}
						else {
							makeInactive(selectedInsideSegment);
						}

						if (selectedCropOutside.charAt(x) == "1") {
							makeActive(selectedOutsideSegment, "sow-outside" );
						}
						else {
							makeInactive(selectedOutsideSegment);
						}

						if (selectedCropHarvest.charAt(x) == "1") {
							makeActive(selectedHarvestSegment);
						}
						else {
							makeInactive(selectedHarvestSegment, "harvest");
						}

			}

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