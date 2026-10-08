// Employee constructor function
function Employee(id,name,department,salary){
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;  
}
//create a simple employee database (object)
const employeeDB = {};

//function to add employee to the databse
function addEmployee(id,name,department,salary) {
    const employee = new Employee(id,name,department,salary); 
    employeeDB[id] = employee
    console.log("Employee with ID "+id+" added")
}

//function to get all employees (object.values)
function getAllEmployees(){
    const employess = Object.values(employeeDB);
    console.log("List Of Employees")
    employess.forEach((employee) => {
        console.log(`Name: ${employee.name},Department: ${employee.department},Salary: ${employee.salary}`)
    })
}

// Function yo get employee details by ID (Object.entries)
function getEmployeeDetails(id) {
    if (employeeDB[id]) {
        return Object.entries(employeeDB[id])
        
    }
    return `Employee wuth ID ${id} not found`;
    n
}

//Function to update employee details
function updateEmployee(id,updateDetails) {
    if (employeeDB[id]) {
    Object.assign(employeeDB[id],updateDetails)        
    }else{
        console.log(`Employee wuth ID ${id} not found`)
    }

    
}

//Function to freeze employee data
function freezeEmployee(id) {
      if (employeeDB[id]) {
    Object.freeze(employeeDB[id])
    console.log("Employee Data Freezed");     
    }else{
        console.log(`Employee wuth ID ${id} not found`)
    }
}

//Function to seal employee data
function sealEmployee(id) {
      if (employeeDB[id]) {
    Object.seal(employeeDB[id])
    console.log("Employee Data Sealed");         
    }else{
        console.log(`Employee wuth ID ${id} not found`)
    }
}

//Usage -
addEmployee(1,"Alice","Engineering",70000)
addEmployee(2,"Bob","Marketing",50000)
addEmployee(3,"Charlie","HR",60000)

//View employees
console.log("\n")
getAllEmployees();

//Get employee details with ID
console.log("\n")
console.log("View Employee Details")
console.log(getEmployeeDetails(2))

//update employee details
console.log("\n")
console.log("Update Employee Details")
updateEmployee(2,{salary: 55000})
console.log("After Update")
getAllEmployees();

//freeze employee data
console.log("\n")
console.log("Freezing Employee Data")
freezeEmployee(2);
//Attempt to modify frozen data
employeeDB[2].salary = 60000//This won't work
console.log("After Freeze")
getAllEmployees();

//seal employee data
console.log("\n")
console.log("Sealing employee Data")
sealEmployee(1)
employeeDB[1].salary = 80000 //this work
employeeDB[1].age = 30
console.log("After Seal")
console.log(getEmployeeDetails(1))