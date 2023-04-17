
//problem 2
var companyInfo = {
    "companyName": "TechStars",
    "website": "www.techstars.site",
    "employees" : ["Sam", "Mary", "Bill"]
    
  }

  //problem 1
  
  var Employees =  [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseYn" : true
    },
    {
      "firstName" : "Mary",
      "department" : "Finance",
      "designation": "Trainee",
      "salary" : 18500,
      "raiseYn" : true
    },
    {
      "firstName" : "Bill",
      "department" : "HR",
      "designation": "Executive",
      "salary" : 21200,
      "raiseYn" : false
    }
]
console.log("Click the drop down in console to see the employees JSON !!! !! ! ! ! ! WOW!")
console.log(Employees)

console.log("Wanna see something even cooler???")
console.log("Click the next drop down for the company info JSON!!!")
console.log(companyInfo)



//problem 3

companyInfo.employees.push("Anna");


  Employees.push({
    "firstName" : "Anna",
    "department" : "Tech",
    "designation": "Executive",
    "salary" : 25600,
    "raiseYn" : false
  });

console.log("Anna already got pushed to the console so thats why shes there")



//problem 6 

  var wfhPeeps = ['Anna', 'Sam'];
  for (var i = 0; i < Employees.length; i++) {
      if (wfhPeeps.includes(Employees[i].firstName)) {
        Employees[i].wfh = true;
      } else {
        Employees[i].wfh = false;
      }
    }

//problem 4
var totalSalary = 0;

for (var i = 0; i < Employees.length; i++) {
  totalSalary += Employees[i].salary;
  console.log(Employees[i].firstName + " Salary: $" + Employees[i].salary)
}


console.log("Total salary for all employees: $" + totalSalary);

//problem 5
function raisesForEveryone_notReally(companyInfo, Employees) {
    for (var i = 0; i < Employees.length; i++) {
      if (Employees[i].raiseYn) {   //checks if its true 
        Employees[i].salary = Employees[i].salary * 1.10 //updates it by raising their salary by 10%
        Employees[i].raiseYn = false; //no more raises for you
      }
    }
    
    console.log("Post-raise salaries down below: ");
    console.log("Heres the updated JSON too: (note the wfh status) ")
    console.log(Employees)

    //this goes through the employees name and their new salary and puts it in the console
    for (var i = 0; i < Employees.length; i++) {
      console.log(Employees[i].firstName + ": $" + Employees[i].salary);
    }
  }
  

  console.log("Work from home status: ")
for (var i = 0; i < Employees.length; i++) {
    console.log(Employees[i].firstName + ": " + Employees[i].wfh);
  }



  raisesForEveryone_notReally(companyInfo, Employees);

console.log("secret message, congrats for reading all that")
  