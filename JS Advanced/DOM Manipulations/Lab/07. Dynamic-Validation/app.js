function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', (event) => {
        let email = input.value;
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/g;
        if (!regex.test(email)) {
            input.classList.add("error");
        }
        else {
            input.classList.remove("error");
        }
    });
}