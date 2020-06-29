function BMI() {

    function getStatus() {
        if (bmi < 18.5) {
            return "underweight";
        } else if (bmi < 25) {
            return "normal";
        } else if (bmi < 30) {
            return "overweight";
        } else {
            return "obese";
        }
    }

    let [name, age, weight, height] = arguments;
    let heightMetres = height / 100;
    let bmi = Math.round(weight / Math.pow(heightMetres, 2));

    let status = getStatus();

    let person = {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height
        },
        'BMI': bmi,
        'status': status
    };

    if (status === "obese") {
        person["recommendation"] = 'admission required';
    }

    return person;
}
console.log(BMI('Peter', 43, 80, 177));