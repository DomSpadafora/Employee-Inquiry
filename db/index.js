const connection = require('./connection');

class DB {
    //keeping a refernece to the connection on the class in case we need it later
    constructor(connection) {
        this.conneciton = connection;
    }

    //Finda all employees, join with roles and departments to display their roles, salaries, departments, and managers
    findAllEmployees()  {
        //prepared statement for finding all employees
    }

    //Create a new employee
    createEmployee(employee) {
        //prepared statement
    }

    //updating an employee role


    //finding all roles 


    //creating a new role


    //finding all depts


    // creating a new dept


}

module.exports = new DB(connection);