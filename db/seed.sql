USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Purchasing");
INSERT INTO department (name)
VALUES ("Accounts Payable");
INSERT INTO department (name)
VALUES ("Construction");

INSERT INTO role (title, salary, department_id)
VALUES ("New Home Consultant", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Assistant", 65000, 1)
INSERT INTO role (title, salary, department_id)
VALUES ("Purchasing Director", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Purchasing Manager", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("AP Manager", 90000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounts Administrator", 75000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Construction Manager", 125000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Construction Associate", 75000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jenny", "Goodin", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Trey", "McFarland", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tia","Thompson",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jeff", "York", null, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Meghan", "Wolf", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Kim", "Minnick", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Dean", "Stuckey", 2, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Cristian", "Carrilo", 2, 8);