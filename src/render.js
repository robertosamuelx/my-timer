let timer = document.querySelector('.time');

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

function playAction(){
    interval = setInterval(() => {
        timer.textContent = newTimer();
    }, 1000); 
    let notification = new Notification('Contador iniciado!');
}

function pauseAction(){
    clearInterval(interval);
    let notification = new Notification('Contador pausado!');
}

function stopAction(){
    pauseAction();
    seconds=0;
    minutes=0;
    hours=0;
    timer.textContent = `${hours}:${minutes}:${seconds}`;
    let notification = new Notification('Contador parado!');
}

function newTimer(){
    seconds += 1;
    if(seconds > 59){
        minutes+=1;
        seconds=0;
        if(minutes>59){
            hours+=1;
            minutes=0;
        }
    }

    return `${hours}:${minutes}:${seconds}`;
}

let play_ = document.querySelector('.fa-play');
let pause_ = document.querySelector('.fa-pause');
let stop_ = document.querySelector('.fa-stop');

pause_.addEventListener('click', pauseAction);
play_.addEventListener('click', playAction);
stop_.addEventListener('click', stopAction);