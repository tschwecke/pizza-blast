
player.speed = 5;

player.whenUpArrowIsPressed = function() {
  player.moveUp();
};

player.whenDownArrowIsPressed = function() {
  player.moveDown();
};

player.whenLeftArrowIsPressed = function() {
  player.moveLeft();
};

player.whenRightArrowIsPressed = function() {
  player.moveRight();
};

player.whenMouseClicked = function() {
  player.fire();
};