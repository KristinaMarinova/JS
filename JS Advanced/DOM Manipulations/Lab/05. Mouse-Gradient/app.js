function attachGradientEvents() {
    let button = document.getElementById('gradient');
    let output = document.getElementById('result');

    button.addEventListener('mousemove', move);
    button.addEventListener('mouseout', output.textContent='');

    function move(event){
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        output.textContent = power + "%";
    }
}