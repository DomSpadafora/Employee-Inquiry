//Dependencies required
const mysql = require('mysql2');
const inquirer = require('inquirer')


const PORT = process.env.PORT || 3001;


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
          type: 'list',
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
  });
}

//View all current roles in Database
function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
  });
}

//View all current employees in Database
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  });
}

//Add department to database



// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
initialPrompt()