import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("ball_img");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
    this.reset();
  }

  reset() {
    this.position = {
      x: 10,
      y: 400
    };

    this.speed = {
      x: 4,
      y: -2
    };

    this.size = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(dt) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //collision between wall in left and right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0)
      this.speed.x = -this.speed.x;

    //collision between wall in top and bottom
    if (this.position.y < 0) this.speed.y = -this.speed.y;

    //Game Over condition
    if (this.position.y + this.size >= this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    //colliton between ball and paddle
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
