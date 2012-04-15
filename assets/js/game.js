
window.onload = function() {


	var WIDTH = 1280, HEIGHT = 800;

    // Initialize Crafty
    Crafty.init(WIDTH, HEIGHT);

    // set game area to right size for the screen
    resizeGameArea();

    // Load first scene
    Crafty.scene("Loading");

    window.addEventListener("resize", resizeGameArea, false);

    // TODO refactor this function to be general and working in all width/height rations
	function resizeGameArea() {
		var gameWidth = window.innerWidth;
		var gameHeight = window.innerHeight;
		var scaleToFitX = gameWidth / 1280;
		var scaleToFitY = gameHeight / 800;

		//log("scaleToFitX: " + scaleToFitX + "scaleToFitY: " + scaleToFitY);

		var currentScreenRatio = WIDTH / HEIGHT;
		var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

		//$('#cr-stage').css("position", "absolute !important"); 
		
		//$('#cr-stage').css("-webkit-transform", "scale("+optimalRatio+")");

		//var diffH = HEIGHT-(HEIGHT*optimalRatio);
    	//log("HEIGHT: " + HEIGHT + " diffY: " + diffH+ ' :: ' + HEIGHT*optimalRatio)
    	//$('#cr-stage').css("top", -diffH/2);

    	//var diffW = WIDTH-(WIDTH*optimalRatio);
	    //log("WIDTH: " + WIDTH + " diffW: " + diffW + ' :: ' + WIDTH*optimalRatio)
	    //$('#cr-stage').css("left", -diffW/2);

		// $canvas.css({ "width": window.innerWidth + "px", "height": window.innerHeight + "px" });
    	// canvas.style.width = window.innerWidth + 'px';
    	// canvas.style.height = window.innerHeight + 'px';
	}

};