//import PhaserLogo from '../objects/phaserLogo'
import { Body } from 'matter'
import FpsText from '../objects/fpsText'
import Frog from '../objects/frog'
import Goal from '../objects/goal'

var frog
var goal
var goalX
var goalY


export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.fpsText = new FpsText(this)


    this.changeGoal();
   

    
  frog = new Frog(this, this.cameras.main.width /2, 0)
  frog.setScale(.125);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)

  }

  update() {
    this.checkOverlap(frog, goal)

    const cursors = this.input.keyboard.createCursorKeys();

    this.fpsText.update()

    var isOnGround = false;
    if (frog.y > 600.375) {
      isOnGround= true;      
    }

    function characterMove() {
      
      let velocity = 0;
      const leftSpeed = -160;
      const rightSpeed = 160
      let isMoving = false

      
      function jump() {
        if (isOnGround) {
        //   if (!isMoving) {
        //     frog.setVelocityY(-800)
        //   } else {
            frog.setVelocityY(-900)
          // }
        }
      }

        //goleft
      if (cursors.left.isDown) {
        if (cursors.shift.isDown) {
          //isMoving = true
          frog.setVelocityX(leftSpeed * 2)
          return;
        }
          frog.setVelocityX(leftSpeed)
      } 
        //goright
      if (cursors.right.isDown) {
        if (cursors.shift.isDown) {
          frog.setVelocityX(rightSpeed * 2)
          return;
        }
          frog.setVelocityX(rightSpeed);
      }  
       
      if (cursors.space.isDown){
        jump();
      }
      
  }

characterMove();
}    

changeGoal() {
      goalX = Phaser.Math.FloatBetween(0, this.cameras.main.width)
      goalY = Phaser.Math.FloatBetween(this.cameras.main.height * .9, this.cameras.main.height * .6)

      goal = new Goal(this, goalX, goalY)
      goal.setZ(-2);
   goal.setScale(.15)
  }  

  checkOverlap(rect1, rect2) {
      const characterBounds = rect1.getBounds()
      const goalBounds = rect2.getBounds();


      if (Phaser.Geom.Intersects.RectangleToRectangle(characterBounds, goalBounds) === true) {
        goal.destroy();
        this.changeGoal();
        console.log("Overlapped!")
        
        
      }
  }

  
}
