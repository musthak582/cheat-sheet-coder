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
  
  
  
  
  
  
];