var player = 0;
var wires = [0,0,0,0,0];
// Game logic

// DOM manipulation
function fiveRandomNumbers() {
  for (var i = 0; i < wires.length; i++) {
    wires[i] = Math.random();
  }
};

fiveRandomNumbers();

var imgs = document.getElementsByTagName("img");
for (var i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  img.addEventListener("click", changeWire());

}
function changeWire(ev) {
  var id = img.id;

  if (id === "Blue") {
    img.src = "img/cut-blue-wire.png";
    if (wires[0] > 0.5) {
      //change the css background
    } else {}


  } else if (id === "Green") {
    img.src = "img/cut-green-wire.png";

  } else if (id === "third") {
    console.log("you clicked on the 3rd div");
  }
}

//
//
// fiveRandomNumbers();
// console.log(blueNumber);
//
// function checkExplosion() {
//   if (bluenumber > 1) {
//     explode
//   }
// }
//
//












//Reset Button
// var resetButton = document.getElementById("reset");
// resetButton.addEventListener('click', function() {
//   location.reload();
// });
