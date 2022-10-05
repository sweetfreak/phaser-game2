export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('asteroid', 'assets/img/asteroid.png')
    this.load.image('myShip', 'assets/img/myShip.png')
    this.load.image('enemyShip', 'assets/img/enemyShip.png')
    this.load.image('bg', 'assets/img/spaceBg.png')

  }

  create() {
    this.scene.start('MainScene')
    this.add.image(720, 480, 'bg')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
