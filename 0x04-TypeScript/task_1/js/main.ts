interface Teacher { firstName: string; lastName: string; fullTimeEmployee: boolean; yearsOfExperience?: number; location: string; [key: string]: any; }

// Create a Teacher object 
let teacher3: Teacher = { firstName: 'John', fullTimeEmployee: false, lastName: 'Doe', location: 'London', contract: false, };

console.log(teacher3);

// Should print // Object // contract: false // firstName: "John" // fullTimeEmployee: false // lastName: "Doe" // location: "London"