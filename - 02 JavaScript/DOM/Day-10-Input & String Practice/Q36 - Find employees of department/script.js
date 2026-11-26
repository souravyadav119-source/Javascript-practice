let employees = [
    { name: "Rahul", department: "IT", salary: 25000 },
    { name: "Aman", department: "HR", salary: 45000 },
    { name: "Rohit", department: "IT", salary: 35000 },
    { name: "Sourav", department: "Finance", salary: 60000 },
    { name: "Vikas", department: "IT", salary: 30000 }
];

for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === "IT"){
        console.log(employees[i].name + " - " + employees[i].salary);
        
    }
}