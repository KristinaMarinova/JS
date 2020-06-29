function filterEmployees(array, filterString) {
    let employees = JSON.parse(array);
    let filterBy = filterString.split('-')[0];
    let filterValue = filterString.split("-")[1];

    let filterdedArray = employees.filter(e => e[filterBy] === filterValue);
    let result = [];

    for (let i = 0; i < filterdedArray.length; i++) {
        const element = filterdedArray[i];
        result.push(`${i}. ${element.first_name} ${element.last_name} - ${element.email}`);       
    }
    return result.join("\n");
}
console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
));