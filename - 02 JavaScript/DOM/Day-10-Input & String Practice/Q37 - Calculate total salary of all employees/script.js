let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Aman", salary: 45000 },
    { name: "Rohit", salary: 35000 },
    { name: "Sourav", salary: 60000 },
    { name: "Vikas", salary: 30000 }
];

let total = 0;

for (let i = 0; i < employees.length; i++){
    total = total + employees[i].salary;
}


console.log("Total Sakary", total);
