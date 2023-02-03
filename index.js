//Dependencies required
const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table')


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

//Initial prompt to ask what to do next 
const initialPrompt = () => {
  console.log('Welcome to Employee Inquiry!!')
  return inquirer.prompt([
      {
          type: 'rawlist',
          name: 'function',
          message: 'Please select what you would like to do next',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update employee role',
          ]
      },
    ]).then(selection => {
      switch (selection.function) {
        case 'View all departments':
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case 'View all employees':
            viewEmployees()
        case 'Add a department':
            addDepartment();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee()
            break;
        case 'Update employee role':
            updateEmployee();
        }
  })
};

//View all current departments in Database
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    initialPrompt();
  });
}

//View all current roles in Database
function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    initialPrompt();
  });
}

//View all current employees in Database
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    initialPrompt();
  });
}

//Add department to database
function addDepartment() {
  
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the department name?',
  },
]).then(({name}) => {
  db.query('INSERT INTO department set ?',{name}, err => {
    if (err) return console.log(err);
    console.log('New department has been added!')
    initialPrompt();
  })
})
}

var managersList = [];
var departmentList = [];
// var roleList = [];

function selectDepartment() {
  db.query('SELECT id, name FROM department', (err, res) => {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      departmentList.push(res[i].id);
    }

  })
  return departmentList;
}

function selectManager() {
  db.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", (err, res) => {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      managersList.push(res[i].first_name);
    }

  })
  return managersList;
}
//Add new role to database
function addRole() {
  db.query('SELECT role.title AS Title, role.salary AS Salary, role.department_id AS Department_id FROM role');
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What role would you like to add?',
    },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary?',
    },
    {
      type: 'rawlist',
      name: 'department_id',
      message: 'What is the department id?',
      choices: selectDepartment()
  },
  ]).then(({title, salary, department_id}) => {
  db.query('INSERT INTO role set ?',{title, salary, department_id}, err => {
    if (err) return console.log(err);
    console.log('New role has been added!')
    initialPrompt();
  })
})
}

//Add new employee to database
function addEmployee() {
  db.query('SELECT employee.first_name AS First_name, employee.last_name AS Last_name, employee.role_id AS Role_id, employee.manager_id AS Manager_id FROM employee');
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is their first name?',
  },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is there last name?',
  },
  {
    //Do we need a role id since I set it to Auto increment in the schema?
    type: 'input',
    name: 'role_id',
    message: 'What is the role id?',
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'What is their manager id?',
  },


]).then(({first_name, last_name, role_id, manager_id}) => {
  db.query('INSERT INTO employee set ?',{first_name, last_name, role_id, manager_id}, err => {
    if (err) return console.log(err);
    console.log('Employee has been added!')
    initialPrompt();
  })
})
}



initialPrompt()