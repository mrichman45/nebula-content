document.getElementById('colorButton').addEventListener('click', function() {
  let randomColor = generateRandomColor(); 
  document.body.style.backgroundColor = randomColor; 
});

function generateRandomColor() {
 
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  
  let color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
}