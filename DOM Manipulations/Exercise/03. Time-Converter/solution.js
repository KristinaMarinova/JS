function attachEventsListeners() {
    let allButtons = Array.from(document.querySelectorAll('input[type="button"]'));
    allButtons.forEach(element => {
        element.addEventListener('click', calculate);
    });

    function calculate(event) {
        let value = Number(event.target.parentElement.children[1].value);
        let id = event.target.id;
        let days;

        if (id === "daysBtn") {
            days = value;
        }
        else if (id === "hoursBtn") {
            days = value / 24;
        }
        else if (id === "minutesBtn") {
            days = value / 1440;
        }
        else if (id === "secondsBtn") {
            days = value / 86400;
        }

        document.getElementById("days").value = days;
        document.getElementById("hours").value = days * 24;
        document.getElementById("minutes").value = days * 1440;
        document.getElementById("seconds").value = days * 86400;
    }
}