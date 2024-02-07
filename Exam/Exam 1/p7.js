let employeesData = [
  {
    employeeId: 1,
    fName: "Nimit",
    lName: "Patel",
    mobileNo: 9104939358,
    email: "nimit@gmail.com",
    salary: "8000",
    address: {
      line1: "st 20",
      line2: "st 21",
      area: "Chikhla",
      pinCode: 396030,
      city: "Valsad",
      state: "Gujarat",
    },
  },
];


function employeeObj(
  employeeId,
  fName,
  lName,
  mobileNo,
  email,
  salary,
  address
) {
  return {
    employeeId,
    fName,
    lName,
    mobileNo,
    email,
    salary,
    address,
  };
}

var obj = {};

function printEmployee() {
  for (let i in employeesData) {
    console.log("employee " + (Number(i) + 1) + ": ");
    console.log(employeesData[i]);
  }
}

printEmployee(employeesData);

function addEmployeeDetails(
  employeeId,
  fName,
  lName,
  mobileNo,
  email,
  salary,
  address
) {
  var emp = employeeObj(
    employeeId,
    fName,
    lName,
    mobileNo,
    email,
    salary,
    address
  );

  employeesData.push(emp);
}

function updateEmployeeDetails(
  employeeId,
  {
  fName,
  lName,
  mobileNo,
  email,
  salary,
  address}
) {
  employeesData.forEach((employee) => {
    if (employee.employeeId == employeeId) {
      employee.fName = fName;
      employee.lName = lName;
      employee.mobileNo = mobileNo;
      employee.email = email;
      employee.salary = salary;
      employee.address = address;
    } else {
      console.log("Invalid Id");
    }
  });
}

function deleteEmployeeDetails(employeeId) {
  employeesData = employeesData.filter((emp) => {
    return emp.employeeId != employeeId;
  });
}

addEmployeeDetails(2, "yash", "patel", 9104953148, "yash@gmail.com", "3000", {
  line1: "st 20",
  line2: "st 21",
  area: "Chikhla",
  pinCode: 396030,
  city: "Valsad",
  state: "Gujarat",
});

printEmployee();

// updateEmployeeDetails(
//   2,
//   "yash",
//   "parekh",
//   9104953148,
//   "yash@gmail.com",
//   "3000",
//   {
//     line1: "st 20",
//     line2: "st 21",
//     area: "Chikhla",
//     pinCode: 396030,
//     city: "Valsad",
//     state: "Gujarat",
//   }
// );

deleteEmployeeDetails(2);

printEmployee();
