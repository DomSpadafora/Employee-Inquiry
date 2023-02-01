USE employees_db;

INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Purchasing"),
    ("Accounts Payable"),
    ("Construction");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("New Home Consultant", 100000, 1),
    ("Sales Assistant", 65000, 1),
    ("Purchasing Director", 150000, 2),
    ("AP Manager", 90000, 3),
    ("Accounts Administrator", 75000, 3),
    ("Construction Manager", 125000, 4),
    ("Construction Associate", 75000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES 
    ("Jenny", "Goodin", null, 1),
    ("Trey", "McFarland", null, 2),
    ("Tia","Thompson",null,3),
    ("Jeff", "York", null, 4),
    ("Meghan", "Wolf", 1, 5),
    ("Kim", "Minnick", 2, 6),
    ("Dean", "Stuckey", 3, 7),
    ("Cristian", "Carrilo", 4, 8);