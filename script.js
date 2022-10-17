const counterDisplay = document.getElementById("count");
let counter = 1;
const timer = document.getElementById('timer');
timer.innerText = "";
let time = 30;

function reduceTime() {

    timer.innerText = time;
    if (time != 0) {
        time--;
    } else {
        timer.innerText = "stop !"
    }
};
setInterval(reduceTime, 1000)


const bubbleMaker = () => {

    const bubble = document.createElement('span');
    bubble.classList.add("bubble")
    document.body.appendChild(bubble);

    const size = Math.random() * 100 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%")

    bubble.addEventListener('click', () => {
        counterDisplay.textContent = counter;
        bubble.remove();
        if (time != 0) {
            counter++;
        }
    });

    setTimeout(() => {
        bubble.remove()
    }, 8000)

}


let bubbleInterval = setInterval(bubbleMaker, 300);

function myStopFunction() {
    if (time == 0) {
        clearInterval(bubbleInterval);
    }
}
myStopFunction()