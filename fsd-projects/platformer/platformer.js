$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,700,290,20);
    createPlatform(700,600,300,20);
    createPlatform(200,500,290,20);
    createPlatform(500,303,270,20);
    createPlatform(1000,400,270,20);
    createPlatform(900,200,270,20);


    // TODO 3 - Create Collectables
     createCollectable("grace", 1300,680,0.5,0.7);
     createCollectable("diamond",200, 170, 0.5, 0.7);
     createCollectable("database", 0, 600, 0.5, 0.7);
     createCollectable("kennedi", 300, 600, 0.5, 0.7);
     createCollectable("max", 600, 900, 0.5, 0.6);     
    
     // TODO 4 - Create Cannons
      createCannon("top", 200, 400);
      createCannon("bottom", 600, 900);
      createCannon("right", 400, 500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
