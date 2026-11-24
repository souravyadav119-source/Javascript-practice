let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Aman", salary: 45000 },
    { name: "Sourav", salary: 90000 },
    { name: "Vikas", salary: 30000 },
    { name: "Rohit", salary: 35000 },
];

let highestSalary = 0;

for(let i = 0; i < employees.length; i++){
   if(employees[i].salary > highestSalary){
    highestSalary = employees[i].salary;
    highestEmployee = employees[i].name;
   }
}

console.log("Employee", highestEmployee);
console.log("Salary", highestSalary);


