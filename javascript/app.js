'use strict';

$(document).ready(function(){
  var tank = $("#tank");
  var enemy = $("#enemy");
  var enemy_left = 0; // enemy x position
  var position = 0; //tank x position
  var bottom = 0;

  // Create a Tanker object
  var tanker = new Tanker(tank);
  $(document).bind('keyup', 'right', function() {
    // if(position < 90) {
    //   position += 10;
    //   tank.css('left', position + "vmin");
    // }
    tanker.move('right');
  })
  $(document).bind('keyup', 'left', function() {
    // if(position > 0){
    //   position -= 10;
    //   tank.css('left', position + "vmin");
    // }
    tanker.move('left');
  })
  $(document).bind('keyup', 'up', function() {
    // if(bottom <40){
    //   bottom +=10 ;
    //   tank.css('bottom', bottom + "vmin");
    // }
    tanker.move('up');
  })
  $(document).bind('keyup', 'down', function() {
    // if(bottom > 0 ){
    //   bottom -= 10;
    //   tank.css('bottom', bottom + "vmin");
    // }
    tanker.move('down');
  })
  setInterval(function()
  {
    if (enemy_left < 100){
      enemy_left += 5;
      enemy.css("left", enemy_left +"vmin");
    }

  }, 130);
});


// Identify all the objects
// 1. Tanker 2. Bullet 3. Enemy 4.GameController
// "use strict";

class Tanker{
  constructor(domElement){
    this.tankerDom = domElement;
    this.directionMapper={
      right:{cssPosition:'left',increment:true},
      left:{cssPosition:'left',increment:false},
      up:{cssPosition:'bottom',increment:true},
      down:{cssPosition:'bottom',increment:false}
  }
  }
  fire(){

  }
  move(direction){
    var directionGuide = this.directionMapper[direction];
    var position=parseInt(this.tankerDom.css(directionGuide.cssPosition));
    if (directionGuide.increment){
      position += 70;
    }else{
      position -= 70;
    }
    this.tankerDom.css(directionGuide.cssPosition, position + "px");
  }
}

// class Bullet{
//   function constructor(){
//
//   }
//   function move(){
//
//   }
//   function getCoordinates(){
//
//   }
// }
//
// class Enemy{
//   function constructor(){
//
//   }
//   function move(){
//     setInterval(function()
//     {
//       if (enemy_left < 100){
//         if (directionGuide[increment]){
//           enemy_pos+=5;
//         }else{
//           enemy_pos -= 5;
//         }
//         enemy.css(directionGuide[cssPosition], enemy_pos +"vmin");
//       }
//
//     }, 130);
//
//   }
//   function fire(){
//
//   }
// }
//
// class GameController{
//   function constructor(){
//
//   }
//   function checkCollison(){
//
//   }
//   function moveTanker(){
//
//   }
//   function moveEnemy(){
//
//   }
//   function createEnemy(){
//
//   }
//
// }
