export const rustCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  // Single-line comments start with two forward slashes.
  
  // This is a single-line comment.
  
  /*
     Block comments can span multiple lines.
     Everything between the /* and */ is part of the comment.
  */
  
  fn main() {
      // This is a single-line comment inside the main function.
  
      /*
         Block comments can be used within functions or anywhere in the code.
         They are useful for temporarily disabling code or for adding detailed explanations.
      */
      println!("Hello, Rust!"); // You can place comments at the end of a line of code.
      
      /*
      Block comments can be nested.
      /*
          This is a nested block comment.
      */
      */
  }
  
  /* 
      Documentation comments are a special type of comments that generate HTML documentation.
      They use triple slashes and are typically placed above functions, structs, enums, or modules.
      For example:
  */
  
  /// Adds two numbers together.
  /// 
  /// # Arguments
  ///
  /// * \`a\` - The first number.
  /// * \`b\` - The second number.
  /// 
  /// # Returns
  ///
  /// * The sum of \`a\` and \`b\`.
  fn add(a: i32, b: i32) -> i32 {
      a + b
  }
  
  // To view the generated documentation, you can run \`cargo doc --open\` in the terminal.
  `
  },
  {
    id: 'variables_mutability',
    label: 'Variables & Mutability',
    content: `
  // Variables and Mutability in Rust
  
  fn main() {
      // Immutable Variable
      // By default, variables in Rust are immutable. Once a value is bound to a name, it cannot be changed.
      let x = 5;
      println!("The value of x is: {}", x);
      
      // Uncommenting the next line will cause a compile-time error because x is immutable.
      // x = 6;
  
      // Mutable Variable
      // To allow a variable to be changed, use the 'mut' keyword.
      let mut y = 10;
      println!("The initial value of y is: {}", y);
      y = 15;  // Now you can change the value of y because it is mutable.
      println!("The new value of y is: {}", y);
  
      // Variable Shadowing
      // You can declare a new variable with the same name as a previous variable, effectively 'shadowing' it.
      let z = 20;
      println!("The initial value of z is: {}", z);
      let z = z + 5;  // This is a new variable shadowing the previous z.
      println!("The shadowed value of z is: {}", z);
  
      // This allows for transformations of a value while keeping the variable name consistent.
      let spaces = "   ";
      let spaces = spaces.len();  // The new 'spaces' variable shadows the previous one and holds the length of the string.
      println!("The number of spaces is: {}", spaces);
  
      // Constants
      // Constants are always immutable and must have their type specified.
      // They are declared using the 'const' keyword and can be used throughout the scope of your program.
      const MAX_POINTS: u32 = 100_000;
      println!("The maximum points are: {}", MAX_POINTS);
  }
  `
  },
  {
    id: 'data_types',
    label: 'Data Types',
    content: `
  // Data Types in Rust
  
  fn main() {
      // Integer Types
      // Rust supports various integer types, both signed (i8, i16, i32, i64, i128, isize) and unsigned (u8, u16, u32, u64, u128, usize).
      let int_8: i8 = -128;  // 8-bit signed integer
      let int_32: i32 = 10;  // 32-bit signed integer (default type)
      let uint_64: u64 = 1000000000;  // 64-bit unsigned integer
      println!("Integer examples: int_8 = {}, int_32 = {}, uint_64 = {}", int_8, int_32, uint_64);
  
      // Integer Literals with Different Bases
      let hex = 0xff;   // Hexadecimal
      let octal = 0o77; // Octal
      let binary = 0b1010; // Binary
      println!("Hexadecimal: {}, Octal: {}, Binary: {}", hex, octal, binary);
  
      // Floating-Point Types
      // Rust supports two floating-point types: f32 and f64 (default type).
      let float_32: f32 = 3.14; // 32-bit floating-point number
      let float_64: f64 = 2.718281828459045; // 64-bit floating-point number (default type)
      println!("Floating-point examples: float_32 = {}, float_64 = {}", float_32, float_64);
  
      // Character Type
      // The char type represents a single Unicode scalar value and is 4 bytes in size.
      let letter: char = 'R';
      let emoji: char = '😊';
      println!("Character examples: letter = '{}', emoji = '{}'", letter, emoji);
  
      // Boolean Type
      // Booleans are represented by the bool type and can have two values: true or false.
      let is_rust_awesome: bool = true;
      let is_sunny: bool = false;
      println!("Boolean examples: is_rust_awesome = {}, is_sunny = {}", is_rust_awesome, is_sunny);
  }
  `
  },
  {
    id: 'operators',
    label: 'Operators',
    content: `
  // Operators in Rust
  
  fn main() {
      // Arithmetic Operators
      let a = 10;
      let b = 5;
  
      println!("Addition: {} + {} = {}", a, b, a + b);        // Output: 10 + 5 = 15
      println!("Subtraction: {} - {} = {}", a, b, a - b);     // Output: 10 - 5 = 5
      println!("Multiplication: {} * {} = {}", a, b, a * b);  // Output: 10 * 5 = 50
      println!("Division: {} / {} = {}", a, b, a / b);        // Output: 10 / 5 = 2
      println!("Modulus: {} % {} = {}", a, b, a % b);         // Output: 10 % 5 = 0
  
      // Comparison Operators
      println!("Equality: {} == {} is {}", a, b, a == b);     // Output: 10 == 5 is false
      println!("Inequality: {} != {} is {}", a, b, a != b);   // Output: 10 != 5 is true
      println!("Greater than: {} > {} is {}", a, b, a > b);   // Output: 10 > 5 is true
      println!("Less than: {} < {} is {}", a, b, a < b);      // Output: 10 < 5 is false
      println!("Greater or equal: {} >= {} is {}", a, b, a >= b); // Output: 10 >= 5 is true
      println!("Less or equal: {} <= {} is {}", a, b, a <= b); // Output: 10 <= 5 is false
  
      // Logical Operators
      let x = true;
      let y = false;
  
      println!("Logical AND: {} && {} is {}", x, y, x && y);   // Output: true && false is false
      println!("Logical OR: {} || {} is {}", x, y, x || y);    // Output: true || false is true
      println!("Logical NOT: !{} is {}", x, !x);               // Output: !true is false
  
      // Bitwise Operators
      let c = 2;  // 10 in binary
      let d = 3;  // 11 in binary
  
      println!("Bitwise AND: {} & {} = {}", c, d, c & d);      // Output: 2 & 3 = 2 (10 & 11 = 10)
      println!("Bitwise OR: {} | {} = {}", c, d, c | d);       // Output: 2 | 3 = 3 (10 | 11 = 11)
      println!("Bitwise XOR: {} ^ {} = {}", c, d, c ^ d);      // Output: 2 ^ 3 = 1 (10 ^ 11 = 01)
      println!("Bitwise NOT: ~{} = {}", c, !c);                // Output: ~2 = -3
      println!("Left Shift: {} << 1 = {}", c, c << 1);         // Output: 2 << 1 = 4 (10 << 1 = 100)
      println!("Right Shift: {} >> 1 = {}", c, c >> 1);        // Output: 2 >> 1 = 1 (10 >> 1 = 01)
  
      // Compound Assignment Operators
      let mut e = 5;
  
      e += 2;  // Equivalent to: e = e + 2
      println!("e after += 2 is {}", e);  // Output: e after += 2 is 7
  
      e -= 1;  // Equivalent to: e = e - 1
      println!("e after -= 1 is {}", e);  // Output: e after -= 1 is 6
  
      e *= 3;  // Equivalent to: e = e * 3
      println!("e after *= 3 is {}", e);  // Output: e after *= 3 is 18
  
      e /= 6;  // Equivalent to: e = e / 6
      println!("e after /= 6 is {}", e);  // Output: e after /= 6 is 3
  
      e %= 2;  // Equivalent to: e = e % 2
      println!("e after %= 2 is {}", e);  // Output: e after %= 2 is 1
  
      // Compound bitwise operators also exist (e.g., &=, |=, ^=, <<=, >>=)
      let mut f = 2; // 10 in binary
  
      f &= 3; // Equivalent to: f = f & 3
      println!("f after &= 3 is {}", f); // Output: f after &= 3 is 2 (10 & 11 = 10)
  
      f |= 1; // Equivalent to: f = f | 1
      println!("f after |= 1 is {}", f); // Output: f after |= 1 is 3 (10 | 01 = 11)
  
      f ^= 1; // Equivalent to: f = f ^ 1
      println!("f after ^= 1 is {}", f); // Output: f after ^= 1 is 2 (11 ^ 01 = 10)
  
      f <<= 1; // Equivalent to: f = f << 1
      println!("f after <<= 1 is {}", f); // Output: f after <<= 1 is 4 (10 << 1 = 100)
  
      f >>= 2; // Equivalent to: f = f >> 2
      println!("f after >>= 2 is {}", f); // Output: f after >>= 2 is 1 (100 >> 2 = 001)
  }
  `
  },
  {
    id: 'constants_static',
    label: 'Constants & Static Variables',
    content: `
  // Constants and Static Variables in Rust
  
  fn main() {
      // Constants in Rust
      // Constants are immutable and must have a type specified. They can be set only to a constant expression, not the result of a function call or any other value that could change at runtime.
      // Constants are declared using the \`const\` keyword and are typically written in uppercase with underscores separating words.
  
      const MAX_POINTS: u32 = 100_000;
      println!("The maximum points you can earn is: {}", MAX_POINTS); // Output: 100000
  
      // Static Variables in Rust
      // Static variables are also immutable by default and require an explicit type annotation. They are 'static' meaning their lifetime lasts for the entire duration of the program.
      // Static variables can be mutable if declared with the \`mut\` keyword. This is different from constants which are always immutable.
      // Accessing mutable static variables is unsafe and typically requires the use of unsafe blocks.
  
      static GREETING: &str = "Hello, world!";
      println!("{}", GREETING); // Output: Hello, world!
  
      // Mutable Static Variable
      // To declare a mutable static variable, use the \`static mut\` keyword. However, modifying a mutable static variable is considered unsafe and requires an \`unsafe\` block.
      
      static mut COUNTER: i32 = 0;
  
      // We use an unsafe block to modify and read the mutable static variable
      unsafe {
          COUNTER += 1;
          println!("Counter after increment: {}", COUNTER); // Output: 1
      }
  
      // Constants vs. Static Variables
      // - Constants are inlined wherever they are used, while static variables have a fixed memory location.
      // - Constants are always immutable, while static variables can be mutable if declared with \`mut\`.
      // - Accessing mutable static variables requires \`unsafe\` blocks due to the potential for race conditions in concurrent contexts.
  }
  
  // Outside the main function, constants and static variables can be declared at the global scope.
  
  // A global constant
  const GLOBAL_CONST: u32 = 42;
  
  // A global static variable
  static GLOBAL_STATIC: &str = "Global static variable";
  
  // A mutable global static variable
  static mut GLOBAL_COUNTER: i32 = 10;
  
  fn global_usage() {
      println!("Global constant: {}", GLOBAL_CONST); // Output: 42
      println!("Global static: {}", GLOBAL_STATIC); // Output: Global static variable
  
      unsafe {
          GLOBAL_COUNTER += 1;
          println!("Global counter after increment: {}", GLOBAL_COUNTER); // Output: 11
      }
  }
  `
  },
  {
    id: 'conditional_statements',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in Rust
  
  fn main() {
      // Using if, else if, and else
      // The basic form of a conditional statement in Rust is the \`if\` expression.
      let number = 10;
  
      if number > 0 {
          println!("The number is positive."); // Output: The number is positive.
      } else if number < 0 {
          println!("The number is negative.");
      } else {
          println!("The number is zero.");
      }
  
      // Using if as an Expression
      // Since \`if\` is an expression in Rust, it can be used to assign values to variables.
      let is_positive = if number > 0 { true } else { false };
      println!("Is the number positive? {}", is_positive); // Output: Is the number positive? true
  
      // Matching with match
      // The \`match\` expression in Rust is a powerful control flow operator that allows us to compare a value against a series of patterns and execute code based on which pattern matches.
  
      let grade = 'B';
  
      match grade {
          'A' => println!("Excellent!"),
          'B' => println!("Good!"), // Output: Good!
          'C' => println!("Fair!"),
          'D' => println!("Poor!"),
          'F' => println!("Fail!"),
          _ => println!("Invalid grade!"), // The underscore (_) acts as a catch-all for any values not covered by the previous arms.
      }
  
      // Using match to Bind Variables
      // The \`match\` expression can bind matched values to variables.
      let value = Some(5);
  
      match value {
          Some(x) => println!("The value is: {}", x), // Output: The value is: 5
          None => println!("No value"),
      }
  
      // Matching Multiple Patterns
      // You can match multiple patterns using the pipe (|) operator.
      let score = 85;
  
      match score {
          90..=100 => println!("A grade"), // Matches any value from 90 to 100 inclusive.
          80..=89 => println!("B grade"),  // Output: B grade
          70..=79 => println!("C grade"),
          60..=69 => println!("D grade"),
          0..=59 => println!("F grade"),
          _ => println!("Invalid score"),
      }
  
      // Conditional Loops with while and loop
      // You can use conditional statements within loops to control flow.
      let mut count = 0;
  
      while count < 5 {
          println!("Count is: {}", count); // Output: Count is: 0, 1, 2, 3, 4
          count += 1;
      }
  
      // The \`loop\` keyword creates an infinite loop unless controlled by a conditional statement.
      let mut counter = 0;
  
      loop {
          if counter == 3 {
              break; // Exit the loop when counter reaches 3
          }
          println!("Counter is: {}", counter); // Output: Counter is: 0, 1, 2
          counter += 1;
      }
  }
  `
  },
  {
    id: 'loops',
    label: 'Loops',
    content: `
  // Loops in Rust
  
  fn main() {
      // Infinite Loop: 'loop'
      let mut count = 0;
      
      loop {
          println!("Count is: {}", count);
          count += 1;
          
          if count == 5 {
              break; // Exit the loop when count reaches 5
          }
      }
      // Output:
      // Count is: 0
      // Count is: 1
      // Count is: 2
      // Count is: 3
      // Count is: 4
  
      // Conditional Loop: 'while'
      let mut number = 3;
  
      while number != 0 {
          println!("{}!", number);
          number -= 1;
      }
      println!("Liftoff!");
      // Output:
      // 3!
      // 2!
      // 1!
      // Liftoff!
  
      // Iterating Over a Range: 'for'
      for i in 1..4 {
          println!("Value: {}", i);
      }
      // Output:
      // Value: 1
      // Value: 2
      // Value: 3
  
      // Iterating Over a Collection: 'for'
      let array = [10, 20, 30, 40, 50];
      for element in array.iter() {
          println!("Element: {}", element);
      }
      // Output:
      // Element: 10
      // Element: 20
      // Element: 30
      // Element: 40
      // Element: 50
  
      // Nested Loops with Labels
      'outer: for x in 1..4 {
          'inner: for y in 1..4 {
              if x == 2 && y == 2 {
                  continue 'outer; // Skip to the next iteration of the outer loop
              }
              println!("x = {}, y = {}", x, y);
          }
      }
      // Output:
      // x = 1, y = 1
      // x = 1, y = 2
      // x = 1, y = 3
      // x = 2, y = 1
      // x = 3, y = 1
      // x = 3, y = 2
      // x = 3, y = 3
  
      // Using 'loop' for Early Returns
      let result = loop {
          count += 1;
          if count == 10 {
              break count * 2; // Returns the value to 'result' variable
          }
      };
      println!("Result from loop: {}", result);
      // Output:
      // Result from loop: 20
  }
  `
  },
  {
    id: 'loop_control',
    label: 'Loop Control',
    content: `
  // Loop Control in Rust
  
  fn main() {
      // Using 'break' to Exit a Loop
  
      let mut counter = 0;
  
      loop {
          counter += 1;
          println!("Counter: {}", counter);
  
          if counter == 5 {
              break; // Exit the loop when counter reaches 5
          }
      }
      // Output:
      // Counter: 1
      // Counter: 2
      // Counter: 3
      // Counter: 4
      // Counter: 5
  
      // Using 'continue' to Skip an Iteration
  
      for number in 1..6 {
          if number == 3 {
              continue; // Skip the rest of the loop iteration when number is 3
          }
          println!("Number: {}", number);
      }
      // Output:
      // Number: 1
      // Number: 2
      // Number: 4
      // Number: 5
  
      // Breaking Out of Nested Loops with Labels
  
      'outer: for x in 1..5 {
          for y in 1..5 {
              if x == 2 && y == 3 {
                  break 'outer; // Exit the outer loop when x is 2 and y is 3
              }
              println!("x = {}, y = {}", x, y);
          }
      }
      // Output:
      // x = 1, y = 1
      // x = 1, y = 2
      // x = 1, y = 3
      // x = 1, y = 4
      // x = 2, y = 1
      // x = 2, y = 2
  
      // Using 'continue' in Nested Loops with Labels
  
      'outer_loop: for i in 1..4 {
          'inner_loop: for j in 1..4 {
              if i == 2 && j == 2 {
                  continue 'outer_loop; // Skip to the next iteration of the outer loop when i is 2 and j is 2
              }
              println!("i = {}, j = {}", i, j);
          }
      }
      // Output:
      // i = 1, j = 1
      // i = 1, j = 2
      // i = 1, j = 3
      // i = 2, j = 1
      // i = 3, j = 1
      // i = 3, j = 2
      // i = 3, j = 3
  
      // Breaking with a Value
  
      let result = loop {
          counter += 1;
  
          if counter == 10 {
              break counter * 2; // Break the loop and return a value
          }
      };
      println!("Result from loop: {}", result);
      // Output:
      // Result from loop: 20
  }
  `
  },
  {
    id: 'functions',
    label: 'Functions',
    content: `
  // Functions in Rust
  
  fn main() {
      // Defining and Calling Functions
  
      // Define a simple function that prints a message
      fn say_hello() {
          println!("Hello, Rust!");
      }
      // Call the function
      say_hello(); // Output: Hello, Rust!
  
      // Parameters and Return Values
  
      // Define a function with parameters and a return value
      fn add(a: i32, b: i32) -> i32 {
          a + b // Return the sum of a and b
      }
      // Call the function with arguments
      let sum = add(5, 3);
      println!("Sum: {}", sum); // Output: Sum: 8
  
      // Function Signatures
  
      // Function signatures define the parameter types and return type
      fn multiply(x: f64, y: f64) -> f64 {
          x * y
      }
      let product = multiply(4.5, 2.0);
      println!("Product: {}", product); // Output: Product: 9.0
  
      // Closures and Anonymous Functions
  
      // A closure is an anonymous function you can save in a variable or pass as an argument
      let square = |n: i32| n * n; // Define a closure to square a number
      println!("Square of 4: {}", square(4)); // Output: Square of 4: 16
  
      // Closures can capture variables from their environment
      let factor = 3;
      let multiply_by_factor = |x: i32| x * factor;
      println!("3 times 5: {}", multiply_by_factor(5)); // Output: 3 times 5: 15
  
      // Higher-Order Functions
  
      // Functions that take other functions as parameters or return functions are called higher-order functions
      fn apply_to_10<F>(f: F) -> i32
      where
          F: Fn(i32) -> i32,
      {
          f(10) // Apply the function f to 10
      }
      let result = apply_to_10(|x| x + 5); // Pass a closure that adds 5 to the argument
      println!("Result: {}", result); // Output: Result: 15
  
      // More complex example using a higher-order function
      fn map<F>(arr: &[i32], func: F) -> Vec<i32>
      where
          F: Fn(i32) -> i32,
      {
          arr.iter().map(|&x| func(x)).collect() // Apply func to each element in arr
      }
      let numbers = vec![1, 2, 3, 4];
      let doubled_numbers = map(&numbers, |x| x * 2);
      println!("Doubled numbers: {:?}", doubled_numbers); // Output: Doubled numbers: [2, 4, 6, 8]
  }
  `
  },
  {
    id: 'ownership-borrowing',
    label: 'Ownership & Borrowing',
    content: `
  // Ownership and Borrowing in Rust
  
  fn main() {
      // Ownership Rules
  
      // Rule 1: Each value in Rust has a variable that's called its owner.
      // Rule 2: There can only be one owner at a time.
      // Rule 3: When the owner goes out of scope, the value will be dropped.
  
      {
          let s = String::from("hello"); // s is the owner of the string "hello"
          println!("{}", s); // Output: hello
      }
      // s is now out of scope and the string is dropped.
  
      // Borrowing and References
  
      // Borrowing allows you to reference a value without taking ownership of it.
      // References are created using the & symbol for immutable borrowing.
  
      let s1 = String::from("hello");
      let len = calculate_length(&s1); // Pass a reference to s1
      println!("The length of '{}' is {}", s1, len); // Output: The length of 'hello' is 5
  
      // Mutable borrowing allows you to modify the borrowed value.
      // Mutable references are created using the &mut symbol.
  
      let mut s2 = String::from("hello");
      change(&mut s2);
      println!("Modified string: {}", s2); // Output: Modified string: hello, world
  
      // Slice Types
  
      // Slices are references to a contiguous sequence of elements in a collection.
      // They allow safe borrowing of sections of data.
  
      let arr = [1, 2, 3, 4, 5];
      let slice = &arr[1..4]; // A slice of the array from index 1 to 3
      println!("Slice: {:?}", slice); // Output: Slice: [2, 3, 4]
  
      let string = String::from("hello world");
      let word = &string[0..5]; // A slice of the string from index 0 to 4
      println!("Word: {}", word); // Output: Word: hello
  
      // Lifetimes and Lifetime Annotations
  
      // Lifetimes ensure that references are valid as long as they are used.
      // Lifetime annotations specify how long references are valid.
  
      let r; // Declare a reference without initialization
      {
          let x = 5;
          r = &x; // Borrow x (with a short lifetime)
      }
      // println!("r: {}", r); // This would cause a compile-time error because x is out of scope.
  
      // Lifetime annotations are necessary when the lifetimes of references are not obvious to the compiler.
      // They are written with a leading apostrophe (e.g., 'a).
  
      fn longest<'a>(s1: &'a str, s2: &'a str) -> &'a str {
          if s1.len() > s2.len() {
              s1
          } else {
              s2
          }
      }
  
      let string1 = String::from("long string is long");
      let result;
      {
          let string2 = String::from("xyz");
          result = longest(string1.as_str(), string2.as_str());
      }
      println!("The longest string is '{}'", result); // Output: The longest string is 'long string is long'
  }
  
  // Function to calculate the length of a string using borrowing
  fn calculate_length(s: &String) -> usize {
      s.len()
  }
  
  // Function to change a string using mutable borrowing
  fn change(s: &mut String) {
      s.push_str(", world");
  }
  `
  },
  {
    id: 'data-structures',
    label: 'Data Structures',
    content: `
  // Data Structures in Rust
  
  fn main() {
      // Arrays and Slices
  
      // Arrays are fixed-size, homogeneous collections of elements.
      let arr = [1, 2, 3, 4, 5];
      println!("Array: {:?}", arr); // Output: Array: [1, 2, 3, 4, 5]
  
      // Slices are references to a contiguous sequence of elements in a collection.
      let slice = &arr[1..4]; // A slice of the array from index 1 to 3
      println!("Slice: {:?}", slice); // Output: Slice: [2, 3, 4]
  
      // Tuples
  
      // Tuples can hold multiple values of different types.
      let tup = (500, 6.4, "hello");
      println!("Tuple: {:?}", tup); // Output: Tuple: (500, 6.4, "hello")
  
      // Access tuple elements using dot notation and index.
      let (x, y, z) = tup; // Destructuring the tuple
      println!("x: {}, y: {}, z: {}", x, y, z); // Output: x: 500, y: 6.4, z: hello
  
      // Structs (Named, Tuple, Unit)
  
      // Named Structs
      struct User {
          username: String,
          email: String,
          active: bool,
      }
  
      let user1 = User {
          username: String::from("alice"),
          email: String::from("alice@example.com"),
          active: true,
      };
      println!("User: {}, Email: {}", user1.username, user1.email); // Output: User: alice, Email: alice@example.com
  
      // Tuple Structs
      struct Color(i32, i32, i32);
      let black = Color(0, 0, 0);
      println!("Color: ({}, {}, {})", black.0, black.1, black.2); // Output: Color: (0, 0, 0)
  
      // Unit-like Structs (No fields)
      struct AlwaysEqual;
      let _subject = AlwaysEqual;
  
      // Enums and Pattern Matching
  
      // Enums can define a type by enumerating its possible values.
      enum Message {
          Quit,
          Move { x: i32, y: i32 },
          Write(String),
          ChangeColor(i32, i32, i32),
      }
  
      let msg = Message::Move { x: 10, y: 20 };
  
      // Use pattern matching to handle different enum variants.
      match msg {
          Message::Quit => println!("Quit variant"),
          Message::Move { x, y } => println!("Move to x: {}, y: {}", x, y), // Output: Move to x: 10, y: 20
          Message::Write(text) => println!("Message: {}", text),
          Message::ChangeColor(r, g, b) => println!("Color: ({}, {}, {})", r, g, b),
      }
  
      // Vectors (Vec<T>)
  
      // Vectors are growable, heap-allocated lists.
      let mut vec = vec![1, 2, 3];
      vec.push(4);
      println!("Vector: {:?}", vec); // Output: Vector: [1, 2, 3, 4]
  
      // Access elements using indexing.
      let third = vec[2];
      println!("The third element is {}", third); // Output: The third element is 3
  
      // Iterate over a vector
      for i in &vec {
          println!("Element: {}", i);
      }
  
      // Strings (String and &str)
  
      // String is a growable, heap-allocated data structure.
      let mut s = String::from("Hello");
      s.push_str(", world!");
      println!("String: {}", s); // Output: String: Hello, world!
  
      // &str is a reference to a string slice.
      let slice = &s[0..5];
      println!("Slice: {}", slice); // Output: Slice: Hello
  
      // Common string methods
      let hello = String::from("hello");
      let len = hello.len();
      let upper = hello.to_uppercase();
      let replace = hello.replace("l", "r");
      println!("Length: {}, Uppercase: {}, Replace: {}", len, upper, replace); // Output: Length: 5, Uppercase: HELLO, Replace: herro
  }
  
  // The main function demonstrates various data structures in Rust.
  `
  },
  {
    id: 'enums-pattern-matching',
    label: 'Enums & Pattern Matching',
    content: `
  // Enums and Pattern Matching in Rust
  
  fn main() {
      // Defining Enums
  
      // Enums allow you to define a type by enumerating its possible variants.
      enum IpAddrKind {
          V4,
          V6,
      }
  
      // Enums can also have data associated with each variant.
      enum IpAddr {
          V4(String),
          V6(String),
      }
  
      let home = IpAddr::V4(String::from("127.0.0.1"));
      let loopback = IpAddr::V6(String::from("::1"));
  
      println!("IPv4: {:?}", home); // Output: IPv4: V4("127.0.0.1")
      println!("IPv6: {:?}", loopback); // Output: IPv6: V6("::1")
  
      // Matching on Enums
  
      // Use the \`match\` keyword to handle each variant of an enum.
      enum Message {
          Quit,
          Move { x: i32, y: i32 },
          Write(String),
          ChangeColor(i32, i32, i32),
      }
  
      let msg = Message::Move { x: 10, y: 20 };
  
      match msg {
          Message::Quit => println!("Quit variant"),
          Message::Move { x, y } => println!("Move to x: {}, y: {}", x, y), // Output: Move to x: 10, y: 20
          Message::Write(text) => println!("Message: {}", text),
          Message::ChangeColor(r, g, b) => println!("Change color to: ({}, {}, {})", r, g, b),
      }
  
      // Option and Result Types
  
      // \`Option\` is an enum used to represent a value that can be either \`Some\` or \`None\`.
      let some_number = Some(5);
      let some_string = Some("a string");
      let absent_number: Option<i32> = None;
  
      // Use \`match\` to handle each case of an \`Option\`.
      match some_number {
          Some(value) => println!("Got a value: {}", value), // Output: Got a value: 5
          None => println!("Got nothing"),
      }
  
      // \`Result\` is an enum used to represent either success (\`Ok\`) or failure (\`Err\`).
      use std::fs::File;
      use std::io::{self, Read};
  
      fn read_username_from_file() -> Result<String, io::Error> {
          let f = File::open("hello.txt");
  
          let mut f = match f {
              Ok(file) => file,
              Err(e) => return Err(e),
          };
  
          let mut s = String::new();
          match f.read_to_string(&mut s) {
              Ok(_) => Ok(s),
              Err(e) => Err(e),
          }
      }
  
      // Use \`match\` to handle \`Result\`.
      match read_username_from_file() {
          Ok(username) => println!("Username: {}", username),
          Err(e) => println!("Error reading file: {}", e),
      }
  
      // Pattern Matching with \`match\`, \`if let\`, \`while let\`
  
      // The \`match\` statement is used to handle complex patterns comprehensively.
      let value = Some(3);
      match value {
          Some(3) => println!("Three!"), // Output: Three!
          _ => println!("Not three"),
      }
  
      // \`if let\` simplifies matching when you are only interested in one variant.
      if let Some(3) = value {
          println!("Three with if let!"); // Output: Three with if let!
      } else {
          println!("Not three with if let");
      }
  
      // \`while let\` is used to match patterns in a loop.
      let mut stack = vec![1, 2, 3];
      while let Some(top) = stack.pop() {
          println!("Top of stack: {}", top); // Output: 3, 2, 1 (each on a new line)
      }
  }
  
  // This function demonstrates various aspects of enums and pattern matching in Rust.
  `
  },
  {
    id: 'error-handling',
    label: 'Error Handling',
    content: `
  // Error Handling in Rust
  
  fn main() {
      // Result Type (\`Result<T, E>\`)
  
      // The \`Result\` type is used for returning and propagating errors.
      // It is an enum with two variants: \`Ok(T)\` and \`Err(E)\`.
  
      use std::fs::File;
      use std::io::{self, Read};
  
      fn read_file() -> Result<String, io::Error> {
          let mut file = File::open("example.txt")?;
          let mut contents = String::new();
          file.read_to_string(&mut contents)?;
          Ok(contents)
      }
  
      // Use \`match\` to handle \`Result\`.
      match read_file() {
          Ok(contents) => println!("File contents: {}", contents),
          Err(e) => println!("Error reading file: {}", e),
      }
  
      // Option Type (\`Option<T>\`)
  
      // The \`Option\` type represents an optional value.
      // It is an enum with two variants: \`Some(T)\` and \`None\`.
  
      fn find_substring(haystack: &str, needle: &str) -> Option<usize> {
          haystack.find(needle)
      }
  
      let index = find_substring("hello world", "world");
  
      // Use \`match\` to handle \`Option\`.
      match index {
          Some(i) => println!("Found 'world' at index: {}", i),
          None => println!("'world' not found"),
      }
  
      // Unwrapping and Expecting Values
  
      // Use \`unwrap()\` to get the value inside \`Option\` or \`Result\` or panic if it is \`None\` or \`Err\`.
      // Use \`expect()\` to do the same but with a custom panic message.
  
      let content = read_file().unwrap_or_else(|e| {
          eprintln!("Error reading file: {}", e);
          String::new()
      });
      println!("File contents: {}", content);
  
      let position = find_substring("hello world", "world").expect("Substring not found");
      println!("Found 'world' at index: {}", position);
  
      // The \`?\` Operator
  
      // The \`?\` operator simplifies error handling by returning the error if the value is \`Err\`.
  
      fn read_file_simplified() -> Result<String, io::Error> {
          let mut file = File::open("example.txt")?;
          let mut contents = String::new();
          file.read_to_string(&mut contents)?;
          Ok(contents)
      }
  
      // Custom Error Types and Implementing \`Error\` Trait
  
      use std::fmt;
  
      // Define a custom error type.
      #[derive(Debug)]
      enum CustomError {
          IoError(io::Error),
          InvalidInputError,
      }
  
      // Implement \`fmt::Display\` for the custom error type.
      impl fmt::Display for CustomError {
          fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
              match *self {
                  CustomError::IoError(ref err) => write!(f, "IO Error: {}", err),
                  CustomError::InvalidInputError => write!(f, "Invalid Input Error"),
              }
          }
      }
  
      // Implement \`std::error::Error\` for the custom error type.
      impl std::error::Error for CustomError {
          fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
              match *self {
                  CustomError::IoError(ref err) => Some(err),
                  CustomError::InvalidInputError => None,
              }
          }
      }
  
      // Function that returns \`Result\` with custom error type.
      fn custom_error_function() -> Result<(), CustomError> {
          let file = File::open("example.txt").map_err(CustomError::IoError)?;
          if file.metadata().map_err(CustomError::IoError)?.len() == 0 {
              return Err(CustomError::InvalidInputError);
          }
          Ok(())
      }
  
      match custom_error_function() {
          Ok(_) => println!("Operation succeeded"),
          Err(e) => println!("Operation failed: {}", e),
      }
  }
  `
  },
  {
    id: 'collections',
    label: 'Collections',
    content: `
  // Collections in Rust
  
  fn main() {
      // Vectors (\`Vec<T>\`)
  
      // Vectors are resizable arrays. Use the \`vec!\` macro to create a new vector.
  
      let mut vec: Vec<i32> = vec![1, 2, 3, 4, 5];
      println!("Vector: {:?}", vec);  // Output: Vector: [1, 2, 3, 4, 5]
  
      // Adding elements to the vector.
      vec.push(6);
      println!("After push: {:?}", vec);  // Output: After push: [1, 2, 3, 4, 5, 6]
  
      // Removing elements from the vector.
      vec.pop();
      println!("After pop: {:?}", vec);  // Output: After pop: [1, 2, 3, 4, 5]
  
      // Accessing elements by index.
      let third_element = vec[2];
      println!("Third element: {}", third_element);  // Output: Third element: 3
  
      // Iterating over a vector.
      for x in &vec {
          println!("Vector item: {}", x);
      }
  
      // Hash Maps (\`HashMap<K, V>\`)
  
      // Hash maps store key-value pairs. Use the \`HashMap\` type and \`insert\` method.
  
      use std::collections::HashMap;
  
      let mut scores = HashMap::new();
      scores.insert(String::from("Blue"), 10);
      scores.insert(String::from("Yellow"), 50);
  
      println!("Scores: {:?}", scores);  // Output: Scores: {"Yellow": 50, "Blue": 10}
  
      // Accessing values by key.
      let team_name = String::from("Blue");
      let score = scores.get(&team_name);
      match score {
          Some(&val) => println!("Score of {}: {}", team_name, val),
          None => println!("Team not found"),
      }
  
      // Iterating over a hash map.
      for (key, value) in &scores {
          println!("{}: {}", key, value);
      }
  
      // Updating values in a hash map.
      scores.entry(String::from("Blue")).or_insert(25);
      println!("Updated Scores: {:?}", scores);  // Output: Updated Scores: {"Yellow": 50, "Blue": 10}
  
      // Sets (\`HashSet<T>\`)
  
      // Sets store unique values. Use the \`HashSet\` type and \`insert\` method.
  
      use std::collections::HashSet;
  
      let mut set: HashSet<i32> = HashSet::new();
      set.insert(1);
      set.insert(2);
      set.insert(2);  // Duplicate, will not be added.
      set.insert(3);
  
      println!("Set: {:?}", set);  // Output: Set: {1, 2, 3}
  
      // Checking for membership.
      if set.contains(&2) {
          println!("Set contains 2");
      }
  
      // Removing a value from the set.
      set.remove(&2);
      println!("Set after removal: {:?}", set);  // Output: Set after removal: {1, 3}
  
      // Iterators and Itertools
  
      // Iterators provide a way to process sequences of elements.
  
      let numbers = vec![1, 2, 3, 4, 5];
  
      // Using an iterator to sum elements.
      let sum: i32 = numbers.iter().sum();
      println!("Sum: {}", sum);  // Output: Sum: 15
  
      // Creating an iterator and using various iterator adapters.
      let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();
      println!("Doubled: {:?}", doubled);  // Output: Doubled: [2, 4, 6, 8, 10]
  
      // Using filter to get only even numbers.
      let evens: Vec<i32> = numbers.iter().filter(|&&x| x % 2 == 0).cloned().collect();
      println!("Evens: {:?}", evens);  // Output: Evens: [2, 4]
  
      // Itertools provides extra iterator functionalities.
  
      use itertools::Itertools;
  
      // Chunking iterator elements.
      let chunks: Vec<Vec<_>> = (1..10).chunks(3).into_iter().map(|chunk| chunk.collect()).collect();
      println!("Chunks: {:?}", chunks);  // Output: Chunks: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  
      // Finding unique elements.
      let unique: Vec<i32> = vec![1, 2, 2, 3, 3, 4].into_iter().unique().collect();
      println!("Unique: {:?}", unique);  // Output: Unique: [1, 2, 3, 4]
  }
  `
  },
  {
    id: 'traits_and_generics',
    label: 'Traits & Generics',
    content: `
  // Traits and Generics in Rust
  
  // Traits define shared behavior that can be implemented by different types.
  // Generics allow for types or functions to operate with any data type while ensuring type safety.
  
  fn main() {
      // Defining and Implementing Traits
  
      // Define a trait named \`Summary\` with a single method \`summarize\`.
      trait Summary {
          fn summarize(&self) -> String;
      }
  
      // Implement the \`Summary\` trait for the \`NewsArticle\` struct.
      struct NewsArticle {
          headline: String,
          location: String,
          author: String,
          content: String,
      }
  
      impl Summary for NewsArticle {
          fn summarize(&self) -> String {
              format!("{}, by {} ({})", self.headline, self.author, self.location)
          }
      }
  
      let article = NewsArticle {
          headline: String::from("Breaking News!"),
          location: String::from("New York"),
          author: String::from("John Doe"),
          content: String::from("This is the content of the news article."),
      };
  
      println!("News Article Summary: {}", article.summarize());  // Output: News Article Summary: Breaking News!, by John Doe (New York)
  
      // Default Method Implementations
  
      // A trait can provide a default implementation for methods.
      trait Displayable {
          fn display(&self) -> String {
              String::from("Displaying content.")
          }
      }
  
      struct DisplayItem {
          title: String,
      }
  
      impl Displayable for DisplayItem {
          // Here we use the default implementation of \`display\`.
      }
  
      let item = DisplayItem {
          title: String::from("Item Title"),
      };
  
      println!("Display: {}", item.display());  // Output: Display: Displaying content.
  
      // Using Generics
  
      // Generic functions can operate on any data type.
      fn largest<T: PartialOrd>(list: &[T]) -> &T {
          let mut largest = &list[0];
          for item in list {
              if item > largest {
                  largest = item;
              }
          }
          largest
      }
  
      let number_list = vec![34, 50, 25, 100, 65];
      println!("The largest number is {}", largest(&number_list));  // Output: The largest number is 100
  
      let char_list = vec!['y', 'm', 'a', 'q'];
      println!("The largest char is {}", largest(&char_list));  // Output: The largest char is y
  
      // Trait Bounds and Constraints
  
      // Trait bounds restrict the types that can be used with generics.
      fn print_summary<T: Summary>(item: &T) {
          println!("Summary: {}", item.summarize());
      }
  
      let article2 = NewsArticle {
          headline: String::from("New Development!"),
          location: String::from("San Francisco"),
          author: String::from("Jane Smith"),
          content: String::from("Details about the new development."),
      };
  
      print_summary(&article2);  // Output: Summary: New Development!, by Jane Smith (San Francisco)
  
      // Associated Types
  
      // Traits can define associated types that are specified in the implementation.
      trait Container {
          type Item;
  
          fn contains(&self, item: &Self::Item) -> bool;
      }
  
      struct BoxContainer<T> {
          items: Vec<T>,
      }
  
      impl<T: PartialEq> Container for BoxContainer<T> {
          type Item = T;
  
          fn contains(&self, item: &T) -> bool {
              self.items.contains(item)
          }
      }
  
      let box_container = BoxContainer {
          items: vec![1, 2, 3, 4, 5],
      };
  
      println!("Contains 3: {}", box_container.contains(&3));  // Output: Contains 3: true
      println!("Contains 6: {}", box_container.contains(&6));  // Output: Contains 6: false
  }
  `
  },
  {
    id: 'modules_and_packages',
    label: 'Modules & Packages',
    content: `
  // Modules and Packages in Rust
  
  // Rust uses modules to organize code into smaller, reusable pieces.
  // Packages and crates provide a way to distribute and share code.
  
  // Module Declaration and Organization
  
  // Modules in Rust can be defined in the same file or in separate files.
  // They are used to group related functions, structs, enums, and constants.
  
  // Define a module named \`utilities\` in the same file.
  mod utilities {
      pub fn greet(name: &str) {
          println!("Hello, {}!", name);
      }
  
      // Nested module
      pub mod math {
          pub fn add(a: i32, b: i32) -> i32 {
              a + b
          }
      }
  }
  
  // Importing Modules (\`use\` statement)
  
  // Use the \`greet\` function from the \`utilities\` module.
  fn main() {
      utilities::greet("Rustacean");
  
      // Use the \`add\` function from the nested \`math\` module.
      let sum = utilities::math::add(10, 20);
      println!("Sum: {}", sum);  // Output: Sum: 30
  }
  
  // Alternatively, import specific functions or modules for easier access.
  use utilities::math::add;
  let sum = add(5, 10);
  println!("Sum: {}", sum);  // Output: Sum: 15
  
  // Packages and Crates
  
  // A package is a bundle of one or more crates that provide a set of functionality.
  // A crate is a binary or library that can be compiled by Rust. It is the smallest unit of code distribution in Rust.
  
  // The \`Cargo\` Package Manager
  
  // Cargo is Rust's package manager and build system.
  // It handles dependencies, building, and packaging code.
  
  // To create a new project, use:
  // \$ cargo new my_project
  
  // To build a project, navigate to its directory and use:
  // \$ cargo build
  
  // To run the project, use:
  // \$ cargo run
  
  // To add dependencies, update the \`Cargo.toml\` file and use:
  // \$ cargo build
  
  // Creating and Publishing Crates
  
  // To create a library crate, use:
  // \$ cargo new --lib my_library
  
  // Add code to the \`src/lib.rs\` file.
  
  // To publish the crate, first create an account on https://crates.io/ and obtain an API token.
  
  // In the \`Cargo.toml\` file, add metadata such as the name, version, and description.
  // Ensure that the code compiles and passes tests, then publish the crate using:
  // \$ cargo publish
  
  // Here's an example structure of a \`Cargo.toml\` file for a library crate:
  /*
  [package]
  name = "my_library"
  version = "0.1.0"
  authors = ["Your Name <you@example.com>"]
  edition = "2021"
  
  [dependencies]
  */
  
  // The crate can then be included in other projects by adding it to their \`Cargo.toml\` file:
  /*
  [dependencies]
  my_library = "0.1"
  */
  `
  },
  {
    id: 'standard_library',
    label: 'Standard Library',
    content: `
  // Standard Library in Rust
  
  // Rust's standard library provides essential functionalities for various tasks,
  // including handling common data types, I/O operations, collections, and concurrency.
  
  // Common Types
  
  // \`Option\` and \`Result\` are fundamental types used for handling optional and error-prone values.
  
  // The \`Option<T>\` type represents a value that can be either Some(T) or None.
  fn divide(a: f64, b: f64) -> Option<f64> {
      if b != 0.0 {
          Some(a / b)
      } else {
          None  // Return None if division by zero
      }
  }
  
  if let Some(result) = divide(10.0, 2.0) {
      println!("Result: {}", result);  // Output: Result: 5
  } else {
      println!("Cannot divide by zero");
  }
  
  // The \`Result<T, E>\` type is used for returning and propagating errors.
  fn read_file_content(path: &str) -> Result<String, std::io::Error> {
      std::fs::read_to_string(path)  // Try reading the file and return the content or an error
  }
  
  match read_file_content("example.txt") {
      Ok(content) => println!("File content: {}", content),
      Err(e) => println!("Error reading file: {}", e),
  }
  
  // \`Vec<T>\` is a growable array type, and \`String\` is a growable UTF-8 encoded string.
  let mut numbers = Vec::new();
  numbers.push(1);
  numbers.push(2);
  numbers.push(3);
  println!("Numbers: {:?}", numbers);  // Output: Numbers: [1, 2, 3]
  
  let mut text = String::from("Hello");
  text.push_str(" World");
  println!("Text: {}", text);  // Output: Text: Hello World
  
  // Common Traits
  
  // Traits define shared behavior that types can implement.
  
  // The \`Clone\` trait allows for creating a copy of a value.
  #[derive(Clone)]
  struct Point {
      x: i32,
      y: i32,
  }
  
  let point1 = Point { x: 10, y: 20 };
  let point2 = point1.clone();  // Creates a clone of point1
  println!("Point2: ({}, {})", point2.x, point2.y);  // Output: Point2: (10, 20)
  
  // The \`Copy\` trait allows for bitwise copying of simple types like integers and floats.
  #[derive(Copy, Clone)]
  struct Color(u8, u8, u8);
  
  let red = Color(255, 0, 0);
  let another_red = red;  // Copies the value of red
  println!("Another Red: ({}, {}, {})", another_red.0, another_red.1, another_red.2);  // Output: Another Red: (255, 0, 0)
  
  // The \`Debug\` trait allows for formatting a type using the \`{:?}\` placeholder.
  #[derive(Debug)]
  struct Rectangle {
      width: u32,
      height: u32,
  }
  
  let rect = Rectangle { width: 30, height: 50 };
  println!("Rectangle: {:?}", rect);  // Output: Rectangle: Rectangle { width: 30, height: 50 }
  
  // The \`Default\` trait provides a way to create default values for types.
  #[derive(Default)]
  struct Config {
      host: String,
      port: u16,
  }
  
  let config: Config = Default::default();
  println!("Config: {}:{}", config.host, config.port);  // Output: Config: :0
  
  // I/O Operations
  
  // The \`std::io\` module provides utilities for reading and writing data.
  // The \`std::fs\` module offers functions for interacting with the filesystem.
  
  use std::io::{self, Write};
  
  fn main() -> io::Result<()> {
      let mut input = String::new();
      println!("Enter your name:");
  
      io::stdin().read_line(&mut input)?;
      println!("Hello, {}", input.trim());
  
      let mut file = std::fs::File::create("output.txt")?;
      file.write_all(b"Hello, file!")?;
      
      Ok(())
  }
  
  // Collections
  
  // Rust's standard library includes powerful collection types like \`Vec\`, \`HashMap\`, and \`HashSet\`.
  
  use std::collections::HashMap;
  
  let mut scores = HashMap::new();
  scores.insert("Alice", 50);
  scores.insert("Bob", 75);
  println!("Scores: {:?}", scores);  // Output: Scores: {"Alice": 50, "Bob": 75}
  
  use std::collections::HashSet;
  
  let mut set = HashSet::new();
  set.insert("Rust");
  set.insert("Python");
  println!("Set: {:?}", set);  // Output: Set: {"Rust", "Python"}
  
  // Concurrency
  
  // Rust provides tools for concurrent programming, including threads and synchronization primitives.
  
  use std::thread;
  use std::sync::{Mutex, Arc};
  
  // Create a mutex-protected counter shared across threads
  let counter = Arc::new(Mutex::new(0));
  let mut handles = vec![];
  
  for _ in 0..10 {
      let counter = Arc::clone(&counter);
      let handle = thread::spawn(move || {
          let mut num = counter.lock().unwrap();
          *num += 1;
      });
      handles.push(handle);
  }
  
  for handle in handles {
      handle.join().unwrap();
  }
  
  println!("Counter: {}", *counter.lock().unwrap());  // Output: Counter: 10
  
  // The \`std::thread\` module offers tools for spawning and managing threads.
  // The \`std::sync\` module provides synchronization primitives like \`Mutex\` and \`Arc\` for safe concurrent access to shared data.
  `
  },
  {
    id: 'lifetimes_and_borrowing',
    label: 'Lifetimes & Borrowing',
    content: `
  // Lifetimes and Borrowing in Rust
  
  // Rust uses lifetimes to ensure memory safety without needing a garbage collector.
  // Lifetimes are annotations that tell the Rust compiler how long references are valid.
  
  // Basic Lifetime Annotations
  
  // A function with lifetime parameters
  fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
      if x.len() > y.len() {
          x
      } else {
          y
      }
  }
  
  // Here, 'a is a lifetime parameter that specifies the relationship between the lifetimes of the input references and the output reference.
  
  // Lifetime Elision Rules
  
  // Rust has lifetime elision rules that allow you to omit explicit lifetime annotations in some cases.
  // The compiler infers the lifetimes based on these rules, making the code more readable.
  
  // For example, the following function is equivalent to the longest function above but without explicit lifetime annotations:
  fn shorter(x: &str, y: &str) -> &str {
      if x.len() < y.len() {
          x
      } else {
          y
      }
  }
  
  // Structs with Lifetimes
  
  // Lifetimes can also be applied to structs to tie the lifetime of a reference held by the struct to a specific scope.
  
  struct ImportantExcerpt<'a> {
      part: &'a str,
  }
  
  fn main() {
      let novel = String::from("Call me Ishmael. Some years ago...");
      let first_sentence = novel.split('.').next().expect("Could not find a '.'");
      let excerpt = ImportantExcerpt { part: first_sentence };
  
      println!("Excerpt: {}", excerpt.part);
  }
  
  // The lifetime 'a in the struct definition ensures that the reference in 'part' does not outlive the string it points to.
  
  // Functions with Lifetimes
  
  // Lifetimes can be used in function definitions to ensure that the references returned by a function are valid as long as their inputs.
  
  fn first_word<'a>(s: &'a str) -> &'a str {
      let bytes = s.as_bytes();
  
      for (i, &item) in bytes.iter().enumerate() {
          if item == b' ' {
              return &s[0..i];
          }
      }
  
      &s[..]
  }
  
  // This function takes a string slice and returns a slice of the first word. The lifetime annotation 'a ensures that the slice returned does not outlive the input slice.
  
  // Advanced Lifetime and Borrow Checker Rules
  
  // Rust's borrow checker ensures references do not outlive their owners and enforces rules like:
  // - One mutable reference or any number of immutable references at a time.
  // - References must always be valid.
  
  // Here's a scenario demonstrating mutable and immutable borrowing rules:
  fn mutable_and_immutable() {
      let mut s = String::from("hello");
  
      let r1 = &s;  // immutable reference
      let r2 = &s;  // another immutable reference
      println!("Immutable references: {}, {}", r1, r2);
  
      // r1 and r2 are no longer used after this point, so we can create a mutable reference.
      let r3 = &mut s;
      r3.push_str(", world");
      println!("Mutable reference: {}", r3);
  }
  
  // More advanced usage can include combining lifetimes with generics or implementing complex data structures that adhere to borrowing rules.
  `
  },
  {
    id: 'concurrency_and_parallelism',
    label: 'Concurrency & Parallelism',
    content: `
  // Concurrency and Parallelism in Rust
  
  // Rust provides powerful tools for concurrent and parallel programming, emphasizing safety and efficiency.
  
  // Threads and \`std::thread\`
  
  // Threads allow you to run multiple pieces of code simultaneously.
  
  use std::thread;
  use std::time::Duration;
  
  fn main() {
      let handle = thread::spawn(|| {
          for i in 1..10 {
              println!("Hello from the spawned thread: {}", i);
              thread::sleep(Duration::from_millis(1));
          }
      });
  
      for i in 1..5 {
          println!("Hello from the main thread: {}", i);
          thread::sleep(Duration::from_millis(1));
      }
  
      handle.join().unwrap();
  }
  
  // The \`thread::spawn\` function creates a new thread and runs the closure in parallel.
  // The \`join\` method waits for the thread to finish.
  
  // Message Passing with \`std::sync::mpsc\`
  
  // Rust's message passing system uses channels to allow threads to communicate by sending messages.
  
  use std::sync::mpsc;
  use std::thread;
  
  fn main() {
      let (tx, rx) = mpsc::channel();
  
      thread::spawn(move || {
          let val = String::from("Hello from thread");
          tx.send(val).unwrap();
      });
  
      let received = rx.recv().unwrap();
      println!("Received: {}", received);
  }
  
  // The \`mpsc::channel\` function creates a transmitter (\`tx\`) and a receiver (\`rx\`).
  // The \`tx.send\` method sends data to the channel, and \`rx.recv\` receives it.
  
  // Shared State with \`std::sync::Mutex\` and \`Arc\`
  
  // Rust allows safe sharing of state between threads using \`Mutex\` and \`Arc\`.
  
  use std::sync::{Arc, Mutex};
  use std::thread;
  
  fn main() {
      let counter = Arc::new(Mutex::new(0));
      let mut handles = vec![];
  
      for _ in 0..10 {
          let counter = Arc::clone(&counter);
          let handle = thread::spawn(move || {
              let mut num = counter.lock().unwrap();
              *num += 1;
          });
          handles.push(handle);
      }
  
      for handle in handles {
          handle.join().unwrap();
      }
  
      println!("Result: {}", *counter.lock().unwrap());
  }
  
  // \`Arc\` (Atomic Reference Counting) is used to share ownership of the \`Mutex\` between threads.
  // \`Mutex\` provides mutual exclusion to ensure only one thread accesses the data at a time.
  
  // \`std::sync::RwLock\`
  
  // \`RwLock\` is a more advanced synchronization primitive that allows multiple readers or a single writer.
  
  use std::sync::RwLock;
  use std::thread;
  
  fn main() {
      let lock = RwLock::new(5);
  
      // Multiple readers
      {
          let r1 = lock.read().unwrap();
          let r2 = lock.read().unwrap();
          println!("Readers: {} and {}", *r1, *r2);
      }
  
      // Single writer
      {
          let mut w = lock.write().unwrap();
          *w += 1;
          println!("Writer: {}", *w);
      }
  }
  
  // \`RwLock\` allows multiple threads to read data simultaneously but ensures exclusive access for writing.
  
  // Asynchronous Programming with \`async\` and \`await\`
  
  // Rust's async/await syntax allows writing asynchronous code that looks synchronous.
  
  use std::time::Duration;
  use tokio::time::sleep;
  
  #[tokio::main]
  async fn main() {
      let task1 = async_task(1);
      let task2 = async_task(2);
  
      tokio::join!(task1, task2);
  }
  
  async fn async_task(id: u32) {
      println!("Task {} started", id);
      sleep(Duration::from_secs(2)).await;
      println!("Task {} completed", id);
  }
  
  // The \`async\` keyword before a function or block marks it as asynchronous.
  // \`await\` is used to pause the execution of an async function until the awaited future completes.
  // \`tokio::main\` is an attribute macro that sets up the main function to run in the \`tokio\` runtime.
  
  `
  },
  {
    id: 'macros',
    label: 'Macros',
    content: `
  // Macros in Rust
  
  // Macros in Rust provide powerful metaprogramming capabilities, allowing you to write code that writes code.
  
  // Macro Basics (\`macro_rules!\`)
  
  // The \`macro_rules!\` construct is used to define macros in Rust. Macros allow code to be written once and reused multiple times, often simplifying repetitive tasks.
  
  macro_rules! say_hello {
      () => {
          println!("Hello, world!");
      };
  }
  
  fn main() {
      say_hello!(); // Output: Hello, world!
  }
  
  // The macro \`say_hello!\` is defined using \`macro_rules!\` and can be invoked with \`say_hello!();\`.
  
  // Declarative Macros
  
  // Declarative macros are defined using \`macro_rules!\` and allow pattern matching to transform the input tokens into output tokens.
  
  macro_rules! create_function {
      ($name:ident) => {
          fn $name() {
              println!("You called the function: {:?}", stringify!($name));
          }
      };
  }
  
  create_function!(foo);
  create_function!(bar);
  
  fn main() {
      foo(); // Output: You called the function: "foo"
      bar(); // Output: You called the function: "bar"
  }
  
  // The \`create_function!\` macro takes an identifier and creates a function with that name.
  
  // Procedural Macros
  
  // Procedural macros are more flexible and powerful, allowing complex code transformations. They are defined using functions and can operate on the abstract syntax tree (AST) of the Rust code.
  
  use proc_macro::TokenStream;
  use quote::quote;
  use syn;
  
  #[proc_macro]
  pub fn my_macro(input: TokenStream) -> TokenStream {
      // Parse the input tokens into a syntax tree
      let ast = syn::parse_macro_input!(input as syn::DeriveInput);
  
      // Build the output tokens
      let gen = quote! {
          impl MyTrait for #ast {
              fn my_function() {
                  println!("Hello from a procedural macro!");
              }
          }
      };
  
      gen.into()
  }
  
  // This example shows a basic procedural macro using the \`syn\` and \`quote\` crates to parse and generate Rust code.
  // Note: Procedural macros require setting up a separate crate with \`[lib]\` and \`proc-macro = true\` in \`Cargo.toml\`.
  
  // Derive Macros
  
  // Derive macros are a specific type of procedural macro used to automatically implement traits for types.
  
  use serde::Serialize;
  
  #[derive(Serialize)]
  struct User {
      name: String,
      age: u32,
  }
  
  // The \`#[derive(Serialize)]\` macro automatically implements the \`Serialize\` trait for the \`User\` struct.
  
  // Attribute Macros
  
  // Attribute macros are used to annotate code elements and modify their behavior.
  
  #[route(GET, "/")]
  fn index() {
      // Handler code here
  }
  
  // In this example, the \`#[route(GET, "/")]\` attribute could be used by a framework to generate routing code for the function \`index\`.
  // Attribute macros are implemented as procedural macros.
  
  `
  },
  {
    id: 'async_programming',
    label: 'Asynchronous Programming',
    content: `
  // Asynchronous Programming in Rust
  
  // Rust's asynchronous programming model allows you to write non-blocking code that can handle many tasks concurrently.
  
  // \`async\` and \`await\` Syntax
  
  // The \`async\` keyword is used to declare asynchronous functions or blocks, which return a \`Future\` instead of directly producing a result.
  
  async fn say_hello() {
      println!("Hello, world!");
  }
  
  // The \`await\` keyword is used to wait for the completion of an \`async\` operation. It can only be used inside an \`async\` function or block.
  
  async fn greet() {
      say_hello().await;  // Await the result of the \`say_hello\` future
  }
  
  // Futures and the \`Future\` Trait
  
  // A \`Future\` is an abstraction that represents a value that may not be available yet but will be computed asynchronously.
  // The \`Future\` trait defines a single method, \`poll\`, which drives the future to completion.
  
  use std::future::Future;
  use std::pin::Pin;
  use std::task::{Context, Poll};
  
  struct MyFuture;
  
  impl Future for MyFuture {
      type Output = u32;
  
      fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
          Poll::Ready(42)  // This future immediately returns 42
      }
  }
  
  fn main() {
      let future = MyFuture;
      let result = futures::executor::block_on(future);
      println!("Future result: {}", result);  // Output: Future result: 42
  }
  
  // \`async\` Functions and Blocks
  
  // Asynchronous functions are declared with the \`async fn\` syntax, and their execution returns a \`Future\`.
  // Asynchronous blocks are enclosed in \`async { ... }\` and can be used within synchronous functions.
  
  async fn fetch_data() -> String {
      "Data fetched!".to_string()
  }
  
  fn main() {
      let data_future = fetch_data();  // Calling \`fetch_data\` returns a \`Future\`
      let data = futures::executor::block_on(data_future);
      println!("{}", data);  // Output: Data fetched!
  }
  
  // Asynchronous I/O with \`tokio\` and \`async-std\`
  
  // Libraries like \`tokio\` and \`async-std\` provide runtime support for asynchronous I/O operations.
  
  use tokio::net::TcpStream;
  
  #[tokio::main]
  async fn main() -> Result<(), Box<dyn std::error::Error>> {
      let stream = TcpStream::connect("127.0.0.1:8080").await?;
      println!("Connected to server!");
      Ok(())
  }
  
  // The \`#[tokio::main]\` attribute macro runs the \`main\` function within the \`tokio\` runtime.
  
  use async_std::task;
  
  async fn example() {
      let data = fetch_data().await;
      println!("Async-std: {}", data);
  }
  
  fn main() {
      task::block_on(example());
  }
  
  // \`stream\` and \`async\` Iterators
  
  // The \`Stream\` trait in Rust is similar to \`Iterator\`, but for asynchronous sequences of values.
  
  use futures::stream::{self, StreamExt};
  
  #[tokio::main]
  async fn main() {
      let mut stream = stream::iter(vec![1, 2, 3, 4, 5]);
  
      while let Some(value) = stream.next().await {
          println!("Got: {}", value);
      }
  }
  
  // This code demonstrates how to iterate over an asynchronous stream using \`stream::iter\` and \`StreamExt\`.
  
  `
  },
  {
    id: 'unsafe_rust',
    label: 'Unsafe Rust',
    content: `
  // Unsafe Rust
  
  // Rust's safety guarantees are enforced by its ownership, borrowing, and type system. However, there are scenarios where these checks are too restrictive. In such cases, Rust allows opting into "unsafe" code. 
  
  // Unsafe code gives you more control but also more responsibility. You must ensure the code adheres to Rust's safety guarantees manually.
  
  // When and Why to Use Unsafe
  
  // Use \`unsafe\` in Rust when you need to:
  // - Dereference raw pointers
  // - Call unsafe functions or methods
  // - Access or modify mutable static variables
  // - Implement unsafe traits
  // - Perform certain types of optimizations
  
  // Example: Accessing hardware, interfacing with other languages, or implementing high-performance data structures.
  
  // Raw Pointers
  
  // Raw pointers (\`*const T\` and \`*mut T\`) can point to any memory location and are not subject to Rust's ownership rules.
  
  let mut num = 42;
  let r1 = &num as *const i32;  // Immutable raw pointer
  let r2 = &mut num as *mut i32;  // Mutable raw pointer
  
  // Dereferencing Raw Pointers
  
  // Dereferencing a raw pointer is unsafe and can lead to undefined behavior if not used carefully.
  
  unsafe {
      println!("r1 points to: {}", *r1);  // Dereferencing immutable raw pointer
      println!("r2 points to: {}", *r2);  // Dereferencing mutable raw pointer
  }
  
  // Calling Unsafe Functions
  
  // Functions marked with \`unsafe\` can be called inside \`unsafe\` blocks. These functions may perform operations that are not checked by the Rust compiler.
  
  unsafe fn dangerous() {
      println!("This is a dangerous function.");
  }
  
  unsafe {
      dangerous();  // Calling an unsafe function
  }
  
  // Foreign Function Interface (FFI)
  
  // FFI allows Rust code to call functions from other languages, such as C. To use FFI, declare the foreign functions with \`extern\` blocks.
  
  extern "C" {
      fn abs(input: i32) -> i32;
  }
  
  fn main() {
      unsafe {
          println!("Absolute value of -3: {}", abs(-3));  // Calling a C function from Rust
      }
  }
  
  // FFI is powerful but requires careful handling to ensure memory safety across language boundaries.
  
  `
  },
  {
    id: 'memory_management',
    label: 'Memory Management',
    content: `
  // Memory Management in Rust
  
  // Rust's memory management is unique due to its ownership model, which ensures memory safety without needing a garbage collector.
  
  // Stack vs. Heap Memory
  
  // Stack memory is fast and follows a last-in, first-out (LIFO) approach. It's used for fixed-size variables and function call management.
  // Heap memory is dynamic and used for data that needs to be allocated at runtime. It allows for variable size and lifespan.
  
  fn stack_memory_example() {
      let x = 5;  // x is stored on the stack
      let y = 10;  // y is also stored on the stack
      println!("x = {}, y = {}", x, y);
  }
  
  fn heap_memory_example() {
      let s = Box::new(42);  // s is a Box, which allocates 42 on the heap
      println!("s = {}", s);
  }
  
  // Ownership and Borrowing for Memory Safety
  
  // Rust uses an ownership system to manage memory, ensuring there is a clear owner for each piece of data.
  
  fn ownership_example() {
      let s1 = String::from("hello");  // s1 owns the string
      let s2 = s1;  // s1 is moved to s2; s1 is no longer valid
      // println!("{}", s1);  // This would cause a compile error
      println!("{}", s2);  // s2 owns the string now
  }
  
  // Borrowing allows references to data without taking ownership, ensuring safety by enforcing borrowing rules.
  
  fn borrowing_example() {
      let s = String::from("hello");
      print_string(&s);  // Borrowing s as an immutable reference
      println!("{}", s);  // s is still valid here
  }
  
  fn print_string(s: &String) {
      println!("{}", s);
  }
  
  // Smart Pointers
  
  // Smart pointers provide additional capabilities like automatic memory management and reference counting.
  
  fn smart_pointers_example() {
      let b = Box::new(5);  // Box is a smart pointer that allocates on the heap
      println!("b = {}", b);
  
      let rc = Rc::new(String::from("Rc string"));  // Rc is a reference-counting pointer
      let rc_clone = Rc::clone(&rc);  // Cloning increases the reference count
      println!("rc = {}, rc_clone = {}", rc, rc_clone);
  
      let arc = Arc::new(String::from("Arc string"));  // Arc is an atomic reference-counting pointer for thread-safe sharing
      let arc_clone = Arc::clone(&arc);
      println!("arc = {}, arc_clone = {}", arc, arc_clone);
  
      let ref_cell = RefCell::new(42);  // RefCell provides interior mutability
      *ref_cell.borrow_mut() = 43;  // Borrowing mutably inside RefCell
      println!("ref_cell = {}", ref_cell.borrow());
  }
  
  // Interior Mutability
  
  // Interior mutability allows modifying data even when there are immutable references to it, usually through smart pointers like \`RefCell\` or \`Mutex\`.
  
  fn interior_mutability_example() {
      let x = RefCell::new(5);
      *x.borrow_mut() = 10;  // Changing the value inside RefCell
      println!("x = {}", x.borrow());
  }
  
  // Drop Trait and Resource Management
  
  // The Drop trait allows custom cleanup logic when an object goes out of scope. It's used to manage resources like file handles or network connections.
  
  struct CustomDrop {
      data: String,
  }
  
  impl Drop for CustomDrop {
      fn drop(&mut self) {
          println!("Dropping CustomDrop with data: {}", self.data);
      }
  }
  
  fn drop_example() {
      let c = CustomDrop { data: String::from("Important data") };
      println!("Created CustomDrop.");
      // c is automatically dropped here
  }
  
  // Combining these concepts allows for effective and safe memory management in Rust.
  `
  },
  {
    id: 'advanced_types',
    label: 'Advanced Types',
    content: `
  // Advanced Types in Rust
  
  // Rust's type system includes several advanced features that enable powerful abstractions and type safety mechanisms.
  
  // Associated Types
  
  // Associated types allow you to specify placeholder types in a trait, which concrete types will define when they implement the trait.
  
  trait Container {
      type Item;  // Associated type declaration
      fn contains(&self, item: &Self::Item) -> bool;
  }
  
  struct BoxContainer {
      items: Vec<i32>,
  }
  
  impl Container for BoxContainer {
      type Item = i32;  // Concrete type for associated type
      fn contains(&self, item: &i32) -> bool {
          self.items.contains(item)
      }
  }
  
  fn associated_types_example() {
      let box_container = BoxContainer { items: vec![1, 2, 3] };
      println!("Contains 2? {}", box_container.contains(&2));  // Output: true
  }
  
  // Type Aliases
  
  // Type aliases provide a way to create a new name for an existing type, which can simplify complex type signatures and improve code readability.
  
  type Kilometers = i32;
  type Thunk = Box<dyn Fn() + Send + 'static>;
  
  fn type_aliases_example() {
      let distance: Kilometers = 5;
      println!("Distance in kilometers: {}", distance);  // Output: 5
  
      let expensive_calculation: Thunk = Box::new(|| println!("Thunk execution"));
      expensive_calculation();  // Output: Thunk execution
  }
  
  // Newtype Pattern
  
  // The newtype pattern involves creating a new type that wraps an existing type to provide additional type safety and abstraction.
  
  struct Meters(i32);
  
  impl Meters {
      fn new(value: i32) -> Self {
          Meters(value)
      }
      fn value(&self) -> i32 {
          self.0
      }
  }
  
  fn newtype_pattern_example() {
      let distance = Meters::new(50);
      println!("Distance in meters: {}", distance.value());  // Output: 50
  }
  
  // Phantom Data
  
  // Phantom data is used in Rust to indicate that a type has a generic parameter that is not used directly in its fields but is important for type-checking and generic constraints.
  
  use std::marker::PhantomData;
  
  struct PhantomExample<T> {
      value: i32,
      _marker: PhantomData<T>,  // PhantomData signifies the presence of T without actually using it
  }
  
  impl<T> PhantomExample<T> {
      fn new(value: i32) -> Self {
          PhantomExample { value, _marker: PhantomData }
      }
  }
  
  fn phantom_data_example() {
      let example: PhantomExample<String> = PhantomExample::new(42);
      println!("Phantom example value: {}", example.value);  // Output: 42
  }
  
  // Zero-Sized Types
  
  // Zero-sized types (ZSTs) are types that occupy no memory. They are often used for type-level information or as markers.
  
  struct Marker;
  
  fn zero_sized_types_example() {
      let marker_instance = Marker;
      println!("Marker instance created.");  // Output: Marker instance created.
  }
  
  // Combining these advanced types enables powerful abstractions and ensures type safety in Rust.
  `
  },
  {
    id: 'iterators_and_closures',
    label: 'Iterators & Closures',
    content: `
  // Iterators and Closures in Rust
  
  // Rust provides powerful abstractions for iteration and closures, enabling concise and expressive code.
  
  // Iterator Trait and Implementations
  
  // The \`Iterator\` trait defines how elements can be iterated over. It requires implementing the \`next\` method.
  
  struct Counter {
      count: u32,
  }
  
  impl Counter {
      fn new() -> Counter {
          Counter { count: 0 }
      }
  }
  
  impl Iterator for Counter {
      type Item = u32;
  
      fn next(&mut self) -> Option<Self::Item> {
          if self.count < 5 {
              self.count += 1;
              Some(self.count)
          } else {
              None
          }
      }
  }
  
  fn iterator_example() {
      let mut counter = Counter::new();
      while let Some(n) = counter.next() {
          println!("Counter: {}", n);  // Output: 1, 2, 3, 4, 5
      }
  }
  
  // Consuming and Adapting Iterators
  
  // Iterators can be consumed using methods like \`collect\`, \`sum\`, \`product\`, etc.
  
  fn consuming_iterators_example() {
      let numbers: Vec<i32> = vec![1, 2, 3, 4, 5];
      let sum: i32 = numbers.iter().sum();
      println!("Sum: {}", sum);  // Output: Sum: 15
  }
  
  // Iterators can also be adapted using methods like \`map\`, \`filter\`, \`take\`, \`skip\`.
  
  fn adapting_iterators_example() {
      let numbers: Vec<i32> = vec![1, 2, 3, 4, 5];
      let doubled: Vec<i32> = numbers.iter().map(|&x| x * 2).collect();
      println!("Doubled: {:?}", doubled);  // Output: Doubled: [2, 4, 6, 8, 10]
  }
  
  // Closure Syntax and Use Cases
  
  // Closures in Rust are anonymous functions that can capture variables from their environment.
  
  fn closure_example() {
      let add_one = |x: i32| x + 1;
      println!("5 + 1 = {}", add_one(5));  // Output: 5 + 1 = 6
  
      let numbers: Vec<i32> = vec![1, 2, 3, 4];
      let result: Vec<i32> = numbers.iter().map(|&x| x * 2).collect();
      println!("Doubled: {:?}", result);  // Output: Doubled: [2, 4, 6, 8]
  }
  
  // Capturing Variables in Closures
  
  // Closures can capture variables from their environment by reference (\`&\`), by mutable reference (\`&mut\`), or by value (\`move\`).
  
  fn capture_example() {
      let x = 5;
      let print_x = || println!("x is: {}", x);  // Captures x by reference
      print_x();  // Output: x is: 5
  
      let mut y = 10;
      let mut add_to_y = |n: i32| y += n;  // Captures y by mutable reference
      add_to_y(5);
      println!("y is now: {}", y);  // Output: y is now: 15
  
      let z = String::from("hello");
      let print_z = move || println!("z is: {}", z);  // Captures z by value
      print_z();  // Output: z is: hello
  }
  
  // Returning Closures
  
  // Rust allows you to return closures from functions, though the syntax can be a bit tricky because closures are usually unsized.
  
  fn returns_closure() -> impl Fn(i32) -> i32 {
      |x| x + 1  // A closure that adds 1 to its input
  }
  
  fn returning_closures_example() {
      let add_one = returns_closure();
      println!("10 + 1 = {}", add_one(10));  // Output: 10 + 1 = 11
  }
  
  // Combining iterators and closures can lead to elegant and efficient code.
  `
  },
  {
    id: 'file_io',
    label: 'File I/O',
    content: `
  // File I/O in Rust
  
  // Rust provides comprehensive support for file and directory operations through the \`std::fs\` and related modules.
  
  // Reading and Writing Files
  
  // To read from a file, we use \`std::fs::File\` and \`std::io::Read\` trait.
  
  use std::fs::File;
  use std::io::{self, Read, Write};
  
  fn read_file_example() -> io::Result<()> {
      let mut file = File::open("example.txt")?;  // Open the file
      let mut contents = String::new();
      file.read_to_string(&mut contents)?;  // Read file contents into a string
      println!("File contents: {}", contents);  // Output the contents
      Ok(())
  }
  
  fn write_file_example() -> io::Result<()> {
      let mut file = File::create("example.txt")?;  // Create a new file or overwrite the existing one
      file.write_all(b"Hello, Rust!")?;  // Write a byte string to the file
      println!("File written successfully.");
      Ok(())
  }
  
  // Using Buffers (BufReader, BufWriter)
  
  // Buffers can significantly improve I/O performance by reducing the number of read/write operations.
  
  use std::io::{BufReader, BufWriter};
  
  fn buffered_read_example() -> io::Result<()> {
      let file = File::open("example.txt")?;
      let mut reader = BufReader::new(file);
      let mut contents = String::new();
      reader.read_to_string(&mut contents)?;
      println!("Buffered read contents: {}", contents);  // Output the contents
      Ok(())
  }
  
  fn buffered_write_example() -> io::Result<()> {
      let file = File::create("example.txt")?;
      let mut writer = BufWriter::new(file);
      writer.write_all(b"Hello, Buffered Rust!")?;  // Write to the file using buffer
      println!("Buffered write completed.");
      Ok(())
  }
  
  // Working with Directories (std::fs)
  
  // The \`std::fs\` module provides various functions for working with directories, such as creating, removing, and listing contents.
  
  use std::fs::{self, DirEntry};
  use std::path::Path;
  
  fn create_directory_example() -> io::Result<()> {
      fs::create_dir("example_dir")?;  // Create a new directory
      println!("Directory created.");
      Ok(())
  }
  
  fn list_directory_contents_example() -> io::Result<()> {
      for entry in fs::read_dir("example_dir")? {
          let entry = entry?;
          println!("Found file: {}", entry.path().display());
      }
      Ok(())
  }
  
  fn remove_directory_example() -> io::Result<()> {
      fs::remove_dir("example_dir")?;  // Remove the directory
      println!("Directory removed.");
      Ok(())
  }
  
  // Error Handling in File Operations
  
  // Handling errors is crucial in file I/O operations. Rust's \`Result\` and \`Option\` types are used to manage potential errors.
  
  fn robust_file_handling_example() -> io::Result<()> {
      match File::open("nonexistent_file.txt") {
          Ok(mut file) => {
              let mut contents = String::new();
              file.read_to_string(&mut contents)?;
              println!("File contents: {}", contents);
          }
          Err(e) => {
              println!("Error opening file: {}", e);
          }
      }
      Ok(())
  }
  
  // Using std::path::Path and std::path::PathBuf
  
  // The \`Path\` and \`PathBuf\` types are used to handle and manipulate file and directory paths.
  
  use std::path::{Path, PathBuf};
  
  fn path_handling_example() {
      let path = Path::new("example.txt");
  
      if path.exists() {
          println!("Path exists: {}", path.display());
      } else {
          println!("Path does not exist: {}", path.display());
      }
  
      let new_path: PathBuf = ["example", "dir", "file.txt"].iter().collect();
      println!("Constructed path: {}", new_path.display());
  }
  
  // Summary
  // Rust's file I/O capabilities are powerful and safe, with strong support for error handling and efficient operations through buffering.
  `
  },
  {
    id: 'networking',
    label: 'Networking',
    content: `
  // Networking in Rust
  
  // Rust provides robust support for network programming through the \`std::net\` module and asynchronous libraries like \`tokio\` and \`async-std\`.
  
  // Basic TCP and UDP Communication
  
  // TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are fundamental protocols for network communication.
  // Rust's \`std::net\` module provides types and functions for both TCP and UDP communication.
  
  use std::net::{TcpListener, TcpStream, UdpSocket};
  use std::io::{Read, Write};
  
  // TCP Communication
  fn basic_tcp_communication() -> std::io::Result<()> {
      // Setting up a TCP server
      let listener = TcpListener::bind("127.0.0.1:7878")?;
  
      // Accepting connections
      for stream in listener.incoming() {
          let mut stream = stream?;
          println!("Connection established!");
  
          // Reading data from the stream
          let mut buffer = [0; 512];
          stream.read(&mut buffer)?;
          println!("Received: {:?}", &buffer[..]);
  
          // Writing data to the stream
          stream.write(b"Hello from server!")?;
      }
      Ok(())
  }
  
  // UDP Communication
  fn basic_udp_communication() -> std::io::Result<()> {
      // Creating a UDP socket
      let socket = UdpSocket::bind("127.0.0.1:7878")?;
  
      // Sending data to a remote address
      socket.send_to(b"Hello from client!", "127.0.0.1:7879")?;
  
      // Receiving data from a remote address
      let mut buffer = [0; 512];
      let (amt, src) = socket.recv_from(&mut buffer)?;
      println!("Received {} bytes from {}: {:?}", amt, src, &buffer[..amt]);
  
      Ok(())
  }
  
  // std::net Module
  
  // The \`std::net\` module provides essential types for network communication, including \`TcpStream\`, \`TcpListener\`, and \`UdpSocket\`.
  
  // Creating Clients and Servers
  
  // TCP Client
  fn tcp_client() -> std::io::Result<()> {
      let mut stream = TcpStream::connect("127.0.0.1:7878")?;
      stream.write(b"Hello from client!")?;
      Ok(())
  }
  
  // TCP Server
  fn tcp_server() -> std::io::Result<()> {
      let listener = TcpListener::bind("127.0.0.1:7878")?;
      for stream in listener.incoming() {
          let mut stream = stream?;
          let mut buffer = [0; 512];
          stream.read(&mut buffer)?;
          println!("Received: {:?}", &buffer[..]);
          stream.write(b"Hello from server!")?;
      }
      Ok(())
  }
  
  // Handling Multiple Connections
  
  // To handle multiple connections simultaneously, Rust provides tools for concurrent programming, like threads and async runtimes.
  
  use std::thread;
  
  fn handle_multiple_connections() -> std::io::Result<()> {
      let listener = TcpListener::bind("127.0.0.1:7878")?;
      for stream in listener.incoming() {
          let stream = stream?;
          thread::spawn(|| {
              // Handle connection in a new thread
              let mut buffer = [0; 512];
              stream.read(&mut buffer).unwrap();
              println!("Received: {:?}", &buffer[..]);
          });
      }
      Ok(())
  }
  
  // Asynchronous Networking with tokio or async-std
  
  // Asynchronous networking can be handled using libraries like \`tokio\` or \`async-std\`, which provide a runtime for async code.
  
  #[tokio::main]
  async fn async_tcp_server() -> std::io::Result<()> {
      use tokio::net::TcpListener;
      let listener = TcpListener::bind("127.0.0.1:7878").await?;
      loop {
          let (mut socket, _) = listener.accept().await?;
          tokio::spawn(async move {
              let mut buffer = [0; 1024];
              socket.read(&mut buffer).await.unwrap();
              println!("Received: {:?}", &buffer[..]);
              socket.write_all(b"Hello from async server!").await.unwrap();
          });
      }
  }
  
  // To run the asynchronous examples, include the \`tokio\` or \`async-std\` crates in your \`Cargo.toml\`.
  
  `
  },
  {
    id: 'serialization',
    label: 'Serialization & Deserialization',
    content: `
  // Serialization and Deserialization in Rust
  
  // Rust's Serde library is a powerful framework for serializing and deserializing data in various formats, including JSON and YAML.
  
  // Using Serde for Serialization
  
  // To use Serde, you need to include the \`serde\` and \`serde_derive\` crates, and a specific format crate like \`serde_json\`.
  
  use serde::{Serialize, Deserialize};
  use serde_json::{Result, to_string, from_str};
  
  #[derive(Serialize, Deserialize, Debug)]
  struct Person {
      name: String,
      age: u8,
      email: String,
  }
  
  fn main() -> Result<()> {
      // Creating an instance of the struct
      let person = Person {
          name: String::from("Alice"),
          age: 30,
          email: String::from("alice@example.com"),
      };
  
      // Serializing the struct to a JSON string
      let serialized = to_string(&person)?;
      println!("Serialized: {}", serialized);
  
      // Deserializing the JSON string back to a struct
      let deserialized: Person = from_str(&serialized)?;
      println!("Deserialized: {:?}", deserialized);
  
      Ok(())
  }
  
  // JSON and YAML Support
  
  // Serde supports many formats, including JSON and YAML.
  // To work with YAML, you need to include the \`serde_yaml\` crate.
  
  use serde_yaml;
  
  fn serialize_to_yaml(person: &Person) -> serde_yaml::Result<String> {
      // Serializing the struct to a YAML string
      serde_yaml::to_string(person)
  }
  
  fn deserialize_from_yaml(yaml_str: &str) -> serde_yaml::Result<Person> {
      // Deserializing the YAML string back to a struct
      serde_yaml::from_str(yaml_str)
  }
  
  // Custom Serialization Formats
  
  // Serde allows you to define custom serialization and deserialization formats.
  // You can implement the \`Serialize\` and \`Deserialize\` traits manually for custom behavior.
  
  use serde::{ser::Serializer, de::Deserializer};
  
  #[derive(Debug)]
  struct CustomDate(String);
  
  impl Serialize for CustomDate {
      fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
      where
          S: Serializer,
      {
          serializer.serialize_str(&self.0)
      }
  }
  
  impl<'de> Deserialize<'de> for CustomDate {
      fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
      where
          D: Deserializer<'de>,
      {
          let s = String::deserialize(deserializer)?;
          Ok(CustomDate(s))
      }
  }
  
  // Deserializing to Structs and Enums
  
  // Serde can deserialize data into complex structures, including nested structs and enums.
  
  #[derive(Serialize, Deserialize, Debug)]
  enum Status {
      Active,
      Inactive,
      Suspended,
  }
  
  #[derive(Serialize, Deserialize, Debug)]
  struct User {
      username: String,
      status: Status,
  }
  
  fn deserialize_to_struct() -> Result<()> {
      let json_data = r#"
          {
              "username": "bob",
              "status": "Active"
          }
      "#;
  
      // Deserializing the JSON string to a struct
      let user: User = serde_json::from_str(json_data)?;
      println!("Deserialized User: {:?}", user);
  
      Ok(())
  }
  
  // Error Handling in Serialization
  
  // Serde provides detailed error types for handling serialization and deserialization errors.
  
  fn handle_serialization_errors() -> Result<()> {
      let invalid_json = r#"{ "name": "Alice", "age": "thirty" }"#;
  
      // Attempting to deserialize invalid JSON
      match serde_json::from_str::<Person>(invalid_json) {
          Ok(person) => println!("Deserialized: {:?}", person),
          Err(e) => println!("Error during deserialization: {}", e),
      }
  
      Ok(())
  }
  
  // Add dependencies in your \`Cargo.toml\` file:
  // \`serde = { version = "1.0", features = ["derive"] }\`
  // \`serde_json = "1.0"\`
  // \`serde_yaml = "0.8"\`
  
  `
  },
  {
    id: 'testing',
    label: 'Testing',
    content: `
  // Testing in Rust
  
  // Rust's testing framework is built into the language and managed by the Cargo package manager.
  // Tests are functions annotated with the \`#[test]\` attribute.
  
  // Writing Tests with the #[test] Attribute
  
  // To define a test function, use the \`#[test]\` attribute. The test framework calls these functions during testing.
  
  #[cfg(test)]
  mod tests {
      #[test]
      fn test_addition() {
          let sum = 2 + 2;
          assert_eq!(sum, 4);
      }
  
      // Using assert!, assert_eq!, and assert_ne!
  
      // The \`assert!\` macro checks a boolean condition, and the test fails if the condition is false.
      #[test]
      fn test_boolean_assert() {
          let is_true = true;
          assert!(is_true);
      }
  
      // The \`assert_eq!\` and \`assert_ne!\` macros compare two values for equality and inequality, respectively.
      #[test]
      fn test_equality() {
          let result = 10 - 5;
          assert_eq!(result, 5);
      }
  
      #[test]
      fn test_inequality() {
          let result = 5 * 5;
          assert_ne!(result, 20);  // 25 is not equal to 20
      }
  
      // Test Organization and Modules
  
      // You can organize tests into modules, and they can be placed in the same file or in a separate \`tests\` directory.
      #[cfg(test)]
      mod math_tests {
          #[test]
          fn test_multiplication() {
              let product = 3 * 3;
              assert_eq!(product, 9);
          }
      }
  
      // Test Fixtures and Setup
  
      // You can use the \`#[setup]\` attribute to set up code that runs before each test.
      // Rust doesn't have a built-in setup attribute, but you can define common setup functions to call within your tests.
  
      fn setup() -> u32 {
          // Common setup code, like initializing data
          42
      }
  
      #[test]
      fn test_with_setup() {
          let value = setup();
          assert_eq!(value, 42);
      }
  
      // Running and Managing Tests with Cargo
  
      // Use \`cargo test\` to run all tests in your project. Cargo automatically compiles and runs tests.
      // You can filter which tests to run by specifying a test name or partial name.
  
      // Run all tests
      // $ cargo test
  
      // Run a specific test by name
      // $ cargo test test_addition
  
      // Ignoring Tests
  
      // Use the \`#[ignore]\` attribute to exclude a test from the default test run.
      // You can run ignored tests with \`cargo test -- --ignored\`.
  
      #[test]
      #[ignore]
      fn test_to_be_ignored() {
          // This test will be ignored in the default test run
      }
  
      // Test Output
  
      // Test functions can include print statements, but output is only displayed if the test fails.
      // Use \`cargo test -- --nocapture\` to see all output during testing.
  
      #[test]
      fn test_with_output() {
          println!("This will only be shown if the test fails.");
          assert_eq!(2 * 2, 4);
      }
  
      // Use \`cargo test -- --nocapture\` to capture the output even if tests pass.
      // $ cargo test -- --nocapture
  
      // Add the following dependencies in your \`Cargo.toml\` file if you're using external crates for testing:
      // \`[dev-dependencies]\`
      // \`rand = "0.8"\`  // Example for using the rand crate in tests
  }
  
  `
  },
  {
    id: 'metaprogramming',
    label: 'Metaprogramming',
    content: `
  // Metaprogramming in Rust
  
  // Rust's metaprogramming capabilities include macros and the ability to generate code during compilation.
  // Rust provides different types of macros: declarative macros (macro_rules!), procedural macros, and custom derive macros.
  
  // Procedural Macros
  
  // Procedural macros allow you to define code transformations that are more flexible than declarative macros.
  // They can be used to generate new syntax or alter the structure of code.
  // Procedural macros are defined in separate crates with \`proc-macro\` type and are annotated with \`#[proc_macro]\`.
  
  use proc_macro::TokenStream;
  
  #[proc_macro]
  pub fn my_macro(input: TokenStream) -> TokenStream {
      // Parse the input tokens and generate the output tokens
      input
  }
  
  // Custom Derive Macros
  
  // Custom derive macros are used to generate code for types that derive certain traits.
  // They are annotated with \`#[proc_macro_derive]\` and can add methods or implement traits for types.
  
  #[proc_macro_derive(MyTrait)]
  pub fn my_trait_derive(input: TokenStream) -> TokenStream {
      // Implement the code that adds trait methods to the type
      input
  }
  
  // To use a custom derive macro, you add it to a struct or enum as follows:
  
  #[derive(MyTrait)]
  struct MyStruct {
      field: i32,
  }
  
  // Attribute Macros
  
  // Attribute macros allow you to create custom attributes that can modify or annotate functions, modules, or other items.
  // They are annotated with \`#[proc_macro_attribute]\`.
  
  #[proc_macro_attribute]
  pub fn my_attribute(attr: TokenStream, item: TokenStream) -> TokenStream {
      // Process the attribute and the item, then return the modified item
      item
  }
  
  // You use the attribute macro like this:
  
  #[my_attribute]
  fn my_function() {
      // Function body
  }
  
  // Function-like Macros
  
  // Function-like macros are similar to declarative macros but provide more control over syntax and code generation.
  // They are defined with \`#[proc_macro]\`.
  
  #[proc_macro]
  pub fn my_macro(input: TokenStream) -> TokenStream {
      // Process the input tokens and generate the output tokens
      input
  }
  
  // Using proc_macro for Advanced Metaprogramming
  
  // The \`proc_macro\` crate provides tools for parsing, inspecting, and generating Rust code during compilation.
  // It's used to build procedural macros and other advanced metaprogramming features.
  
  extern crate proc_macro;
  use proc_macro::{TokenStream, TokenTree};
  
  #[proc_macro]
  pub fn advanced_macro(input: TokenStream) -> TokenStream {
      let mut output = TokenStream::new();
  
      // Iterate through the tokens and process them
      for token in input {
          match token {
              TokenTree::Ident(ident) => {
                  // Handle identifiers
                  output.extend(TokenStream::from(TokenTree::Ident(ident)));
              }
              TokenTree::Literal(lit) => {
                  // Handle literals
                  output.extend(TokenStream::from(TokenTree::Literal(lit)));
              }
              _ => {}
          }
      }
  
      output
  }
  
  // Example of using a procedural macro to define a custom derive macro
  // In your main crate, you use the custom macro as follows:
  
  #[derive(AdvancedMacro)]
  struct AnotherStruct {
      value: u32,
  }
  
  // This is a simplified example, and in practice, procedural macros can perform complex transformations and code generation.
  
  `
  },
  {
    id: 'performance-optimization',
    label: 'Performance Optimization',
    content: `
  // Performance Optimization in Rust
  
  // Rust is designed for high performance with safety, and provides several tools and techniques to optimize code.
  // This section covers profiling and benchmarking, zero-cost abstractions, memory management, common performance pitfalls, and efficient use of collections.
  
  // Profiling and Benchmarking Code
  
  // Profiling helps identify which parts of the code are consuming the most resources.
  // Benchmarking measures the performance of specific code segments. Rust has built-in tools and libraries for these purposes.
  
  // Using \`cargo bench\` to run benchmarks
  // Add \`#[bench]\` attribute to functions and use \`test::Bencher\` for benchmarking
  // Add \`criterion\` crate for more advanced benchmarking
  
  extern crate test;
  use test::Bencher;
  
  #[bench]
  fn bench_example(b: &mut Bencher) {
      b.iter(|| (0..1000).fold(0, |acc, x| acc + x))
  }
  
  // With \`criterion\`, you can write more detailed benchmarks:
  
  extern crate criterion;
  use criterion::{black_box, criterion_group, criterion_main, Criterion};
  
  fn criterion_benchmark(c: &mut Criterion) {
      c.bench_function("fib 20", |b| b.iter(|| fib(black_box(20))));
  }
  
  fn fib(n: u64) -> u64 {
      match n {
          0 => 0,
          1 => 1,
          _ => fib(n - 1) + fib(n - 2),
      }
  }
  
  criterion_group!(benches, criterion_benchmark);
  criterion_main!(benches);
  
  // Zero-Cost Abstractions
  
  // Rust's abstractions, such as iterators and traits, are designed to be zero-cost.
  // This means they incur no runtime overhead, achieving the same performance as hand-written code.
  
  let numbers = vec![1, 2, 3, 4, 5];
  let doubled: Vec<_> = numbers.iter().map(|x| x * 2).collect();
  // The iterator chain here is optimized to a loop with no additional cost
  
  // Memory Management Techniques
  
  // Rust's ownership system ensures memory safety without garbage collection, but efficient memory management is still crucial.
  // Techniques include minimizing heap allocations, reusing memory, and understanding ownership transfer.
  
  let mut v = Vec::with_capacity(10);
  for i in 0..10 {
      v.push(i);
  }
  // Pre-allocating capacity for the vector avoids multiple allocations during push
  
  // Using smart pointers like \`Rc\`, \`Arc\`, and \`Box\` effectively
  
  use std::rc::Rc;
  let x = Rc::new(5);
  let y = Rc::clone(&x);
  
  // Avoiding Common Performance Pitfalls
  
  // Common pitfalls include unnecessary cloning, excessive heap allocations, and improper use of collections.
  
  let s1 = "hello".to_string();
  let s2 = s1.clone(); // Avoid cloning unless necessary
  
  // Use references or borrowing instead of cloning or moving data
  
  fn print_len(s: &String) {
      println!("Length: {}", s.len());
  }
  
  let s = String::from("hello");
  print_len(&s); // Borrowing the string instead of cloning
  
  // Using \`std::collections\` Effectively
  
  // Choosing the right collection type can have a significant impact on performance.
  // Use \`Vec\` for ordered sequences, \`HashMap\` for key-value pairs, and \`HashSet\` for unique elements.
  
  use std::collections::HashMap;
  
  let mut scores = HashMap::new();
  scores.insert("Alice", 10);
  scores.insert("Bob", 20);
  
  // For performance-critical paths, consider using collections with more specialized behavior or tuning their parameters.
  
  let mut large_vec = Vec::with_capacity(1000);
  // Pre-allocate space for large vectors to avoid multiple reallocations
  
  // Profiling and Benchmarking Tools
  
  // Profiling and benchmarking tools like \`valgrind\`, \`perf\`, and \`criterion\` can help identify and address performance issues.
  // Use \`cargo bench\` and \`cargo flamegraph\` to benchmark and profile Rust code.
  
  
  // \`flamegraph\` provides a visual representation of where time is being spent in your application
  
  // Example command to generate a flamegraph
  // cargo install flamegraph
  // cargo flamegraph
  
  // Summary
  
  // Rust's performance can be optimized by careful profiling, using zero-cost abstractions, efficient memory management, avoiding common pitfalls, and selecting the right collections.
  // Employ the above techniques and tools to write highly efficient Rust code.
  
  `
  },
  {
    id: 'best-practices-idiomatic-rust',
    label: 'Best Practices & Idiomatic Rust',
    content: `
  // Best Practices and Idiomatic Rust
  
  // Rust encourages a specific style and set of practices that make the code more readable, efficient, and safe.
  // This section covers writing idiomatic Rust code, effective error handling, using \`Result\` and \`Option\` types, following naming conventions, and understanding Rust's ownership model.
  
  // Writing Idiomatic Rust Code
  
  // Idiomatic Rust code leverages the language's features and follows its conventions.
  // Key points include using pattern matching, iterator adapters, and avoiding manual memory management.
  
  let numbers = vec![1, 2, 3, 4, 5];
  let doubled: Vec<_> = numbers.iter().map(|x| x * 2).collect();
  // Use iterators and functional programming style for concise and clear code
  
  let some_value = Some(10);
  if let Some(v) = some_value {
      println!("Found a value: {}", v);
  }
  // Use pattern matching (if let, match) for handling enums like \`Option\` and \`Result\`
  
  // Prefer \`let\` over \`var\`, minimize the use of mutable variables, and scope variables tightly
  
  let mut total = 0;
  for i in 1..=10 {
      total += i;
  }
  // Use \`for\` loops and iterators rather than manual indexing
  
  // Effective Error Handling
  
  // Rust's approach to error handling emphasizes safety and explicit handling of potential failures.
  // Use the \`Result\` and \`Option\` types for handling errors and optional values, respectively.
  
  fn divide(dividend: f64, divisor: f64) -> Result<f64, &'static str> {
      if divisor == 0.0 {
          Err("Cannot divide by zero")
      } else {
          Ok(dividend / divisor)
      }
  }
  
  match divide(10.0, 2.0) {
      Ok(result) => println!("Result: {}", result),
      Err(e) => println!("Error: {}", e),
  }
  
  // Using \`Result\` and \`Option\` Types
  
  // \`Result<T, E>\` and \`Option<T>\` are enums used for error handling and representing optional values.
  // They encourage handling errors explicitly and avoiding crashes.
  
  fn get_user_age(name: &str) -> Option<u32> {
      let user_ages = vec![("Alice", 30), ("Bob", 25)];
      for (user, age) in user_ages {
          if user == name {
              return Some(age);
          }
      }
      None
  }
  
  if let Some(age) = get_user_age("Alice") {
      println!("Alice's age is {}", age);
  } else {
      println!("User not found");
  }
  
  // Using the \`?\` operator simplifies error propagation in functions returning \`Result\`.
  
  fn read_username_from_file() -> Result<String, std::io::Error> {
      use std::fs::File;
      use std::io::Read;
      
      let mut file = File::open("username.txt")?;
      let mut username = String::new();
      file.read_to_string(&mut username)?;
      Ok(username)
  }
  
  // Following Rust Naming Conventions
  
  // Follow Rust's naming conventions for readability and consistency:
  // - Use snake_case for variable, function, and module names
  // - Use PascalCase for type names and traits
  // - Use SCREAMING_SNAKE_CASE for constants and statics
  
  let user_name = "John";  // snake_case for variables
  struct UserProfile {     // PascalCase for structs
      user_id: u32,
      email: String,
  }
  const MAX_USERS: u32 = 1000;  // SCREAMING_SNAKE_CASE for constants
  
  // Understanding and Using Rust’s Ownership Model
  
  // Rust's ownership model is a key feature that enforces memory safety and concurrency without a garbage collector.
  // Understanding ownership, borrowing, and lifetimes is crucial for writing safe and efficient Rust code.
  
  fn main() {
      let s1 = String::from("hello");
      let s2 = s1;  // s1 is moved to s2, s1 is no longer valid
  
      // println!("{}", s1);  // This line would cause a compile error because s1 is no longer valid
  
      let s3 = s2.clone();  // s2 is cloned into s3, both are now valid
      println!("{}", s3);
      
      let len = calculate_length(&s3);  // Borrowing s3 without taking ownership
      println!("The length of '{}' is {}.", s3, len);
  }
  
  fn calculate_length(s: &String) -> usize {  // s is a reference to a String
      s.len()  // returning the length of the string
  }
  
  // Summary
  
  // Writing idiomatic Rust involves embracing its unique features like ownership, pattern matching, and zero-cost abstractions.
  // Follow best practices for error handling, naming conventions, and use of the ownership model to write clear, efficient, and safe Rust code.
  
  `
  },
  {
    id: 'deployment-packaging',
    label: 'Deployment & Packaging',
    content: `
  // Deployment and Packaging
  
  // Deploying Rust applications involves building, distributing, managing dependencies, and ensuring compatibility across platforms. This section covers key aspects of deploying Rust applications.
  
  // Building and Distributing Rust Applications
  
  // Use Cargo, Rust's package manager and build system, to build and package Rust applications.
  
  // To build a release version of your application:
  // cargo build --release
  
  // The executable will be located in target/release/.
  
  // Cross-Compilation
  
  // Rust supports cross-compilation for targeting different platforms.
  
  // To cross-compile for a specific target (e.g., ARM):
  // cargo build --target=arm-unknown-linux-gnueabihf
  
  // Ensure you have the target's toolchain installed (e.g., \`arm-linux-gnueabihf-gcc\`).
  
  // Creating Docker Images for Rust Applications
  
  // Dockerizing Rust applications simplifies deployment and ensures consistency across environments.
  
  // Example Dockerfile for a Rust application:
  // FROM rust:latest as build
  
  // WORKDIR /usr/src/myapp
  // COPY . .
  
  // RUN cargo build --release
  
  // FROM debian:buster-slim
  // COPY --from=build /usr/src/myapp/target/release/myapp /usr/local/bin/myapp
  
  // CMD ["myapp"]
  
  // Managing Dependencies with Cargo
  
  // Use Cargo.toml to specify dependencies and manage crates (libraries) used in your Rust project.
  
  // Example Cargo.toml:
  // [dependencies]
  // serde = "1.0"
  // reqwest = { version = "0.11", features = ["json"] }
  
  // Versioning and Publishing Crates
  
  // Use Cargo to version your crates and publish them to crates.io, Rust's package registry.
  
  // To publish a crate:
  // cargo login
  // cargo publish
  
  // Ensure your Cargo.toml specifies the crate version and other metadata.
  
  // Summary
  
  // Deploying and packaging Rust applications involves using Cargo for building, managing dependencies, and versioning. Cross-compilation and Dockerization ensure compatibility and ease of deployment across different platforms and environments.
  
  `
  }
  
  
  
  
  
  
  
  
];