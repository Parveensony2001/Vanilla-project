const button = document.getElementById('button');
const colorBall = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson'];
button.addEventListener('click',function(){
  moveballintobigbox();
})
function moveballintobigbox(){
  const basket = $('#content');
  const ball = $('<div>').addClass('ball');
  const randomColor = colorBall[Math.floor(Math.random() * colorBall.length)];
  
  ball.css('background-color', randomColor);
  basket.append(ball);
  
  // Check if a row is fully filled
  if (basket.children().length % 33 === 0) {
    basket.append('<br>');
  }
}