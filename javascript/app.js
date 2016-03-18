// // "use strict";
// $(document).ready(function(){
//   var tank = $("#tank");
//   var position = 0;
//   var bottom = 0;
//   $(document).bind('keyup', 'right', function() {
//     if(position < 90) {
//       position += 10;
//       tank.css('left', position + "vmin");
//     }
//   })
//   $(document).bind('keyup', 'left', function() {
//     if(position > 0){
//       position -= 10;
//       tank.css('left', position + "vmin");
//     }
//   })
//   $(document).bind('keyup', 'up', function() {
//     if(bottom < 40){
//       bottom +=10 ;
//       tank.css('bottom', bottom + "vmin");
//     }
//   })
//   $(document).bind('keyup', 'down', function() {
//     if(bottom > 0 ){
//       bottom -= 10;
//       tank.css('bottom', bottom + "vmin");
//     }
//   })
// });


// Identify all the objects
// 1. Tanker 2. Bullet 3. Enemy 4.GameController
"use strict";

class Tanker{
  function constructor(){

  }
  function fire(){

  }
  function move(direction){

  }
}

class Bullet{
  function constructor(){

  }
  function move(){

  }
  function getCoordinates(){

  }
}

class Enemy{
  function constructor(){

  }
  function move(){

  }
  function fire(){

  }
}

class GameController{
  function constructor(){

  }
  function checkCollison(){

  }
  function moveTanker(){

  }
  function moveEnemy(){

  }
  function createEnemy(){

  }

}
