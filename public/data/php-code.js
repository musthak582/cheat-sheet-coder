export const phpCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  // Comments in PHP
  
  // Comments are used to annotate code, making it easier to understand.
  // They are ignored by the PHP interpreter and do not affect the execution of the code.
  
  // Single-line Comments
  
  // Single-line comments start with // or # and extend to the end of the line.
  
  echo "Hello, World!";  // This is a single-line comment using //
  
  // The following line is also a single-line comment using #
  # echo "This line will not execute";
  
  // Multi-line Comments
  
  /* 
     Multi-line comments start with /* and end with *\/.
     They can span multiple lines and are useful for longer explanations or 
     commenting out blocks of code.
  */
  
  echo "This code will run";  /* This is a multi-line comment that
                                spans several lines.
                                echo "This code will not run"; */
  
  // Nested Comments (Not allowed in PHP)
  
  /* 
     PHP does not support nested multi-line comments.
     The following example will cause a syntax error:
  
     /*
        This is a nested comment block
        echo "This will cause an error";
     *\/
     echo "This will also cause an error";
  *\/
  
  /* To comment out a block of code that already contains comments,
     use single-line comments or carefully place multi-line comments. */
  
  // Example:
  
  /* This is a block comment
     // nested single-line comment is fine
     echo "This will not cause an error";
  */
  
  /* Properly closing a multi-line comment is crucial.
     Uncommenting the below code without fixing the comment ending will result in an error.
     echo "PHP requires careful handling of multi-line comments.";
  *\/
  
  /* It's common to use comments for:
     - Describing the purpose of a code block
     - Explaining complex logic
     - Temporarily disabling code
     - Adding notes and reminders */
  
  // Documentation Comments
  
  /** 
   * PHP also supports special documentation comments starting with /**.
   * These are often used to document functions, classes, and methods.
   * Documentation comments can be processed by tools like PHPDoc to generate API documentation.
   */
  
   /**
    * Adds two numbers and returns the result.
    *
    * @param int \$a The first number.
    * @param int \$b The second number.
    * @return int The sum of the two numbers.
    */
   function add($a, $b) {
       return $a + $b;
   }
  
  echo add(5, 10); // Output: 15
  `
  },
  {
    id: 'variables-and-constants',
    label: 'Variables & Constants',
    content: `
  // Variables and Constants in PHP
  
  // Variables
  
  // Variables in PHP are declared with a dollar sign (\$) followed by the variable name.
  // Variable names are case-sensitive and must start with a letter or an underscore, followed by any number of letters, numbers, or underscores.
  
  \$variable = "Hello, World!";
  \$number = 42;
  \$_private = "Private variable";
  
  // PHP is a dynamically-typed language, so variables do not need to be declared with a type.
  // The type of the variable is determined by the value assigned to it.
  
  \$integer = 10;       // Integer
  \$float = 10.5;       // Float
  \$string = "PHP";     // String
  \$boolean = true;     // Boolean
  \$array = [1, 2, 3];  // Array
  
  // Variables can be reassigned to different types, demonstrating PHP's dynamic typing.
  
  \$variable = 100;    // Reassigned as an integer
  \$variable = true;   // Reassigned as a boolean
  
  // Variable Scope
  
  // Variables in PHP can have different scopes: local, global, and static.
  
  \$globalVariable = "Global";
  
  // Local scope: variables defined within a function are local to that function.
  function testLocalScope() {
      \$localVariable = "Local";
      echo \$localVariable;  // Output: Local
  }
  
  // Global scope: variables defined outside of functions are global.
  function testGlobalScope() {
      global \$globalVariable;
      echo \$globalVariable;  // Output: Global
  }
  
  // Static scope: static variables preserve their value between function calls.
  function testStaticScope() {
      static \$counter = 0;
      \$counter++;
      echo \$counter;
  }
  testStaticScope();  // Output: 1
  testStaticScope();  // Output: 2
  
  // Constants
  
  // Constants are defined using the \`define\` function or the \`const\` keyword and cannot be changed once set.
  // Constants do not use the dollar sign (\$) prefix and are case-sensitive by default.
  
  define("PI", 3.14159);
  echo PI;  // Output: 3.14159
  
  // With the \`define\` function, you can also create case-insensitive constants by passing true as the third argument.
  
  define("GREETING", "Hello, PHP!", true);
  echo GREETING;  // Output: Hello, PHP!
  echo greeting;  // Output: Hello, PHP! (case-insensitive)
  
  // The \`const\` keyword is another way to define constants and can be used inside classes.
  
  const VERSION = "1.0.0";
  echo VERSION;  // Output: 1.0.0
  
  // Differences between \`define\` and \`const\`:
  // - \`const\` can be used in class definitions, \`define\` cannot.
  // - \`const\` is evaluated at compile-time, \`define\` is evaluated at runtime.
  
  class Example {
      const CLASS_CONSTANT = "Class Constant";
  }
  
  echo Example::CLASS_CONSTANT;  // Output: Class Constant
  
  // Magic Constants
  
  // PHP provides a set of predefined constants called "magic constants" that change depending on where they are used.
  // Examples include \`__LINE__\`, \`__FILE__\`, \`__DIR__\`, \`__FUNCTION__\`, \`__CLASS__\`, \`__METHOD__\`, and \`__NAMESPACE__\`.
  
  echo __LINE__;    // Output: Current line number in the file
  echo __FILE__;    // Output: Full path and filename of the file
  echo __DIR__;     // Output: Directory of the file
  echo __FUNCTION__; // Output: Function name (if inside a function)
  echo __CLASS__;   // Output: Class name (if inside a class)
  echo __METHOD__;  // Output: Class method name (if inside a method)
  echo __NAMESPACE__; // Output: Current namespace (if inside a namespace)
  
  // Constants vs Variables
  // - Constants cannot be changed after they are defined, whereas variables can be reassigned.
  // - Constants do not use a dollar sign (\$) prefix, variables do.
  // - Constants are global and can be accessed anywhere, while variables' scope can be limited.
  `
  },
  {
    id: 'data-types',
    label: 'Data Types',
    content: `
  // Data Types in PHP
  
  // PHP supports several primitive data types: integers, floats, strings, booleans, arrays, objects, and special types like null and resource.
  
  // Integers
  // Integers are whole numbers, both positive and negative, and can be specified in decimal, hexadecimal, or octal.
  
  \$int = 123;           // Decimal
  \$hex = 0x1A;          // Hexadecimal
  \$oct = 017;           // Octal
  
  echo gettype(\$int);   // Output: integer
  
  // Floats
  // Floats (or doubles) are numbers with a decimal point or in exponential form.
  
  \$float = 12.34;       // Floating point number
  \$exp = 1.2e3;         // Exponential form (1200)
  
  echo gettype(\$float); // Output: double
  
  // Strings
  // Strings are sequences of characters, enclosed in single quotes (' ') or double quotes (" ").
  
  \$string1 = 'Hello, World!';  // Single-quoted string
  \$string2 = "Hello, PHP!";    // Double-quoted string
  
  // Double-quoted strings support variable interpolation and escape sequences.
  \$name = "John";
  \$greeting = "Hello, \$name!"; // Interpolates the variable
  
  echo \$greeting;       // Output: Hello, John!
  
  // Booleans
  // Booleans represent two possible states: true or false.
  
  \$isTrue = true;
  \$isFalse = false;
  
  echo gettype(\$isTrue); // Output: boolean
  
  // Arrays
  // Arrays are collections of values, indexed or associative.
  
  \$indexedArray = [1, 2, 3];    // Indexed array
  \$assocArray = ['key' => 'value', 'foo' => 'bar'];  // Associative array
  
  // Accessing array elements:
  echo \$indexedArray[0];       // Output: 1
  echo \$assocArray['key'];     // Output: value
  
  // Objects
  // Objects are instances of classes and can store both data and methods.
  
  class MyClass {
      public \$property = "Hello, Object!";
      public function myMethod() {
          return "Method called";
      }
  }
  
  \$obj = new MyClass();
  echo \$obj->property;          // Output: Hello, Object!
  echo \$obj->myMethod();        // Output: Method called
  
  // Null
  // The null data type represents a variable with no value assigned.
  
  \$nullVar = null;
  echo gettype(\$nullVar);      // Output: NULL
  
  // Resources
  // Resources are special types representing references to external resources, such as database connections or file handles.
  
  \$file = fopen("test.txt", "r");
  echo gettype(\$file);         // Output: resource
  
  // Type Juggling and Type Casting
  
  // PHP automatically converts types when necessary (type juggling).
  \$var = "10";
  \$sum = \$var + 5;           // \$var is converted to integer
  echo \$sum;                  // Output: 15
  
  // Type casting can be done explicitly using (type) notation.
  \$numString = "123.45";
  \$intCast = (int)\$numString; // Cast to integer
  \$floatCast = (float)\$numString; // Cast to float
  
  echo \$intCast;              // Output: 123
  echo \$floatCast;            // Output: 123.45
  
  // Type Checking
  // PHP provides functions to check the type of variables.
  
  echo is_int(\$int);         // Output: 1 (true)
  echo is_string(\$string1);  // Output: 1 (true)
  echo is_array(\$indexedArray); // Output: 1 (true)
  echo is_object(\$obj);      // Output: 1 (true)
  echo is_null(\$nullVar);    // Output: 1 (true)
  `
  },
  {
    id: 'operators',
    label: 'Operators',
    content: `
  // Operators in PHP
  
  // PHP supports various operators for performing operations on variables and values.
  
  // 1. Arithmetic Operators
  // Used to perform basic arithmetic calculations.
  
  \$a = 10;
  \$b = 5;
  
  echo \$a + \$b;  // Addition: Output: 15
  echo \$a - \$b;  // Subtraction: Output: 5
  echo \$a * \$b;  // Multiplication: Output: 50
  echo \$a / \$b;  // Division: Output: 2
  echo \$a % \$b;  // Modulus (remainder): Output: 0
  echo \$a ** \$b; // Exponentiation (PHP 5.6+): Output: 100000
  
  // 2. Assignment Operators
  // Used to assign values to variables. 
  
  \$x = 10;          // Simple assignment
  \$x += 5;          // Addition assignment: \$x = \$x + 5
  \$x -= 3;          // Subtraction assignment: \$x = \$x - 3
  \$x *= 2;          // Multiplication assignment: \$x = \$x * 2
  \$x /= 5;          // Division assignment: \$x = \$x / 5
  \$x %= 2;          // Modulus assignment: \$x = \$x % 2
  
  echo \$x;          // Output: 1 (result after all assignments)
  
  // 3. Comparison Operators
  // Used to compare two values.
  
  \$c = 10;
  \$d = 20;
  
  echo \$c == \$d;   // Equal: Output: (false)
  echo \$c === \$d;  // Identical (equal and same type): Output: (false)
  echo \$c != \$d;   // Not equal: Output: (true)
  echo \$c <> \$d;   // Not equal: Output: (true)
  echo \$c !== \$d;  // Not identical: Output: (true)
  echo \$c < \$d;    // Less than: Output: (true)
  echo \$c > \$d;    // Greater than: Output: (false)
  echo \$c <= \$d;   // Less than or equal to: Output: (true)
  echo \$c >= \$d;   // Greater than or equal to: Output: (false)
  
  // Spaceship Operator (PHP 7+)
  // Compares two values. Returns -1, 0, or 1 when the left side is respectively less than, equal to, or greater than the right side.
  
  echo \$c <=> \$d;  // Output: -1 (since 10 < 20)
  
  // 4. Increment/Decrement Operators
  // Used to increment or decrement a variable's value.
  
  \$e = 10;
  
  echo ++\$e;  // Pre-increment: Increment \$e by 1, then return \$e (Output: 11)
  echo \$e++;  // Post-increment: Return \$e, then increment \$e by 1 (Output: 11, \$e becomes 12)
  
  echo --\$e;  // Pre-decrement: Decrement \$e by 1, then return \$e (Output: 11)
  echo \$e--;  // Post-decrement: Return \$e, then decrement \$e by 1 (Output: 11, \$e becomes 10)
  
  // 5. Logical Operators
  // Used to combine conditional statements.
  
  \$f = true;
  \$g = false;
  
  echo \$f && \$g;   // AND: true if both \$f and \$g are true (Output: false)
  echo \$f || \$g;   // OR: true if either \$f or \$g is true (Output: true)
  echo !\$f;         // NOT: true if \$f is false (Output: false)
  echo \$f xor \$g;  // XOR: true if either \$f or \$g is true, but not both (Output: true)
  
  // 6. Bitwise Operators
  // Used to perform bit-level operations on integer values.
  
  \$h = 6;  // Binary: 110
  \$i = 3;  // Binary: 011
  
  echo \$h & \$i;   // AND: Each bit set to 1 if both bits are 1 (Output: 2)
  echo \$h | \$i;   // OR: Each bit set to 1 if one of the bits is 1 (Output: 7)
  echo \$h ^ \$i;   // XOR: Each bit set to 1 if only one of the bits is 1 (Output: 5)
  echo ~\$h;        // NOT: Each bit inverted (Output: -7, because of 2's complement representation)
  echo \$h << 1;    // Left shift: Shift bits left by 1 place (Output: 12)
  echo \$h >> 1;    // Right shift: Shift bits right by 1 place (Output: 3)
  
  // 7. String Operators
  // Used to manipulate string values.
  
  \$str1 = "Hello, ";
  \$str2 = "World!";
  
  echo \$str1 . \$str2;   // Concatenation: Combine strings (Output: "Hello, World!")
  \$str1 .= \$str2;       // Concatenation assignment: Append \$str2 to \$str1 (Output: "Hello, World!")
  
  // 8. Array Operators
  // Used to compare or manipulate arrays.
  
  \$array1 = ["a" => 1, "b" => 2];
  \$array2 = ["c" => 3, "d" => 4];
  
  echo \$array1 + \$array2; // Union: Combine arrays (Output: ["a" => 1, "b" => 2, "c" => 3, "d" => 4])
  echo \$array1 == \$array2; // Equality: True if arrays have same key/value pairs (Output: false)
  echo \$array1 === \$array2; // Identity: True if arrays are identical and same order (Output: false)
  echo \$array1 != \$array2; // Inequality: True if arrays are not equal (Output: true)
  echo \$array1 <> \$array2; // Inequality: True if arrays are not equal (Output: true)
  echo \$array1 !== \$array2; // Non-identity: True if arrays are not identical (Output: true)
  
  // 9. Type Operators
  // Used to determine or change the type of a variable.
  
  \$var = 42;
  
  echo gettype(\$var);    // Get the type of the variable (Output: "integer")
  echo is_int(\$var);     // Check if the variable is an integer (Output: true)
  
  settype(\$var, "string"); // Change the type to string
  echo gettype(\$var);    // Output: "string"
  
  // 10. Execution Operator
  // Used to execute shell commands.
  
  \$output = \`ls\`;      // Execute the shell command 'ls'
  echo \$output;         // Output: (list of files and directories)
  
  // 11. Error Control Operator
  // Used to suppress error messages by prefixing an expression with '@'.
  
  @\$undefinedVariable;  // Suppresses error that \$undefinedVariable is not defined
  
  // 12. Null Coalescing Operator (PHP 7+)
  // Used to return the value of its left operand if it is not null, otherwise it returns the right operand.
  
  \$username = \$user ?? 'guest'; // Output: 'guest' (if \$user is not set or null)
  
  // 13. Ternary Operator
  // Used as a shorthand for the if-else statement.
  
  \$age = 18;
  \$message = (\$age >= 18) ? 'Adult' : 'Minor'; // Output: 'Adult'
  `
  },
  {
    id: 'conditional-statements',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in PHP
  
  // Conditional statements control the flow of execution based on given conditions.
  
  // 1. if Statement
  // Executes a block of code if the specified condition is true.
  
  \$num = 10;
  
  if (\$num > 5) {
      echo "The number is greater than 5.";  // Output: The number is greater than 5.
  }
  
  // 2. if-else Statement
  // Executes one block of code if the condition is true, otherwise executes another block of code.
  
  if (\$num > 15) {
      echo "The number is greater than 15.";
  } else {
      echo "The number is 15 or less.";  // Output: The number is 15 or less.
  }
  
  // 3. if-elseif-else Statement
  // Checks multiple conditions, executing the corresponding block for the first true condition.
  
  if (\$num > 15) {
      echo "The number is greater than 15.";
  } elseif (\$num > 10) {
      echo "The number is greater than 10.";
  } else {
      echo "The number is 10 or less.";  // Output: The number is 10 or less.
  }
  
  // 4. Nested if Statements
  // if statements can be nested within each other to check multiple conditions.
  
  if (\$num > 5) {
      if (\$num < 15) {
          echo "The number is between 5 and 15.";  // Output: The number is between 5 and 15.
      }
  }
  
  // 5. Ternary Operator
  // A shorthand for the if-else statement. Returns a value based on the condition.
  
  \$result = (\$num > 5) ? "Greater than 5" : "5 or less";
  echo \$result;  // Output: Greater than 5
  
  // 6. Null Coalescing Operator (PHP 7+)
  // Returns the left-hand operand if it is not null, otherwise returns the right-hand operand.
  
  \$username = \$user ?? 'Guest';
  echo \$username;  // Output: Guest (if \$user is not set or null)
  
  // 7. switch Statement
  // Selects one of many blocks of code to execute based on the value of a variable.
  
  \$day = 'Monday';
  
  switch (\$day) {
      case 'Monday':
          echo "Start of the work week.";  // Output: Start of the work week.
          break;
      case 'Friday':
          echo "End of the work week.";
          break;
      case 'Saturday':
      case 'Sunday':
          echo "Weekend!";
          break;
      default:
          echo "Midweek day.";
          break;
  }
  
  // Note: The break statement is used to terminate the current case block and exit the switch statement.
  // Without break, the code will continue executing into the next case (known as "fall-through").
  
  // 8. Alternative Syntax for Control Structures
  // PHP provides an alternative syntax for control structures for use with HTML.
  
  if (\$num > 5):
      echo "The number is greater than 5.";
  elseif (\$num == 5):
      echo "The number is exactly 5.";
  else:
      echo "The number is less than 5.";
  endif;
  
  switch (\$day):
      case 'Monday':
          echo "Start of the work week.";
          break;
      case 'Friday':
          echo "End of the work week.";
          break;
      case 'Saturday':
      case 'Sunday':
          echo "Weekend!";
          break;
      default:
          echo "Midweek day.";
  endswitch;
  
  // This alternative syntax is often used in templates and views to improve readability when mixing PHP and HTML.
  `
  },
  {
    id: 'loops',
    label: 'Loops',
    content: `
  // Loops in PHP
  
  // Loops are used to execute a block of code repeatedly as long as a specified condition is true.
  
  // 1. while Loop
  // Executes a block of code as long as the specified condition is true.
  
  \$counter = 1;
  
  while (\$counter <= 5) {
      echo "Counter is at \$counter" . PHP_EOL;  // Output: Counter is at 1 ... Counter is at 5
      \$counter++;
  }
  
  // 2. do-while Loop
  // Executes a block of code once, and then repeats the execution as long as the specified condition is true.
  
  \$counter = 1;
  
  do {
      echo "Counter is at \$counter" . PHP_EOL;  // Output: Counter is at 1 ... Counter is at 5
      \$counter++;
  } while (\$counter <= 5);
  
  // Note: The do-while loop will always execute the block of code at least once, even if the condition is false from the beginning.
  
  // 3. for Loop
  // Executes a block of code a specified number of times using an initializer, a condition, and an increment/decrement expression.
  
  for (\$i = 1; \$i <= 5; \$i++) {
      echo "Value of i is \$i" . PHP_EOL;  // Output: Value of i is 1 ... Value of i is 5
  }
  
  // 4. foreach Loop
  // Iterates over elements in an array or an object, and executes a block of code for each element.
  
  \$colors = ['red', 'green', 'blue'];
  
  foreach (\$colors as \$color) {
      echo "Color: \$color" . PHP_EOL;  // Output: Color: red ... Color: blue
  }
  
  // foreach with associative arrays
  
  \$person = [
      "name" => "John",
      "age" => 30,
      "profession" => "Developer"
  ];
  
  foreach (\$person as \$key => \$value) {
      echo "\$key: \$value" . PHP_EOL;  // Output: name: John ... profession: Developer
  }
  
  // Note: foreach loops are especially useful for working with arrays and objects.
  
  // 5. Nested Loops
  // Loops can be nested inside each other to perform complex iterations.
  
  for (\$i = 1; \$i <= 3; \$i++) {
      echo "Outer loop iteration: \$i" . PHP_EOL;
      for (\$j = 1; \$j <= 2; \$j++) {
          echo "  Inner loop iteration: \$j" . PHP_EOL;
      }
      // Output:
      // Outer loop iteration: 1
      //   Inner loop iteration: 1
      //   Inner loop iteration: 2
      // Outer loop iteration: 2
      //   Inner loop iteration: 1
      //   Inner loop iteration: 2
      // Outer loop iteration: 3
      //   Inner loop iteration: 1
      //   Inner loop iteration: 2
  }
  
  // 6. Loop Control Statements
  // - break: Exits the loop entirely.
  // - continue: Skips the current iteration and continues with the next iteration.
  
  for (\$i = 1; \$i <= 5; \$i++) {
      if (\$i == 3) {
          break;  // Exits the loop when i equals 3
      }
      echo "\$i" . PHP_EOL;  // Output: 1 2
  }
  
  for (\$i = 1; \$i <= 5; \$i++) {
      if (\$i == 3) {
          continue;  // Skips the iteration when i equals 3
      }
      echo "\$i" . PHP_EOL;  // Output: 1 2 4 5
  }
  
  // PHP_EOL is a predefined constant that represents a newline character, used for formatting the output.
  
  `
  },
  {
    id: 'functions',
    label: 'Functions',
    content: `
  // Functions in PHP
  
  // 1. Defining and Calling Functions
  // Functions are blocks of code that can be called multiple times with different inputs to perform a specific task.
  
  function sayHello() {
      echo "Hello, World!" . PHP_EOL;
  }
  
  // Calling the function
  sayHello();  // Output: Hello, World!
  
  // Functions can also take parameters and return values.
  
  function greet(\$name) {
      return "Hello, \$name!";
  }
  
  // Calling the function with a parameter
  echo greet("Alice") . PHP_EOL;  // Output: Hello, Alice!
  
  // 2. Function Parameters and Return Values
  // Functions can take zero or more parameters and can return a value to the caller.
  
  function add(\$a, \$b) {
      return \$a + \$b;
  }
  
  \$sum = add(5, 3);
  echo "Sum: \$sum" . PHP_EOL;  // Output: Sum: 8
  
  // PHP supports default parameter values.
  
  function multiply(\$a, \$b = 2) {
      return \$a * \$b;
  }
  
  echo multiply(4) . PHP_EOL;  // Output: 8 (4 * 2)
  echo multiply(4, 3) . PHP_EOL;  // Output: 12 (4 * 3)
  
  // PHP also supports passing arguments by reference.
  
  function incrementByReference(&\$value) {
      \$value++;
  }
  
  \$number = 5;
  incrementByReference(\$number);
  echo "Incremented number: \$number" . PHP_EOL;  // Output: Incremented number: 6
  
  // 3. Variable Scope and Global Keyword
  // Variables in PHP can have local, global, or static scope.
  
  \$globalVar = "I'm a global variable!";
  
  function showGlobalVar() {
      global \$globalVar;
      echo \$globalVar . PHP_EOL;  // Output: I'm a global variable!
  }
  
  showGlobalVar();
  
  // Variables declared inside a function have local scope.
  
  function localScopeExample() {
      \$localVar = "I'm a local variable!";
      echo \$localVar . PHP_EOL;  // Output: I'm a local variable!
  }
  
  localScopeExample();
  // echo \$localVar;  // This would cause an error because \$localVar is not defined in the global scope.
  
  // Static variables retain their value between function calls.
  
  function staticScopeExample() {
      static \$counter = 0;
      \$counter++;
      echo "Counter: \$counter" . PHP_EOL;
  }
  
  staticScopeExample();  // Output: Counter: 1
  staticScopeExample();  // Output: Counter: 2
  
  // 4. Variable Functions
  // PHP supports variable functions, where you can store the name of a function in a variable and call it using that variable.
  
  function sayGoodbye() {
      echo "Goodbye!" . PHP_EOL;
  }
  
  \$func = 'sayGoodbye';
  \$func();  // Output: Goodbye!
  
  // 5. Anonymous Functions and Closures
  // PHP allows the creation of anonymous functions (also known as closures or lambda functions), which can be assigned to variables and passed as arguments.
  
  \$square = function (\$n) {
      return \$n * \$n;
  };
  
  echo "Square of 4: " . \$square(4) . PHP_EOL;  // Output: Square of 4: 16
  
  // Closures can also capture variables from the surrounding scope.
  
  \$factor = 3;
  \$multiply = function (\$n) use (\$factor) {
      return \$n * \$factor;
  };
  
  echo "3 multiplied by 4: " . \$multiply(4) . PHP_EOL;  // Output: 3 multiplied by 4: 12
  
  // Anonymous functions can be used as callback functions.
  
  \$numbers = [1, 2, 3, 4, 5];
  \$squaredNumbers = array_map(function (\$n) {
      return \$n * \$n;
  }, \$numbers);
  
  echo "Squared numbers: " . implode(", ", \$squaredNumbers) . PHP_EOL;  // Output: Squared numbers: 1, 4, 9, 16, 25
  
  // Lambda functions can also be created using the fn keyword (short syntax).
  
  \$double = fn(\$n) => \$n * 2;
  echo "Double of 5: " . \$double(5) . PHP_EOL;  // Output: Double of 5: 10
  `
  },
  {
    id: 'strings',
    label: 'Strings',
    content: `
  // Strings in PHP
  
  // 1. String Creation and Manipulation
  // Strings in PHP can be created using single quotes (' ') or double quotes (" ") and can be manipulated using various functions.
  
  \$singleQuoted = 'Hello, World!';
  \$doubleQuoted = "Hello, World!";
  
  // Single-quoted strings do not process variables or escape sequences.
  \$name = 'Alice';
  \$greeting = 'Hello, \$name';  // Output: Hello, \$name
  
  // Double-quoted strings interpret variables and escape sequences.
  \$greeting = "Hello, \$name";  // Output: Hello, Alice
  \$newline = "This is a new line\\n";  // Output: This is a new line\n (interprets the escape sequence)
  
  // 2. String Interpolation and Concatenation
  // PHP supports string interpolation and concatenation.
  
  \$language = "PHP";
  \$version = 8;
  
  // String interpolation using double quotes:
  \$info = "This is \$language version \$version.";  // Output: This is PHP version 8.
  
  // Curly braces can be used for complex variables inside double quotes:
  \$day = "Monday";
  \$message = "Today is {\$day}day.";  // Output: Today is Mondayday.
  
  // String concatenation using the dot operator (.):
  \$part1 = "Hello";
  \$part2 = "World";
  \$combined = \$part1 . ", " . \$part2 . "!";  // Output: Hello, World!
  
  // Concatenation assignment:
  \$message = "Hello";
  \$message .= " World!";  // Output: Hello World!
  
  // 3. String Functions
  // PHP provides a wide range of functions for string manipulation.
  
  \$str = "Hello, World!";
  
  // strlen: Returns the length of the string.
  echo "Length: " . strlen(\$str) . PHP_EOL;  // Output: Length: 13
  
  // strpos: Finds the position of the first occurrence of a substring.
  echo "Position of 'World': " . strpos(\$str, "World") . PHP_EOL;  // Output: Position of 'World': 7
  
  // str_replace: Replaces all occurrences of a search string with a replacement.
  \$replaced = str_replace("World", "PHP", \$str);
  echo "Replaced: " . \$replaced . PHP_EOL;  // Output: Replaced: Hello, PHP!
  
  // strtolower: Converts a string to lowercase.
  echo "Lowercase: " . strtolower(\$str) . PHP_EOL;  // Output: Lowercase: hello, world!
  
  // strtoupper: Converts a string to uppercase.
  echo "Uppercase: " . strtoupper(\$str) . PHP_EOL;  // Output: Uppercase: HELLO, WORLD!
  
  // substr: Returns a part of a string.
  echo "Substring: " . substr(\$str, 7, 5) . PHP_EOL;  // Output: Substring: World
  
  // str_split: Splits a string into an array of characters.
  \$charArray = str_split(\$str);
  echo "Characters: " . implode(", ", \$charArray) . PHP_EOL;  // Output: Characters: H, e, l, l, o, ,,  , W, o, r, l, d, !
  
  // trim: Removes whitespace from the beginning and end of a string.
  \$whitespaceStr = "   Hello, PHP!   ";
  echo "Trimmed: '" . trim(\$whitespaceStr) . "'" . PHP_EOL;  // Output: Trimmed: 'Hello, PHP!'
  
  // 4. Multibyte String Functions
  // PHP provides functions to handle multibyte strings, which are necessary for dealing with strings containing non-ASCII characters.
  
  \$multiByteStr = "こんにちは世界";  // "Hello, World" in Japanese
  
  // mb_strlen: Returns the length of a multibyte string.
  echo "Multibyte Length: " . mb_strlen(\$multiByteStr) . PHP_EOL;  // Output: Multibyte Length: 7
  
  // mb_substr: Returns part of a multibyte string.
  echo "Multibyte Substring: " . mb_substr(\$multiByteStr, 3, 2) . PHP_EOL;  // Output: Multibyte Substring: ち世
  
  // mb_strtolower: Converts a multibyte string to lowercase (works for specific locales).
  \$multiByteStrUpper = "ＫＯＮＮＩＣＨＩＷＡ";
  echo "Multibyte Lowercase: " . mb_strtolower(\$multiByteStrUpper, 'UTF-8') . PHP_EOL;  // Output: Multibyte Lowercase: こんにちは
  
  // mb_strtoupper: Converts a multibyte string to uppercase (works for specific locales).
  \$multiByteStrLower = "こんにちは";
  echo "Multibyte Uppercase: " . mb_strtoupper(\$multiByteStrLower, 'UTF-8') . PHP_EOL;  // Output: Multibyte Uppercase: こんにちは
  `
  },
  {
    id: 'arrays',
    label: 'Arrays',
    content: `
  // Arrays in PHP
  
  // 1. Creating and Accessing Arrays
  // Arrays in PHP can store multiple values in a single variable. They can be indexed or associative.
  
  \$indexedArray = [1, 2, 3, 4, 5];  // Indexed array
  \$associativeArray = ["name" => "Alice", "age" => 30];  // Associative array
  
  // Accessing array elements
  echo \$indexedArray[0] . PHP_EOL;  // Output: 1
  echo \$associativeArray["name"] . PHP_EOL;  // Output: Alice
  
  // Adding elements to an array
  \$indexedArray[] = 6;  // Append to the end
  \$associativeArray["gender"] = "female";  // Add new key-value pair
  
  // 2. Array Functions
  // PHP provides many built-in functions to manipulate arrays.
  
  \$numbers = [1, 2, 3];
  
  // array_push: Adds elements to the end of an array.
  array_push(\$numbers, 4, 5);
  print_r(\$numbers);  // Output: Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
  
  // array_pop: Removes the last element from an array.
  \$last = array_pop(\$numbers);
  echo "Popped: \$last" . PHP_EOL;  // Output: Popped: 5
  print_r(\$numbers);  // Output: Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 )
  
  // count: Returns the number of elements in an array.
  echo "Count: " . count(\$numbers) . PHP_EOL;  // Output: Count: 4
  
  // array_merge: Merges two or more arrays.
  \$array1 = [1, 2, 3];
  \$array2 = [4, 5, 6];
  \$mergedArray = array_merge(\$array1, \$array2);
  print_r(\$mergedArray);  // Output: Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 )
  
  // array_slice: Extracts a portion of an array.
  \$slice = array_slice(\$mergedArray, 2, 3);
  print_r(\$slice);  // Output: Array ( [0] => 3 [1] => 4 [2] => 5 )
  
  // array_keys: Returns all the keys of an array.
  print_r(array_keys(\$associativeArray));  // Output: Array ( [0] => name [1] => age [2] => gender )
  
  // array_values: Returns all the values of an array.
  print_r(array_values(\$associativeArray));  // Output: Array ( [0] => Alice [1] => 30 [2] => female )
  
  // 3. Associative Arrays
  // Associative arrays use named keys that you assign to them.
  
  \$person = [
      "firstName" => "John",
      "lastName" => "Doe",
      "age" => 28
  ];
  
  // Accessing elements by their key
  echo \$person["firstName"] . PHP_EOL;  // Output: John
  
  // Adding new key-value pairs
  \$person["email"] = "john.doe@example.com";
  
  // Modifying values
  \$person["age"] = 29;
  
  print_r(\$person);  // Output: Array ( [firstName] => John [lastName] => Doe [age] => 29 [email] => john.doe@example.com )
  
  // 4. Multidimensional Arrays
  // Multidimensional arrays are arrays that contain other arrays as their elements.
  
  \$matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];
  
  // Accessing elements in a multidimensional array
  echo \$matrix[0][1] . PHP_EOL;  // Output: 2 (first row, second column)
  echo \$matrix[2][0] . PHP_EOL;  // Output: 7 (third row, first column)
  
  // Associative multidimensional array
  \$employees = [
      [
          "name" => "Alice",
          "position" => "Developer"
      ],
      [
          "name" => "Bob",
          "position" => "Designer"
      ]
  ];
  
  echo \$employees[1]["name"] . PHP_EOL;  // Output: Bob
  
  // 5. Array Iteration
  // PHP provides several ways to iterate over arrays, including \`foreach\`, \`array_map\`, and \`array_filter\`.
  
  \$colors = ["red", "green", "blue"];
  
  // foreach loop: Iterates over each element in the array.
  foreach (\$colors as \$color) {
      echo "Color: \$color" . PHP_EOL;
  }
  // Output:
  // Color: red
  // Color: green
  // Color: blue
  
  // array_map: Applies a callback function to each element of an array.
  \$numbers = [1, 2, 3, 4, 5];
  \$squared = array_map(function(\$n) {
      return \$n * \$n;
  }, \$numbers);
  print_r(\$squared);  // Output: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )
  
  // array_filter: Filters elements of an array using a callback function.
  \$evens = array_filter(\$numbers, function(\$n) {
      return \$n % 2 === 0;
  });
  print_r(\$evens);  // Output: Array ( [1] => 2 [3] => 4 )
  
  // foreach with associative arrays
  foreach (\$person as \$key => \$value) {
      echo "\$key: \$value" . PHP_EOL;
  }
  // Output:
  // firstName: John
  // lastName: Doe
  // age: 29
  // email: john.doe@example.com
  `
  },
  {
    id: 'superglobals',
    label: 'Superglobals',
    content: `
  // Superglobals in PHP
  
  // Superglobals are built-in variables in PHP that are always accessible, regardless of scope. They provide access to input data, server information, and other global data.
  
  
  // 1. Understanding \$_GET, \$_POST, \$_REQUEST
  
  // \$_GET: Used to collect form data sent with the GET method. Data is appended to the URL.
  if (isset(\$_GET['name'])) {
      echo "GET Name: " . htmlspecialchars(\$_GET['name']) . PHP_EOL;
  }
  
  // Example URL: example.com?name=Alice
  // Output: GET Name: Alice
  
  // \$_POST: Used to collect form data sent with the POST method. Data is not displayed in the URL.
  if (isset(\$_POST['name'])) {
      echo "POST Name: " . htmlspecialchars(\$_POST['name']) . PHP_EOL;
  }
  
  // \$_REQUEST: A superglobal array that contains data from both \$_GET and \$_POST as well as cookies.
  if (isset(\$_REQUEST['name'])) {
      echo "REQUEST Name: " . htmlspecialchars(\$_REQUEST['name']) . PHP_EOL;
  }
  
  // 2. Using \$_SERVER and \$_ENV
  
  // \$_SERVER: Contains information about headers, paths, and script locations.
  echo "Server Name: " . \$_SERVER['SERVER_NAME'] . PHP_EOL;  // Output: localhost (or the server's name)
  echo "Script Name: " . \$_SERVER['SCRIPT_NAME'] . PHP_EOL;  // Output: /path/to/script.php
  
  // Useful \$_SERVER keys:
  echo "Request Method: " . \$_SERVER['REQUEST_METHOD'] . PHP_EOL;  // Output: GET or POST
  echo "User Agent: " . \$_SERVER['HTTP_USER_AGENT'] . PHP_EOL;  // Output: Browser information
  echo "Client IP: " . \$_SERVER['REMOTE_ADDR'] . PHP_EOL;  // Output: Client's IP address
  
  // \$_ENV: Provides access to the environment variables. These are typically set in the server configuration.
  foreach (\$_ENV as \$key => \$value) {
      echo "\$key: \$value" . PHP_EOL;
  }
  
  // Accessing a specific environment variable (example: PATH)
  echo "PATH: " . getenv('PATH') . PHP_EOL;
  
  // 3. Working with \$_FILES for File Uploads
  
  // \$_FILES: Used to handle file uploads in PHP.
  if (isset(\$_FILES['file'])) {
      \$file = \$_FILES['file'];
      echo "File Name: " . \$file['name'] . PHP_EOL;
      echo "File Type: " . \$file['type'] . PHP_EOL;
      echo "File Size: " . (\$file['size'] / 1024) . " KB" . PHP_EOL;
      echo "Temp Location: " . \$file['tmp_name'] . PHP_EOL;
  
      // Moving the uploaded file to a designated directory
      \$uploadDir = "uploads/";
      \$uploadFile = \$uploadDir . basename(\$file['name']);
      if (move_uploaded_file(\$file['tmp_name'], \$uploadFile)) {
          echo "File successfully uploaded to \$uploadFile" . PHP_EOL;
      } else {
          echo "File upload failed!" . PHP_EOL;
      }
  }
  
  // Example form for file upload:
  echo '
  <form action="" method="post" enctype="multipart/form-data">
      Select file to upload:
      <input type="file" name="file">
      <input type="submit" value="Upload">
  </form>
  ';
  
  // 4. \$_COOKIE and \$_SESSION for State Management
  
  // \$_COOKIE: Used to retrieve or set cookies. Cookies store small pieces of data on the client-side.
  setcookie("user", "Alice", time() + (86400 * 30), "/");  // Set a cookie for 30 days
  
  if (isset(\$_COOKIE['user'])) {
      echo "User Cookie: " . htmlspecialchars(\$_COOKIE['user']) . PHP_EOL;  // Output: Alice
  }
  
  // \$_SESSION: Used to manage user sessions. Sessions store data on the server-side.
  session_start();  // Start the session
  \$_SESSION['username'] = "Alice";  // Set a session variable
  
  if (isset(\$_SESSION['username'])) {
      echo "Session Username: " . htmlspecialchars(\$_SESSION['username']) . PHP_EOL;  // Output: Alice
  }
  
  // Destroying a session
  session_destroy();
  
  // 5. \$_GLOBALS and its Usage
  
  // \$_GLOBALS: A superglobal array that contains references to all global variables in the script.
  \$globalVar = "This is a global variable";
  
  function testGlobals() {
      global \$globalVar;  // Accessing the global variable using the global keyword
      echo "Global Variable (global keyword): " . \$globalVar . PHP_EOL;
      
      echo "Global Variable (\$_GLOBALS): " . \$_GLOBALS['globalVar'] . PHP_EOL;
  }
  
  testGlobals();  // Output: This is a global variable
  `
  },
  {
    id: 'oop',
    label: 'OOP',
    content: `
  // Object-Oriented Programming in PHP
  
  // 1. Classes and Objects
  
  // A class is a blueprint for creating objects (instances).
  class Car {
      // Properties
      public $brand;
      public $model;
      public $year;
  
      // Methods
      public function displayInfo() {
          echo "Brand: " . \$this->brand . ", Model: " . \$this->model . ", Year: " . \$this->year . PHP_EOL;
      }
  }
  
  // Creating an object (instance) of the Car class
  \$car1 = new Car();
  \$car1->brand = "Toyota";
  \$car1->model = "Corolla";
  \$car1->year = 2021;
  \$car1->displayInfo();  // Output: Brand: Toyota, Model: Corolla, Year: 2021
  
  // 2. Properties and Methods
  
  // Properties are variables that belong to a class.
  // Methods are functions that belong to a class.
  
  class Person {
      public \$name;
      public \$age;
  
      public function introduce() {
          echo "Hello, my name is " . \$this->name . " and I am " . \$this->age . " years old." . PHP_EOL;
      }
  }
  
  // Creating an object (instance) of the Person class
  \$person = new Person();
  \$person->name = "Alice";
  \$person->age = 30;
  \$person->introduce();  // Output: Hello, my name is Alice and I am 30 years old.
  
  // 3. Constructors and Destructors
  
  // A constructor is a special method that is automatically called when an object is instantiated.
  class Product {
      public \$name;
      public \$price;
  
      // Constructor
      public function __construct(\$name, \$price) {
          \$this->name = \$name;
          \$this->price = \$price;
          echo "Product \$name created with price \$price" . PHP_EOL;
      }
  
      // Destructor
      public function __destruct() {
          echo "Product \$this->name is being destroyed" . PHP_EOL;
      }
  
      public function displayProduct() {
          echo "Product: " . \$this->name . ", Price: $" . \$this->price . PHP_EOL;
      }
  }
  
  // Creating an object (instance) of the Product class
  \$product = new Product("Laptop", 1500);
  \$product->displayProduct();  // Output: Product: Laptop, Price: $1500
  
  // Destructor is automatically called when the script ends or the object is no longer in use.
  // Output: Product Laptop is being destroyed
  
  // 4. Inheritance and Method Overriding
  
  // Inheritance allows a class to inherit properties and methods from another class.
  class Animal {
      public \$name;
  
      public function __construct(\$name) {
          \$this->name = \$name;
      }
  
      public function speak() {
          echo "\$this->name makes a sound." . PHP_EOL;
      }
  }
  
  class Dog extends Animal {
      public function speak() {
          echo "\$this->name barks." . PHP_EOL;
      }
  }
  
  // Creating an object (instance) of the Dog class
  \$dog = new Dog("Buddy");
  \$dog->speak();  // Output: Buddy barks.
  
  // 5. Visibility (public, protected, private)
  
  // Visibility controls the access to class properties and methods.
  
  class Example {
      public \$publicVar = "Public";  // Accessible from anywhere
      protected \$protectedVar = "Protected";  // Accessible within the class and subclasses
      private \$privateVar = "Private";  // Accessible only within the class
  
      public function showVars() {
          echo "Public: " . \$this->publicVar . PHP_EOL;
          echo "Protected: " . \$this->protectedVar . PHP_EOL;
          echo "Private: " . \$this->privateVar . PHP_EOL;
      }
  }
  
  // Creating an object (instance) of the Example class
  \$example = new Example();
  \$example->showVars();
  
  // Accessing properties directly
  echo \$example->publicVar . PHP_EOL;  // Output: Public
  // echo \$example->protectedVar . PHP_EOL;  // Error: Cannot access protected property
  // echo \$example->privateVar . PHP_EOL;  // Error: Cannot access private property
  `
  },
  {
    id: 'advanced-oop',
    label: 'Advanced OOP',
    content: `
  // Advanced OOP Concepts in PHP
  
  // 1. Abstract Classes and Methods
  
  // Abstract classes cannot be instantiated and may contain abstract methods, which must be implemented by derived classes.
  
  abstract class Vehicle {
      protected \$brand;
      
      public function __construct(\$brand) {
          \$this->brand = \$brand;
      }
      
      // Abstract method: must be implemented by any class that extends Vehicle
      abstract public function start();
  }
  
  class Car extends Vehicle {
      public function start() {
          echo "\$this->brand car is starting." . PHP_EOL;
      }
  }
  
  \$car = new Car("Toyota");
  \$car->start();  // Output: Toyota car is starting.
  
  // 2. Interfaces
  
  // Interfaces define methods that must be implemented by any class that implements the interface.
  interface Drivable {
      public function drive();
  }
  
  class Bike implements Drivable {
      public function drive() {
          echo "Bike is driving." . PHP_EOL;
      }
  }
  
  \$bike = new Bike();
  \$bike->drive();  // Output: Bike is driving.
  
  // 3. Traits and Trait Composition
  
  // Traits allow you to reuse code across multiple classes without inheritance.
  trait Logger {
      public function log(\$message) {
          echo "Log: " . \$message . PHP_EOL;
      }
  }
  
  class User {
      use Logger;
  
      public function createUser() {
          \$this->log("User created.");
      }
  }
  
  \$user = new User();
  \$user->createUser();  // Output: Log: User created.
  
  // 4. Static Methods and Properties
  
  // Static methods and properties belong to the class itself rather than to instances of the class.
  class MathHelper {
      public static \$pi = 3.14159;
  
      public static function square(\$number) {
          return \$number * \$number;
      }
  }
  
  echo MathHelper::\$pi . PHP_EOL;  // Output: 3.14159
  echo MathHelper::square(4) . PHP_EOL;  // Output: 16
  
  // 5. Namespaces and Autoloading
  
  // Namespaces help organize code and prevent name conflicts.
  namespace App\Models;
  
  class User {
      public function __construct() {
          echo "User model initialized." . PHP_EOL;
      }
  }
  
  \$user = new \\App\\Models\\User();  // Output: User model initialized.
  
  // Autoloading is a way to automatically include classes when they are needed.
  // Using PSR-4 autoloading standard with Composer is common practice in PHP.
  
  require 'vendor/autoload.php';  // Assuming Composer autoload
  
  // Composer's autoloading automatically includes classes from specified namespaces and directories.
  
  // Example structure:
  // - src/
  //   - Models/
  //     - User.php
  // - vendor/
  //   - autoload.php
  
  // In \`composer.json\`:
  // "autoload": {
  //     "psr-4": {
  //         "App\\Models\\": "src/Models"
  //     }
  // }
  
  // Now \`new \\App\\Models\\User()\` will autoload \`src/Models/User.php\` automatically.
  `
  },
  {
    id: 'error-handling',
    label: 'Error Handling',
    content: `
  // Error Handling in PHP
  
  // 1. Error Reporting Levels
  
  // PHP provides different error reporting levels that you can set to control which errors are reported.
  // Common error levels include E_ERROR, E_WARNING, E_PARSE, E_NOTICE, and E_ALL.
  
  error_reporting(E_ALL);  // Report all errors, warnings, and notices
  ini_set('display_errors', 1);  // Display errors to the screen
  
  // You can suppress errors in specific expressions using the '@' operator.
  $result = @file_get_contents("nonexistent_file.txt");  // Suppresses error message if file doesn't exist
  
  // 2. Error Handling with \`try\`, \`catch\`, \`finally\`
  
  // The \`try\` block contains code that may throw an exception.
  // The \`catch\` block handles the exception.
  // The \`finally\` block contains code that will always run, regardless of whether an exception was thrown.
  
  try {
      // Code that may throw an exception
      if (rand(0, 1) == 0) {
          throw new Exception("An error occurred!");
      }
      echo "No error occurred." . PHP_EOL;
  } catch (Exception \$e) {
      // Code to handle the exception
      echo "Caught exception: " . \$e->getMessage() . PHP_EOL;
  } finally {
      // Code that will always execute
      echo "This is the finally block." . PHP_EOL;
  }
  
  // 3. Custom Error Handlers
  
  // You can set a custom error handler function to handle errors in a specific way.
  
  function customErrorHandler(\$errno, \$errstr, \$errfile, \$errline) {
      echo "Error [\$errno]: \$errstr in \$errfile on line \$errline" . PHP_EOL;
      return true;  // Indicates that the PHP error handler should not execute
  }
  
  set_error_handler("customErrorHandler");
  
  // Triggering an error
  echo \$undefined_variable;  // This will invoke the custom error handler
  
  // 4. Exceptions and Exception Hierarchy
  
  // PHP has a built-in Exception class and allows creating custom exceptions by extending this class.
  
  class CustomException extends Exception {
      public function customFunction() {
          echo "Custom functionality for this exception." . PHP_EOL;
      }
  }
  
  try {
      // Code that may throw a custom exception
      throw new CustomException("A custom error occurred!");
  } catch (CustomException \$e) {
      // Handling the custom exception
      echo "Caught custom exception: " . \$e->getMessage() . PHP_EOL;
      \$e->customFunction();
  } catch (Exception \$e) {
      // Handling general exceptions
      echo "Caught exception: " . \$e->getMessage() . PHP_EOL;
  }
  
  // 5. Logging Errors
  
  // PHP can log errors to a file using the \`error_log\` function and configuring the \`error_log\` directive.
  
  error_log("This is an error message.", 3, "/path/to/error_log.log");
  
  // You can also configure PHP to log errors by setting the \`log_errors\` directive and the \`error_log\` path.
  
  ini_set('log_errors', 1);
  ini_set('error_log', '/path/to/error_log.log');
  
  // Example of logging an error
  try {
      if (rand(0, 1) == 0) {
          throw new Exception("Logging error to file.");
      }
  } catch (Exception \$e) {
      error_log(\$e->getMessage(), 3, "/path/to/error_log.log");
  }
  `
  },
  {
    id: 'file-handling',
    label: 'File Handling',
    content: `
  // File Handling in PHP
  
  // 1. Opening and Closing Files
  
  // To open a file in PHP, use the \`fopen\` function. It requires the file path and the mode in which to open the file.
  // Common modes include:
  // - \`'r'\`: Read only (starts at the beginning of the file)
  // - \`'w'\`: Write only (opens and truncates the file; creates new file if it doesn't exist)
  // - \`'a'\`: Write only (opens and writes to the end of the file; creates new file if it doesn't exist)
  // - \`'r+'\`: Read and write (starts at the beginning of the file)
  // - \`'w+'\`: Read and write (opens and truncates the file; creates new file if it doesn't exist)
  // - \`'a+'\`: Read and write (opens and writes to the end of the file; creates new file if it doesn't exist)
  
  \$file = fopen("example.txt", "r");  // Opens the file for reading
  
  if (\$file) {
      // Do something with the file
      fclose(\$file);  // Always close the file when done
  } else {
      echo "Error opening the file.";
  }
  
  // 2. Reading and Writing Files
  
  // Reading from a file can be done with functions like \`fread\` and \`fgets\`.
  // Writing to a file can be done with \`fwrite\`.
  
  \$file = fopen("example.txt", "r");
  
  if (\$file) {
      // Read 100 bytes from the file
      \$content = fread(\$file, 100);
      echo "Read content: " . \$content . PHP_EOL;
  
      fclose(\$file);
  } else {
      echo "Error reading the file.";
  }
  
  // Writing to a file
  \$file = fopen("example.txt", "w");
  
  if (\$file) {
      // Write a string to the file
      \$written = fwrite(\$file, "Hello, World!");
      echo "Number of bytes written: " . \$written . PHP_EOL;
  
      fclose(\$file);
  } else {
      echo "Error writing to the file.";
  }
  
  // 3. File Operations
  
  // \`fgets\` reads a line from the file
  \$file = fopen("example.txt", "r");
  if (\$file) {
      while ((\$line = fgets(\$file)) !== false) {
          echo "Line: " . \$line . PHP_EOL;
      }
      fclose(\$file);
  }
  
  // \`file_get_contents\` reads the entire file into a string
  \$content = file_get_contents("example.txt");
  echo "File content: " . \$content . PHP_EOL;
  
  // \`file_put_contents\` writes a string to a file (and overwrites if it exists)
  file_put_contents("example.txt", "Overwritten content.");
  
  // 4. File Permissions and Metadata
  
  // \`chmod\` changes the file permissions
  chmod("example.txt", 0644);  // Sets read and write permissions for the owner, and read-only for others
  
  // \`file_exists\` checks if a file exists
  if (file_exists("example.txt")) {
      echo "The file exists." . PHP_EOL;
  } else {
      echo "The file does not exist." . PHP_EOL;
  }
  
  // \`filesize\` returns the size of the file in bytes
  echo "File size: " . filesize("example.txt") . " bytes" . PHP_EOL;
  
  // 5. Directory Handling
  
  // \`opendir\` opens a directory handle
  \$dir = opendir(".");
  
  if (\$dir) {
      // \`readdir\` reads the directory contents
      while ((\$file = readdir(\$dir)) !== false) {
          echo "File: " . \$file . PHP_EOL;
      }
      // \`closedir\` closes the directory handle
      closedir(\$dir);
  }
  
  // \`scandir\` returns an array of files and directories in the specified directory
  \$files = scandir(".");
  foreach (\$files as \$file) {
      echo "File: " . \$file . PHP_EOL;
  }
  
  // Example of creating a new directory and removing it
  mkdir("new_directory");  // Creates a new directory
  rmdir("new_directory");  // Removes the directory (only if empty)
  `
  },
  {
    id: 'form-handling',
    label: 'Form Handling',
    content: `
  // Form Handling in PHP
  
  // 1. Form Submission Methods (\`GET\` and \`POST\`)
  
  // Forms can be submitted using either the \`GET\` or \`POST\` methods.
  // - \`GET\`: Appends form data to the URL. Suitable for non-sensitive data and bookmarking.
  // - \`POST\`: Sends form data in the body of the HTTP request. Suitable for sensitive data and large datasets.
  
  // Example HTML form (submit using GET):
  // <form action="form_handler.php" method="get">
  //   <input type="text" name="username">
  //   <input type="submit" value="Submit">
  // </form>
  
  // Example HTML form (submit using POST):
  // <form action="form_handler.php" method="post">
  //   <input type="text" name="username">
  //   <input type="submit" value="Submit">
  // </form>
  
  // 2. Retrieving Form Data
  
  // Form data can be retrieved using \`$_GET\` or \`$_POST\` superglobals depending on the method used in the form.
  // - \`$_GET\`: Used to access data submitted via the GET method.
  // - \`$_POST\`: Used to access data submitted via the POST method.
  
  // Retrieving form data submitted via GET
  if ($_SERVER["REQUEST_METHOD"] == "GET") {
      $username = $_GET["username"] ?? "Guest";  // Use null coalescing operator to handle missing key
      echo "GET Username: " . htmlspecialchars($username) . PHP_EOL;
  }
  
  // Retrieving form data submitted via POST
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $username = $_POST["username"] ?? "Guest";
      echo "POST Username: " . htmlspecialchars($username) . PHP_EOL;
  }
  
  // 3. Validating and Sanitizing Input
  
  // Validation: Checking if the input meets certain criteria (e.g., required fields, correct format).
  // Sanitization: Removing or escaping any potentially harmful characters from the input.
  
  function validate_and_sanitize($data) {
      // Trim whitespace from the beginning and end
      $data = trim($data);
      // Remove slashes
      $data = stripslashes($data);
      // Convert special characters to HTML entities
      $data = htmlspecialchars($data);
      return $data;
  }
  
  // Example of validating and sanitizing a form input
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $email = validate_and_sanitize($_POST["email"] ?? "");
      if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
          echo "Valid email: " . $email . PHP_EOL;
      } else {
          echo "Invalid email address." . PHP_EOL;
      }
  }
  
  // 4. File Uploads and Processing
  
  // HTML form for file upload:
  // <form action="upload_handler.php" method="post" enctype="multipart/form-data">
  //   <input type="file" name="uploaded_file">
  //   <input type="submit" value="Upload">
  // </form>
  
  // Handling file upload in PHP
  if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["uploaded_file"])) {
      $target_dir = "uploads/";  // Directory to save uploaded files
      $target_file = $target_dir . basename($_FILES["uploaded_file"]["name"]);
      $upload_ok = true;
  
      // Check if file is a real image or fake image (example check)
      $check = getimagesize($_FILES["uploaded_file"]["tmp_name"]);
      if ($check === false) {
          echo "File is not an image." . PHP_EOL;
          $upload_ok = false;
      }
  
      // Check file size (example limit: 5MB)
      if ($_FILES["uploaded_file"]["size"] > 5000000) {
          echo "Sorry, your file is too large." . PHP_EOL;
          $upload_ok = false;
      }
  
      // Allow only certain file formats (example: jpg, png, jpeg, gif)
      $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
      if (!in_array($file_type, ["jpg", "png", "jpeg", "gif"])) {
          echo "Sorry, only JPG, JPEG, PNG, and GIF files are allowed." . PHP_EOL;
          $upload_ok = false;
      }
  
      // Check if $upload_ok is set to false by an error
      if ($upload_ok) {
          if (move_uploaded_file($_FILES["uploaded_file"]["tmp_name"], $target_file)) {
              echo "The file " . htmlspecialchars(basename($_FILES["uploaded_file"]["name"])) . " has been uploaded." . PHP_EOL;
          } else {
              echo "Sorry, there was an error uploading your file." . PHP_EOL;
          }
      }
  }
  
  // 5. Handling Form Errors
  
  // Common form errors include missing required fields, invalid input, and file upload issues.
  // Proper error handling involves providing feedback to the user and preventing the form from processing invalid data.
  
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $errors = [];
  
      // Example: Checking required fields
      if (empty($_POST["username"])) {
          $errors[] = "Username is required.";
      }
  
      // Example: Checking for a valid email
      $email = validate_and_sanitize($_POST["email"] ?? "");
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $errors[] = "Invalid email address.";
      }
  
      // If there are errors, display them
      if (!empty($errors)) {
          foreach ($errors as $error) {
              echo "Error: " . $error . PHP_EOL;
          }
      } else {
          echo "Form submitted successfully." . PHP_EOL;
      }
  }
  `
  },
  {
    id: 'sessions-and-cookies',
    label: 'Sessions & Cookies',
    content: `
  // Sessions and Cookies in PHP
  
  // 1. Starting and Managing Sessions
  
  // Sessions in PHP allow you to store data across multiple pages for a single user.
  // Use \`session_start()\` to begin a session. This function must be called at the very start of your script, before any output.
  
  session_start();  // Start or resume the session
  
  // You can set session variables like so:
  \$_SESSION["username"] = "JohnDoe";
  \$_SESSION["email"] = "john@example.com";
  
  echo "Session started. Username is " . \$_SESSION["username"] . PHP_EOL;
  
  // 2. Storing and Retrieving Session Data
  
  // Session data is stored in the \`$_SESSION\` superglobal array. You can add, retrieve, and manipulate this data as needed.
  
  \$_SESSION["role"] = "admin";  // Storing a new session variable
  
  // Retrieving session data
  echo "User role: " . \$_SESSION["role"] . PHP_EOL;
  
  // You can check if a session variable is set using \`isset()\`:
  if (isset(\$_SESSION["username"])) {
      echo "User is logged in as " . \$_SESSION["username"] . PHP_EOL;
  } else {
      echo "User is not logged in." . PHP_EOL;
  }
  
  // 3. Deleting Session Data
  
  // To delete a specific session variable, use the \`unset()\` function.
  unset(\$_SESSION["role"]);
  
  // To clear all session variables, use \`session_unset()\` or set \`$_SESSION\` to an empty array.
  session_unset();  // Unset all session variables
  // \$_SESSION = [];  // Alternatively, clear the session array
  
  // To destroy the session entirely, use \`session_destroy()\`:
  session_destroy();  // This will destroy the session and all session data
  
  // Note: \`session_destroy()\` does not remove the session cookie immediately; it will be deleted in the next client request.
  
  // 4. Creating and Managing Cookies
  
  // Cookies in PHP are small pieces of data stored on the client's browser. They are used to persist information across sessions.
  // Use \`setcookie()\` to create a cookie. Cookies must be set before any HTML output.
  
  $name = "user";
  $value = "JohnDoe";
  $expiry = time() + (86400 * 30);  // Cookie expires in 30 days
  $path = "/";  // Available in the entire domain
  
  setcookie($name, $value, $expiry, $path);  // Set a cookie
  
  // You can retrieve the value of a cookie using the \`$_COOKIE\` superglobal array.
  if (isset(\$_COOKIE["user"])) {
      echo "Cookie 'user' is set! Value: " . \$_COOKIE["user"] . PHP_EOL;
  } else {
      echo "Cookie 'user' is not set." . PHP_EOL;
  }
  
  // To delete a cookie, set its expiry time to a past time.
  setcookie($name, "", time() - 3600, $path);  // Expire the cookie
  
  // 5. Session Security and Best Practices
  
  // - Use \`session_regenerate_id()\` to change the session ID and prevent session fixation attacks.
  session_regenerate_id(true);  // Generates a new session ID and deletes the old session data
  
  // - Set a custom session name to make it less predictable.
  session_name("MY_CUSTOM_SESSION");
  
  // - Store session data securely on the server and validate it against possible tampering.
  \$_SESSION["user_id"] = hash("sha256", "JohnDoe" . "somesecurekey");
  
  // - Use HTTPS to secure the transmission of session data and cookies.
  $secure = isset(\$_SERVER["HTTPS"]) && \$_SERVER["HTTPS"] === "on";  // Check if HTTPS is used
  session_set_cookie_params([
      "lifetime" => 86400,   // 1 day
      "path" => "/",
      "domain" => \$_SERVER["HTTP_HOST"],
      "secure" => $secure,
      "httponly" => true,   // Accessible only through the HTTP protocol
      "samesite" => "Strict"  // Strict SameSite policy
  ]);
  
  // - Implement proper session timeout management.
  \$_SESSION["last_activity"] = time();  // Update last activity time
  
  // Example session timeout check (30 minutes of inactivity)
  if (isset(\$_SESSION["last_activity"]) && (time() - \$_SESSION["last_activity"] > 1800)) {
      session_unset();     // Unset session variables
      session_destroy();   // Destroy the session
      echo "Session expired due to inactivity." . PHP_EOL;
  }
  `
  },
  {
    id: 'regular-expressions',
    label: 'Regular Expressions',
    content: `
  // Regular Expressions in PHP
  
  // 1. Basic Syntax of Regular Expressions
  
  // Regular expressions are patterns used to match character combinations in strings.
  // In PHP, regular expressions can be written using Perl-compatible syntax (PCRE).
  
  // Example patterns:
  // - \`/abc/\`: matches "abc"
  // - \`/^abc/\`: matches "abc" at the start of a string
  // - \`/abc\$/\`: matches "abc" at the end of a string
  // - \`/a.c/\`: matches "a" followed by any character and then "c"
  // - \`/a*bc/\`: matches "bc", "abc", "aabc", etc. (zero or more "a")
  
  // 2. Pattern Matching
  
  // \`preg_match\`: Perform a regular expression match and returns 1 if the pattern matches, 0 if not.
  
  \$pattern = "/^hello/";
  \$subject = "hello world";
  
  if (preg_match(\$pattern, \$subject)) {
      echo "Pattern matched!" . PHP_EOL;  // Output: Pattern matched!
  } else {
      echo "No match found." . PHP_EOL;
  }
  
  // \`preg_match_all\`: Perform a global regular expression match and returns the number of times the pattern matches.
  
  \$pattern = "/\\d+/";  // Matches one or more digits
  \$subject = "There are 123 apples and 456 oranges.";
  
  if (preg_match_all(\$pattern, \$subject, \$matches)) {
      echo "Matches found: " . count(\$matches[0]) . PHP_EOL;  // Output: Matches found: 2
      print_r(\$matches[0]);  // Output: Array ( [0] => 123 [1] => 456 )
  }
  
  // 3. Searching and Replacing
  
  // \`preg_replace\`: Perform a search and replace using a regular expression.
  
  \$pattern = "/world/";
  \$replacement = "PHP";
  \$subject = "Hello world!";
  
  \$result = preg_replace(\$pattern, \$replacement, \$subject);
  echo \$result . PHP_EOL;  // Output: Hello PHP!
  
  // Using a pattern to replace all digits with asterisks
  
  \$pattern = "/\\d/";
  \$replacement = "*";
  \$subject = "My phone number is 123-456-7890.";
  
  \$result = preg_replace(\$pattern, \$replacement, \$subject);
  echo \$result . PHP_EOL;  // Output: My phone number is ***-***-****.
  
  // 4. Splitting Strings
  
  // \`preg_split\`: Split a string into an array by a regular expression.
  
  \$pattern = "/\\s+/";  // Matches one or more whitespace characters
  \$subject = "Split this text by whitespace.";
  
  \$result = preg_split(\$pattern, \$subject);
  print_r(\$result);  // Output: Array ( [0] => Split [1] => this [2] => text [3] => by [4] => whitespace. )
  
  // Splitting a string into an array by digits
  
  \$pattern = "/\\d/";
  \$subject = "Item1, Item2, Item3";
  
  \$result = preg_split(\$pattern, \$subject);
  print_r(\$result);  // Output: Array ( [0] => Item [1] => , Item [2] => , Item [3] => )
  
  // 5. Regular Expression Functions
  
  // PHP provides several functions for working with regular expressions, including:
  
  // - \`preg_match\`: Match a pattern against a string
  // - \`preg_match_all\`: Match a pattern globally
  // - \`preg_replace\`: Replace matches with a string
  // - \`preg_replace_callback\`: Replace matches with a callback function
  // - \`preg_split\`: Split a string by a pattern
  // - \`preg_grep\`: Return array elements matching a pattern
  // - \`preg_last_error\`: Returns the error code of the last PCRE regex execution
  
  // Example of \`preg_replace_callback\`: Replacing matches with a callback function
  
  \$pattern = "/\\d+/";
  \$subject = "Multiply 2 by 3 to get 6.";
  
  \$result = preg_replace_callback(\$pattern, function (\$matches) {
      return \$matches[0] * 2;  // Double the number
  }, \$subject);
  
  echo \$result . PHP_EOL;  // Output: Multiply 4 by 6 to get 12.
  
  // Checking for regular expression errors
  
  if (preg_last_error() !== PREG_NO_ERROR) {
      echo "There was an error with the regular expression." . PHP_EOL;
  } else {
      echo "Regular expression executed successfully." . PHP_EOL;
  }
  `
  },
  {
    id: 'php-standard-library',
    label: 'PHP Standard Library (SPL)',
    content: `
  // PHP Standard Library (SPL)
  
  // The PHP Standard Library (SPL) provides a collection of interfaces and classes for common data structures, file handling, and more. It is part of PHP's core and offers efficient ways to manage these tasks.
  
  // 1. Data Structures
  
  // SPL provides several data structure classes that can be used for various purposes.
  
  // \`SplStack\`: A stack implemented using a doubly linked list (LIFO - Last In, First Out).
  
  \$stack = new SplStack();
  \$stack->push('apple');
  \$stack->push('banana');
  echo \$stack->pop();  // Output: banana
  
  // \`SplQueue\`: A queue implemented using a doubly linked list (FIFO - First In, First Out).
  
  \$queue = new SplQueue();
  \$queue->enqueue('first');
  \$queue->enqueue('second');
  echo \$queue->dequeue();  // Output: first
  
  // \`SplHeap\`: An abstract class for heaps. PHP provides concrete implementations like \`SplMinHeap\` and \`SplMaxHeap\`.
  
  class MyHeap extends SplMinHeap {
      protected function compare(\$value1, \$value2) {
          return (\$value1 - \$value2);
      }
  }
  
  \$heap = new MyHeap();
  \$heap->insert(4);
  \$heap->insert(8);
  \$heap->insert(1);
  echo \$heap->extract();  // Output: 1 (smallest value)
  
  // 2. Iterators and Iteration Interfaces
  
  // SPL provides a rich set of iterators and interfaces for more flexible and efficient iteration over data.
  
  // \`ArrayIterator\`: Allows iteration over arrays or objects implementing \`ArrayAccess\`.
  
  \$array = ['a', 'b', 'c'];
  \$iterator = new ArrayIterator(\$array);
  
  foreach (\$iterator as \$item) {
      echo \$item . " ";  // Output: a b c 
  }
  
  // \`RecursiveArrayIterator\`: Allows for iteration over nested arrays.
  
  \$nestedArray = [1, [2, 3], [4, [5, 6]]];
  \$iterator = new RecursiveArrayIterator(\$nestedArray);
  
  function printRecursive(RecursiveArrayIterator \$iterator) {
      while (\$iterator->valid()) {
          if (\$iterator->hasChildren()) {
              printRecursive(\$iterator->getChildren());
          } else {
              echo \$iterator->current() . " ";  // Output: 1 2 3 4 5 6
          }
          \$iterator->next();
      }
  }
  
  printRecursive(\$iterator);
  
  // 3. File Handling
  
  // SPL provides classes for file handling, offering more object-oriented ways to work with files and directories.
  
  // \`SplFileObject\`: Provides an object-oriented interface to a file.
  
  \$file = new SplFileObject('example.txt', 'w+');
  \$file->fwrite('Hello, SPL!');
  \$file->rewind();
  
  while (!\$file->eof()) {
      echo \$file->fgets();  // Output: Hello, SPL!
  }
  
  // \`DirectoryIterator\`: Allows iteration over the contents of a directory.
  
  \$dir = new DirectoryIterator('.');
  foreach (\$dir as \$fileinfo) {
      if (\$fileinfo->isFile()) {
          echo \$fileinfo->getFilename() . PHP_EOL;
      }
  }
  
  // 4. Exception Handling
  
  // SPL provides base classes for exceptions and errors, allowing for more fine-grained error handling.
  
  // \`SplException\`: Base class for all SPL exceptions.
  try {
      throw new LogicException('This is a logic exception.');
  } catch (LogicException \$e) {
      echo \$e->getMessage();  // Output: This is a logic exception.
  }
  
  // \`Error\`: Base class for all PHP errors, introduced in PHP 7.
  
  try {
      \$result = 10 / 0;  // This will trigger a \`DivisionByZeroError\`.
  } catch (DivisionByZeroError \$e) {
      echo "Caught an error: " . \$e->getMessage();  // Output: Caught an error: Division by zero
  }
  
  // 5. SPL Autoloading
  
  // SPL provides a default autoloader that can automatically include classes as they are needed, simplifying the process of class loading.
  
  spl_autoload_register(function (\$class_name) {
      include \$class_name . '.php';
  });
  
  // Assuming a file named \`MyClass.php\` exists in the same directory and contains a class definition for \`MyClass\`.
  
  \$obj = new MyClass();
  \$obj->sayHello();  // If MyClass::sayHello() is defined, it will be called.
  `
  },
  {
    id: 'date-and-time',
    label: 'Date & Time',
    content: `
  // Date and Time in PHP
  
  // PHP provides several built-in functions and classes to work with dates and times effectively.
  
  // 1. Getting the Current Date and Time
  
  // \`date\`: Returns the current date and time formatted according to a specified format.
  echo date('Y-m-d H:i:s');  // Output: Current date and time (e.g., 2024-06-26 14:35:00)
  
  // \`time\`: Returns the current Unix timestamp (the number of seconds since January 1, 1970).
  echo time();  // Output: Current Unix timestamp (e.g., 1706306100)
  
  // 2. Formatting Dates
  
  // \`date\` function: Formats a timestamp into a readable date and time string.
  \$timestamp = time();
  echo date('l, F j, Y', \$timestamp);  // Output: Current date (e.g., Wednesday, June 26, 2024)
  
  // \`DateTime\` class: Provides an object-oriented way to work with dates and times.
  \$datetime = new DateTime('now');
  echo \$datetime->format('Y-m-d H:i:s');  // Output: Current date and time (e.g., 2024-06-26 14:35:00)
  
  // 3. Date Arithmetic and Comparison
  
  // Adding or subtracting dates using \`DateTime\` and \`DateInterval\`.
  \$datetime = new DateTime('2024-06-26');
  \$datetime->add(new DateInterval('P1D'));  // Adding 1 day
  echo \$datetime->format('Y-m-d');  // Output: 2024-06-27
  
  \$datetime->sub(new DateInterval('P2W'));  // Subtracting 2 weeks
  echo \$datetime->format('Y-m-d');  // Output: 2024-06-12
  
  // Comparing dates using comparison operators or \`diff\` method.
  \$date1 = new DateTime('2024-06-26');
  \$date2 = new DateTime('2023-12-25');
  
  if (\$date1 > \$date2) {
      echo "\$date1 is later than \$date2";  // Output: \$date1 is later than \$date2
  }
  
  \$interval = \$date1->diff(\$date2);
  echo \$interval->format('%R%a days');  // Output: +184 days (difference between dates)
  
  // 4. Timezones and DateTime Zone Management
  
  // Setting the default timezone for date and time functions.
  date_default_timezone_set('America/New_York');
  echo date('Y-m-d H:i:s');  // Output: Current date and time in New York timezone
  
  // Using \`DateTimeZone\` with \`DateTime\` to manage different timezones.
  \$datetime = new DateTime('2024-06-26 14:35:00', new DateTimeZone('UTC'));
  echo \$datetime->format('Y-m-d H:i:s T');  // Output: 2024-06-26 14:35:00 UTC
  
  \$datetime->setTimezone(new DateTimeZone('America/Los_Angeles'));
  echo \$datetime->format('Y-m-d H:i:s T');  // Output: 2024-06-26 07:35:00 PDT
  
  // 5. Working with \`DateInterval\` and \`DatePeriod\`
  
  // \`DateInterval\`: Represents a period of time.
  \$interval = new DateInterval('P1Y2M10D');  // 1 year, 2 months, 10 days
  echo \$interval->format('%y years, %m months, %d days');  // Output: 1 years, 2 months, 10 days
  
  // \`DatePeriod\`: Represents a range of dates.
  \$start = new DateTime('2024-06-01');
  \$end = new DateTime('2024-06-10');
  \$interval = new DateInterval('P1D');  // 1 day interval
  
  \$period = new DatePeriod(\$start, \$interval, \$end);
  foreach (\$period as \$date) {
      echo \$date->format('Y-m-d') . " ";  // Output: Dates from 2024-06-01 to 2024-06-09
  }
  
  // Summary:
  // - PHP offers powerful functions and classes for date and time manipulation.
  // - \`date\` and \`DateTime\` are essential for formatting and handling dates.
  // - \`DateInterval\` and \`DatePeriod\` provide advanced capabilities for date arithmetic and range management.
  `
  },
  {
    id: 'database-interaction',
    label: 'Database Interaction',
    content: `
  // Database Interaction in PHP
  
  // PHP provides multiple ways to interact with databases. The most common methods are using \`mysqli\` and \`PDO\` (PHP Data Objects).
  
  // 1. Connecting to Databases
  
  // Using \`mysqli\` for database connection.
  \$mysqli = new mysqli('localhost', 'username', 'password', 'database');
  
  if (\$mysqli->connect_error) {
      die('Connect Error (' . \$mysqli->connect_errno . ') ' . \$mysqli->connect_error);
  }
  echo 'Connected successfully to MySQL using mysqli';
  
  // Using \`PDO\` for database connection.
  try {
      \$pdo = new PDO('mysql:host=localhost;dbname=database', 'username', 'password');
      \$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo 'Connected successfully to MySQL using PDO';
  } catch (PDOException \$e) {
      echo 'Connection failed: ' . \$e->getMessage();
  }
  
  // 2. Performing CRUD Operations
  
  // Creating a table (using \`mysqli\`).
  \$sql = "CREATE TABLE Users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), email VARCHAR(50))";
  if (\$mysqli->query(\$sql) === TRUE) {
      echo 'Table Users created successfully';
  } else {
      echo 'Error creating table: ' . \$mysqli->error;
  }
  
  // Inserting data (using \`PDO\`).
  \$stmt = \$pdo->prepare("INSERT INTO Users (name, email) VALUES (:name, :email)");
  \$stmt->execute([':name' => 'John Doe', ':email' => 'john@example.com']);
  echo 'New record created successfully';
  
  // 3. Prepared Statements and Parameter Binding
  
  // Using prepared statements to prevent SQL injection (using \`mysqli\`).
  \$stmt = \$mysqli->prepare("INSERT INTO Users (name, email) VALUES (?, ?)");
  \$stmt->bind_param('ss', \$name, \$email);
  
  \$name = 'Jane Doe';
  \$email = 'jane@example.com';
  \$stmt->execute();
  echo 'New record created successfully';
  
  \$stmt->close();
  
  // Using prepared statements (using \`PDO\`).
  \$stmt = \$pdo->prepare("INSERT INTO Users (name, email) VALUES (:name, :email)");
  \$stmt->bindParam(':name', \$name);
  \$stmt->bindParam(':email', \$email);
  
  \$name = 'Alice Smith';
  \$email = 'alice@example.com';
  \$stmt->execute();
  echo 'New record created successfully';
  
  // 4. Fetching Data
  
  // Fetching a single row (using \`mysqli\`).
  \$result = \$mysqli->query("SELECT * FROM Users WHERE id = 1");
  \$row = \$result->fetch_assoc();
  echo 'User: ' . \$row['name'] . ', Email: ' . \$row['email'];
  
  // Fetching all rows (using \`PDO\`).
  \$stmt = \$pdo->query("SELECT * FROM Users");
  \$users = \$stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach (\$users as \$user) {
      echo 'User: ' . \$user['name'] . ', Email: ' . \$user['email'];
  }
  
  // Fetching data as an object (using \`PDO\`).
  \$stmt = \$pdo->query("SELECT * FROM Users");
  while (\$user = \$stmt->fetchObject()) {
      echo 'User: ' . \$user->name . ', Email: ' . \$user->email;
  }
  
  // 5. Transactions and Error Handling
  
  // Using transactions to ensure data integrity (using \`PDO\`).
  try {
      \$pdo->beginTransaction();
  
      \$pdo->exec("INSERT INTO Users (name, email) VALUES ('Transaction User', 'transaction@example.com')");
      \$pdo->exec("UPDATE Users SET email = 'update@example.com' WHERE name = 'Transaction User'");
  
      \$pdo->commit();
      echo 'Transaction completed successfully';
  } catch (PDOException \$e) {
      \$pdo->rollBack();
      echo 'Transaction failed: ' . \$e->getMessage();
  }
  
  // Handling errors (using \`mysqli\`).
  if (!\$mysqli->query("INSERT INTO Users (name, email) VALUES ('Error User', 'error@example.com')")) {
      echo 'Insert error: ' . \$mysqli->error;
  }
  
  // Closing the database connections.
  \$mysqli->close();
  \$pdo = null;
  
  // Summary:
  // - PHP provides powerful methods to interact with databases using \`mysqli\` and \`PDO\`.
  // - CRUD operations (Create, Read, Update, Delete) are fundamental for managing database records.
  // - Prepared statements and parameter binding enhance security and efficiency.
  // - Fetching data can be done in various ways, depending on the use case.
  // - Transactions help maintain data integrity, and proper error handling ensures robust applications.
  `
  },
  {
    id: 'xml-and-json-processing',
    label: 'XML & JSON Processing',
    content: `
  // XML and JSON Processing in PHP
  
  // Parsing and Creating XML
  
  // Using SimpleXML to parse XML
  \$xml = <<<XML
  <data>
      <name>John Doe</name>
      <age>30</age>
  </data>
  XML;
  
  \$simpleXml = simplexml_load_string(\$xml);
  echo \$simpleXml->name;  // Output: John Doe
  
  // Using DOMDocument for more complex XML manipulation
  \$dom = new DOMDocument();
  \$dom->loadXML(\$xml);
  \$name = \$dom->getElementsByTagName('name')->item(0)->nodeValue;
  echo \$name;  // Output: John Doe
  
  // Creating XML with SimpleXML
  \$data = new SimpleXMLElement('<data></data>');
  \$data->addChild('name', 'Jane Smith');
  \$data->addChild('age', 25);
  echo \$data->asXML();  // Output: <data><name>Jane Smith</name><age>25</age></data>
  
  // Working with JSON
  
  // Encoding PHP array to JSON
  \$array = ['name' => 'Alice', 'age' => 28];
  \$json = json_encode(\$array);
  echo \$json;  // Output: {"name":"Alice","age":28}
  
  // Decoding JSON to PHP object
  \$json = '{"name":"Bob","age":35}';
  \$object = json_decode(\$json);
  echo \$object->name;  // Output: Bob
  
  // JSON Serialization and Deserialization
  
  // Serialize PHP object to JSON
  class Person {
      public \$name;
      public \$age;
  }
  
  \$person = new Person();
  \$person->name = 'Charlie';
  \$person->age = 40;
  \$json = json_encode(\$person);
  echo \$json;  // Output: {"name":"Charlie","age":40}
  
  // Deserialize JSON to PHP object
  \$json = '{"name":"David","age":45}';
  \$person = json_decode(\$json, false);  // false to get object instead of associative array
  echo \$person->name;  // Output: David
  
  // Handling XML with Namespaces
  
  // Parsing XML with namespaces using SimpleXML
  \$xml = <<<XML
  <root xmlns:ns="http://example.com/ns">
      <ns:name>John</ns:name>
      <ns:age>30</ns:age>
  </root>
  XML;
  
  \$namespaces = ['ns' => 'http://example.com/ns'];
  \$simpleXml = simplexml_load_string(\$xml);
  \$name = \$simpleXml->children(\$namespaces['ns'])->name;
  echo \$name;  // Output: John
  
  // Converting Between XML and JSON
  
  // Converting XML to JSON
  \$xml = <<<XML
  <data>
      <name>Alice</name>
      <age>25</age>
  </data>
  XML;
  
  \$simpleXml = simplexml_load_string(\$xml);
  \$json = json_encode(\$simpleXml);
  echo \$json;  // Output: {"name":"Alice","age":"25"}
  
  // Converting JSON to XML
  \$json = '{"name":"Eve","age":"30"}';
  \$data = json_decode(\$json, true);  // true to get associative array
  \$xml = new SimpleXMLElement('<data></data>');
  array_walk_recursive(\$data, [\$xml, 'addChild']);
  echo \$xml->asXML();  // Output: <data><name>Eve</name><age>30</age></data>
  
  // Summary:
  // - PHP provides SimpleXML and DOMDocument for parsing and creating XML.
  // - JSON handling includes encoding PHP arrays/objects to JSON and decoding JSON to PHP structures.
  // - Serialization and deserialization allow converting PHP objects to JSON and vice versa.
  // - XML namespaces are managed using SimpleXML with explicit namespace declarations.
  // - Converting between XML and JSON involves encoding/decoding operations tailored to each format.
  `
  },
  {
    id: 'web-services-and-apis',
    label: 'Web Services & APIs',
    content: `
  // Web Services and APIs in PHP
  
  // Making HTTP Requests
  
  // Using cURL to make HTTP requests
  \$ch = curl_init();
  curl_setopt(\$ch, CURLOPT_URL, 'http://api.example.com/data');
  curl_setopt(\$ch, CURLOPT_RETURNTRANSFER, true);
  \$response = curl_exec(\$ch);
  curl_close(\$ch);
  echo \$response;
  
  // Using file_get_contents to fetch data (simpler method for GET requests)
  \$data = file_get_contents('http://api.example.com/data');
  echo \$data;
  
  // Consuming RESTful APIs
  
  // Example: Fetching user data from a REST API
  \$url = 'https://api.example.com/users/123';
  \$response = file_get_contents(\$url);
  \$user = json_decode(\$response);
  echo \$user->name;
  
  // Parsing API Responses (JSON, XML)
  
  // Parsing JSON response from an API
  \$json = '{"name":"Alice","age":25}';
  \$data = json_decode(\$json);
  echo \$data->name;
  
  // Parsing XML response from an API using SimpleXML
  \$xml = <<<XML
  <data>
      <name>Bob</name>
      <age>30</age>
  </data>
  XML;
  
  \$simpleXml = simplexml_load_string(\$xml);
  echo \$simpleXml->name;
  
  // Creating Simple API Endpoints
  
  // Example: Simple API endpoint returning JSON
  header('Content-Type: application/json');
  \$data = ['name' => 'Charlie', 'age' => 35];
  echo json_encode(\$data);
  
  // Authentication with APIs (OAuth, Tokens)
  
  // Example: Authenticating with OAuth 2.0
  // Include appropriate OAuth library and follow OAuth flow
  
  // Example: Authenticating with API tokens
  \$token = 'your_api_token_here';
  \$url = 'https://api.example.com/data';
  \$options = [
      'http' => [
          'header' => "Authorization: Bearer \$token\r\n",
      ],
  ];
  \$context = stream_context_create(\$options);
  \$result = file_get_contents(\$url, false, \$context);
  echo \$result;
  
  // Summary:
  // - PHP offers various methods like cURL and file_get_contents for making HTTP requests.
  // - Consuming RESTful APIs involves fetching data and handling responses in JSON or XML formats.
  // - Creating simple API endpoints in PHP typically involves returning JSON or XML responses.
  // - Authentication with APIs can be done using OAuth, tokens, or other authentication mechanisms.
  `
  },
  {
    id: 'security',
    label: 'Security',
    content: `
  // Security Best Practices in PHP
  
  // 1. Sanitizing User Input
  
  // Always sanitize and validate user input to prevent malicious data from entering your application.
  // Example of sanitizing input:
  \$username = htmlspecialchars(\$_POST['username']);
  \$password = htmlspecialchars(\$_POST['password']);
  
  // 2. Preventing SQL Injection
  
  // Use prepared statements and parameterized queries with PDO or MySQLi to prevent SQL injection attacks.
  // Example with PDO:
  \$pdo = new PDO('mysql:host=localhost;dbname=mydatabase', 'username', 'password');
  \$stmt = \$pdo->prepare('SELECT * FROM users WHERE username = :username');
  \$stmt->execute(['username' => \$username]);
  \$user = \$stmt->fetch();
  
  // 3. Protecting Against Cross-Site Scripting (XSS)
  
  // Escape output using htmlspecialchars() or htmlentities() to prevent XSS attacks when displaying user data.
  // Example:
  echo '<div>Welcome ' . htmlspecialchars(\$username) . '</div>';
  
  // 4. Implementing Cross-Site Request Forgery (CSRF) Protection
  
  // Use CSRF tokens to verify the authenticity of requests originating from your site.
  // Example of generating and validating CSRF token:
  session_start();
  \$token = bin2hex(random_bytes(32)); // Generate token
  \$_SESSION['csrf_token'] = \$token;
  
  // On form submission:
  if (\$_SERVER['REQUEST_METHOD'] === 'POST' && hash_equals(\$_SESSION['csrf_token'], \$_POST['csrf_token'])) {
      // CSRF token is valid
      // Process form data
  } else {
      // Invalid CSRF token
      // Handle error or redirect
  }
  
  // 5. Password Hashing and Storage
  
  // Always hash passwords using password_hash() and verify them with password_verify().
  // Example of hashing and verifying passwords:
  \$password = 'user_password';
  \$hashed_password = password_hash(\$password, PASSWORD_DEFAULT);
  
  // Storing hashed password in database:
  // INSERT INTO users (username, password) VALUES ('john_doe', \$hashed_password);
  
  // Verifying password:
  \$db_password_hash = '...'; // Retrieve hashed password from database
  if (password_verify(\$password, \$db_password_hash)) {
      // Password is correct
  } else {
      // Password is incorrect
  }
  `
  },
  {
    id: 'php-and-the-web',
    label: 'PHP & the Web',
    content: `
  // PHP and the Web
  
  // 1. Embedding PHP in HTML
  
  // PHP code can be embedded within HTML using the \`<?php ?>\` tags.
  
  <?php
    \$variable = "Hello, World!";
  ?>
  <html>
  <head>
    <title>PHP Example</title>
  </head>
  <body>
    <h1><?php echo \$variable; ?></h1>
  </body>
  </html>
  
  // 2. Template Engines (Smarty, Twig)
  
  // Template engines like Smarty and Twig provide more sophisticated ways to separate PHP logic from presentation.
  
  // Example with Twig:
  \$loader = new Twig_Loader_Filesystem('/path/to/templates');
  \$twig = new Twig_Environment(\$loader);
  
  \$template = \$twig->load('index.twig');
  echo \$template->render(['variable' => 'Hello, Twig!']);
  
  // 3. Handling HTTP Headers
  
  // HTTP headers can be manipulated using PHP functions like \`header()\`.
  
  // Set content type
  header("Content-Type: application/json");
  
  // Redirect example
  header("Location: https://example.com");
  
  // 4. URL Rewriting with .htaccess
  
  // .htaccess files can be used to rewrite URLs for cleaner and more SEO-friendly URLs.
  
  // Example .htaccess:
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.php?path=$1 [QSA,L]
  </IfModule>
  
  // 5. Generating Dynamic Content
  
  // PHP is commonly used to generate dynamic content based on user input or database queries.
  
  // Example:
  \$user = "John";
  echo "Hello, \$user!";
  
  // Using forms to process user input:
  <form method="POST" action="process.php">
    <input type="text" name="username">
    <input type="submit" value="Submit">
  </form>
    `
  }
  
  
];