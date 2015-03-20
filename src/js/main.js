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
	},
	{
		name: "Broccoli",
		inside: "011100000000",
		outside: "000111000000",
		harvest: "000000011000"
	},
	{
		name: "Broad-Bean",
		inside: "110000000001",
		outside: "001110000000",
		harvest: "000011110000"
	},
	{
		name: "Cabbage",
		inside: "000000000000",
		outside: "000001100000",
		harvest: "110000000011"
	},
	{
		name: "Carrot",
		inside: "000000000000",
		outside: "011111110000",
		harvest: "000001111110"
	},
	{
		name: "Cauliflower",
		inside: "000000000000",
		outside: "000010000000",
		harvest: "000000001100"
	},
	{
		name: "Courgette",
		inside: "000110000000",
		outside: "000011000000",
		harvest: "000000111100"
	},
	{
		name: "Chilli",
		inside: "011100000000",
		outside: "000000000000",
		harvest: "000000011100"
	},
	{
		name: "French-Bean",
		inside: "000110000000",
		outside: "000011000000",
		harvest: "0000001111000"
	},
	{
		name: "Garlic",
		inside: "000000000000",
		outside: "111100000000",
		harvest: "000001100000"
	}
];


/************ MENUS EVENT LISTENERS ************/

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


/************ CROP ITEM EVENT LISTENERS ************/
var cropSelection = document.getElementsByClassName('menu-crops-item');
for( i=0; i<cropSelection.length; i++) {

	cropSelection[i].addEventListener("click", function(){

		selectedCropName = String(this.innerHTML)

		.split('_')[1] //splits at first _ character and takes 2nd half
		.split('.')[0]//splits at first . character and takes 1st half
		;

		processCrop(selectedCropName);

	});

}






/************ CLICK CROPS ************/

function processCrop(selectedCropName) {

	function makeActive(chosenRingActive, ringPrefix) {
		chosenRingActive.classList.remove("svg-inactive");
		chosenRingActive.classList.add(ringPrefix + "-active");
	}


	function makeInactive(chosenRingInactive) {
		chosenRingInactive.classList.add("svg-inactive");
		chosenRingInactive.classList.remove("harvest-active");
	}

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

			//load main central image

			document.getElementById('main-crop-holder')
			.innerHTML = "<img src='img/crops-coloured/crops_" + vegData[i].name + ".svg'/> <h3>" + vegData[i].name + "</h3>";

		}

	}

} // /processCrops




/************ OPEN MENUS FUNCTION ************/

function menuOpen( menuChoice ) {
	var mainMenuId = menuChoice.srcElement.id
	.replace( 'main-nav-','' )
	.replace( 'close-menu-','' );

	var menuSelection = document.getElementById( 'menu-' + mainMenuId );
	menuSelection.classList.toggle( 'visible' );
	
}