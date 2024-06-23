export const cCodeBlocks = [
  {
    id: 'basic_syntax_c',
    label: 'Basic Syntax',
    content: `
  // Basic Syntax in C
  
  #include <stdio.h>  // Standard input-output header
  
  int main() {
      // Variable declaration
      int age = 25;
      float height = 5.9;
      char grade = 'A';
  
      // Printing variables using printf
      printf("Age: %d\\n", age);      // %d is the format specifier for integers
      printf("Height: %.1f\\n", height); // %.1f is the format specifier for float with one decimal
      printf("Grade: %c\\n", grade);  // %c is the format specifier for characters
  
      // Taking user input
      int userAge;
      printf("Enter your age: ");
      scanf("%d", &userAge);  // %d is the format specifier for integers, &userAge stores input
      printf("Your age is: %d\\n", userAge);
  
      // Conditional statement
      if (userAge >= 18) {
          printf("You are an adult.\\n");
      } else {
          printf("You are a minor.\\n");
      }
  
      // Loop example (for loop)
      printf("Counting from 1 to 5:\\n");
      for (int i = 1; i <= 5; i++) {
          printf("%d\\n", i);  // Prints numbers from 1 to 5
      }
  
      // Returning from main function
      return 0; // Indicates successful execution
  }
  `
  },
  {
    id: 'comments_c',
    label: 'Comments',
    content: `
  // Comments in C
  
  #include <stdio.h>  // Include the standard input-output library
  
  int main() {
      // This is a single-line comment.
      // It is used to add brief notes or explanations in the code.
      
      /*
       * This is a multi-line comment.
       * Multi-line comments can span across multiple lines.
       * They are typically used for more detailed explanations or block commenting out code.
       */
      
      // Printing a message to the console
      printf("Hello, World!\\n");  // This line prints "Hello, World!" followed by a new line.
  
      /*
       * The following block of code is an example of a multi-line comment
       * that can be used to temporarily disable a section of code.
       *
       * printf("This line is commented out and will not run.\\n");
       */
      
      // End of the main function
      return 0;  // Return 0 to indicate successful program termination
  }
  `
  },
  {
    id: 'variables_data_types_c',
    label: 'Variables & Data Types',
    content: `
  // Variables and Data Types in C
  
  #include <stdio.h>  // Standard library for input-output functions
  
  int main() {
      // Declaring variables of different types
      int integerVar = 10;           // Integer variable
      float floatVar = 3.14f;        // Floating-point variable
      double doubleVar = 3.14159;    // Double precision floating-point variable
      char charVar = 'A';            // Character variable
      long longVar = 123456789L;     // Long integer variable
      short shortVar = 32767;        // Short integer variable
      unsigned int unsignedVar = 42; // Unsigned integer variable
      
      // Printing the values of the variables
      printf("Integer variable: %d\\n", integerVar);         // Output: Integer variable: 10
      printf("Float variable: %.2f\\n", floatVar);           // Output: Float variable: 3.14
      printf("Double variable: %.5lf\\n", doubleVar);        // Output: Double variable: 3.14159
      printf("Character variable: %c\\n", charVar);          // Output: Character variable: A
      printf("Long variable: %ld\\n", longVar);              // Output: Long variable: 123456789
      printf("Short variable: %d\\n", shortVar);             // Output: Short variable: 32767
      printf("Unsigned int variable: %u\\n", unsignedVar);   // Output: Unsigned int variable: 42
      
      // Changing values of the variables
      integerVar = 20;
      floatVar = 6.28f;
      charVar = 'B';
  
      // Printing the updated values
      printf("Updated integer variable: %d\\n", integerVar); // Output: Updated integer variable: 20
      printf("Updated float variable: %.2f\\n", floatVar);   // Output: Updated float variable: 6.28
      printf("Updated character variable: %c\\n", charVar);  // Output: Updated character variable: B
  
      // Derived data types
      int intArray[5] = {1, 2, 3, 4, 5};  // Array of integers
      char str[] = "Hello, World!";       // String (array of characters)
  
      // Printing elements of the array
      printf("Array element at index 0: %d\\n", intArray[0]);  // Output: Array element at index 0: 1
      printf("Array element at index 4: %d\\n", intArray[4]);  // Output: Array element at index 4: 5
  
      // Printing the string
      printf("String: %s\\n", str);                           // Output: String: Hello, World!
  
      return 0;  // Return 0 to indicate successful program termination
  }
  `
  },
  {
    id: 'input_output_c',
    label: 'Input & Output',
    content: `
  // Input & Output in C
  
  #include <stdio.h>  // Standard library for input-output functions
  
  int main() {
      // Declaring variables for input
      int intVar;
      float floatVar;
      char charVar;
      char str[100];  // Array to hold a string
  
      // Using printf to display prompts
      printf("Enter an integer: ");
      // Using scanf to get user input for an integer
      scanf("%d", &intVar); // Read an integer value from the user and store it in intVar
  
      printf("Enter a float: ");
      scanf("%f", &floatVar); // Read a float value from the user and store it in floatVar
  
      printf("Enter a character: ");
      // Space before %c is needed to ignore any previous whitespace
      scanf(" %c", &charVar); // Read a single character value from the user and store it in charVar
  
      printf("Enter a string (no spaces): ");
      scanf("%s", str); // Read a string value (without spaces) from the user and store it in str
  
      // Printing the values entered by the user
      printf("You entered:");
      printf("Integer: %d", intVar);   // Output the integer value
      printf("Float: %.2f", floatVar); // Output the float value with 2 decimal places
      printf("Character: %c", charVar);// Output the character value
      printf("String: %s", str);       // Output the string value
  
      // Additional input method for reading a line of text
      printf("Enter a line of text (with spaces): ");
      getchar(); // Consume the newline character left by the previous input
      fgets(str, sizeof(str), stdin); // Read a line of text, including spaces, into str
  
      // Output the line of text
      printf("You entered: %s", str); // Output the string value (line of text)
  
      return 0;  // Return 0 to indicate successful program termination
  }
  `
  },
  {
    id: 'operators_c',
    label: 'Operators',
    content: `
  // Operators in C
  #include <stdio.h>
  int main() {

      // Arithmetic Operators
      int a = 10, b = 3;
      printf("Arithmetic Operators:\\\\n");
      printf("a + b = %d\\\\n", a + b);  // Addition: 13
      printf("a - b = %d\\\\n", a - b);  // Subtraction: 7
      printf("a * b = %d\\\\n", a * b);  // Multiplication: 30
      printf("a / b = %d\\\\n", a / b);  // Division: 3 (integer division)
      printf("a %% b = %d\\\\n", a % b); // Modulus: 1 (remainder of 10/3)

      // Relational Operators
      printf("\\\\nRelational Operators:\\\\n");
      printf("a == b is %d\\\\n", a == b);  // Equal to: 0 (false)
      printf("a != b is %d\\\\n", a != b);  // Not equal to: 1 (true)
      printf("a > b is %d\\\\n", a > b);    // Greater than: 1 (true)
      printf("a < b is %d\\\\n", a < b);    // Less than: 0 (false)
      printf("a >= b is %d\\\\n", a >= b);  // Greater than or equal to: 1 (true)
      printf("a <= b is %d\\\\n", a <= b);  // Less than or equal to: 0 (false)

      // Logical Operators
      int c = 1, d = 0;
      printf("\\\\nLogical Operators:\\\\n");
      printf("c && d is %d\\\\n", c && d);  // Logical AND: 0 (false)
      printf("c || d is %d\\\\n", c || d);  // Logical OR: 1 (true)
      printf("!c is %d\\\\n", !c);          // Logical NOT: 0 (false)

      // Bitwise Operators
      printf("\\\\nBitwise Operators:\\\\n");
      printf("a & b = %d\\\\n", a & b);  // Bitwise AND: 2
      printf("a | b = %d\\\\n", a | b);  // Bitwise OR: 11
      printf("a ^ b = %d\\\\n", a ^ b);  // Bitwise XOR: 9
      printf("~a = %d\\\\n", ~a);        // Bitwise NOT: -11 (Two's complement representation)
      printf("a << 1 = %d\\\\n", a << 1); // Left shift: 20 (equivalent to a * 2^1)
      printf("a >> 1 = %d\\\\n", a >> 1); // Right shift: 5 (equivalent to a / 2^1)

      // Assignment Operators
      int x = 5;
      printf("\\\\nAssignment Operators:\\\\n");
      x += 2;  // Equivalent to x = x + 2
      printf("x += 2 gives x = %d\\\\n", x);  // x = 7
      x -= 3;  // Equivalent to x = x - 3
      printf("x -= 3 gives x = %d\\\\n", x);  // x = 4
      x *= 2;  // Equivalent to x = x * 2
      printf("x *= 2 gives x = %d\\\\n", x);  // x = 8
      x /= 4;  // Equivalent to x = x / 4
      printf("x /= 4 gives x = %d\\\\n", x);  // x = 2
      x %= 2;  // Equivalent to x = x % 2
      printf("x %%= 2 gives x = %d\\\\n", x); // x = 0

      // Increment and Decrement Operators
      int y = 5;
      printf("\\\\nIncrement and Decrement Operators:\\\\n");
      printf("y = %d\\\\n", y);      // y = 5
      printf("y++ = %d\\\\n", y++);  // Post-increment: prints 5, then y becomes 6
      printf("++y = %d\\\\n", ++y);  // Pre-increment: y becomes 7, then prints 7
      printf("y-- = %d\\\\n", y--);  // Post-decrement: prints 7, then y becomes 6
      printf("--y = %d\\\\n", --y);  // Pre-decrement: y becomes 5, then prints 5

      // Ternary Operator
      int z = (a > b) ? a : b;
      printf("\\\\nTernary Operator:\\\\n");
      printf("The greater value between a and b is: %d\\\\n", z);  // Output: 10
      return 0;  // Indicating successful program execution
      }
    `
  },
  {
    id: 'constants_c',
    label: 'Constants',
    content: `
  // Constants in C
  
  #include <stdio.h>
  
  // Defining constants using #define preprocessor directive
  #define PI 3.14159
  #define MAX_VALUE 100
  
  int main() {
      // Using constants in calculations
      double radius = 5.0;
      double area = PI * radius * radius;
      
      // Printing the calculated area
      printf("Area of a circle with radius %.2f is %.2f\\n", radius, area);  // Output: Area of a circle with radius 5.00 is 78.54
      
      // Trying to modify a constant (compile-time error)
      // PI = 3.14;  // Uncommenting this line will result in a compilation error
      
      // Using constants in conditional statements
      int value = 80;
      if (value > MAX_VALUE) {
          printf("%d is greater than %d\\n", value, MAX_VALUE);
      } else {
          printf("%d is not greater than %d\\n", value, MAX_VALUE);  // Output: 80 is not greater than 100
      }
      
      return 0;
  }
  `
  }
  
  
  
];