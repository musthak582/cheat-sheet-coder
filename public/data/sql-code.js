export const sqlCodeBlocks = [
  {
    id: 'basic-sql-syntax',
    label: 'Basic SQL Syntax',
    content: `-- Basic SQL Syntax
  
  -- SQL (Structured Query Language) is used to manage and manipulate relational databases. 
  -- It includes a range of statements for creating, querying, updating, and controlling access to databases.
  -- Here are some fundamental aspects of SQL syntax.
  
  -- Comments in SQL
  
  
  --SQL supports single-line and multi-line comments. 
  -- Single-line comments start with two dashes (--) and extend to the end of the line.
  -- Multi-line comments are enclosed between /* and */

  
  -- This is a single-line comment
  
  /*
     This is a
     multi-line comment
  */
  
  -- SQL Statements
  
  /* 
     SQL statements are classified into various categories based on their purpose:
     - DDL (Data Definition Language): Used to define and modify database structures (e.g., CREATE, ALTER, DROP).
     - DML (Data Manipulation Language): Used for querying and modifying data (e.g., SELECT, INSERT, UPDATE, DELETE).
     - DCL (Data Control Language): Used to control access to data (e.g., GRANT, REVOKE).
     - TCL (Transaction Control Language): Used to manage transactions (e.g., COMMIT, ROLLBACK, SAVEPOINT).
  */
  
  -- DDL Example: Creating a Table
  CREATE TABLE Employees (
      EmployeeID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      HireDate DATE
  );
  
  -- DML Example: Inserting Data
  INSERT INTO Employees (EmployeeID, FirstName, LastName, HireDate)
  VALUES (1, 'John', 'Doe', '2020-01-01');
  
  -- DML Example: Querying Data
  SELECT * FROM Employees;
  
  -- DCL Example: Granting Permissions
  GRANT SELECT ON Employees TO Public;
  
  -- TCL Example: Committing a Transaction
  COMMIT;
  
  -- SQL Keywords and Case Sensitivity
  
  /* 
     SQL keywords are typically written in uppercase, though SQL is case-insensitive for keywords and identifiers.
     - \`SELECT\`, \`FROM\`, and \`WHERE\` are keywords in the SQL language.
     - Case sensitivity for data and table/column names depends on the database system.
  */
  
  SELECT FirstName, LastName FROM Employees WHERE EmployeeID = 1;
  
  -- Identifiers and Naming Conventions
  
  /* 
     Identifiers in SQL (such as table names, column names, and database names) follow these conventions:
     - They must start with a letter or underscore.
     - They can contain letters, digits, and underscores.
     - They should not exceed the maximum length defined by the database system.
     - Quoted identifiers (enclosed in double quotes) allow the use of spaces and special characters.
  
     Common naming conventions include using snake_case or camelCase for identifiers.
  */
  
  CREATE TABLE "Order Details" (
      OrderID INT,
      ProductID INT,
      Quantity INT
  );
  
  -- Basic SQL Structure
  
  /* 
     A basic SQL query typically includes the following structure:
     - SELECT: Specifies the columns to retrieve.
     - FROM: Specifies the table to query.
     - WHERE: Filters the rows based on conditions.
     - GROUP BY: Groups rows that share a value in one or more columns.
     - HAVING: Filters groups based on conditions.
     - ORDER BY: Sorts the rows based on specified columns.
  
     Here is a simple example combining these clauses:
  */
  
  SELECT FirstName, LastName, COUNT(*)
  FROM Employees
  WHERE HireDate > '2020-01-01'
  GROUP BY FirstName, LastName
  HAVING COUNT(*) > 1
  ORDER BY LastName;
  
  /* This query selects the first and last names of employees hired after January 1, 2020, groups them by name, filters groups with more than one member, and orders the results by last name. */
  `
  },
  {
   id: 'data-types',
   label: 'Data Types',
   content: `-- Data Types in SQL
 
 -- SQL provides a variety of data types to store different kinds of data. Here are the common categories:
 
 -- Numeric Data Types
 
 -- INT: Integer numbers.
 -- Stores whole numbers without decimals. The range of values depends on the specific SQL implementation.
 -- Example: Storing age or a unique identifier.
 
 CREATE TABLE SampleTable (
     Id INT,
     Age INT
 );
 
 -- FLOAT: Floating-point numbers.
 -- Stores approximate numerical values with a floating decimal point. Suitable for scientific calculations where precision is not critical.
 -- Example: Storing measurements or scientific data.
 
 CREATE TABLE SampleTable (
     Measurement FLOAT
 );
 
 -- DECIMAL: Fixed-point numbers.
 -- Stores exact numerical values with a specified number of decimal places. Useful for financial data where precision is important.
 -- Syntax: DECIMAL(p, s) where \`p\` is the precision (total number of digits) and \`s\` is the scale (number of digits after the decimal point).
 -- Example: Storing prices or monetary values.
 
 CREATE TABLE SampleTable (
     Price DECIMAL(10, 2)
 );
 
 -- Character Data Types
 
 -- CHAR: Fixed-length character strings.
 -- Stores text with a fixed length. If the input is shorter than the defined length, it is padded with spaces.
 -- Example: Storing fixed-length codes or identifiers.
 
 CREATE TABLE SampleTable (
     Code CHAR(5)
 );
 
 -- VARCHAR: Variable-length character strings.
 -- Stores text with a variable length up to a specified maximum. More space-efficient for varying lengths of text.
 -- Example: Storing names or addresses.
 
 CREATE TABLE SampleTable (
     Name VARCHAR(255)
 );
 
 -- TEXT: Large variable-length character strings.
 -- Stores large amounts of text data. The exact maximum length depends on the SQL implementation.
 -- Example: Storing descriptions or articles.
 
 CREATE TABLE SampleTable (
     Description TEXT
 );
 
 -- Date and Time Data Types
 
 -- DATE: Stores date values (year, month, day).
 -- Example: Storing birthdates or event dates.
 
 CREATE TABLE SampleTable (
     BirthDate DATE
 );
 
 -- TIME: Stores time values (hours, minutes, seconds).
 -- Example: Storing time of day or duration.
 
 CREATE TABLE SampleTable (
     MeetingTime TIME
 );
 
 -- DATETIME: Stores both date and time values.
 -- Example: Storing timestamps for events.
 
 CREATE TABLE SampleTable (
     EventTimestamp DATETIME
 );
 
 -- TIMESTAMP: Stores date and time values, typically used for tracking changes.
 -- Automatically updates to the current timestamp when the row is modified (depends on the SQL implementation).
 
 CREATE TABLE SampleTable (
     LastModified TIMESTAMP
 );
 
 -- Boolean Data Type
 
 -- BOOLEAN: Stores true or false values.
 -- In many SQL implementations, this is represented as a small integer (0 for false, 1 for true).
 -- Example: Storing flags or binary states.
 
 CREATE TABLE SampleTable (
     IsActive BOOLEAN
 );
 
 -- Binary Data Types
 
 -- BINARY: Fixed-length binary data.
 -- Stores binary data of a specified length. Suitable for small, fixed-size binary values.
 -- Example: Storing binary keys or flags.
 
 CREATE TABLE SampleTable (
     BinaryKey BINARY(16)
 );
 
 -- VARBINARY: Variable-length binary data.
 -- Stores binary data of a variable length up to a specified maximum. Suitable for varying sizes of binary data.
 -- Example: Storing images or files in binary format.
 
 CREATE TABLE SampleTable (
     Image VARBINARY(MAX)
 );
 
 /*
    This table summarizes the basic SQL data types and their common usage:
    - INT: Integer numbers (e.g., Age, Id)
    - FLOAT: Floating-point numbers (e.g., Measurement)
    - DECIMAL: Fixed-point numbers with precision (e.g., Price)
    - CHAR: Fixed-length text (e.g., Code)
    - VARCHAR: Variable-length text (e.g., Name)
    - TEXT: Large variable-length text (e.g., Description)
    - DATE: Date values (e.g., BirthDate)
    - TIME: Time values (e.g., MeetingTime)
    - DATETIME: Combined date and time values (e.g., EventTimestamp)
    - TIMESTAMP: Automatically updating date and time values (e.g., LastModified)
    - BOOLEAN: True/false values (e.g., IsActive)
    - BINARY: Fixed-length binary data (e.g., BinaryKey)
    - VARBINARY: Variable-length binary data (e.g., Image)
 */
 `
 },
 {
   id: 'database-operations',
   label: 'Database Operations',
   content: `-- Database Operations in SQL
 
 -- SQL provides a set of commands to create, modify, and delete databases. Below are the common operations:
 
 -- Creating Databases
 
 -- The \`CREATE DATABASE\` statement is used to create a new database. 
 -- Syntax: \`CREATE DATABASE database_name\`;
 -- Example: Creating a database named "SampleDB".
 
 CREATE DATABASE SampleDB;
 
 -- After executing this command, a new database named "SampleDB" will be created and can be used to store data.
 
 -- Selecting Databases
 
 -- The \`USE DATABASE\` statement is used to select a specific database to work with.
 -- Syntax: \`USE database_name\`;
 -- Example: Selecting the "SampleDB" database to perform operations on.
 
 USE SampleDB;
 
 -- After executing this command, all subsequent operations will be performed on the "SampleDB" database.
 
 -- Dropping Databases
 
 -- The \`DROP DATABASE\` statement is used to delete an existing database along with all its data.
 -- Syntax: \`DROP DATABASE database_name\`;
 -- Example: Dropping the "SampleDB" database.
 
 DROP DATABASE SampleDB;
 
 -- Caution: This command permanently deletes the database and all its contents. Use with caution, especially in production environments.
 
 -- Altering Databases
 
 -- The \`ALTER DATABASE\` statement is used to modify the properties of an existing database.
 -- Syntax: \`ALTER DATABASE database_name option\`;
 -- Example: Changing the collation of the "SampleDB" database (specific options depend on the SQL implementation).
 
 ALTER DATABASE SampleDB
 COLLATE Latin1_General_CI_AS;
 
 -- Note: \`ALTER DATABASE\` options vary based on the SQL database system (e.g., MySQL, SQL Server, PostgreSQL).
 
 /*
    This section covers the fundamental operations for managing databases:
    - \`CREATE DATABASE\`: Used to create a new database.
    - \`USE DATABASE\`: Used to select a specific database for subsequent operations.
    - \`DROP DATABASE\`: Used to delete an existing database and its contents.
    - \`ALTER DATABASE\`: Used to modify database properties such as collation or configuration.
 */
 `
 },
 {
   id: 'table-operations',
   label: 'Table Operations',
   content: `-- Table Operations in SQL
 
 -- SQL provides various commands to manage tables within a database. These include creating, modifying, and deleting tables.
 
 -- Creating Tables
 
 -- The \`CREATE TABLE\` statement is used to create a new table in the database.
 -- Syntax: \`CREATE TABLE table_name (column1 datatype constraint, column2 datatype constraint, ...)\`;
 -- Example: Creating a table named "Employees" with columns for ID, name, and role.
 
 CREATE TABLE Employees (
     EmployeeID INT PRIMARY KEY,
     Name VARCHAR(100),
     Role VARCHAR(50)
 );
 
 -- This command creates a table called "Employees" with three columns: EmployeeID, Name, and Role.
 
 -- Dropping Tables
 
 -- The \`DROP TABLE\` statement is used to delete an existing table and all of its data from the database.
 -- Syntax: \`DROP TABLE table_name\`;
 -- Example: Dropping the "Employees" table.
 
 DROP TABLE Employees;
 
 -- Caution: Dropping a table permanently removes it and all its data. Use this command carefully.
 
 -- Altering Tables
 
 -- The \`ALTER TABLE\` statement is used to modify an existing table structure.
 -- Common operations include adding, modifying, or dropping columns.
 -- Syntax: \`ALTER TABLE table_name ADD column_name datatype constraint\` (adding a column);
 --         \`ALTER TABLE table_name MODIFY column_name datatype constraint\` (modifying a column);
 --         \`ALTER TABLE table_name DROP column_name\` (dropping a column).
 
 -- Example: Adding a new column "Email" to the "Employees" table.
 ALTER TABLE Employees
 ADD Email VARCHAR(100);
 
 -- Example: Modifying the "Name" column to have a maximum length of 150 characters.
 ALTER TABLE Employees
 MODIFY Name VARCHAR(150);
 
 -- Example: Dropping the "Role" column from the "Employees" table.
 ALTER TABLE Employees
 DROP COLUMN Role;
 
 -- Renaming Tables
 
 -- The \`RENAME TABLE\` statement is used to rename an existing table.
 -- Syntax: \`RENAME TABLE old_table_name TO new_table_name\`;
 -- Example: Renaming the "Employees" table to "Staff".
 
 RENAME TABLE Employees TO Staff;
 
 -- After executing this command, the "Employees" table will be renamed to "Staff".
 
 -- Truncating Tables
 
 -- The \`TRUNCATE TABLE\` statement is used to remove all rows from a table, but the table structure remains.
 -- Syntax: \`TRUNCATE TABLE table_name\`;
 -- Example: Truncating the "Employees" table.
 
 TRUNCATE TABLE Employees;
 
 -- This command deletes all rows in the "Employees" table but keeps the table structure intact for future use.
 
 -- Summary:
 -- - \`CREATE TABLE\`: Create a new table.
 -- - \`DROP TABLE\`: Delete an existing table and its data.
 -- - \`ALTER TABLE\`: Modify an existing table's structure.
 -- - \`RENAME TABLE\`: Change the name of a table.
 -- - \`TRUNCATE TABLE\`: Remove all data from a table while preserving its structure.
 `
 },
 {
   id: 'data-manipulation',
   label: 'Data Manipulation',
   content: `-- Data Manipulation in SQL
 
 -- SQL allows you to perform various operations to manipulate the data within tables. These include inserting, updating, deleting, and replacing data.
 
 -- Inserting Data
 
 -- The \`INSERT INTO\` statement is used to add new rows of data to a table.
 -- Syntax: \`INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)\`;
 -- Example: Inserting a new row into the "Employees" table.
 
 INSERT INTO Employees (EmployeeID, Name, Email)
 VALUES (1, 'John Doe', 'john.doe@example.com');
 
 -- This command inserts a new employee with ID 1, name "John Doe", and email "john.doe@example.com" into the "Employees" table.
 
 -- You can also insert multiple rows at once by providing additional sets of values.
 
 INSERT INTO Employees (EmployeeID, Name, Email)
 VALUES 
 (2, 'Jane Smith', 'jane.smith@example.com'),
 (3, 'Mike Brown', 'mike.brown@example.com');
 
 -- This command inserts two additional employees into the "Employees" table.
 
 -- Updating Data
 
 -- The \`UPDATE\` statement is used to modify existing data in a table.
 -- Syntax: \`UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition\`;
 -- Example: Updating the email address of the employee with EmployeeID 1.
 
 UPDATE Employees
 SET Email = 'john.doe@newexample.com'
 WHERE EmployeeID = 1;
 
 -- This command changes the email address of the employee with ID 1 to "john.doe@newexample.com".
 
 -- Be cautious with the \`WHERE\` clause. Omitting it will update all rows in the table.
 
 -- Deleting Data
 
 -- The \`DELETE FROM\` statement is used to remove existing rows from a table.
 -- Syntax: \`DELETE FROM table_name WHERE condition\`;
 -- Example: Deleting the employee with EmployeeID 2.
 
 DELETE FROM Employees
 WHERE EmployeeID = 2;
 
 -- This command removes the row corresponding to the employee with ID 2 from the "Employees" table.
 
 -- Similar to \`UPDATE\`, omitting the \`WHERE\` clause in a \`DELETE\` statement will delete all rows in the table.
 
 -- Replacing Data
 
 -- The \`REPLACE INTO\` statement is used to insert a row or replace an existing row if a duplicate is found.
 -- Syntax: \`REPLACE INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)\`;
 -- Example: Replacing or inserting a row into the "Employees" table.
 
 REPLACE INTO Employees (EmployeeID, Name, Email)
 VALUES (3, 'Michael Brown', 'michael.brown@newexample.com');
 
 -- This command replaces the row with EmployeeID 3 if it exists, or inserts a new row if it does not. In this example, the row with ID 3 will be updated with new name "Michael Brown" and email "michael.brown@newexample.com".
 
 -- Note that \`REPLACE INTO\` is not supported by all SQL databases. An alternative is to use \`INSERT ON DUPLICATE KEY UPDATE\` in MySQL or \`MERGE\` in SQL Server.
 
 -- Summary:
 -- - \`INSERT INTO\`: Add new rows to a table.
 -- - \`UPDATE\`: Modify existing rows in a table.
 -- - \`DELETE FROM\`: Remove rows from a table.
 -- - \`REPLACE INTO\`: Insert or replace rows in a table.
 `
 },
 {
   id: 'basic-queries',
   label: 'Basic Queries',
   content: `-- Basic Queries in SQL
 
 -- SQL allows you to retrieve and manipulate data from a database using various types of queries. This section covers the foundational query operations including selecting, filtering, sorting, and limiting data.
 
 -- Selecting Data
 
 -- The \`SELECT\` statement is used to fetch data from a database.
 -- Syntax: \`SELECT column1, column2, ... FROM table_name\`;
 -- Example: Selecting all columns from the "Employees" table.
 
 SELECT * FROM Employees;
 
 -- This command retrieves all columns and rows from the "Employees" table.
 
 -- You can also select specific columns by listing them.
 
 SELECT EmployeeID, Name, Email FROM Employees;
 
 -- This command fetches only the "EmployeeID", "Name", and "Email" columns from the "Employees" table.
 
 -- To eliminate duplicate rows, use \`SELECT DISTINCT\`.
 
 SELECT DISTINCT Department FROM Employees;
 
 -- This command retrieves a list of unique departments from the "Employees" table.
 
 -- Filtering Data
 
 -- The \`WHERE\` clause is used to filter records that meet certain conditions.
 -- Syntax: \`SELECT column1, column2, ... FROM table_name WHERE condition\`;
 -- Example: Selecting employees who work in the "Sales" department.
 
 SELECT * FROM Employees
 WHERE Department = 'Sales';
 
 -- This command retrieves all employees who work in the "Sales" department.
 
 -- You can combine multiple conditions using \`AND\` and \`OR\`.
 
 SELECT * FROM Employees
 WHERE Department = 'Sales' AND Salary > 50000;
 
 -- This command fetches employees who work in the "Sales" department and have a salary greater than 50,000.
 
 -- Sorting Data
 
 -- The \`ORDER BY\` clause is used to sort the result set by one or more columns.
 -- Syntax: \`SELECT column1, column2, ... FROM table_name ORDER BY column_name [ASC|DESC]\`;
 -- Example: Selecting employees and sorting them by salary in descending order.
 
 SELECT * FROM Employees
 ORDER BY Salary DESC;
 
 -- This command retrieves all employees sorted by their salary in descending order.
 
 -- You can also sort by multiple columns.
 
 SELECT * FROM Employees
 ORDER BY Department ASC, Salary DESC;
 
 -- This command sorts employees first by department in ascending order and then by salary in descending order within each department.
 
 -- Limiting Data
 
 -- The \`LIMIT\` clause (or \`OFFSET\` and \`FETCH\` in some SQL dialects) is used to limit the number of rows returned.
 -- Syntax (MySQL): \`SELECT column1, column2, ... FROM table_name LIMIT number OFFSET offset\`;
 -- Syntax (SQL Server): \`SELECT column1, column2, ... FROM table_name OFFSET offset ROWS FETCH NEXT number ROWS ONLY\`;
 -- Example (MySQL): Selecting the first 5 employees.
 
 SELECT * FROM Employees
 LIMIT 5;
 
 -- This command retrieves the first 5 rows from the "Employees" table.
 
 -- Example (SQL Server): Selecting the next 5 employees after skipping the first 10.
 
 SELECT * FROM Employees
 ORDER BY EmployeeID
 OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY;
 
 -- This command skips the first 10 employees and then retrieves the next 5 employees based on their "EmployeeID".
 
 -- Aliases for Columns and Tables
 
 -- Aliases are used to give temporary names to columns or tables for the duration of a query.
 -- Syntax: \`SELECT column_name AS alias_name FROM table_name AS alias_name\`;
 -- Example: Selecting employees with an alias for the "EmployeeID" column.
 
 SELECT EmployeeID AS ID, Name AS FullName FROM Employees;
 
 -- This command renames the "EmployeeID" column to "ID" and the "Name" column to "FullName" in the result set.
 
 -- Aliases can also be used for tables, which is useful in complex queries or when joining tables.
 
 SELECT e.Name, d.DepartmentName
 FROM Employees AS e
 JOIN Departments AS d ON e.DepartmentID = d.DepartmentID;
 
 -- This command retrieves employee names and their corresponding department names by using aliases for the "Employees" and "Departments" tables.
 
 -- Summary:
 -- - \`SELECT\`: Retrieve specific columns from a table.
 -- - \`SELECT DISTINCT\`: Fetch unique rows for specified columns.
 -- - \`WHERE\`: Filter rows based on conditions.
 -- - \`ORDER BY\`: Sort the result set.
 -- - \`LIMIT\`/ \`OFFSET\`/ \`FETCH\`: Limit the number of rows returned.
 -- - \`AS\`: Create aliases for columns and tables.
 `
 },
 {
   id: 'joins',
   label: 'Joins',
   content: `-- Joins in SQL
 
 -- Joins are used to combine rows from two or more tables based on a related column between them. This section covers the various types of joins including inner joins, left joins, right joins, full joins, and cross joins.
 
 -- Inner Join
 
 -- The \`INNER JOIN\` keyword selects records that have matching values in both tables.
 -- Syntax: \`SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column\`;
 -- Example: Joining the "Employees" and "Departments" tables on the "DepartmentID" column.
 
 SELECT Employees.Name, Departments.DepartmentName
 FROM Employees
 INNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
 
 -- This command retrieves the names of employees and their corresponding department names for rows where there is a match in the "DepartmentID" column in both the "Employees" and "Departments" tables.
 
 -- Left Join
 
 -- The \`LEFT JOIN\` (or \`LEFT OUTER JOIN\`) keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side if there is no match.
 -- Syntax: \`SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column\`;
 -- Example: Retrieving all employees and their department names, if available.
 
 SELECT Employees.Name, Departments.DepartmentName
 FROM Employees
 LEFT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
 
 -- This command retrieves the names of all employees and their department names. If an employee does not belong to any department, the department name will be NULL.
 
 -- Right Join
 
 -- The \`RIGHT JOIN\` (or \`RIGHT OUTER JOIN\`) keyword returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side if there is no match.
 -- Syntax: \`SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column\`;
 -- Example: Retrieving all departments and their employees, if available.
 
 SELECT Employees.Name, Departments.DepartmentName
 FROM Employees
 RIGHT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
 
 -- This command retrieves the names of all departments and their corresponding employees. If a department has no employees, the employee name will be NULL.
 
 -- Full Join
 
 -- The \`FULL JOIN\` (or \`FULL OUTER JOIN\`) keyword returns all records when there is a match in either left (table1) or right (table2) table records. It returns NULL for non-matching rows on both sides.
 -- Syntax: \`SELECT columns FROM table1 FULL JOIN table2 ON table1.column = table2.column\`;
 -- Example: Retrieving all employees and departments, with NULLs for non-matching rows.
 
 SELECT Employees.Name, Departments.DepartmentName
 FROM Employees
 FULL JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
 
 -- This command retrieves the names of all employees and all departments, showing NULLs where there is no match between the "DepartmentID" columns in the "Employees" and "Departments" tables.
 
 -- Note: Not all database systems support FULL JOIN. For systems that don't, you can achieve a similar result using a UNION of LEFT JOIN and RIGHT JOIN.
 
 -- Cross Join
 
 -- The \`CROSS JOIN\` keyword returns the Cartesian product of the two tables, which means it returns all possible combinations of rows from the tables.
 -- Syntax: \`SELECT columns FROM table1 CROSS JOIN table2\`;
 -- Example: Generating all combinations of employees and departments.
 
 SELECT Employees.Name, Departments.DepartmentName
 FROM Employees
 CROSS JOIN Departments;
 
 -- This command retrieves all possible combinations of employees and departments, without considering any relationship between them.
 
 -- Summary:
 -- - \`INNER JOIN\`: Returns rows that have matching values in both tables.
 -- - \`LEFT JOIN\`: Returns all rows from the left table and matched rows from the right table.
 -- - \`RIGHT JOIN\`: Returns all rows from the right table and matched rows from the left table.
 -- - \`FULL JOIN\`: Returns all rows when there is a match in either table, and NULLs for non-matching rows.
 -- - \`CROSS JOIN\`: Returns all possible combinations of rows from both tables.
 `
 },
 {
    id: 'advanced-queries',
    label: 'Advanced Queries',
    content: `-- Advanced Queries in SQL
  
  -- This section explores advanced querying techniques in SQL, including subqueries, correlated subqueries, and the use of various operators and keywords to manipulate and combine data effectively.
  
  -- Subqueries and Nested Queries
  
  -- Subqueries, also known as nested queries, are queries within another SQL query. They can be used in SELECT, INSERT, UPDATE, and DELETE statements and help to perform operations on data based on the results of another query.
  -- Example: Finding employees who work in a specific department using a subquery.
  
  SELECT Name
  FROM Employees
  WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'Sales');
  
  -- This query retrieves the names of employees who work in the "Sales" department by using a subquery to find the DepartmentID for "Sales".
  
  -- Correlated Subqueries
  
  -- Correlated subqueries are a type of subquery that refers to columns from the outer query. They are evaluated once for each row processed by the outer query.
  -- Example: Finding employees who earn more than the average salary in their department.
  
  SELECT e1.Name, e1.Salary
  FROM Employees e1
  WHERE e1.Salary > (SELECT AVG(e2.Salary) FROM Employees e2 WHERE e2.DepartmentID = e1.DepartmentID);
  
  -- This query retrieves the names and salaries of employees whose salaries are higher than the average salary of their respective departments.
  
  -- Using \`IN\`, \`NOT IN\`, \`EXISTS\`, \`NOT EXISTS\`
  
  -- The \`IN\` operator allows you to specify multiple values in a WHERE clause.
  -- Example: Finding employees who are in specific departments.
  
  SELECT Name
  FROM Employees
  WHERE DepartmentID IN (1, 2, 3);
  
  -- This query retrieves the names of employees who are in departments with DepartmentID 1, 2, or 3.
  
  -- The \`NOT IN\` operator is used to exclude rows that match the values in a specified list.
  -- Example: Finding employees who are not in specific departments.
  
  SELECT Name
  FROM Employees
  WHERE DepartmentID NOT IN (1, 2, 3);
  
  -- This query retrieves the names of employees who are not in departments with DepartmentID 1, 2, or 3.
  
  -- The \`EXISTS\` operator is used to test for the existence of any record in a subquery.
  -- Example: Finding departments that have employees.
  
  SELECT DepartmentName
  FROM Departments d
  WHERE EXISTS (SELECT 1 FROM Employees e WHERE e.DepartmentID = d.DepartmentID);
  
  -- This query retrieves the names of departments that have at least one employee.
  
  -- The \`NOT EXISTS\` operator is used to test for the absence of any record in a subquery.
  -- Example: Finding departments that have no employees.
  
  SELECT DepartmentName
  FROM Departments d
  WHERE NOT EXISTS (SELECT 1 FROM Employees e WHERE e.DepartmentID = d.DepartmentID);
  
  -- This query retrieves the names of departments that do not have any employees.
  
  -- \`ANY\` and \`ALL\` Operators
  
  -- The \`ANY\` operator returns true if any of the subquery values meet the condition.
  -- Example: Finding employees who earn more than at least one employee in the 'HR' department.
  
  SELECT Name, Salary
  FROM Employees
  WHERE Salary > ANY (SELECT Salary FROM Employees WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'HR'));
  
  -- This query retrieves the names and salaries of employees who earn more than at least one employee in the "HR" department.
  
  -- The \`ALL\` operator returns true if all of the subquery values meet the condition.
  -- Example: Finding employees who earn more than all employees in the 'HR' department.
  
  SELECT Name, Salary
  FROM Employees
  WHERE Salary > ALL (SELECT Salary FROM Employees WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'HR'));
  
  -- This query retrieves the names and salaries of employees who earn more than all employees in the "HR" department.
  
  -- Combining Queries with \`UNION\`, \`UNION ALL\`
  
  -- The \`UNION\` operator is used to combine the result sets of two or more SELECT statements. It removes duplicate rows between the various SELECT statements.
  -- Example: Combining the lists of employees from two departments.
  
  SELECT Name FROM Employees WHERE DepartmentID = 1
  UNION
  SELECT Name FROM Employees WHERE DepartmentID = 2;
  
  -- This query retrieves a combined list of employee names from departments with DepartmentID 1 and 2, removing any duplicates.
  
  -- The \`UNION ALL\` operator is similar to \`UNION\`, but it includes duplicate rows.
  -- Example: Combining the lists of employees from two departments, including duplicates.
  
  SELECT Name FROM Employees WHERE DepartmentID = 1
  UNION ALL
  SELECT Name FROM Employees WHERE DepartmentID = 2;
  
  -- This query retrieves a combined list of employee names from departments with DepartmentID 1 and 2, including any duplicates.
  
  -- Summary:
  -- - Subqueries and Nested Queries: Allow performing operations based on the results of other queries.
  -- - Correlated Subqueries: Refer to columns from the outer query and are evaluated for each row.
  -- - \`IN\` and \`NOT IN\`: Check for inclusion or exclusion in a list of values.
  -- - \`EXISTS\` and \`NOT EXISTS\`: Test for the presence or absence of records in a subquery.
  -- - \`ANY\` and \`ALL\`: Compare values to any or all values returned by a subquery.
  -- - \`UNION\` and \`UNION ALL\`: Combine result sets of multiple queries, with or without duplicates.
  `
  },
  {
    id: 'grouping-and-aggregation',
    label: 'Grouping & Aggregation',
    content: `-- Grouping and Aggregation in SQL
  
  -- This section covers how to group and aggregate data using SQL's various functions and clauses, allowing you to summarize and analyze data effectively.
  
  -- Grouping Data (\`GROUP BY\`)
  
  -- The \`GROUP BY\` clause is used to arrange identical data into groups.
  -- It is commonly used with aggregate functions to group the result-set by one or more columns.
  
  -- Example: Summarizing total sales for each product.
  
  SELECT ProductID, SUM(SalesAmount) AS TotalSales
  FROM Sales
  GROUP BY ProductID;
  
  -- This query calculates the total sales for each product by grouping the sales data by ProductID.
  
  -- Filtering Groups (\`HAVING\`)
  
  -- The \`HAVING\` clause is used to filter groups based on a condition.
  -- It is similar to the \`WHERE\` clause, but \`HAVING\` is used for filtering grouped rows.
  
  -- Example: Finding products with total sales greater than 1000.
  
  SELECT ProductID, SUM(SalesAmount) AS TotalSales
  FROM Sales
  GROUP BY ProductID
  HAVING SUM(SalesAmount) > 1000;
  
  -- This query retrieves products where the total sales amount exceeds 1000.
  
  -- Aggregate Functions (\`SUM\`, \`AVG\`, \`COUNT\`, \`MIN\`, \`MAX\`)
  
  -- Aggregate functions perform calculations on a set of values and return a single value.
  -- Common aggregate functions include \`SUM\`, \`AVG\`, \`COUNT\`, \`MIN\`, and \`MAX\`.
  
  -- Example: Using different aggregate functions to summarize data.
  
  SELECT
    SUM(SalesAmount) AS TotalSales,
    AVG(SalesAmount) AS AverageSales,
    COUNT(*) AS NumberOfSales,
    MIN(SalesAmount) AS MinimumSale,
    MAX(SalesAmount) AS MaximumSale
  FROM Sales;
  
  -- This query calculates the total, average, count, minimum, and maximum sales amounts.
  
  -- Grouping Sets (\`GROUPING SETS\`, \`CUBE\`, \`ROLLUP\`)
  
  -- SQL provides advanced grouping techniques to generate multiple groupings in a single query.
  -- \`GROUPING SETS\` specifies multiple groupings, \`CUBE\` generates a multidimensional cube, and \`ROLLUP\` creates a hierarchical grouping.
  
  -- Example: Using \`GROUPING SETS\` to generate custom groupings.
  
  SELECT Department, ProductID, SUM(SalesAmount) AS TotalSales
  FROM Sales
  GROUP BY GROUPING SETS (
    (Department),
    (ProductID),
    (Department, ProductID)
  );
  
  -- This query groups the data by department, by product, and by both department and product.
  
  -- Example: Using \`CUBE\` to generate all possible combinations of groupings.
  
  SELECT Department, ProductID, SUM(SalesAmount) AS TotalSales
  FROM Sales
  GROUP BY CUBE (Department, ProductID);
  
  -- This query calculates the total sales for all combinations of department and product, including grand totals.
  
  -- Example: Using \`ROLLUP\` to generate hierarchical groupings.
  
  SELECT Department, ProductID, SUM(SalesAmount) AS TotalSales
  FROM Sales
  GROUP BY ROLLUP (Department, ProductID);
  
  -- This query calculates the total sales for each department, each product within each department, and the grand total.
  
  -- Using Aggregate Functions with Conditions
  
  -- You can use aggregate functions with conditions to filter the aggregated data based on specific criteria.
  
  -- Example: Counting the number of sales transactions where the amount is greater than 500.
  
  SELECT COUNT(*) AS HighValueSales
  FROM Sales
  WHERE SalesAmount > 500;
  
  -- This query counts the number of sales transactions where the sales amount is greater than 500.
  
  -- Summary:
  -- - \`GROUP BY\` is used to group rows based on one or more columns.
  -- - \`HAVING\` is used to filter groups after aggregation.
  -- - Aggregate functions (\`SUM\`, \`AVG\`, \`COUNT\`, \`MIN\`, \`MAX\`) summarize data.
  -- - \`GROUPING SETS\`, \`CUBE\`, and \`ROLLUP\` provide advanced grouping options.
  -- - Aggregates can be combined with conditions for more complex queries.
  `
  },
  {
    id: 'indexes',
    label: 'Indexes',
    content: `-- Indexes in SQL
  
  -- This section covers how to create and manage indexes in SQL to improve query performance and efficiency.
  
  -- Indexes are special lookup tables that the database search engine can use to speed up data retrieval.
  -- They are used to quickly locate data without having to search every row in a database table.
  
  -- Creating Indexes (\`CREATE INDEX\`, \`CREATE UNIQUE INDEX\`)
  
  -- To create an index on one or more columns in a table, use the \`CREATE INDEX\` statement.
  
  -- Example: Creating a simple index on a single column.
  
  CREATE INDEX idx_customer_lastname
  ON Customers (LastName);
  
  -- This creates an index named \`idx_customer_lastname\` on the \`LastName\` column of the \`Customers\` table.
  
  -- Example: Creating a composite index on multiple columns.
  
  CREATE INDEX idx_customer_name
  ON Customers (LastName, FirstName);
  
  -- This creates an index named \`idx_customer_name\` on both \`LastName\` and \`FirstName\` columns.
  -- Composite indexes are useful when queries often filter or sort by multiple columns.
  
  -- Example: Creating a unique index.
  
  CREATE UNIQUE INDEX idx_unique_email
  ON Users (Email);
  
  -- This creates a unique index named \`idx_unique_email\` on the \`Email\` column of the \`Users\` table.
  -- Unique indexes ensure that all values in the indexed column are unique, preventing duplicate entries.
  
  -- Dropping Indexes (\`DROP INDEX\`)
  
  -- To remove an index from a table, use the \`DROP INDEX\` statement.
  
  -- Example: Dropping an index.
  
  DROP INDEX idx_customer_lastname;
  
  -- This removes the index named \`idx_customer_lastname\` from the table.
  
  -- Using Indexes for Performance
  
  -- Indexes significantly improve query performance, especially for large tables.
  -- They are particularly effective for columns frequently used in \`WHERE\` clauses, \`ORDER BY\` clauses, and joins.
  
  -- Example: Querying a table with an index.
  
  SELECT * FROM Customers
  WHERE LastName = 'Smith';
  
  -- With an index on the \`LastName\` column, this query will be much faster compared to a full table scan.
  
  -- However, indexes also come with overhead:
  -- - They consume additional disk space.
  -- - They require maintenance during \`INSERT\`, \`UPDATE\`, and \`DELETE\` operations.
  -- It's important to balance the use of indexes to optimize read performance without excessively impacting write performance.
  
  -- Clustered vs. Non-Clustered Indexes
  
  -- Clustered Index:
  -- - A clustered index determines the physical order of data in a table.
  -- - Each table can have only one clustered index, as the data rows themselves are stored in this order.
  -- - Typically, the primary key column is a good candidate for a clustered index.
  
  -- Example: Creating a clustered index.
  
  CREATE CLUSTERED INDEX idx_order_id
  ON Orders (OrderID);
  
  -- Non-Clustered Index:
  -- - A non-clustered index creates a separate structure to store the index, which points to the data rows.
  -- - A table can have multiple non-clustered indexes.
  -- - Non-clustered indexes are often used on columns frequently involved in searches and joins.
  
  -- Example: Creating a non-clustered index.
  
  CREATE NONCLUSTERED INDEX idx_product_name
  ON Products (ProductName);
  
  -- Covering Indexes and Index Hints
  
  -- Covering Index:
  -- - A covering index contains all the columns needed for a query, so the database engine can retrieve the result directly from the index.
  -- - This avoids accessing the table data, making queries even faster.
  
  -- Example: Creating a covering index.
  
  CREATE INDEX idx_covering
  ON Orders (OrderID, CustomerID, OrderDate);
  
  -- This index can speed up queries that filter and select on \`OrderID\`, \`CustomerID\`, and \`OrderDate\` without needing to access the main table.
  
  -- Index Hints:
  -- - Index hints are used to specify which index to use in a query.
  -- - This can be useful if the query optimizer does not choose the most efficient index.
  
  -- Example: Using an index hint.
  
  SELECT * FROM Orders WITH (INDEX(idx_order_id))
  WHERE OrderID = 12345;
  
  -- This query explicitly instructs the database engine to use the \`idx_order_id\` index.
  
  -- Summary:
  -- - Indexes improve query performance by allowing quick data retrieval.
  -- - Use \`CREATE INDEX\` to create simple, composite, and unique indexes.
  -- - \`DROP INDEX\` removes an index from a table.
  -- - Understand the differences between clustered and non-clustered indexes.
  -- - Use covering indexes to include all columns needed for a query.
  -- - Index hints can guide the query optimizer on which index to use.
  `
  },
  {
    id: 'constraints',
    label: 'Constraints',
    content: `-- Constraints in SQL
  
  -- Constraints are rules enforced on data columns to ensure the integrity and accuracy of the data in a database.
  -- This section covers the different types of constraints available in SQL and how to use them.
  
  -- Primary Keys (\`PRIMARY KEY\`)
  
  -- A primary key uniquely identifies each row in a table.
  -- Each table can have only one primary key, and it must contain unique values.
  -- Primary keys cannot contain NULL values.
  
  -- Example: Defining a primary key on a single column.
  
  CREATE TABLE Customers (
      CustomerID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50)
  );
  
  -- Example: Defining a composite primary key on multiple columns.
  
  CREATE TABLE Orders (
      OrderID INT,
      ProductID INT,
      PRIMARY KEY (OrderID, ProductID)
  );
  
  -- Foreign Keys (\`FOREIGN KEY\`)
  
  -- A foreign key is a field (or fields) in one table that refers to the primary key in another table.
  -- Foreign keys enforce referential integrity, ensuring that a value in one table corresponds to a valid value in another table.
  
  -- Example: Defining a foreign key.
  
  CREATE TABLE Orders (
      OrderID INT PRIMARY KEY,
      CustomerID INT,
      FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
  );
  
  -- This ensures that each \`CustomerID\` in the \`Orders\` table must exist in the \`Customers\` table.
  
  -- Unique Constraints (\`UNIQUE\`)
  
  -- A unique constraint ensures that all values in a column or a set of columns are unique across the table.
  -- Unlike primary keys, a table can have multiple unique constraints.
  
  -- Example: Defining a unique constraint on a single column.
  
  CREATE TABLE Users (
      UserID INT PRIMARY KEY,
      Email VARCHAR(100) UNIQUE,
      UserName VARCHAR(50)
  );
  
  -- Example: Defining a unique constraint on multiple columns.
  
  CREATE TABLE Employees (
      EmployeeID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      UNIQUE (FirstName, LastName)
  );
  
  -- Check Constraints (\`CHECK\`)
  
  -- A check constraint allows you to specify a condition that each row must satisfy.
  -- If any row fails to meet the condition, the insert or update operation will be rejected.
  
  -- Example: Defining a check constraint.
  
  CREATE TABLE Products (
      ProductID INT PRIMARY KEY,
      ProductName VARCHAR(100),
      Price DECIMAL(10, 2),
      CHECK (Price > 0)
  );
  
  -- This ensures that the \`Price\` column must have a positive value.
  
  -- Default Constraints (\`DEFAULT\`)
  
  -- A default constraint provides a default value for a column when no value is specified.
  -- This helps ensure that the column always has a meaningful value.
  
  -- Example: Defining a default constraint.
  
  CREATE TABLE Customers (
      CustomerID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      CreatedDate DATETIME DEFAULT GETDATE()
  );
  
  -- This sets the \`CreatedDate\` column to the current date and time if no value is provided during the insert.
  
  -- Summary:
  -- - Primary keys uniquely identify rows and cannot contain NULL values.
  -- - Foreign keys enforce relationships between tables and ensure referential integrity.
  -- - Unique constraints ensure that all values in specified columns are unique.
  -- - Check constraints enforce specific conditions on data in a table.
  -- - Default constraints provide default values for columns when no value is provided.
  `
  },
  {
    id: 'views',
    label: 'Views',
    content: `-- Views in SQL
  
  -- Views are virtual tables created based on the result set of a SQL query.
  -- They provide a way to simplify complex queries, enhance security, and present data in a customized manner.
  
  -- Creating Views (\`CREATE VIEW\`)
  
  -- A view is created using the \`CREATE VIEW\` statement followed by the view name and the query it is based on.
  -- The view's definition can include complex SELECT statements with joins, filters, and aggregations.
  
  -- Example: Creating a simple view.
  
  CREATE VIEW CustomerOrders AS
  SELECT Customers.CustomerID, Customers.FirstName, Customers.LastName, Orders.OrderID, Orders.OrderDate
  FROM Customers
  JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
  
  -- This view combines customer and order information into a single virtual table.
  
  -- Example: Creating a view with filters and joins.
  
  CREATE VIEW ActiveProducts AS
  SELECT Products.ProductID, Products.ProductName, Categories.CategoryName
  FROM Products
  JOIN Categories ON Products.CategoryID = Categories.CategoryID
  WHERE Products.IsActive = 1;
  
  -- This view shows only active products along with their category names.
  
  -- Updating Data Through Views
  
  -- In some cases, you can update the data in the base tables through a view.
  -- However, not all views are updatable. A view is typically updatable if it:
  -- - Is based on a single table.
  -- - Does not include aggregate functions, GROUP BY, HAVING, or DISTINCT clauses.
  -- - Does not include joins (in many cases, though some databases allow it under certain conditions).
  
  -- Example: Updating data through a view.
  
  UPDATE CustomerOrders
  SET LastName = 'Doe'
  WHERE CustomerID = 1;
  
  -- This updates the LastName of the customer with CustomerID 1 in the Customers table through the CustomerOrders view.
  
  -- Dropping Views (\`DROP VIEW\`)
  
  -- To remove a view from the database, use the \`DROP VIEW\` statement followed by the view name.
  
  -- Example: Dropping a view.
  
  DROP VIEW CustomerOrders;
  
  -- This removes the CustomerOrders view from the database.
  
  -- Materialized Views
  
  -- Materialized views are like regular views but with a physical copy of the data.
  -- They store the result set of the query and can be refreshed periodically.
  -- Materialized views improve performance for complex queries by storing precomputed results.
  
  -- Example: Creating a materialized view (syntax may vary by database system).
  
  CREATE MATERIALIZED VIEW SalesSummary AS
  SELECT ProductID, SUM(Quantity) AS TotalQuantity, SUM(Price * Quantity) AS TotalSales
  FROM Sales
  GROUP BY ProductID;
  
  -- Using Views for Security and Simplification
  
  -- Views can be used to restrict access to specific columns or rows in a table, enhancing security.
  -- They can also simplify complex queries and present data in a more user-friendly format.
  
  -- Example: Using views for security.
  
  CREATE VIEW EmployeeSalaries AS
  SELECT EmployeeID, FirstName, LastName, Salary
  FROM Employees
  WHERE Role = 'Employee';
  
  -- This view presents only the salary information for employees, hiding other sensitive data.
  
  -- Summary:
  -- - Views are virtual tables created based on SQL queries.
  -- - They simplify complex queries and can enhance security by restricting data access.
  -- - Views can sometimes be used to update data in base tables.
  -- - Materialized views store a physical copy of the result set and can be refreshed to improve query performance.
  `
  },
  {
    id: 'stored-procedures',
    label: 'Stored Procedures',
    content: `-- Stored Procedures in SQL
  
  -- Stored procedures are precompiled collections of SQL statements that can be executed as a single unit.
  -- They provide a way to encapsulate complex operations, improve performance, and enhance security by abstracting database logic.
  
  -- Creating Stored Procedures (\`CREATE PROCEDURE\`)
  
  -- Stored procedures are created using the \`CREATE PROCEDURE\` statement followed by the procedure name and the body of the procedure.
  -- The procedure body contains the SQL statements to be executed, and it can include control-of-flow statements like loops and conditionals.
  
  -- Example: Creating a stored procedure without parameters.
  
  CREATE PROCEDURE GetAllCustomers
  AS
  BEGIN
      SELECT * FROM Customers;
  END;
  
  -- This procedure retrieves all records from the Customers table.
  
  -- Example: Creating a stored procedure with input parameters.
  
  CREATE PROCEDURE GetCustomerById
      @CustomerId INT
  AS
  BEGIN
      SELECT * FROM Customers WHERE CustomerID = @CustomerId;
  END;
  
  -- This procedure retrieves a customer record based on the provided CustomerID.
  
  -- Executing Stored Procedures (\`EXEC\`)
  
  -- To execute a stored procedure, use the \`EXEC\` (or \`EXECUTE\`) statement followed by the procedure name and any required parameters.
  
  -- Example: Executing a stored procedure without parameters.
  
  EXEC GetAllCustomers;
  
  -- Example: Executing a stored procedure with parameters.
  
  EXEC GetCustomerById @CustomerId = 1;
  
  -- This calls the GetCustomerById procedure with a CustomerID of 1.
  
  -- Parameterizing Stored Procedures
  
  -- Stored procedures can accept input parameters and return output parameters.
  -- Parameters are specified in the procedure definition, and they can be of various SQL data types.
  
  -- Example: Creating a stored procedure with input and output parameters.
  
  CREATE PROCEDURE GetCustomerOrderCount
      @CustomerId INT,
      @OrderCount INT OUTPUT
  AS
  BEGIN
      SELECT @OrderCount = COUNT(*)
      FROM Orders
      WHERE CustomerID = @CustomerId;
  END;
  
  -- This procedure calculates the number of orders for a given customer and returns it through an output parameter.
  
  -- Example: Executing a stored procedure with an output parameter.
  
  DECLARE @Count INT;
  EXEC GetCustomerOrderCount @CustomerId = 1, @OrderCount = @Count OUTPUT;
  SELECT @Count AS OrderCount;
  
  -- This calls the GetCustomerOrderCount procedure and retrieves the number of orders for CustomerID 1 into the @Count variable.
  
  -- Dropping Stored Procedures (\`DROP PROCEDURE\`)
  
  -- To remove a stored procedure from the database, use the \`DROP PROCEDURE\` statement followed by the procedure name.
  
  -- Example: Dropping a stored procedure.
  
  DROP PROCEDURE GetCustomerById;
  
  -- This removes the GetCustomerById procedure from the database.
  
  -- Handling Errors in Stored Procedures
  
  -- Stored procedures can include error handling logic to manage exceptions and ensure reliable execution.
  -- SQL provides constructs like \`TRY...CATCH\` blocks to handle errors within stored procedures.
  
  -- Example: Handling errors in a stored procedure.
  
  CREATE PROCEDURE UpdateCustomerEmail
      @CustomerId INT,
      @NewEmail VARCHAR(100)
  AS
  BEGIN
      BEGIN TRY
          UPDATE Customers
          SET Email = @NewEmail
          WHERE CustomerID = @CustomerId;
      END TRY
      BEGIN CATCH
          PRINT 'An error occurred while updating the customer email.';
          -- Additional error handling logic can be added here.
      END CATCH
  END;
  
  -- This procedure updates a customer's email address and includes error handling to manage potential issues.
  
  -- Summary:
  -- - Stored procedures are precompiled collections of SQL statements that can be executed as a single unit.
  -- - They are created using the \`CREATE PROCEDURE\` statement and executed with \`EXEC\`.
  -- - Stored procedures can accept input and output parameters to handle dynamic data.
  -- - They can be removed with the \`DROP PROCEDURE\` statement.
  -- - Error handling in stored procedures can be managed using constructs like \`TRY...CATCH\`.
  
  `
  },
  {
    id: 'functions',
    label: 'Functions',
    content: `-- Functions in SQL
  
  -- Functions in SQL are reusable blocks of code that can take input parameters and return a value or table.
  -- They help encapsulate logic for calculations, transformations, and data retrieval, promoting reusability and clarity in queries.
  
  -- Creating User-Defined Functions (\`CREATE FUNCTION\`)
  
  -- User-defined functions (UDFs) are created using the \`CREATE FUNCTION\` statement.
  -- They can be either scalar functions (returning a single value) or table-valued functions (returning a table).
  
  -- Example: Creating a scalar function.
  
  CREATE FUNCTION GetFullName(
      @FirstName VARCHAR(50),
      @LastName VARCHAR(50)
  )
  RETURNS VARCHAR(100)
  AS
  BEGIN
      RETURN @FirstName + ' ' + @LastName;
  END;
  
  -- This function concatenates a first name and a last name into a full name.
  
  -- Example: Using the scalar function.
  
  SELECT dbo.GetFullName('John', 'Doe') AS FullName;
  
  -- Output: John Doe
  
  -- Example: Creating a table-valued function.
  
  CREATE FUNCTION GetCustomersByCountry(
      @Country VARCHAR(50)
  )
  RETURNS TABLE
  AS
  RETURN
  (
      SELECT CustomerID, CompanyName, ContactName
      FROM Customers
      WHERE Country = @Country
  );
  
  -- This function returns a table of customers from a specified country.
  
  -- Example: Using the table-valued function.
  
  SELECT * FROM dbo.GetCustomersByCountry('Germany');
  
  -- Scalar vs. Table-Valued Functions
  
  -- Scalar functions return a single value, whereas table-valued functions return a table that can be queried like a regular table.
  -- Scalar functions can be used wherever a scalar value is expected, such as in the SELECT clause or as part of an expression.
  -- Table-valued functions are used in the FROM clause to return a result set that can be further queried.
  
  -- Using Built-In Functions (String, Numeric, Date Functions)
  
  -- SQL provides a variety of built-in functions for performing operations on strings, numbers, and dates.
  
  -- Example: String functions.
  
  SELECT UPPER('hello') AS UpperCase,   -- Converts to uppercase: HELLO
         LOWER('WORLD') AS LowerCase,   -- Converts to lowercase: world
         LEN('Hello, World!') AS Length; -- Gets the length of the string: 13
  
  -- Example: Numeric functions.
  
  SELECT ROUND(123.456, 2) AS RoundedValue,  -- Rounds to 2 decimal places: 123.46
         ABS(-42) AS AbsoluteValue,          -- Returns the absolute value: 42
         CEILING(10.1) AS CeilingValue;      -- Rounds up to the nearest integer: 11
  
  -- Example: Date functions.
  
  SELECT GETDATE() AS CurrentDate,            -- Returns the current date and time
         DATEADD(day, 5, GETDATE()) AS FutureDate,  -- Adds 5 days to the current date
         DATEDIFF(year, '2000-01-01', GETDATE()) AS YearsSince2000; -- Calculates the difference in years
  
  -- Dropping Functions (\`DROP FUNCTION\`)
  
  -- To remove a user-defined function from the database, use the \`DROP FUNCTION\` statement followed by the function name.
  
  -- Example: Dropping a scalar function.
  
  DROP FUNCTION GetFullName;
  
  -- Example: Dropping a table-valued function.
  
  DROP FUNCTION GetCustomersByCountry;
  
  -- Recursive Functions
  
  -- SQL functions can be recursive, meaning they can call themselves to solve problems that can be broken down into smaller, similar problems.
  -- Recursive functions are useful for tasks like traversing hierarchical data or performing calculations that require iterative steps.
  
  -- Example: Creating a recursive scalar function for calculating factorial.
  
  CREATE FUNCTION Factorial(
      @Number INT
  )
  RETURNS INT
  AS
  BEGIN
      IF @Number <= 1
          RETURN 1;
      ELSE
          RETURN @Number * dbo.Factorial(@Number - 1);
  END;
  
  -- Example: Using the recursive function.
  
  SELECT dbo.Factorial(5) AS FactorialOf5;  -- Output: 120
  
  -- Summary:
  -- - Functions in SQL are reusable blocks of code that return a value or a table.
  -- - User-defined functions (UDFs) can be scalar or table-valued.
  -- - Built-in functions provide operations on strings, numbers, and dates.
  -- - Functions can be dropped using the \`DROP FUNCTION\` statement.
  -- - Recursive functions call themselves and are useful for tasks involving iterative steps or hierarchical data.
  `
  },
  {
    id: 'triggers',
    label: 'Triggers',
    content: `-- Triggers in SQL
  
  -- Triggers are special types of stored procedures that automatically execute or 'fire' in response to specific events on a table or view.
  -- They are used to enforce business rules, automate processes, and maintain audit trails.
  
  -- Creating Triggers (\`CREATE TRIGGER\`)
  
  -- Triggers are created using the \`CREATE TRIGGER\` statement.
  -- The trigger is associated with a table or view and is defined to execute before or after specified events such as INSERT, UPDATE, or DELETE.
  
  -- Example: Creating an AFTER INSERT trigger.
  
  CREATE TRIGGER trg_AfterInsert
  ON Employees
  AFTER INSERT
  AS
  BEGIN
      -- This trigger fires after a new row is inserted into the Employees table.
      -- It logs the insert operation into an audit table.
      INSERT INTO EmployeeAudit (EmployeeID, Operation, OperationDate)
      SELECT EmployeeID, 'INSERT', GETDATE()
      FROM inserted;
  END;
  
  -- The \`AFTER\` keyword specifies that the trigger fires after the insert operation completes.
  -- The \`inserted\` pseudo-table contains the rows that were inserted into the Employees table.
  
  -- Types of Triggers (AFTER, BEFORE, INSTEAD OF)
  
  -- SQL supports different types of triggers based on when they are fired relative to the triggering event.
  
  -- AFTER Triggers: Execute after the triggering event (INSERT, UPDATE, DELETE).
  -- BEFORE Triggers: Execute before the triggering event.
  -- INSTEAD OF Triggers: Execute instead of the triggering event, often used with views.
  
  -- Example: Creating a BEFORE UPDATE trigger.
  
  CREATE TRIGGER trg_BeforeUpdate
  ON Employees
  BEFORE UPDATE
  AS
  BEGIN
      -- This trigger fires before an update operation on the Employees table.
      -- It validates that the new salary is not below the minimum allowed.
      IF EXISTS (SELECT * FROM inserted WHERE Salary < 20000)
      BEGIN
          RAISERROR('Salary cannot be less than 20,000', 16, 1);
          ROLLBACK TRANSACTION;
      END;
  END;
  
  -- The \`BEFORE\` keyword specifies that the trigger fires before the update operation begins.
  -- The \`inserted\` pseudo-table contains the new values that are being updated.
  
  -- Example: Creating an INSTEAD OF DELETE trigger on a view.
  
  CREATE TRIGGER trg_InsteadOfDelete
  ON vw_ActiveEmployees
  INSTEAD OF DELETE
  AS
  BEGIN
      -- This trigger fires instead of a delete operation on the vw_ActiveEmployees view.
      -- It marks the employee as inactive rather than deleting the row.
      UPDATE Employees
      SET IsActive = 0
      WHERE EmployeeID IN (SELECT EmployeeID FROM deleted);
  END;
  
  -- The \`INSTEAD OF\` keyword specifies that the trigger executes instead of the delete operation.
  -- The \`deleted\` pseudo-table contains the rows that are being deleted.
  
  -- Dropping Triggers (\`DROP TRIGGER\`)
  
  -- To remove a trigger from the database, use the \`DROP TRIGGER\` statement followed by the trigger name.
  
  -- Example: Dropping a trigger.
  
  DROP TRIGGER trg_AfterInsert;
  
  -- Using Triggers for Auditing and Validation
  
  -- Triggers are commonly used for auditing changes to tables by logging operations like inserts, updates, and deletes.
  -- They can also enforce complex validation rules that are not easily implemented with constraints.
  
  -- Example: Auditing updates with an AFTER UPDATE trigger.
  
  CREATE TRIGGER trg_AuditUpdate
  ON Employees
  AFTER UPDATE
  AS
  BEGIN
      -- This trigger logs updates to the Employees table into an audit table.
      INSERT INTO EmployeeAudit (EmployeeID, Operation, OperationDate, OldSalary, NewSalary)
      SELECT d.EmployeeID, 'UPDATE', GETDATE(), d.Salary, i.Salary
      FROM deleted d
      JOIN inserted i ON d.EmployeeID = i.EmployeeID;
  END;
  
  -- In this example, the \`deleted\` pseudo-table contains the old values before the update,
  -- and the \`inserted\` pseudo-table contains the new values after the update.
  
  -- Performance Considerations with Triggers
  
  -- Triggers can impact performance, especially if they execute complex logic or affect a large number of rows.
  -- It's important to ensure that triggers are optimized and do not introduce significant overhead to the database operations.
  -- Consider the following best practices to minimize performance impacts:
  -- - Keep trigger logic as simple and efficient as possible.
  -- - Avoid long-running operations within triggers.
  -- - Be cautious with recursive triggers or triggers that fire triggers on other tables.
  -- - Monitor and tune the performance of triggers as part of your regular database maintenance.
  
  -- Summary:
  -- - Triggers are special procedures that automatically execute in response to events on a table or view.
  -- - SQL supports AFTER, BEFORE, and INSTEAD OF triggers, each firing at different stages relative to the triggering event.
  -- - Triggers are used for tasks like auditing changes and enforcing validation rules.
  -- - Use the \`DROP TRIGGER\` statement to remove triggers.
  -- - Optimize triggers to minimize their impact on database performance.
  `
  },
  {
    id: 'transactions',
    label: 'Transactions',
    content: `-- Transactions in SQL
  
  -- Transactions are a sequence of database operations that are executed as a single unit of work.
  -- They ensure that the database remains in a consistent state, even in the event of system failures or errors.
  
  -- Defining Transactions (\`BEGIN TRANSACTION\`, \`COMMIT\`, \`ROLLBACK\`)
  
  -- Transactions are started with the \`BEGIN TRANSACTION\` statement and completed with the \`COMMIT\` or \`ROLLBACK\` statements.
  
  -- Example: Defining a transaction.
  
  BEGIN TRANSACTION;
  
  -- Perform a series of database operations.
  UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
  UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
  
  -- If all operations succeed, commit the transaction.
  COMMIT;
  
  -- If any operation fails, roll back the transaction.
  ROLLBACK;
  
  -- \`COMMIT\` makes all changes made by the transaction permanent.
  -- \`ROLLBACK\` undoes all changes made by the transaction.
  
  -- Savepoints (\`SAVEPOINT\`, \`ROLLBACK TO SAVEPOINT\`)
  
  -- Savepoints allow you to set intermediate points within a transaction to which you can roll back.
  -- This is useful for partially rolling back a transaction without aborting the entire transaction.
  
  -- Example: Using savepoints.
  
  BEGIN TRANSACTION;
  
  -- Perform some operations.
  UPDATE Accounts SET Balance = Balance - 50 WHERE AccountID = 1;
  
  -- Set a savepoint.
  SAVEPOINT savepoint1;
  
  -- Perform more operations.
  UPDATE Accounts SET Balance = Balance - 50 WHERE AccountID = 2;
  
  -- Roll back to the savepoint if needed.
  ROLLBACK TO SAVEPOINT savepoint1;
  
  -- Commit the transaction.
  COMMIT;
  
  -- \`SAVEPOINT\` sets a savepoint within the transaction.
  -- \`ROLLBACK TO SAVEPOINT\` rolls back the transaction to the specified savepoint.
  
  -- Isolation Levels (\`READ COMMITTED\`, \`READ UNCOMMITTED\`, \`REPEATABLE READ\`, \`SERIALIZABLE\`)
  
  -- Isolation levels control the visibility of changes made by concurrent transactions.
  -- Different isolation levels provide different trade-offs between consistency and performance.
  
  -- \`READ UNCOMMITTED\`: Allows dirty reads (reading uncommitted changes).
  -- \`READ COMMITTED\`: Prevents dirty reads, but allows non-repeatable reads and phantom reads.
  -- \`REPEATABLE READ\`: Prevents dirty reads and non-repeatable reads, but allows phantom reads.
  -- \`SERIALIZABLE\`: Prevents dirty reads, non-repeatable reads, and phantom reads. Ensures full isolation.
  
  -- Example: Setting the isolation level.
  
  SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
  
  BEGIN TRANSACTION;
  
  -- Perform transactional operations.
  SELECT * FROM Accounts WHERE Balance > 1000;
  
  COMMIT;
  
  -- ACID Properties (Atomicity, Consistency, Isolation, Durability)
  
  -- Transactions adhere to the ACID properties to ensure reliable database operations.
  -- Atomicity: Ensures all operations within the transaction are completed successfully, or none are.
  -- Consistency: Ensures the database remains in a consistent state before and after the transaction.
  -- Isolation: Ensures transactions are isolated from each other, preventing concurrent transactions from interfering.
  -- Durability: Ensures that once a transaction is committed, its changes are permanent, even in the event of a system failure.
  
  -- Handling Deadlocks and Locking
  
  -- Deadlocks occur when two or more transactions are waiting for each other to release locks, causing a cycle of dependencies.
  -- To handle deadlocks, the database management system (DBMS) detects and resolves them by rolling back one of the transactions.
  
  -- Example: Handling deadlocks.
  
  BEGIN TRANSACTION;
  
  -- Acquire locks.
  UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
  
  -- Simulate a delay or another transaction that might cause a deadlock.
  WAITFOR DELAY '00:00:05';
  
  -- Continue with transactional operations.
  UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
  
  COMMIT;
  
  -- The DBMS automatically handles deadlocks by detecting them and rolling back one of the transactions.
  
  -- Locking mechanisms such as row locks, table locks, and explicit locks can also be used to prevent and manage concurrency issues.
  
  -- Summary:
  -- - Transactions are used to group multiple operations into a single unit of work.
  -- - Use \`BEGIN TRANSACTION\`, \`COMMIT\`, and \`ROLLBACK\` to define and manage transactions.
  -- - Savepoints allow partial rollbacks within a transaction.
  -- - Isolation levels control the visibility of changes in concurrent transactions.
  -- - Transactions adhere to ACID properties for reliable database operations.
  -- - Handle deadlocks and locking to manage concurrency and ensure transaction integrity.
  `
  },
  {
    id: 'advanced-sql-features',
    label: 'Advanced SQL Features',
    content: `-- Advanced SQL Features
  
  -- Advanced SQL provides powerful tools for complex data manipulation and analysis.
  -- This section covers window functions, common table expressions, recursive queries, pivoting data, and using XML in SQL.
  
  -- Window Functions (\`ROW_NUMBER\`, \`RANK\`, \`DENSE_RANK\`, \`LEAD\`, \`LAG\`)
  
  -- Window functions perform calculations across a set of table rows related to the current row.
  -- They are useful for ranking, running totals, and moving averages.
  
  -- Example: Using window functions.
  
  SELECT 
    EmployeeID,
    Salary,
    ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNumber,
    RANK() OVER (ORDER BY Salary DESC) AS Rank,
    DENSE_RANK() OVER (ORDER BY Salary DESC) AS DenseRank,
    LEAD(Salary, 1) OVER (ORDER BY Salary DESC) AS NextSalary,
    LAG(Salary, 1) OVER (ORDER BY Salary DESC) AS PreviousSalary
  FROM Employees;
  
  -- \`ROW_NUMBER\`: Assigns a unique number to each row within the partition.
  -- \`RANK\`: Assigns a rank to each row, with gaps in ranking if there are ties.
  -- \`DENSE_RANK\`: Similar to \`RANK\`, but without gaps in ranking for ties.
  -- \`LEAD\`: Accesses data from the following row in the result set.
  -- \`LAG\`: Accesses data from the preceding row in the result set.
  
  -- Common Table Expressions (CTEs)
  
  -- CTEs provide a way to define temporary result sets that can be referenced within a \`SELECT\`, \`INSERT\`, \`UPDATE\`, or \`DELETE\` statement.
  -- They improve readability and maintainability of complex queries.
  
  -- Example: Using CTEs.
  
  WITH EmployeeCTE AS (
    SELECT EmployeeID, FirstName, LastName, Salary
    FROM Employees
    WHERE DepartmentID = 1
  )
  SELECT * FROM EmployeeCTE;
  
  -- \`WITH\`: Defines the CTE.
  -- \`EmployeeCTE\`: Name of the CTE.
  -- CTEs can be referenced like tables within the query.
  
  -- Recursive Queries
  
  -- Recursive queries allow a CTE to reference itself, enabling hierarchical data traversal.
  -- They are useful for querying hierarchical data like organizational charts or bill of materials.
  
  -- Example: Using recursive queries.
  
  WITH RECURSIVE EmployeeHierarchy AS (
    SELECT EmployeeID, ManagerID, FirstName, LastName
    FROM Employees
    WHERE ManagerID IS NULL
    UNION ALL
    SELECT e.EmployeeID, e.ManagerID, e.FirstName, e.LastName
    FROM Employees e
    INNER JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
  )
  SELECT * FROM EmployeeHierarchy;
  
  -- \`WITH RECURSIVE\`: Defines a recursive CTE.
  -- The first part of the CTE defines the base case.
  -- The second part of the CTE references the CTE itself to handle recursion.
  
  -- Pivoting and Unpivoting Data
  
  -- Pivoting transforms rows into columns, and unpivoting transforms columns into rows.
  -- These operations are useful for reshaping data for reporting and analysis.
  
  -- Example: Pivoting data.
  
  SELECT *
  FROM (
    SELECT ProductID, Year, SalesAmount
    FROM Sales
  ) AS SourceTable
  PIVOT (
    SUM(SalesAmount) FOR Year IN ([2019], [2020], [2021])
  ) AS PivotTable;
  
  -- Example: Unpivoting data.
  
  SELECT ProductID, Year, SalesAmount
  FROM (
    SELECT ProductID, [2019], [2020], [2021]
    FROM SalesPivot
  ) AS PivotTable
  UNPIVOT (
    SalesAmount FOR Year IN ([2019], [2020], [2021])
  ) AS UnpivotTable;
  
  -- \`PIVOT\`: Transforms rows into columns.
  -- \`UNPIVOT\`: Transforms columns into rows.
  
  -- Using XML in SQL
  
  -- SQL provides functionality to handle XML data.
  -- You can store, query, and manipulate XML data within SQL.
  
  -- Example: Using XML in SQL.
  
  -- Storing XML data.
  INSERT INTO XmlData (XmlColumn)
  VALUES ('<Employee><ID>1</ID><Name>John Doe</Name></Employee>');
  
  -- Querying XML data.
  SELECT 
    XmlColumn.value('(/Employee/ID)[1]', 'INT') AS EmployeeID,
    XmlColumn.value('(/Employee/Name)[1]', 'VARCHAR(100)') AS EmployeeName
  FROM XmlData;
  
  -- \`value\`: Extracts a scalar value from an XML data type.
  -- XPath is used to navigate and query XML data.
  
  -- Summary:
  -- - Advanced SQL features provide powerful tools for complex data manipulation and analysis.
  -- - Window functions enable calculations across related rows.
  -- - Common Table Expressions (CTEs) improve query readability and maintainability.
  -- - Recursive queries enable hierarchical data traversal.
  -- - Pivoting and unpivoting reshape data for reporting and analysis.
  -- - SQL supports handling XML data for storage, querying, and manipulation.
  `
  }
  
  
  
  
  
  
  
  
  
  
 
 
 
 
 
 
  
];