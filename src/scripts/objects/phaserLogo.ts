


export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
 
  
  constructor(scene, x, y) {
    super(scene, x, y, 'paulfrog')
    scene.add.existing(this)
    scene.physics.add.existing(this)


    this.setCollideWorldBounds(true)
      .setBounce(0.6)
      .setGravity(1)
      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityY(-400)
      })
      .on('pointerover', () => {
        // this.setVelocityX(200)
        this.setRandomPosition(1);
      })
    
  }

}
