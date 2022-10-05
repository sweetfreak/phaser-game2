import Player from '../objects/player'
import Enemy from '../objects/enemy'
var player;
var enemy;
var enemy2;

var enemyStartY = -100;
var enemyStartX = 100;
export default class MainScene extends Phaser.Scene {
  //fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    //this.fpsText = new FpsText(this)
    let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg')
    let scaleX = this.cameras.main.width / image.width
    let scaleY = this.cameras.main.height / image.height
    let scale = Math.max(scaleX, scaleY)
    image.setScale(scale).setScrollFactor(0)

    //PLAYER
    player = new Player(this, this.cameras.main.width /2, this.cameras.main.height)
    player.setScale(.25);
    //player.body.setGravity(false)

    //ENEMY
    enemy = new Enemy(this, enemyStartX, enemyStartY);
    enemy.setScale(.25);

    // function moveEnemies(target) {
    //   target.setVelocityY(100)
    // }
    // moveEnemies(enemy);

  }

  update() {
   // this.checkOverlap(player, enemy)

    const cursors = this.input.keyboard.createCursorKeys();

    //this.fpsText.update()

   function checkEnemyLocation() {
    if (enemy.y > 1000) {
      enemy.setPosition(enemyStartX, enemyStartY)
    }
   }

    function characterMove() {
      const leftSpeed = -200;
      const rightSpeed = 200;
      const upSpeed = -200;
      const downSpeed = 200;

        //goleft
      if (cursors.left.isDown) {
        if (cursors.shift.isDown) {
          //isMoving = true
          player.setVelocityX(leftSpeed * 2)
          return;
        }
          player.setVelocityX(leftSpeed)
      } 
        //goright
      if (cursors.right.isDown) {
        if (cursors.shift.isDown) {
          player.setVelocityX(rightSpeed * 2)
          return;
        }
          player.setVelocityX(rightSpeed);
      }  
      if (cursors.up.isDown) {
        if (cursors.shift.isDown) {
          player.setVelocityY(upSpeed * 2)
          return;
        }
          player.setVelocityY(upSpeed);
      }  
      if (cursors.down.isDown) {
        if (cursors.shift.isDown) {
          player.setVelocityY(downSpeed * 2)
          return;
        }
          player.setVelocityY(downSpeed);
      }  
      
  }

characterMove();
checkEnemyLocation();
}    


  // checkOverlap(rect1, rect2) {
  //     const characterBounds = rect1.getBounds()
  //     const goalBounds = rect2.getBounds();


  //     if (Phaser.Geom.Intersects.RectangleToRectangle(characterBounds, goalBounds) === true) {
  //       player.destroy();

  //       console.log("Overlapped!")
        
        
  //     }
  // }

  
}
