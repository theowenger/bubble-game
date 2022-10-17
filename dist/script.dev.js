"use strict";

var counterDisplay = document.getElementById("count");
var counter = 1;
var timer = document.getElementById('timer');
timer.innerText = "";
var time = 30;

function reduceTime() {
  timer.innerText = time;

  if (time != 0) {
    time--;
  } else {
    timer.innerText = "stop !";
  }
}

;
setInterval(reduceTime, 1000);

var bubbleMaker = function bubbleMaker() {
  var bubble = document.createElement('span');
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  var size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  var plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");
  bubble.addEventListener('click', function () {
    counterDisplay.textContent = counter;
    bubble.remove();

    if (time != 0) {
      counter++;
    }
  });
  setTimeout(function () {
    bubble.remove();
  }, 8000);
};

var bubbleInterval = setInterval(bubbleMaker, 300);

function myStopFunction() {
  if (time == 0) {
    clearInterval(bubbleInterval);
  }
}

myStopFunction();