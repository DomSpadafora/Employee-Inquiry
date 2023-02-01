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
            console.log('you got it')
            viewDepartments();
            break;
        case 'View all roles':
            internQuestions();
            break;
        case 'View all employees':
            generateTeam()
        case 'Add a department':
            engineerQuestions();
            break;
        case 'Add a role':
            internQuestions();
            break;
        case 'Add an employee':
            generateTeam()
            break;
        case 'Update employee role':
                generateTeam();
        }
  })
};


// // Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
initialPrompt()