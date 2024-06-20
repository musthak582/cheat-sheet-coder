export const jsCodeBlocks = [
  {
    id: 'inline-scripts-example',
    label: 'Inline Script',
    content: `
    <!-- Inline Script Example -->
    <!-- JavaScript is executed when the button is clicked -->
  
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Inline Script Example</title>
    </head>
    <body>
      <button onclick="alert('Button Clicked!')">Click Me</button>
      <!-- The alert function is called when the button is clicked -->
    </body>
    </html>
    `
  },
  {
    id: 'internal-scripts-example',
    label: 'Internal Script',
    content: `
    <!-- Internal Script Example -->
  
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Internal Script Example</title>
      <script>
        // JavaScript code goes here
        function greet() {
          console.log('Hello, World!');
        }
  
        // The greet function is called when the page loads
        window.onload = greet;
      </script>
    </head>
    <body>
      <h1>Check the console for the greeting message</h1>
    </body>
    </html>
    `
  },
  {
    id: 'external-scripts-example',
    label: 'External Script',
    content: `
  <!-- External Script Example -->
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>External Script Example</title>
    <script src="script.js"></script>
    <!-- The script.js file contains the JavaScript code -->
  </head>
  <body>
    <h1>External Script Demo</h1>
    <button onclick="showMessage()">Click Me</button>
    <!-- The showMessage function is defined in the external script -->
  </body>
  </html>
  function showMessage() {
    alert('Hello from External Script!');
  }
  `
  },
  {
    id: 'console-debugging-example',
    label: 'Console and Debugging',
    content: `
  /* Console and Debugging Example */
  
  // Logging a message to the console
  console.log('This is a log message.');
  
  // Logging an error message
  console.error('This is an error message.');
  
  // Logging a warning message
  console.warn('This is a warning message.');
  
  // Logging an informational message
  console.info('This is an informational message.');
  
  // Logging objects or arrays
  const user = { name: 'Alice', age: 25 };
  console.log('User Object:', user);
  
  // Timing operations
  console.time('Loop Time');
  for (let i = 0; i < 1000000; i++) {
    // Looping to measure time
  }
  console.timeEnd('Loop Time');
  `
  },
  {
    id: 'data-types-example',
    label: 'Data Types',
    content: `
  /* Data Types Example */
  
  // Number
  let age = 25; // Any numerical value, integer or floating-point
  console.log('Number:', age);
  
  // String
  let name = "Alice"; // Sequence of characters, enclosed in single or double quotes
  console.log('String:', name);
  
  // Boolean
  let isStudent = true; // Represents true or false values
  console.log('Boolean:', isStudent);
  
  // Object
  let person = { name: "Alice", age: 25 }; // Collection of key-value pairs
  console.log('Object:', person);
  
  // Undefined
  let noValue; // A variable declared but not assigned a value is 'undefined'
  console.log('Undefined:', noValue);
  
  // Null
  let emptyValue = null; // Explicitly set a variable with no value
  console.log('Null:', emptyValue);
  
  // Symbol
  let uniqueId = Symbol("id"); // Unique and immutable data type used for object property keys
  console.log('Symbol:', uniqueId);
  
  // BigInt
  let largeNumber = BigInt(1234567890123456789012345678901234567890); // Represents integers with arbitrary precision
  console.log('BigInt:', largeNumber);
  `
  },
  {
    id: 'variables-example',
    label: 'Variables',
    content: `
  /* Variables Example */
  
  // Using var (function-scoped, can be re-assigned and re-declared)
  var x = 10;
  console.log('var x:', x);
  x = 20; // Re-assigning x
  console.log('Re-assigned var x:', x);
  
  // Using let (block-scoped, can be re-assigned but not re-declared in the same scope)
  let y = 15;
  console.log('let y:', y);
  y = 25; // Re-assigning y
  console.log('Re-assigned let y:', y);
  
  // Using const (block-scoped, cannot be re-assigned or re-declared in the same scope)
  const z = 30;
  console.log('const z:', z);
  // z = 40; // Uncommenting this line will cause an error because z is a constant
  
  // Variables declared without initialization are undefined
  let a;
  console.log('let a (uninitialized):', a);
  `
  },
  {
    id: 'type-coercion-and-checking-example',
    label: 'Type Coercion and Checking',
    content: `
  /* Type Coercion and Type Checking Example */
  
  // Implicit Type Coercion
  let result = '5' + 3; // JavaScript converts number to string: '5' + '3' = '53'
  console.log('Implicit Coercion (String + Number):', result);
  
  result = '5' - 3; // JavaScript converts string to number: 5 - 3 = 2
  console.log('Implicit Coercion (String - Number):', result);
  
  result = 5 * '2'; // JavaScript converts string to number: 5 * 2 = 10
  console.log('Implicit Coercion (Number * String):', result);
  
  // Explicit Type Coercion
  let num = Number('42'); // Converts string to number explicitly
  console.log('Explicit Coercion (String to Number):', num);
  
  let str = String(123); // Converts number to string explicitly
  console.log('Explicit Coercion (Number to String):', str);
  
  let bool = Boolean(1); // Converts number to boolean explicitly (0 is false, other numbers are true)
  console.log('Explicit Coercion (Number to Boolean):', bool);
  
  // Type Checking using typeof
  console.log('Type of 42:', typeof 42); // Number
  console.log('Type of "hello":', typeof "hello"); // String
  console.log('Type of true:', typeof true); // Boolean
  console.log('Type of {}:', typeof {}); // Object
  console.log('Type of undefined:', typeof undefined); // Undefined
  console.log('Type of null:', typeof null); // Object (this is a known quirk in JavaScript)
  console.log('Type of Symbol("id"):', typeof Symbol("id")); // Symbol
  console.log('Type of BigInt(123):', typeof BigInt(123)); // BigInt
  `
  },
  {
    id: 'arithmetic-operators-example',
    label: 'Arithmetic Operators',
    content: `
  /* Arithmetic Operators Example */
  
  let a = 10;
  let b = 5;
  
  let sum = a + b; // Addition: 10 + 5 = 15
  console.log('Sum (a + b):', sum);
  
  let difference = a - b; // Subtraction: 10 - 5 = 5
  console.log('Difference (a - b):', difference);
  
  let product = a * b; // Multiplication: 10 * 5 = 50
  console.log('Product (a * b):', product);
  
  let quotient = a / b; // Division: 10 / 5 = 2
  console.log('Quotient (a / b):', quotient);
  
  let remainder = a % b; // Modulus (Remainder): 10 % 5 = 0
  console.log('Remainder (a % b):', remainder);
  
  let exponentiation = a ** 2; // Exponentiation: 10^2 = 100
  console.log('Exponentiation (a ** 2):', exponentiation);
  
  a++; // Increment: a becomes 11
  console.log('Increment (a++):', a);
  
  b--; // Decrement: b becomes 4
  console.log('Decrement (b--):', b);
  `
  },
  {
    id: 'assignment-operators-example',
    label: 'Assignment Operators',
    content: `
  /* Assignment Operators Example */
  
  let x = 10; // Simple assignment
  console.log('x:', x);
  
  x += 5; // Addition assignment: x = x + 5
  console.log('x += 5:', x);
  
  x -= 3; // Subtraction assignment: x = x - 3
  console.log('x -= 3:', x);
  
  x *= 2; // Multiplication assignment: x = x * 2
  console.log('x *= 2:', x);
  
  x /= 2; // Division assignment: x = x / 2
  console.log('x /= 2:', x);
  
  x %= 3; // Modulus assignment: x = x % 3
  console.log('x %= 3:', x);
  
  x **= 2; // Exponentiation assignment: x = x^2
  console.log('x **= 2:', x);
  `
  },
  {
    id: 'comparison-operators-example',
    label: 'Comparison Operators',
    content: `
  /* Comparison Operators Example */
  
  let p = 10;
  let q = 20;
  
  console.log('p == q:', p == q); // Equality: false
  console.log('p != q:', p != q); // Inequality: true
  console.log('p > q:', p > q); // Greater than: false
  console.log('p < q:', p < q); // Less than: true
  console.log('p >= 10:', p >= 10); // Greater than or equal to: true
  console.log('p <= 10:', p <= 10); // Less than or equal to: true
  
  let r = '10';
  console.log('p == r:', p == r); // Equality with type coercion: true
  console.log('p === r:', p === r); // Strict equality (no type coercion): false
  console.log('p !== r:', p !== r); // Strict inequality (no type coercion): true
  `
  },
  {
    id: 'logical-operators-example',
    label: 'Logical Operators',
    content: `
  /* Logical Operators Example */
  
  let isAdult = true;
  let hasPermission = false;
  
  console.log('isAdult && hasPermission:', isAdult && hasPermission); // Logical AND: false (both must be true)
  console.log('isAdult || hasPermission:', isAdult || hasPermission); // Logical OR: true (one or both can be true)
  console.log('!isAdult:', !isAdult); // Logical NOT: false (negates the boolean value)
  
  let score = 85;
  let passed = score > 50 && score < 100; // Combined condition: true
  console.log('Passed:', passed);
  `
  },
  {
    id: 'bitwise-operators-example',
    label: 'Bitwise Operators',
    content: `
  /* Bitwise Operators Example */
  
  let m = 5; // Binary: 0101
  let n = 3; // Binary: 0011
  
  console.log('m & n:', m & n); // Bitwise AND: 0101 & 0011 = 0001 (1)
  console.log('m | n:', m | n); // Bitwise OR: 0101 | 0011 = 0111 (7)
  console.log('m ^ n:', m ^ n); // Bitwise XOR: 0101 ^ 0011 = 0110 (6)
  console.log('~m:', ~m); // Bitwise NOT: ~0101 = 1010 (-6)
  console.log('m << 1:', m << 1); // Bitwise Left Shift: 0101 << 1 = 1010 (10)
  console.log('m >> 1:', m >> 1); // Bitwise Right Shift: 0101 >> 1 = 0010 (2)
  console.log('m >>> 1:', m >>> 1); // Bitwise Unsigned Right Shift: 0101 >>> 1 = 0010 (2)
  `
  },
  {
    id: 'ternary-operator-example',
    label: 'Ternary Operator',
    content: `
  /* Ternary Operator Example */
  
  let age = 18;
  
  let canVote = (age >= 18) ? 'Yes' : 'No';
  // If age is 18 or greater, canVote is 'Yes'; otherwise, it's 'No'
  console.log('Can Vote:', canVote);
  
  let temperature = 30;
  
  let weather = (temperature > 25) ? 'Hot' : 'Cool';
  // If temperature is greater than 25, weather is 'Hot'; otherwise, it's 'Cool'
  console.log('Weather:', weather);
  `
  },
  {
    id: 'conditionals-example',
    label: 'Conditionals',
    content: `
  /* Conditionals Example */
  
  // Using if, else if, and else
  let age = 20;
  
  if (age < 18) {
    console.log('You are a minor.');
  } else if (age >= 18 && age < 65) {
    console.log('You are an adult.');
  } else {
    console.log('You are a senior.');
  }
  // Output: 'You are an adult.'
  
  // Using switch statement
  let day = 'Monday';
  
  switch (day) {
    case 'Monday':
      console.log('Today is Monday.');
      break;
    case 'Tuesday':
      console.log('Today is Tuesday.');
      break;
    case 'Wednesday':
      console.log('Today is Wednesday.');
      break;
    case 'Thursday':
      console.log('Today is Thursday.');
      break;
    case 'Friday':
      console.log('Today is Friday.');
      break;
    case 'Saturday':
      console.log('Today is Saturday.');
      break;
    case 'Sunday':
      console.log('Today is Sunday.');
      break;
    default:
      console.log('Invalid day.');
  }
  // Output: 'Today is Monday.'
  `
  },
  {
    id: 'loops-example',
    label: 'Loops',
    content: `
    /* Loops Example */
  
    // Using a for loop
    for (let i = 0; i < 5; i++) {
      console.log('For Loop Iteration:', i);
    }
    // Output: 0, 1, 2, 3, 4
  
    // Using a while loop
    let j = 0;
    while (j < 5) {
      console.log('While Loop Iteration:', j);
      j++;
    }
    // Output: 0, 1, 2, 3, 4
  
    // Using a do...while loop
    let k = 0;
    do {
      console.log('Do...While Loop Iteration:', k);
      k++;
    } while (k < 5);
    // Output: 0, 1, 2, 3, 4
  
    // Using for...of loop (to iterate over iterable objects like arrays)
    const fruits = ['Apple', 'Banana', 'Cherry'];
    for (const fruit of fruits) {
      console.log('For...Of Loop:', fruit);
    }
    // Output: 'Apple', 'Banana', 'Cherry'
  
    // Using for...in loop (to iterate over the properties of an object)
    const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
    for (const key in car) {
      console.log('For...In Loop:', key, '=', car[key]);
    }
    // Output: 'brand = Toyota', 'model = Corolla', 'year = 2020'
    `
  },
  {
    id: 'break-and-continue-example',
    label: 'Break and Continue',
    content: `
    /* Break and Continue Example */
  
    // Using break in a loop
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        break; // Exit the loop when i equals 5
      }
      console.log('Break Example - Loop Iteration:', i);
    }
    // Output: 0, 1, 2, 3, 4
  
    // Using continue in a loop
    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        continue; // Skip the current iteration if i is even
      }
      console.log('Continue Example - Loop Iteration:', i);
    }
    // Output: 1, 3, 5, 7, 9
  
    // Using break in a switch statement
    let color = 'red';
    switch (color) {
      case 'red':
        console.log('Color is red.');
        break; // Exit the switch after handling 'red'
      case 'green':
        console.log('Color is green.');
        break;
      case 'blue':
        console.log('Color is blue.');
        break;
      default:
        console.log('Unknown color.');
    }
    // Output: 'Color is red.'
    `
  },
  {
    id: 'function-declaration-vs-expression',
    label: 'Function Declaration vs Expression',
    content: `
    /* Function Declaration */
    function greet(name) {
      return \`Hello, \${name}!\`;
    }
    
    console.log(greet('Alice')); // Output: Hello, Alice!
    
    /* Function Expression */
    const sayGoodbye = function(name) {
      return \`Goodbye, \${name}!\`;
    };
    
    console.log(sayGoodbye('Bob')); // Output: Goodbye, Bob!
    
    /* Named Function Expression */
    const sayHello = function greet(name) {
      return \`Hello again, \${name}!\`;
    };
    
    console.log(sayHello('Charlie')); // Output: Hello again, Charlie!
    
    // Note: Function declarations are hoisted (can be called before they are defined), 
    // whereas function expressions are not hoisted.
    console.log(hoistedFunction('Alice')); // Output: Hello, Alice!
    
    function hoistedFunction(name) {
      return \`Hello, \${name}!\`;
    }
    
    // Trying to call a function expression before it's defined will result in an error.
    // console.log(notHoistedFunction('Bob')); // Error: notHoistedFunction is not defined
    
    const notHoistedFunction = function(name) {
      return \`Hello, \${name}!\`;
    };
    `
  },
  {
    id: 'arrow-functions',
    label: 'Arrow Functions',
    content: `
    /* Arrow Functions */
  
    // Regular function expression
    const add = function(a, b) {
      return a + b;
    };
    console.log(add(2, 3)); // Output: 5
  
    // Arrow function
    const addArrow = (a, b) => a + b;
    console.log(addArrow(2, 3)); // Output: 5
  
    // Arrow function with a single parameter (no parentheses needed)
    const square = x => x * x;
    console.log(square(4)); // Output: 16
  
    // Arrow function with no parameters (requires parentheses)
    const greet = () => 'Hello, World!';
    console.log(greet()); // Output: Hello, World!
  
    // Arrow function with multiple lines (requires curly braces and return statement)
    const multiply = (a, b) => {
      let result = a * b;
      return result;
    };
    console.log(multiply(2, 3)); // Output: 6
    `
  },
  {
    id: 'parameters-and-arguments',
    label: 'Parameters and Arguments',
    content: `
    /* Parameters and Arguments Example */
  
    // Function with parameters
    function introduce(firstName, lastName) {
      return \`My name is \${firstName} \${lastName}.\`;
    }
  
    // Calling the function with arguments
    console.log(introduce('Jane', 'Doe')); // Output: My name is Jane Doe.
    console.log(introduce('John', 'Smith')); // Output: My name is John Smith.
    `
  },
  {
    id: 'default-parameters',
    label: 'Default Parameters',
    content: `
    /* Default Parameters Example */
  
    function greet(name = 'Guest', greeting = 'Hello') {
      return \`\${greeting}, \${name}!\`;
    }
  
    console.log(greet()); // Output: Hello, Guest!
    console.log(greet('Alice')); // Output: Hello, Alice!
    console.log(greet('Bob', 'Hi')); // Output: Hi, Bob!
    `
  },
  {
    id: 'rest-parameters',
    label: 'Rest Parameters',
    content: `
    /* Rest Parameters Example */
  
    function sum(...numbers) {
      return numbers.reduce((total, number) => total + number, 0);
    }
  
    console.log(sum(1, 2, 3, 4)); // Output: 10
    console.log(sum(5, 10, 15)); // Output: 30
    console.log(sum()); // Output: 0
  
    function showNames(greeting, ...names) {
      return \`\${greeting}, \${names.join(', ')}!\`;
    }
  
    console.log(showNames('Hello', 'Alice', 'Bob', 'Charlie')); // Output: Hello, Alice, Bob, Charlie!
    `
  },
  {
    id: 'spread-syntax',
    label: 'Spread Syntax',
    content: `
    /* Spread Syntax Example */
  
    // Spreading elements in an array
    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4, 5, 6];
    console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]
  
    // Spreading characters in a string
    const message = 'Hello';
    const characters = [...message];
    console.log(characters); // Output: ['H', 'e', 'l', 'l', 'o']
  
    // Using spread syntax in function calls
    function sum(a, b, c) {
      return a + b + c;
    }
    const nums = [1, 2, 3];
    console.log(sum(...nums)); // Output: 6
  
    // Combining objects with spread
    const person = { name: 'Alice', age: 25 };
    const address = { city: 'Wonderland', country: 'Dreamland' };
    const fullInfo = { ...person, ...address };
    console.log(fullInfo); // Output: { name: 'Alice', age: 25, city: 'Wonderland', country: 'Dreamland' }
    `
  },
  {
    id: 'return-values',
    label: 'Return Values',
    content: `
    /* Return Values Example */
  
    // Function that returns the sum of two numbers
    function add(a, b) {
      return a + b;
    }
  
    console.log(add(2, 3)); // Output: 5
  
    // Function without a return statement
    function logMessage(message) {
      console.log(message);
    }
  
    console.log(logMessage('Hello')); // Output: 'Hello', followed by undefined
  
    // Function returning an object
    function createPerson(name, age) {
      return { name, age };
    }
  
    console.log(createPerson('Alice', 25)); // Output: { name: 'Alice', age: 25 }
    `
  },
  {
    id: 'scope',
    label: 'Scope',
    content: `
    /* Scope Example */
  
    // Global scope
    let globalVar = 'I am global';
  
    function outerFunction() {
      // Local scope within outerFunction
      let outerVar = 'I am outer';
  
      function innerFunction() {
        // Local scope within innerFunction
        let innerVar = 'I am inner';
        console.log(globalVar); // Accessing global variable
        console.log(outerVar); // Accessing outer function's variable
        console.log(innerVar); // Accessing inner function's variable
      }
  
      innerFunction();
    }
  
    outerFunction();
    // Output:
    // I am global
    // I am outer
    // I am inner
  
    // console.log(outerVar); // Error: outerVar is not defined
    // console.log(innerVar); // Error: innerVar is not defined
    `
  },
  {
    id: 'closures',
    label: 'Closures',
    content: `
    /* Closures Example */
  
    function createCounter() {
      let count = 0; // This variable is enclosed within the scope of createCounter
  
      return function() {
        count++; // Incrementing the enclosed variable
        return count;
      };
    }
  
    const counter = createCounter(); // counter is now a closure that has access to count
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    console.log(counter()); // Output: 3
  
    // Another instance of the counter function with its own closure
    const anotherCounter = createCounter();
    console.log(anotherCounter()); // Output: 1
    console.log(anotherCounter()); // Output: 2
    `
  },
  {
    id: 'iife',
    label: 'IIFE',
    content: `
    /* IIFE Example */
  
    // Classic IIFE syntax
    (function() {
      let message = 'Hello from IIFE!';
      console.log(message); // Output: Hello from IIFE!
    })();
  
    // IIFE with arrow function syntax
    (() => {
      let greeting = 'Hi from Arrow IIFE!';
      console.log(greeting); // Output: Hi from Arrow IIFE!
    })();
  
    // IIFE with parameters
    ((name) => {
      console.log(\`Hello, \${name}!\`);
    })('Alice'); // Output: Hello, Alice!
    `
  },
  {
    id: 'higher-order-functions',
    label: 'Higher-order Functions',
    content: `
    /* Higher-order Functions Example */
  
    // Function that takes another function as an argument
    function repeat(action, times) {
      for (let i = 0; i < times; i++) {
        action(i);
      }
    }
  
    repeat(console.log, 3); // Output: 0, 1, 2
  
    // Function that returns another function
    function createMultiplier(factor) {
      return function(number) {
        return number * factor;
      };
    }
  
    const double = createMultiplier(2);
    console.log(double(5)); // Output: 10
  
    const triple = createMultiplier(3);
    console.log(triple(5)); // Output: 15
    `
  },
  {
    id: 'callback-functions',
    label: 'Callback Functions',
    content: `
    /* Callback Functions Example */
  
    // Synchronous callback
    function greet(name, callback) {
      const message = \`Hello, \${name}!\`;
      callback(message);
    }
  
    greet('Alice', console.log); // Output: Hello, Alice!
  
    // Asynchronous callback using setTimeout
    function delayedGreet(name, callback) {
      setTimeout(() => {
        const message = \`Hi, \${name}! This is a delayed greeting.\`;
        callback(message);
      }, 2000); // 2-second delay
    }
  
    delayedGreet('Bob', console.log); // Output after 2 seconds: Hi, Bob! This is a delayed greeting.
    `
  },
  {
    id: 'object-literals',
    label: 'Object Literals',
    content: `
    /* Creating and Manipulating Objects with Object Literals */
  
    const person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      fullName: function() {
        return \`\${this.firstName} \${this.lastName}\`;
      }
    };
  
    // Adding a new property
    person.gender = 'male';
  
    // Updating an existing property
    person.age = 31;
  
    // Deleting a property
    delete person.gender;
  
    console.log(person.firstName); // Output: John
    console.log(person.fullName()); // Output: John Doe
    console.log(person); // Output: { firstName: 'John', lastName: 'Doe', age: 31, fullName: [Function: fullName] }
    `
  },
  {
    id: 'constructors-and-new',
    label: 'Constructors and New',
    content: `
    /* Using Constructors and the new Keyword */
  
    // Constructor function for creating person objects
    function Person(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.fullName = function() {
        return \`\${this.firstName} \${this.lastName}\`;
      };
    }
  
    // Creating new objects using the constructor
    const alice = new Person('Alice', 'Johnson', 25);
    const bob = new Person('Bob', 'Smith', 40);
  
    console.log(alice.fullName()); // Output: Alice Johnson
    console.log(bob.fullName()); // Output: Bob Smith
    console.log(alice); // Output: Person { firstName: 'Alice', lastName: 'Johnson', age: 25, fullName: [Function: fullName] }
    console.log(bob); // Output: Person { firstName: 'Bob', lastName: 'Smith', age: 40, fullName: [Function: fullName] }
    `
  },
  {
    id: 'object-create',
    label: 'Object.create Method',
    content: `
    /* Using Object.create Method */
  
    // Prototype object
    const personPrototype = {
      greet: function() {
        return \`Hello, my name is \${this.name}.\`;
      }
    };
  
    // Creating a new object with personPrototype as its prototype
    const person = Object.create(personPrototype);
    person.name = 'Charlie';
    person.age = 28;
  
    console.log(person.greet()); // Output: Hello, my name is Charlie.
    console.log(person); // Output: { name: 'Charlie', age: 28, greet: [Function: greet] }
  
    // Checking the prototype of the object
    console.log(Object.getPrototypeOf(person) === personPrototype); // Output: true
    `
  },
  {
    id: 'dot-notation',
    label: 'Dot Notation',
    content: `
    /* Accessing Properties and Methods with Dot Notation */
  
    const car = {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      getCarInfo: function() {
        return \`\${this.year} \${this.make} \${this.model}\`;
      }
    };
  
    console.log(car.make); // Output: Toyota
    console.log(car.getCarInfo()); // Output: 2020 Toyota Corolla
    `
  },
  {
    id: 'bracket-notation',
    label: 'Bracket Notation',
    content: `
    /* Accessing Properties and Methods with Bracket Notation */
  
    const book = {
      'title': 'The Great Gatsby',
      'author': 'F. Scott Fitzgerald',
      'publication year': 1925
    };
  
    console.log(book['title']); // Output: The Great Gatsby
    console.log(book['publication year']); // Output: 1925
  
    // Using a variable to access a property
    let prop = 'author';
    console.log(book[prop]); // Output: F. Scott Fitzgerald
    `
  },
  {
    id: 'methods-and-this',
    label: 'Methods and the this Keyword',
    content: `
    /* Methods and the this Keyword */
  
    const user = {
      name: 'Emily',
      age: 35,
      greet: function() {
        return \`Hello, my name is \${this.name}.\`;
      },
      incrementAge: function() {
        this.age++;
      }
    };
  
    console.log(user.greet()); // Output: Hello, my name is Emily.
  
    user.incrementAge();
    console.log(user.age); // Output: 36
  
    // Using this inside an object method to refer to the object itself
    const counter = {
      count: 0,
      increment: function() {
        this.count++;
      },
      getCount: function() {
        return this.count;
      }
    };
  
    counter.increment();
    console.log(counter.getCount()); // Output: 1
    `
  },
  {
    id: 'arrays',
    label: 'Creating Arrays',
    content: `
    /* Creating Arrays */
  
    // Using Array constructor
    const array1 = new Array(10); // Creates an array with 10 empty slots
    const array2 = new Array('a', 'b', 'c'); // Creates an array with elements 'a', 'b', 'c'
  
    // Using array literals
    const array3 = []; // Creates an empty array
    const array4 = ['apple', 'banana', 'cherry']; // Creates an array with 3 elements
  
    console.log(array1); // Output: [ <10 empty items> ]
    console.log(array2); // Output: [ 'a', 'b', 'c' ]
    console.log(array3); // Output: []
    console.log(array4); // Output: [ 'apple', 'banana', 'cherry' ]
    `
  },
  {
    id: 'array_literals',
    label: 'Array Literals',
    content: `
    /* Array Literals */
  
    // Creating arrays with literals
    const fruits = ['apple', 'banana', 'cherry'];
    const numbers = [1, 2, 3, 4, 5];
    const mixed = ['text', 42, true, null, undefined];
  
    console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
    console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]
    console.log(mixed); // Output: [ 'text', 42, true, null, undefined ]
    `
  },
  {
    id: 'common_array_methods',
    label: 'Common Array Methods',
    content: `
    /* Common Array Methods */
  
    const animals = ['dog', 'cat', 'elephant'];
  
    // Adding elements
    animals.push('lion'); // Adds 'lion' at the end
    animals.unshift('mouse'); // Adds 'mouse' at the beginning
  
    // Removing elements
    animals.pop(); // Removes the last element ('lion')
    animals.shift(); // Removes the first element ('mouse')
  
    // Finding elements
    const index = animals.indexOf('cat'); // Finds the index of 'cat' (1)
    const exists = animals.includes('elephant'); // Checks if 'elephant' exists (true)
  
    // Modifying elements
    animals.splice(1, 1, 'tiger'); // Removes 'cat' and adds 'tiger' at index 1
  
    // Creating a new array from existing elements
    const subArray = animals.slice(0, 2); // Creates a new array with the first two elements
  
    console.log(animals); // Output: [ 'dog', 'tiger', 'elephant' ]
    console.log(index); // Output: 1
    console.log(exists); // Output: true
    console.log(subArray); // Output: [ 'dog', 'tiger' ]
    `
  },
  {
    id: 'iterating_over_arrays',
    label: 'Iterating Over Arrays',
    content: `
    /* Iterating Over Arrays */
  
    const colors = ['red', 'green', 'blue'];
  
    // Using for loop
    for (let i = 0; i < colors.length; i++) {
      console.log(colors[i]); // Output: red, green, blue
    }
  
    // Using for...of loop
    for (const color of colors) {
      console.log(color); // Output: red, green, blue
    }
  
    // Using forEach method
    colors.forEach(color => console.log(color)); // Output: red, green, blue
  
    // Using map method to create a new array
    const upperCaseColors = colors.map(color => color.toUpperCase());
    console.log(upperCaseColors); // Output: [ 'RED', 'GREEN', 'BLUE' ]
    `
  },
  {
    id: 'iterating_over_objects',
    label: 'Iterating Over Objects',
    content: `
    /* Iterating Over Objects */
  
    const person = {
      name: 'Alice',
      age: 30,
      city: 'New York'
    };
  
    // Using for...in loop
    for (const key in person) {
      if (person.hasOwnProperty(key)) {
        console.log(\`\${key}: \${person[key]}\`);
        // Output:
        // name: Alice
        // age: 30
        // city: New York
      }
    }
  
    // Using Object.keys() to get an array of keys
    Object.keys(person).forEach(key => {
      console.log(\`\${key}: \${person[key]}\`);
      // Output:
      // name: Alice
      // age: 30
      // city: New York
    });
  
    // Using Object.entries() to get an array of key-value pairs
    Object.entries(person).forEach(([key, value]) => {
      console.log(\`\${key}: \${value}\`);
      // Output:
      // name: Alice
      // age: 30
      // city: New York
    });
    `
  },
  {
    id: 'array_destructuring',
    label: 'Array Destructuring',
    content: `
    /* Array Destructuring */
  
    const coordinates = [10, 20, 30];
  
    // Using destructuring to assign variables
    const [x, y, z] = coordinates;
  
    console.log(x); // Output: 10
    console.log(y); // Output: 20
    console.log(z); // Output: 30
  
    // Skipping elements
    const [a, , c] = coordinates;
    console.log(a); // Output: 10
    console.log(c); // Output: 30
    `
  },
  {
    id: 'object_destructuring',
    label: 'Object Destructuring',
    content: `
    /* Object Destructuring */
  
    const person = {
      firstName: 'Bob',
      lastName: 'Smith',
      age: 40,
      address: {
        city: 'Los Angeles',
        state: 'CA'
      }
    };
  
    // Using destructuring to assign variables
    const { firstName, lastName, age } = person;
  
    console.log(firstName); // Output: Bob
    console.log(lastName); // Output: Smith
    console.log(age); // Output: 40
  
    // Nested destructuring
    const { address: { city, state } } = person;
    console.log(city); // Output: Los Angeles
    console.log(state); // Output: CA
  
    // Renaming variables during destructuring
    const { firstName: fName, age: personAge } = person;
    console.log(fName); // Output: Bob
    console.log(personAge); // Output: 40
    `
  },
  {
    id: 'prototype_chain',
    label: 'Prototype Chain',
    content: `
    /* Prototype Chain */
  
    // Constructor function for creating objects
    function Animal(name) {
      this.name = name;
    }
  
    // Adding a method to the prototype
    Animal.prototype.sound = function() {
      return 'Making sound...';
    };
  
    // Creating an object using the constructor
    const dog = new Animal('Dog');
  
    // The dog object inherits properties and methods from Animal's prototype
    console.log(dog.name); // Output: Dog
    console.log(dog.sound()); // Output: Making sound...
  
    // Checking the prototype chain
    console.log(dog.hasOwnProperty('name')); // Output: true
    console.log(dog.hasOwnProperty('sound')); // Output: false
    `
  },
  {
    id: 'es5_inheritance',
    label: 'ES5 Inheritance',
    content: `
    /* ES5 Inheritance (Prototypal Inheritance) */
  
    // Parent constructor function
    function Animal(name) {
      this.name = name;
    }
  
    // Adding a method to the prototype
    Animal.prototype.sound = function() {
      return 'Making sound...';
    };
  
    // Child constructor function
    function Dog(name, breed) {
      Animal.call(this, name); // Call the parent constructor to set properties
      this.breed = breed;
    }
  
    // Inheriting methods from the parent prototype
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog; // Set constructor property to Dog
  
    // Adding a method specific to Dog
    Dog.prototype.bark = function() {
      return 'Woof!';
    };
  
    // Creating a Dog object
    const myDog = new Dog('Buddy', 'Labrador');
  
    console.log(myDog.name); // Output: Buddy
    console.log(myDog.sound()); // Output: Making sound...
    console.log(myDog.bark()); // Output: Woof!
    `
  },
  {
    id: 'es6_classes',
    label: 'ES6 Classes and Inheritance',
    content: `
    /* ES6 Classes and Inheritance */
  
    // Parent class
    class Animal {
      constructor(name) {
        this.name = name;
      }
  
      sound() {
        return 'Making sound...';
      }
    }
  
    // Child class extending from Animal
    class Dog extends Animal {
      constructor(name, breed) {
        super(name); // Call the parent constructor to set properties
        this.breed = breed;
      }
  
      bark() {
        return 'Woof!';
      }
    }
  
    // Creating a Dog object
    const myDog = new Dog('Buddy', 'Labrador');
  
    console.log(myDog.name); // Output: Buddy
    console.log(myDog.sound()); // Output: Making sound...
    console.log(myDog.bark()); // Output: Woof!
    `
  },
  {
    id: 'this_keyword',
    label: 'This Keyword',
    content: `
    /* this Keyword */
  
    // In a constructor function
    function Person(name) {
      this.name = name;
    }
  
    const alice = new Person('Alice');
    console.log(alice.name); // Output: Alice
  
    // In an object method
    const user = {
      name: 'John',
      greet: function() {
        return \`Hello, my name is \${this.name}.\`;
      }
    };
  
    console.log(user.greet()); // Output: Hello, my name is John.
    `
  },
  {
    id: 'context_and_binding',
    label: 'Context and Binding',
    content: `
    /* Context and Binding */
  
    const person = {
      name: 'John',
      greet: function() {
        return \`Hello, my name is \${this.name}.\`;
      }
    };
  
    console.log(person.greet()); // Output: Hello, my name is John.
    `
  },
  {
    id: 'call_apply_bind_example',
    label: 'Call, Apply, and Bind Methods',
    content: `
    /* Call, Apply, and Bind Methods */
  
    const person1 = {
      name: 'Alice'
    };
  
    const person2 = {
      name: 'Bob'
    };
  
    function greet() {
      return \`Hello, my name is \${this.name}.\`;
    }
  
    // Using call method
    console.log(greet.call(person1)); // Output: Hello, my name is Alice.
    console.log(greet.call(person2)); // Output: Hello, my name is Bob.
  
    // Using apply method
    console.log(greet.apply(person1)); // Output: Hello, my name is Alice.
    console.log(greet.apply(person2)); // Output: Hello, my name is Bob.
  
    // Using bind method
    const greetPerson1 = greet.bind(person1);
    console.log(greetPerson1()); // Output: Hello, my name is Alice.
  
    const greetPerson2 = greet.bind(person2);
    console.log(greetPerson2()); // Output: Hello, my name is Bob.
    `
  },
  {
    id: 'module_pattern_example',
    label: 'The Module Pattern',
    content: `
    /* The Module Pattern */
  
    const module = (function() {
      // Private variables and functions
      let privateVariable = 'Private';
  
      function privateFunction() {
        return 'Private Function';
      }
  
      // Public interface
      return {
        publicVariable: 'Public',
        publicFunction: function() {
          return 'Public Function';
        },
        getPrivateVariable: function() {
          return privateVariable;
        }
      };
    })();
  
    console.log(module.publicVariable); // Output: Public
    console.log(module.publicFunction()); // Output: Public Function
    console.log(module.getPrivateVariable()); // Output: Private
    `
  },
  {
    id: 'es6_module_syntax_example',
    label: 'ES6 Module (Import, Export)',
    content: `
    /* ES6 Module Syntax (Import, Export) */
  
    // Module 1 (file1.js)
    export const message1 = 'Hello from Module 1';
  
    // Module 2 (file2.js)
    import { message1 } from './file1.js'; // Importing message1 from Module 1
    console.log(message1); // Output: Hello from Module 1
    `
  },
  {
    id: 'try_catch_finally_example',
    label: 'try, catch, finally',
    content: `
    /* try, catch, finally */
  
    try {
      // Code that might throw an exception
      throw new Error('Oops! Something went wrong.');
    } catch (error) {
      // Handle the exception
      console.error('Error:', error.message);
    } finally {
      // Cleanup code that always runs, whether there was an exception or not
      console.log('Cleanup code');
    }
    `
  },
  {
    id: 'throwing_errors_example',
    label: 'Throwing Errors',
    content: `
    /* Throwing Errors */
  
    function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return a / b;
    }
  
    try {
      console.log(divide(10, 0)); // Throws an error
    } catch (error) {
      console.error('Error:', error.message);
    }
    `
  },
  {
    id: 'custom_errors_example',
    label: 'Custom Errors',
    content: `
    /* Custom Errors */
  
    class ValidationError extends Error {
      constructor(message) {
        super(message);
        this.name = 'ValidationError';
      }
    }
  
    function validateInput(input) {
      if (!input) {
        throw new ValidationError('Input is required.');
      }
    }
  
    try {
      validateInput(null); // Throws a custom ValidationError
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error('Validation Error:', error.message);
      } else {
        console.error('Error:', error.message);
      }
    }
    `
  },
  {
    id: 'creating_and_chaining_promises_example',
    label: 'Creating and Chaining Promises',
    content: `
    /* Creating and Chaining Promises */
  
    // Creating a promise
    const myPromise = new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout(() => {
        // Resolve the promise
        resolve('Data fetched successfully');
      }, 2000);
    });
  
    // Chaining promises
    myPromise
      .then(data => {
        console.log(data); // Output: Data fetched successfully
        return 'Additional data';
      })
      .then(data => {
        console.log(data); // Output: Additional data
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    `
  },
  {
    id: 'error_handling_with_promises_example',
    label: 'Error Handling (.catch)',
    content: `
    /* Error Handling with Promises (.catch) */
  
    // Creating a promise that rejects
    const myPromise = new Promise((resolve, reject) => {
      // Simulating an error
      setTimeout(() => {
        reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  
    // Handling errors with .catch()
    myPromise
      .then(data => {
        console.log(data); // Output: Data fetched successfully
      })
      .catch(error => {
        console.error('Error:', error.message); // Output: Error: Failed to fetch data
      });
    `
  },
  {
    id: 'async_await_example',
    label: 'async and await',
    content: `
    /* async and await */
  
    // Function returning a promise
    function fetchData() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('Data fetched successfully');
        }, 2000);
      });
    }
  
    // Using async/await
    async function getData() {
      try {
        const data = await fetchData();
        console.log(data); // Output: Data fetched successfully
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  
    getData();
    `
  },
  {
    id: 'xhr_vs_fetch_example',
    label: 'XMLHttpRequest vs. fetch',
    content: `
    /* XMLHttpRequest vs. fetch */
  
    // Using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText); // Output: Response data
      }
    };
    xhr.send();
  
    // Using fetch
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Output: Response data
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    `
  },
  {
    id: 'json_parsing_stringifying_example',
    label: 'Working with JSON',
    content: `
    /* Working with JSON */
  
    // Parsing JSON
    const jsonString = '{"name": "John", "age": 30}';
    const parsedData = JSON.parse(jsonString);
    console.log(parsedData); // Output: { name: 'John', age: 30 }
  
    // Stringifying JavaScript object to JSON
    const person = { name: 'Alice', age: 25 };
    const jsonStringified = JSON.stringify(person);
    console.log(jsonStringified); // Output: {"name":"Alice","age":25}
    `
  },
  {
    id: 'selecting_elements_example',
    label: 'Selecting Elements',
    content: `
    /* Selecting Elements */
  
    // By ID
    const elementById = document.getElementById('myElement');
  
    // By class name
    const elementsByClass = document.getElementsByClassName('myClass');
  
    // By tag name
    const elementsByTag = document.getElementsByTagName('div');
  
    // Using querySelector
    const elementByQuery = document.querySelector('.myClass');
  
    // Using querySelectorAll
    const elementsByQueryAll = document.querySelectorAll('.myClass');
    `
  },
  {
    id: 'changing_content_attributes_example',
    label: 'Changing Content and Attributes',
    content: `
    /* Changing Content and Attributes */
  
    // Changing content
    const element = document.getElementById('myElement');
    element.innerHTML = '<p>New content</p>';
  
    // Changing attributes
    const link = document.querySelector('a');
    link.setAttribute('href', 'https://www.example.com');
    `
  },
  {
    id: 'modifying_styles_classes_example',
    label: 'Modifying Styles and Classes',
    content: `
    /* Modifying Styles and Classes */
  
    // Modifying styles
    const element = document.getElementById('myElement');
    element.style.color = 'red';
    element.style.fontSize = '16px';
  
    // Modifying classes
    element.classList.add('newClass');
    element.classList.remove('oldClass');
    element.classList.toggle('active');
    `
  },
  {
    id: 'creating_removing_elements_example',
    label: 'Creating and Removing Elements',
    content: `
    /* Creating and Removing Elements */
  
    // Creating an element
    const newElement = document.createElement('div');
    newElement.textContent = 'New Element';
  
    // Appending to parent
    const parentElement = document.getElementById('parent');
    parentElement.appendChild(newElement);
  
    // Removing an element
    const elementToRemove = document.getElementById('elementToRemove');
    elementToRemove.parentNode.removeChild(elementToRemove);
    `
  },
  {
    id: 'event_listeners_example',
    label: 'Event Listeners',
    content: `
    /* Event Listeners */
  
    // Adding an event listener
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log('Button clicked');
    });
    `
  },
  {
    id: 'event_delegation_example',
    label: 'Event Delegation',
    content: `
    /* Event Delegation */
  
    // Parent element
    const parent = document.getElementById('parentElement');
  
    // Event delegation
    parent.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        console.log('Button clicked');
      }
    });
    `
  },
  {
    id: 'event_object_propagation_example',
    label: 'Event Object and Propagation',
    content: `
    /* Event Object and Propagation */
  
    // Adding an event listener
    const button = document.getElementById('myButton');
    button.addEventListener('click', function(event) {
      console.log('Button clicked');
      console.log('Event type:', event.type);
      console.log('Target element:', event.target);
      console.log('Current target element:', event.currentTarget);
    });
  
    // Stopping event propagation
    const parent = document.getElementById('parentElement');
    parent.addEventListener('click', function(event) {
      event.stopPropagation(); // Stop event from bubbling up to parent elements
    });
    `
  },
  {
    id: 'template_literals_example',
    label: 'Template Literals',
    content: `
    /* Template Literals */
  
    const name = 'John';
    const age = 30;
    console.log(\`My name is \${name} and I am \${age} years old.\`);
    `
  },
  {
    id: 'default_parameters_example_2',
    label: 'Default Parameters',
    content: `
    /* Default Parameters */
  
    function greet(name = 'Anonymous') {
      console.log(\`Hello, \${name}!\`);
    }
  
    greet(); // Output: Hello, Anonymous!
    greet('John'); // Output: Hello, John!
    `
  },
  {
    id: 'rest_spread_operators_example',
    label: 'Rest and Spread Operators',
    content: `
    /* Rest and Spread Operators */
  
    // Rest operator
    function sum(...numbers) {
      return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(1, 2, 3, 4)); // Output: 10
  
    // Spread operator
    const numbers = [1, 2, 3, 4];
    console.log(...numbers); // Output: 1 2 3 4
    `
  },
  {
    id: 'destructuring_example',
    label: 'Destructuring',
    content: `
    /* Destructuring */
  
    // Array destructuring
    const [first, second] = [1, 2];
    console.log(first, second); // Output: 1 2
  
    // Object destructuring
    const { name, age } = { name: 'John', age: 30 };
    console.log(name, age); // Output: John 30
    `
  },
  {
    id: 'enhanced_object_literals_example',
    label: 'Enhanced Object Literals',
    content: `
    /* Enhanced Object Literals */
  
    const name = 'John';
    const age = 30;
  
    // Shorthand property names
    const person = { name, age };
  
    // Shorthand method names
    const greeter = {
      greet() {
        console.log('Hello!');
      }
    };
  
    console.log(person); // Output: { name: 'John', age: 30 }
    greeter.greet(); // Output: Hello!
    `
  },
  {
    id: 'let_const_keywords_example',
    label: 'let and const Keywords',
    content: `
    /* let and const Keywords */
  
    // let keyword
    let count = 0;
    count = 1;
  
    // const keyword
    const PI = 3.14;
    // PI = 3.14159; // Error: Assignment to constant variable
    `
  },
  {
    id: 'generators_example',
    label: 'Generators',
    content: `
    /* Generators */
  
    function* generatorFunction() {
      yield 1;
      yield 2;
      yield 3;
    }
  
    const generator = generatorFunction();
    console.log(generator.next().value); // Output: 1
    console.log(generator.next().value); // Output: 2
    console.log(generator.next().value); // Output: 3
    `
  },
  {
    id: 'symbols_example',
    label: 'Symbols',
    content: `
    /* Symbols */
  
    const uniqueKey = Symbol('uniqueKey');
    const obj = {
      [uniqueKey]: 'Value'
    };
  
    console.log(obj[uniqueKey]); // Output: Value
    `
  },
  {
    id: 'exponentiation_operator_example',
    label: 'Exponentiation Operator',
    content: `
    /* Exponentiation Operator */
  
    const squared = 2 ** 2; // 2 raised to the power of 2
    console.log(squared); // Output: 4
    `
  } 
];

