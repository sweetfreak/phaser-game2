export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene, x, y) {
      super(scene, x, y, 'asteroid')
        scene.add.existing(this);
        scene.physics.add.existing(this)
        // this.setRandomPosition(0, 1080, 1000);
        this.setVelocityY(300);
      
    }
  
}  