export default class Frog extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene, x, y) {
      super(scene, x, y, 'paulfrog')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    
  
      this.setCollideWorldBounds(true)
      .setBounce(0.6)
      .setInteractive()
      .setGravityY(1000);
      // .on('pointerdown', () => {
      //   this.setVelocityY(-400)
      // })
  
      this.setDrag(300)
    }
  
}  