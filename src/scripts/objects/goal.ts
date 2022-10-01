export default class Goal extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene, x, y) {
      super(scene, x, y, 'fly')
        scene.add.existing(this);
        // this.setRandomPosition(0,, 1080, 1000);
    
    }
  
}  