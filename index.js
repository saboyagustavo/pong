class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(width, height) {
    this.position = new Vector;
    this.size = new Vector(width, height);
  }
}

class Ball extends Rectangle {
  constructor() {
    super(10, 10);
    this.velocity = new Vector;
  }
}

const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const ball = new Ball;
ball.velocity.x = 100;
ball.velocity.y = 100;


// calculate how much time has elapsed since the last requestAnimationFrame
let lastTime;
function frameCallback(milliSeconds) {
  if (lastTime) {
    const difference = milliSeconds - lastTime;
    update(difference / 1000);
  }

  lastTime = milliSeconds;

  //requestAnimationFrame is a function that takes a callback
  // then calls callback for the next time the browser is ready to draw
  // in the callback you'll get the elapsed time since the page was loaded
  requestAnimationFrame(frameCallback);
}

function update(deltaTiming) {
  ball.position.x += ball.velocity.x * deltaTiming;
  ball.position.y += ball.velocity.y * deltaTiming;

  //detect if the ball touches the any corner of the screen
  if (
    ball.position.x < 0 ||
    ball.position.x > canvas.width
  ) {
    ball.velocity.x *= -1;
  }
  if (
    ball.position.y < 0 ||
    ball.position.y > canvas.height
  ) {
    ball.velocity.y *= -1;
  }

  context.fillStyle = '#000000';
  context.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  context.fillStyle = '#ffffff';
  context.fillRect(
    ball.position.x,
    ball.position.y,
    ball.size.x,
    ball.size.y
  );
}

frameCallback();