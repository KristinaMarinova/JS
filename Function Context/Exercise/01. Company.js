class Company{

    constructor(){
        this.departments = [];
    }

    addEmployee(username, salary, position, department){

        let arg = Array.from(arguments);

        if(arg.some(a => a === null || a === "undefined" || a === "")){
            throw new Error("Invalid input!");           
        }

        if(salary < 0){
            throw new Error("Invalid input!");           
        }
        
        let employee = {
            username: username,
            salary: salary,
            position: position,
            department: department
        };

        if(this.departments.some(d => d.name === department)){
            this.departments.find(d => d.name === department).employees.push(employee);
        }
        else{
            let dep = {
                name: department,
                employees: [employee],
            }

            this.departments.push(dep);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment(){
        let depsMap = this.departments.map(d => ({ name: d.name, avg: (d.employees.map(e => e.salary).reduce((a, b) => a + b)) / d.employees.length}));
        let dep = depsMap.sort((a, b) => b.avg - a.avg)[0];

        let result = [];
        result.push(`Best Department is: ${dep.name}`);
        result.push(`Average salary: ${dep.avg.toFixed(2)}`);

        this.departments.find(d => d.name === dep.name).employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
        let department = this.departments.find(d => d.name === dep.name);
        department.employees.forEach(element => {
            result.push(`${element.username} ${element.salary} ${element.position}`)
        });

        return result.join("\n");
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());