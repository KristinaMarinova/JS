function stopwatch() {
    let output = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let timer = null;

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);

    function stop(){
        stopButton.disabled = true;
        startButton.disabled = false;
        clearInterval(timer);
    }
    function start() {
        startButton.disabled = true;
        stopButton.disabled = false;
        let seconds = 0;
        let minutes = 0;
        timer = setInterval(add, 1000);
        output.textContent = '00:00';

        function add() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                }
            }
            output.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        }

    }
}