export function detectCollision(ball, gameObject) {
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;
  let leftOfBall = ball.position.x;
  let rightOfBall = ball.position.x + ball.size;

  let topOfGameObject = gameObject.position.y;
  let bottomOfGameObject = gameObject.position.y + gameObject.height;
  let leftOfGameObject = gameObject.position.x;
  let rightOfGameObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfGameObject &&
    topOfBall <= bottomOfGameObject &&
    leftOfBall >= leftOfGameObject &&
    rightOfBall <= rightOfGameObject
  ) {
    return true;
  } else {
    return false;
  }
}
