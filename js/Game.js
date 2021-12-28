class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    this.playerMoving=false;
    
    
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    p1c1= createSprite(50, height/3);
    p1c1.addImage("coin1", coin1);
   
    p1c2= createSprite( 75, height/3);
    p1c2.addImage("coin1", coin1);
   
    p1c3= createSprite(100, height/3);
    p1c3.addImage("coin1", coin1);
   
    p1c4= createSprite(125, height/3);
    p1c4.addImage("coin1", coin1);
   
    p1c5= createSprite(150, height/3);
    p1c5.addImage("coin1", coin1);
   
    p1c6= createSprite(175, height/3);
    p1c6.addImage("coin1", coin1);
   
    p1c7= createSprite(200, height/3);
    p1c7.addImage("coin1", coin1);
   

    p2c1 = createSprite(width-200, height/3);
    p2c1.addImage("coin2", coin2);
    
    p2c2 = createSprite(width-175, height/3);
    p2c2.addImage("coin2", coin2);

   
    p2c3 = createSprite(width -150, height/3);
    p2c3.addImage("coin2", coin2);
    
    p2c4 = createSprite(width - 125, height/3);
    p2c4.addImage("coin2", coin2);
    
    p2c5 = createSprite(width - 100, height/3);
    p2c5.addImage("coin2", coin2);
    
    p2c6 = createSprite(width-75 , height/3);
    p2c6.addImage("coin2", coin2);
    
    p2c7 = createSprite(width-50 , height/3);
    p2c7.addImage("coin2", coin2);
    //p1 = [p, car2];

    
    

  }
  

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

    //C39
    this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);

    

    
  }

  play() {
    this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
   // player.getCarsAtEnd();

    if (allPlayers !== undefined) {
      image(board_img, width/3, 100, width/3, height/1.2);

      

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        
       

        
        
      }

      
        
      

      drawSprites();
    }
}

  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
        
      });
      window.location.reload();
    });
  }

  
  
    
  

    

  

  
  
  showRank() {
    swal({
      title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
      text: "You reached the finish line successfully",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  gameOver() {
    swal({
      title: `Game Over`,
      text: "Oops you lost the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
      
    });
  }
}

