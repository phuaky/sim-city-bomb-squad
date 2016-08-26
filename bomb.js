var wires = [0, 0, 0, 0, 0]
// Game logic

// DOM manipulation
function fiveRandomNumbers () {
  for (var i = 0; i < wires.length; i++) {
    wires[i] = Math.random()
  }
}
fiveRandomNumbers()
console.log(wires);

var liveWires = 0
var xLiveWires = startingLiveWires()
var explosion = document.getElementById("bldgExplode");
var cutting = document.getElementById("cut");
var yay = document.getElementById("yay");

console.log(liveWires);

function startingLiveWires () {
  for (var i = 0; i < wires.length; i++) {
    if (wires[i] > 0.5) {
      liveWires++
    }
  }
  return liveWires
}
console.log(liveWires);
function timerStart () {
  var timer = document.getElementById('timer')
  var seconds = 30
  var timerInterval = setInterval(function () {
    if (liveWires > 0 && seconds > 0) {
      seconds--
      timer.textContent = seconds
      if (seconds === 0) {
        document.getElementById('simCity').style.backgroundImage = "url('img/explosion.jpg')"
        explosion.play();
      }
    }
  }, 1000)
}

timerStart()

function  greenDisplay () {
  if (liveWires === 0){
  document.getElementById("timer").style.color = "green";
  document.getElementById("green").style.color = "green";
}
}

function success() {
  if (liveWires === 0) {
    yay.play();
  }
}

var imgs = document.getElementsByTagName('img')
var img
for (var i = 0; i < imgs.length; i++) {
  img = imgs[i]
  img.addEventListener('click', changeWire)
}

function changeWire (ev) {
  var img = ev.target
  var id = img.id

  if (id === 'Blue' && liveWires > 0) {
    img.src = 'img/cut-blue-wire.png'
    if (wires[0] > 0.5) {
      liveWires--
      console.log(liveWires);
      greenDisplay ()
      cut.play();
      success();
    } else {
      explosion.play();
      cut.play();
      document.getElementById('simCity').style.backgroundImage = "url('img/explosion.jpg')"
      liveWires = 0
    }
  } else if (id === 'Green' && liveWires > 0) {
    img.src = 'img/cut-green-wire.png'
    if (wires[1] > 0.5) {
      liveWires--
      console.log(liveWires);
      greenDisplay ()
      cut.play();
      success ()
    } else {
      explosion.play();
      cut.play();
      document.getElementById('simCity').style.backgroundImage = "url('img/explosion.jpg')"
      liveWires = 0
    }
  } else if (id === 'Red' && liveWires > 0) {
    img.src = 'img/cut-red-wire.png'
    if (wires[2] > 0.5) {
      liveWires--
      console.log(liveWires);
      greenDisplay ()
      cut.play();
      success ()
    } else {
      explosion.play();
      cut.play();
      document.getElementById('simCity').style.backgroundImage = "url('img/explosion.jpg')"
      liveWires = 0
    }
  } else if (id === 'White' && liveWires > 0) {
    img.src = 'img/cut-white-wire.png'
    if (wires[3] > 0.5) {
      liveWires--
      console.log(liveWires);
      greenDisplay ()
      cut.play();
      success ()
    } else {
      explosion.play();
      cut.play();
      document.getElementById('simCity').style.backgroundImage = "url('img/explosion.jpg')"
      liveWires = 0
    }
  } else if (id === 'Yellow' && liveWires > 0) {
    img.src = 'img/cut-yellow-wire.png'
    if (wires[4] > 0.5) {
      liveWires--
      console.log(liveWires);
      greenDisplay ()
      cut.play();
      success ()
    } else {
      explosion.play();
      cut.play();
      document.getElementById('simCity').style.backgroundImage = "url('img/explosion.jpg')"
      liveWires = 0
    }
  }
}


// Reset Button
var resetButton = document.getElementById('reset')
resetButton.addEventListener('click', function () {
  location.reload()
})
