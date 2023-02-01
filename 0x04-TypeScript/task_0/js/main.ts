interface Student { firstName: string; lastName: string; age: number; location: string; }
// Create two students 
let student1: Student = { firstName: "John", lastName: "Smith", age: 25, location: "New York" };

let student2: Student = { firstName: "Jane", lastName: "Doe", age: 22, location: "Los Angeles" };

// Create an array containing the two variables 
let studentsList: Student[] = [student1, student2];

// Render a table using Vanilla Javascript 
let table = document.createElement("table");

// Append a new row for each element in the array 
studentsList.forEach(student => { let row = table.insertRow(); let nameCell = row.insertCell(); let locationCell = row.insertCell();

// Add the student's first name and location to the row
nameCell.innerHTML = student.firstName;
locationCell.innerHTML = student.location;
});