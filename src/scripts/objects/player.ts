export default class Player extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene, x, y) {
      super(scene, x, y, 'myShip')
      scene.add.existing(this)
      scene.physics.add.existing(this)

      this.setCollideWorldBounds(true)  
      .setInteractive()    
     this.setDrag(300)
    }


  
}  