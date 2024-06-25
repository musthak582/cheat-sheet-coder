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
  },
  {
    id: 'conditional_statements_c',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in C
  
  #include <stdio.h>
  
  int main() {
      int num = 25;
  
      // Using if statement
      if (num > 20) {
          printf("Number is greater than 20\\n"); // Output: Number is greater than 20
      }
  
      // Using if-else statement
      if (num % 2 == 0) {
          printf("Number is even\\n");
      } else {
          printf("Number is odd\\n"); // Output: Number is odd
      }
  
      // Using if-else if-else ladder
      if (num < 10) {
          printf("Number is less than 10\\n");
      } else if (num <= 20) {
          printf("Number is between 10 and 20\\n");
      } else {
          printf("Number is greater than 20\\n"); // Output: Number is greater than 20
      }
  
      // Using switch statement
      char grade = 'B';
  
      switch (grade) {
          case 'A':
              printf("Excellent!\\n");
              break;
          case 'B':
              printf("Good Job!\\n"); // Output: Good Job!
              break;
          case 'C':
              printf("Well Done\\n");
              break;
          case 'D':
              printf("You passed\\n");
              break;
          case 'F':
              printf("Better luck next time\\n");
              break;
          default:
              printf("Invalid grade\\n");
      }
  
      return 0;
  }
  `
  },
  {
    id: 'loops_c',
    label: 'Loops',
    content: `
  // Loops in C
  
  #include <stdio.h>
  
  int main() {
      // Using for loop
      printf("For Loop:\\n");
      for (int i = 0; i < 5; i++) {
          printf("i = %d\\n", i); // Output: i = 0, i = 1, i = 2, i = 3, i = 4
      }
  
      // Using while loop
      printf("\\nWhile Loop:\\n");
      int j = 0;
      while (j < 5) {
          printf("j = %d\\n", j); // Output: j = 0, j = 1, j = 2, j = 3, j = 4
          j++;
      }
  
      // Using do-while loop
      printf("\\nDo-While Loop:\\n");
      int k = 0;
      do {
          printf("k = %d\\n", k); // Output: k = 0, k = 1, k = 2, k = 3, k = 4
          k++;
      } while (k < 5);
  
      return 0;
  }
  `
  },
  {
    id: 'loop_control_c',
    label: 'Loop Control',
    content: `
  // Loop Control in C
  
  #include <stdio.h>
  
  int main() {
      // Using break to exit a loop prematurely
      printf("Using break in a loop:\\n");
      for (int i = 0; i < 10; i++) {
          if (i == 5) {
              break;  // Exit the loop when i equals 5
          }
          printf("i = %d\\n", i); // Output: i = 0, i = 1, i = 2, i = 3, i = 4
      }
  
      // Using continue to skip an iteration
      printf("\\nUsing continue in a loop:\\n");
      for (int j = 0; j < 10; j++) {
          if (j % 2 == 0) {
              continue;  // Skip the rest of the loop when j is even
          }
          printf("j = %d\\n", j); // Output: j = 1, j = 3, j = 5, j = 7, j = 9
      }
  
      return 0;
  }
  `
  },
  {
    id: 'functions_c',
    label: 'Functions',
    content: `
  // Functions in C
  
  #include <stdio.h>
  
  // Function prototype (declaration)
  int add(int a, int b);
  void printMessage(void);
  int factorial(int n);
  
  int main() {
      // Calling a function
      int result = add(5, 3);
      printf("Sum: %d\\n", result); // Output: Sum: 8
  
      // Calling a function that takes no parameters and returns no value
      printMessage(); // Output: Hello, C Functions!
  
      // Calling a recursive function
      int fact = factorial(5);
      printf("Factorial of 5: %d\\n", fact); // Output: Factorial of 5: 120
  
      return 0;
  }
  
  // Function definition
  int add(int a, int b) {
      return a + b;
  }
  
  // Function with no parameters and no return value
  void printMessage() {
      printf("Hello, C Functions!\\n");
  }
  
  // Recursive function definition to calculate factorial
  int factorial(int n) {
      if (n == 0) {
          return 1;  // Base case: factorial of 0 is 1
      } else {
          return n * factorial(n - 1);  // Recursive case
      }
  }
  `
  },
  {
    id: 'arrays_and_strings',
    label: 'Arrays & Strings',
    content: `
  // Arrays and Strings in C
  
  #include <stdio.h>
  #include <string.h> // Include string handling functions
  
  // Function to print an array
  void printArray(int arr[], int size) {
      for (int i = 0; i < size; i++) {
          printf("%d ", arr[i]);
      }
      printf("\\n");
  }
  
  // Function to print a 2D array (matrix)
  void print2DArray(int arr[][3], int rows) {
      for (int i = 0; i < rows; i++) {
          for (int j = 0; j < 3; j++) {
              printf("%d ", arr[i][j]);
          }
          printf("\\n");
      }
  }
  
  // Function to print a string
  void printString(const char str[]) {
      printf("%s\\n", str);
  }
  
  int main() {
      // Declaring and initializing arrays
      int numbers[5] = {1, 2, 3, 4, 5}; // 1D array
      int matrix[2][3] = {               // 2D array
          {1, 2, 3},
          {4, 5, 6}
      };
  
      // Accessing and modifying array elements
      printf("Original array: ");
      printArray(numbers, 5); // Output: 1 2 3 4 5
  
      numbers[2] = 10; // Modify element at index 2
      printf("Modified array: ");
      printArray(numbers, 5); // Output: 1 2 10 4 5
  
      // Printing a multi-dimensional array
      printf("2D Array (Matrix):\\n");
      print2DArray(matrix, 2); 
      // Output:
      // 1 2 3
      // 4 5 6
  
      // String handling
      char greeting[20] = "Hello, "; // String initialization
      char name[10] = "World!";
      char fullGreeting[30];
  
      // Concatenating strings
      strcpy(fullGreeting, greeting); // Copy greeting to fullGreeting
      strcat(fullGreeting, name);     // Concatenate name to fullGreeting
      printf("Full Greeting: ");
      printString(fullGreeting); // Output: Hello, World!
  
      // String length
      printf("Length of the greeting: %zu\\n", strlen(fullGreeting)); // Output: 13
  
      // Passing arrays and strings to functions
      printf("Pass array to function: ");
      printArray(numbers, 5); // Output: 1 2 10 4 5
  
      printf("Pass string to function: ");
      printString(fullGreeting); // Output: Hello, World!
  
      return 0;
  }
  `
  },
  {
    id: 'memory_management',
    label: 'Memory Management',
    content: `
  // Memory Management in C
  
  #include <stdio.h>
  #include <stdlib.h> // Required for malloc, calloc, realloc, and free
  
  int main() {
      // Dynamic Memory Allocation using malloc
      int *array = (int*)malloc(5 * sizeof(int)); // Allocate memory for 5 integers
      if (array == NULL) {
          printf("Memory allocation failed\\n");
          return 1; // Exit the program if allocation fails
      }
  
      // Initializing allocated memory and displaying it
      for (int i = 0; i < 5; i++) {
          array[i] = i * 2; // Initialize with some values
          printf("Array[%d] = %d\\n", i, array[i]); // Output: 0, 2, 4, 6, 8
      }
  
      // Dynamic Memory Allocation using calloc
      int *c_array = (int*)calloc(5, sizeof(int)); // Allocate and initialize memory for 5 integers
      if (c_array == NULL) {
          printf("Memory allocation failed\\n");
          free(array); // Free previously allocated memory
          return 1; // Exit the program if allocation fails
      }
  
      // Displaying the zero-initialized memory
      for (int i = 0; i < 5; i++) {
          printf("C_Array[%d] = %d\\n", i, c_array[i]); // Output: 0, 0, 0, 0, 0
      }
  
      // Reallocating Memory using realloc
      array = (int*)realloc(array, 10 * sizeof(int)); // Resize the array to hold 10 integers
      if (array == NULL) {
          printf("Memory reallocation failed\\n");
          free(c_array); // Free previously allocated memory
          return 1; // Exit the program if reallocation fails
      }
  
      // Initializing the new elements
      for (int i = 5; i < 10; i++) {
          array[i] = i * 2;
          printf("Reallocated Array[%d] = %d\\n", i, array[i]); // Output: 10, 12, 14, 16, 18
      }
  
      // Freeing Allocated Memory
      free(array); // Free the memory allocated for the array
      free(c_array); // Free the memory allocated by calloc
  
      // Demonstrating potential memory leak
      int *leaky_array = (int*)malloc(100 * sizeof(int));
      // Forgetting to call free(leaky_array); causes a memory leak
  
      return 0;
  }
  `
  },
  {
    id: 'structures_and_unions',
    label: 'Structures & Unions',
    content: `
  // Structures and Unions in C
  
  #include <stdio.h>
  #include <string.h> // Required for string manipulation functions
  
  // Define a structure to represent a person
  struct Person {
      char name[50];
      int age;
      float height;
  };
  
  // Define a nested structure for addresses
  struct Address {
      char street[50];
      char city[50];
      int pincode;
  };
  
  // Define a structure with nested structures
  struct Employee {
      char empId[10];
      struct Person info;
      struct Address addr;
  };
  
  // Declare and initialize an array of structures
  struct Employee employees[3] = {
      {"E001", {"John Doe", 30, 6.0}, {"123 Street", "New York", 10001}},
      {"E002", {"Jane Smith", 25, 5.5}, {"456 Avenue", "Los Angeles", 90001}},
      {"E003", {"Tom Allen", 35, 5.8}, {"789 Road", "Chicago", 60001}}
  };
  
  // Define a union for various data types
  union Data {
      int i;
      float f;
      char str[20];
  };
  
  // Define a structure with a union
  struct MixedData {
      int dataType; // 0 for int, 1 for float, 2 for string
      union Data data;
  };
  
  int main() {
      // Accessing and displaying values from the array of structures
      for (int i = 0; i < 3; i++) {
          printf("Employee ID: %s\\n", employees[i].empId);
          printf("Name: %s\\n", employees[i].info.name);
          printf("Age: %d\\n", employees[i].info.age);
          printf("Height: %.1f\\n", employees[i].info.height);
          printf("Address: %s, %s - %d\\n\\n", employees[i].addr.street, employees[i].addr.city, employees[i].addr.pincode);
      }
  
      // Example of using pointers with structures
      struct Employee *empPtr = &employees[0];
      printf("First employee ID using pointer: %s\\n", empPtr->empId);
  
      // Define and use a union
      union Data data;
      data.i = 10;
      printf("Union Data: %d\\n", data.i);
      data.f = 25.5;
      printf("Union Data: %.1f\\n", data.f);
      strcpy(data.str, "Hello");
      printf("Union Data: %s\\n", data.str);
  
      // Define and use a structure with a union
      struct MixedData mixedData;
      mixedData.dataType = 0;
      mixedData.data.i = 100;
      printf("Mixed Data: %d\\n", mixedData.data.i);
      mixedData.dataType = 1;
      mixedData.data.f = 123.45;
      printf("Mixed Data: %.2f\\n", mixedData.data.f);
      mixedData.dataType = 2;
      strcpy(mixedData.data.str, "Greetings");
      printf("Mixed Data: %s\\n", mixedData.data.str);
  
      return 0;
  }
  `
  },
  {
    id: 'enumerations',
    label: 'Enumerations',
    content: `
  // Enumerations in C
  
  #include <stdio.h>
  
  // Define an enumeration for days of the week
  enum Days {
      Sunday,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday
  };
  
  int main() {
      // Declare variables of type enum Days
      enum Days today, tomorrow;
  
      today = Wednesday;
      tomorrow = Thursday;
  
      // Print the values of enum variables
      printf("Today is: ");
      switch (today) {
          case Sunday:
              printf("Sunday\\n");
              break;
          case Monday:
              printf("Monday\\n");
              break;
          case Tuesday:
              printf("Tuesday\\n");
              break;
          case Wednesday:
              printf("Wednesday\\n");
              break;
          case Thursday:
              printf("Thursday\\n");
              break;
          case Friday:
              printf("Friday\\n");
              break;
          case Saturday:
              printf("Saturday\\n");
              break;
          default:
              printf("Unknown\\n");
              break;
      }
  
      printf("Tomorrow is: ");
      switch (tomorrow) {
          case Sunday:
              printf("Sunday\\n");
              break;
          case Monday:
              printf("Monday\\n");
              break;
          case Tuesday:
              printf("Tuesday\\n");
              break;
          case Wednesday:
              printf("Wednesday\\n");
              break;
          case Thursday:
              printf("Thursday\\n");
              break;
          case Friday:
              printf("Friday\\n");
              break;
          case Saturday:
              printf("Saturday\\n");
              break;
          default:
              printf("Unknown\\n");
              break;
      }
  
      return 0;
  }
  `
  },
  {
    id: 'file_handling',
    label: 'File Handling',
    content: `
  // File Handling in C
  
  #include <stdio.h>
  #include <stdlib.h>
  
  int main() {
      // File pointer and file handling variables
      FILE *fp;
      char filename[] = "example.txt";
      char buffer[100];
  
      // Opening a file for writing
      fp = fopen(filename, "w");
      if (fp == NULL) {
          perror("Error opening file");
          return EXIT_FAILURE;
      }
  
      // Writing to a file using fprintf
      fprintf(fp, "This is a text file.\\n");
      fprintf(fp, "File handling in C is fun!\\n");
  
      // Closing the file
      fclose(fp);
  
      // Opening a file for reading
      fp = fopen(filename, "r");
      if (fp == NULL) {
          perror("Error opening file");
          return EXIT_FAILURE;
      }
  
      // Reading from a file using fgets
      printf("Contents of %s:\\n", filename);
      while (fgets(buffer, sizeof(buffer), fp) != NULL) {
          printf("%s", buffer);
      }
  
      // Closing the file
      fclose(fp);
  
      return 0;
  }
  `
  },
  {
    id: 'preprocessor_directives',
    label: 'Preprocessor Directives',
    content: `
  // Preprocessor Directives in C
  
  #include <stdio.h>
  #include <stdlib.h>
  
  // Macro definition
  #define PI 3.14159
  #define SQUARE(x) ((x) * (x))
  
  // Conditional compilation
  #ifdef DEBUG
  #define DEBUG_MESSAGE "Debugging mode is enabled."
  #else
  #define DEBUG_MESSAGE "Debugging mode is disabled."
  #endif
  
  int main() {
      int radius = 5;
      double area;
  
      // Using predefined macro __FILE__ and __LINE__
      printf("File: %s\\n", __FILE__);
      printf("Line: %d\\n", __LINE__);
  
      // Using macros
      area = PI * SQUARE(radius);
      printf("Area of a circle with radius %d: %.2f\\n", radius, area);
  
      // Conditional compilation example
  #ifdef DEBUG
      printf("Debugging information: %s\\n", DEBUG_MESSAGE);
  #endif
  
      return 0;
  }
  `
  },
  {
    id: 'bitwise_operations',
    label: 'Bitwise Operations',
    content: `
  // Bitwise Operations in C
  
  #include <stdio.h>
  
  // Function to print binary representation of a number
  void printBinary(int num) {
      for (int i = sizeof(int) * 8 - 1; i >= 0; i--) {
          printf("%d", (num >> i) & 1);
          if (i % 4 == 0) printf(" ");  // Adding space for readability
      }
      printf("\\n");
  }
  
  int main() {
      int a = 29; // Binary: 0001 1101
      int b = 15; // Binary: 0000 1111
  
      // Bitwise AND
      int andResult = a & b; // 0000 1101
      printf("a & b = %d (Binary: ", andResult);
      printBinary(andResult);
  
      // Bitwise OR
      int orResult = a | b;  // 0001 1111
      printf("a | b = %d (Binary: ", orResult);
      printBinary(orResult);
  
      // Bitwise XOR
      int xorResult = a ^ b; // 0001 0010
      printf("a ^ b = %d (Binary: ", xorResult);
      printBinary(xorResult);
  
      // Bitwise NOT
      int notResult = ~a;    // 1110 0010 (two's complement representation)
      printf("~a = %d (Binary: ", notResult);
      printBinary(notResult);
  
      // Bitwise left shift
      int leftShiftResult = a << 2; // 0111 0100
      printf("a << 2 = %d (Binary: ", leftShiftResult);
      printBinary(leftShiftResult);
  
      // Bitwise right shift
      int rightShiftResult = a >> 2; // 0000 0111
      printf("a >> 2 = %d (Binary: ", rightShiftResult);
      printBinary(rightShiftResult);
  
      // Bit Masks and Bit Manipulation
      int mask = 0x4; // Binary: 0000 0100 (mask for the 3rd bit)
      printf("Mask (0x4): ");
      printBinary(mask);
  
      // Setting a bit (set the 3rd bit of 'a')
      int setBit = a | mask; // 0001 1101 | 0000 0100 = 0001 1101 (no change since the 3rd bit is already 1)
      printf("Setting the 3rd bit of a: ");
      printBinary(setBit);
  
      // Clearing a bit (clear the 4th bit of 'a')
      int clearBit = a & ~mask; // 0001 1101 & 1111 1011 = 0001 1001
      printf("Clearing the 3rd bit of a: ");
      printBinary(clearBit);
  
      // Toggling a bit (toggle the 3rd bit of 'a')
      int toggleBit = a ^ mask; // 0001 1101 ^ 0000 0100 = 0001 1001
      printf("Toggling the 3rd bit of a: ");
      printBinary(toggleBit);
  
      return 0;
  }
  `
  },
  {
    id: 'error_handling',
    label: 'Error Handling',
    content: `
  // Error Handling in C
  
  #include <stdio.h>
  #include <errno.h>
  #include <string.h>
  
  // Function that demonstrates error handling with error codes
  int divide(int dividend, int divisor) {
      if (divisor == 0) {
          // Return an error code for division by zero
          return -1;
      }
      return dividend / divisor;
  }
  
  int main() {
      // Example 1: Using Error Codes and Return Values
      int result = divide(10, 0);
      if (result == -1) {
          printf("Error: Division by zero is not allowed.\\n");
      } else {
          printf("Result: %d\\n", result);
      }
      
      // Example 2: Using errno and Error Macros
      FILE *file = fopen("nonexistent_file.txt", "r");
      if (file == NULL) {
          // Set errno and print the corresponding error message
          perror("Error opening file"); // Output: Error opening file: No such file or directory
          // Alternatively, use strerror to get the error description
          printf("Error description: %s\\n", strerror(errno)); // Output: Error description: No such file or directory
      }
  
      // Example 3: Custom Error Handling with errno
      errno = 0; // Reset errno before calling a function that might set it
      int number = 42;
      char buffer[5];
      snprintf(buffer, sizeof(buffer), "%d", number); // Convert number to string
      if (errno != 0) {
          // Check if an error occurred during snprintf
          printf("snprintf error: %s\\n", strerror(errno));
      } else {
          printf("snprintf succeeded: %s\\n", buffer); // Output: snprintf succeeded: 42
      }
  
      return 0;
  }
  `
  },
  {
    id: 'standard_library_functions',
    label: 'Standard Library Functions',
    content: `
  // Standard Library Functions in C
  
  #include <stdio.h>  // For standard I/O functions
  #include <string.h> // For string handling functions
  #include <stdlib.h> // For memory management functions
  #include <math.h>   // For mathematical functions
  
  int main() {
      // Standard I/O Library Functions
      printf("Standard I/O Functions:\\n");
      FILE *file = fopen("example.txt", "w"); // Open file for writing
      if (file != NULL) {
          fprintf(file, "Hello, World!\\n");  // Write to file
          fclose(file);                      // Close file
      }
      char name[50];
      printf("Enter your name: ");
      scanf("%49s", name);                   // Read user input
      printf("Hello, %s!\\n", name);
  
      // String Handling Functions
      printf("\\nString Handling Functions:\\n");
      char str1[20] = "Hello";
      char str2[20] = "World";
      strcat(str1, " ");                     // Concatenate space
      strcat(str1, str2);                    // Concatenate str2 to str1
      printf("Concatenated string: %s\\n", str1); // Output: Hello World
      printf("Length of string: %lu\\n", strlen(str1)); // Output: 11
  
      char str3[20];
      strcpy(str3, str1);                    // Copy str1 to str3
      printf("Copied string: %s\\n", str3);  // Output: Hello World
  
      // Memory Management Functions
      printf("\\nMemory Management Functions:\\n");
      int *numbers = (int *)malloc(5 * sizeof(int)); // Allocate memory for 5 integers
      if (numbers != NULL) {
          for (int i = 0; i < 5; i++) {
              numbers[i] = i * i;                   // Initialize array
          }
          for (int i = 0; i < 5; i++) {
              printf("Number[%d] = %d\\n", i, numbers[i]);
          }
          free(numbers); // Free allocated memory
      } else {
          printf("Memory allocation failed\\n");
      }
  
      // Mathematical Functions
      printf("\\nMathematical Functions:\\n");
      double num = 25.0;
      printf("Square root of %.2f is %.2f\\n", num, sqrt(num));  // Output: Square root of 25.00 is 5.00
      printf("Cosine of %.2f is %.2f\\n", num, cos(num));        // Output: Cosine of 25.00 is 0.96
      printf("Sine of %.2f is %.2f\\n", num, sin(num));          // Output: Sine of 25.00 is -0.42
  
      return 0;
  }
  `
  }
  
  
  
  
  
  
];