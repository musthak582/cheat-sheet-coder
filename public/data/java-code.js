export const javaCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  // Single-line comment
  // This is a single-line comment in Java. It starts with two slashes.
  
   /*
    * Multi-line comment
    * This type of comment spans multiple lines.
    * It starts with a slash and an asterisk and ends with an asterisk and a slash.
    */
  
  /**
   * Documentation comment
   * This is a documentation comment used for generating JavaDocs.
   * It provides descriptions for classes, methods, and fields.
   * @param args The command-line arguments
   */
  public class CommentsExample {
      public static void main(String[] args) {
          // This line prints a message to the console
          System.out.println("Hello, World!"); // Inline comment
      }
  }
  `
  },
  {
    id: 'variables_and_assignment',
    label: 'Variables & Assignment',
    content: `
  // Variables and Assignment in Java
  
  public class VariablesAndAssignment {
      public static void main(String[] args) {
          // Declaring and initializing variables
          int myNumber = 10; // Integer variable
          double myDouble = 5.99; // Double variable
          char myChar = 'A'; // Character variable
          String myString = "Hello, Java!"; // String variable
          boolean myBoolean = true; // Boolean variable
  
          // Reassigning a variable
          myNumber = 20; // Now myNumber is 20
  
          // Printing variable values
          System.out.println("Integer: " + myNumber);
          System.out.println("Double: " + myDouble);
          System.out.println("Character: " + myChar);
          System.out.println("String: " + myString);
          System.out.println("Boolean: " + myBoolean);
      }
  }
  `
  },
  {
    id: 'data_types',
    label: 'Data Types',
    content: `
  // Data Types in Java
  
  public class DataTypesExample {
      public static void main(String[] args) {
          // Primitive data types
          byte myByte = 100;             // 8-bit integer
          int myInt = 100000;            // 32-bit integer
          float myFloat = 5.75f;         // 32-bit floating point
          char myChar = 'A';             // Single 16-bit Unicode character
          boolean myBoolean = true;      // Boolean value (true or false)
  
          // Non-primitive data types (reference types)
          String myString = "Hello, Java!"; // Sequence of characters
          int[] myArray = {1, 2, 3, 4};     // Array of integers
  
          // Printing a few examples
          System.out.println("Byte: " + myByte);
          System.out.println("String: " + myString);
          System.out.println("Boolean: " + myBoolean);
      }
  }
  `
  },
  {
    id: 'basic_operations',
    label: 'Basic Operations',
    content: `
  // Basic Operations in Java
  
  public class BasicOperationsExample {
      public static void main(String[] args) {
          // Arithmetic operations
          int a = 10;
          int b = 5;
          
          int sum = a + b;         // Addition
          int difference = a - b;  // Subtraction
          int product = a * b;     // Multiplication
          int quotient = a / b;    // Division
          int remainder = a % b;   // Modulus
  
          System.out.println("Sum: " + sum);                   // Output: Sum: 15
          System.out.println("Difference: " + difference);     // Output: Difference: 5
          System.out.println("Product: " + product);           // Output: Product: 50
          System.out.println("Quotient: " + quotient);         // Output: Quotient: 2
          System.out.println("Remainder: " + remainder);       // Output: Remainder: 0
  
          // Comparison operations
          System.out.println("a is equal to b: " + (a == b));                    // Output: a is equal to b: false
          System.out.println("a is not equal to b: " + (a != b));                // Output: a is not equal to b: true
          System.out.println("a is greater than b: " + (a > b));                 // Output: a is greater than b: true
          System.out.println("a is less than b: " + (a < b));                    // Output: a is less than b: false
          System.out.println("a is greater than or equal to b: " + (a >= b));    // Output: a is greater than or equal to b: true
          System.out.println("a is less than or equal to b: " + (a <= b));       // Output: a is less than or equal to b: false
  
          // Logical operations
          boolean x = true;
          boolean y = false;
  
          System.out.println("x AND y: " + (x && y)); // Logical AND // Output: x AND y: false
          System.out.println("x OR y: " + (x || y));  // Logical OR  // Output: x OR y: true
          System.out.println("NOT x: " + (!x));       // Logical NOT // Output: NOT x: false
      }
  }
  `
  },
  {
    id: 'keywords_identifiers',
    label: 'Keywords and Identifiers',
    content: `
  // Keywords and Identifiers in Java
  
  public class KeywordsIdentifiersExample {
      public static void main(String[] args) {
          // Keywords in Java
          int number = 10;     // 'int' is a keyword used to declare integer variables
          String name = "John"; // 'String' is a keyword used to declare string variables
  
          // Identifiers in Java
          // Identifiers are names given to variables, methods, classes, and other elements in Java.
          // They must follow certain rules:
          int myNumber = 20;    // 'myNumber' is an identifier for an integer variable
          String firstName = "Alice"; // 'firstName' is an identifier for a string variable
  
          // Invalid identifiers (won't compile)
          // int 123number = 123;  // Cannot start with a digit
          // float my-number = 3.14f; // Cannot use hyphen '-'
          // double my@number = 2.5;  // Cannot use special characters like '@'
  
          // Reserved keywords (cannot be used as identifiers)
          // Example:
          // int class = 5; // 'class' is a reserved keyword and cannot be used as an identifier
  
          // Output
          System.out.println("Number: " + number);      // Output: Number: 10
          System.out.println("Name: " + name);          // Output: Name: John
          System.out.println("My Number: " + myNumber); // Output: My Number: 20
          System.out.println("First Name: " + firstName); // Output: First Name: Alice
      }
  }
  `
  },
  {
    id: 'wrapper_classes',
    label: 'Wrapper Classes',
    content: `
  // Wrapper Classes in Java
  
  // Wrapper classes are used to convert primitive data types into objects
  // Example with Integer wrapper class:
  int primitiveInt = 10;            // Primitive int data type
  Integer wrappedInt = new Integer(primitiveInt); // Integer wrapper class
  
  // Auto-boxing and unboxing (automatic conversion between primitive and wrapper)
  Integer autoBoxedInt = primitiveInt;  // Auto-boxing
  int unboxedInt = wrappedInt;          // Auto-unboxing
  
  // Commonly used wrapper classes: Integer, Double, Boolean, Character, etc.
  // Example with Double and Boolean wrapper classes:
  double primitiveDouble = 3.14;
  Double wrappedDouble = Double.valueOf(primitiveDouble); // Using valueOf method
  
  boolean primitiveBoolean = true;
  Boolean wrappedBoolean = Boolean.valueOf(primitiveBoolean); // Using valueOf method
  
  // Wrapper classes provide useful methods to work with primitive data types
  // Example with parsing methods:
  String numStr = "123";
  int parsedInt = Integer.parseInt(numStr); // Parsing string to int
  
  // Using wrapper classes with collections (since collections cannot store primitives directly)
  ArrayList<Integer> numbersList = new ArrayList<>();
  numbersList.add(1);        // Auto-boxing
  numbersList.add(wrappedInt); // Adding wrapped Integer
  
  // Wrapper classes are immutable (cannot change their value once assigned)
  wrappedInt = 20; // This creates a new Integer object, not modifying the original
  
  // Wrapper classes are useful for null-handling in collections and generics
  Integer nullableInt = null; // Can be assigned null
  
  // Wrapper classes inherit Object class methods and have their own utility methods
  System.out.println("Integer MAX_VALUE: " + Integer.MAX_VALUE);
  System.out.println("Double MIN_VALUE: " + Double.MIN_VALUE);
  `
  },
  {
    id: 'strings_and_string_methods',
    label: 'Strings and String Methods',
    content: `
  // Strings and String Methods in Java
  
  // String creation and basic operations
  String str1 = "Hello"; // String literal
  String str2 = new String("World"); // Using the String constructor
  
  // Concatenation
  String combined = str1 + ", " + str2; // Concatenating strings
  
  // Length of string
  int length = str1.length(); // Length of the string
  
  // Accessing characters
  char firstChar = str1.charAt(0); // Accessing the first character
  
  // Substring
  String substring = str2.substring(0, 3); // Substring from index 0 to 2 (exclusive)
  
  // Comparison
  boolean isEqual = str1.equals(str2); // Comparing strings for equality
  
  // Searching within strings
  boolean containsWorld = combined.contains("World"); // Checking if a string contains a substring
  
  // Case conversion
  String lowercase = str1.toLowerCase(); // Converting to lowercase
  String uppercase = str2.toUpperCase(); // Converting to uppercase
  
  // Splitting strings
  String sentence = "This is a sentence.";
  String[] words = sentence.split("\\s+"); // Splitting based on whitespace
  
  // Formatting strings
  double price = 19.95;
  String formatted = String.format("The price is %.2f dollars.", price); // Formatting numeric values
  
  // StringBuilder for mutable string operations
  StringBuilder builder = new StringBuilder();
  builder.append("Java"); // Appending to StringBuilder
  builder.insert(1, "123"); // Inserting at index
  builder.delete(1, 4); // Deleting characters
  String result = builder.toString(); // Converting StringBuilder to String
  
  // Regular expressions with strings
  String text = "Java is fun!";
  boolean matches = text.matches("Java.*"); // Matching using regular expressions
  
  // Escape sequences and special characters in strings
  String path = "C:\\Users\\Username\\Documents\\File.txt"; // Handling backslashes
  
  // Printing strings
  System.out.println("Combined String: " + combined);
  System.out.println("Substring: " + substring);
  System.out.println("Is Equal? " + isEqual);
  System.out.println("Contains 'World'? " + containsWorld);
  System.out.println("Lowercase: " + lowercase);
  System.out.println("Uppercase: " + uppercase);
  System.out.println("Words: " + Arrays.toString(words));
  System.out.println("Formatted: " + formatted);
  System.out.println("Result: " + result);
  System.out.println("Matches? " + matches);
  System.out.println("Path: " + path);
  `
  },
  {
    id: 'conditional_statements',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in Java
  
  // If statement
  int number = 10;
  if (number > 0) {
      System.out.println("Number is positive");
  }
  
  // If-else statement
  int num = -5;
  if (num > 0) {
      System.out.println("Number is positive");
  } else {
      System.out.println("Number is non-positive");
  }
  
  // If-else-if ladder
  int score = 85;
  if (score >= 90) {
      System.out.println("Grade A");
  } else if (score >= 80) {
      System.out.println("Grade B");
  } else if (score >= 70) {
      System.out.println("Grade C");
  } else if (score >= 60) {
      System.out.println("Grade D");
  } else {
      System.out.println("Grade F");
  }
  
  // Nested if statements
  int x = 10, y = 20, z = 30;
  if (x > y) {
      if (x > z) {
          System.out.println("X is the largest number");
      } else {
          System.out.println("Z is the largest number");
      }
  } else {
      if (y > z) {
          System.out.println("Y is the largest number");
      } else {
          System.out.println("Z is the largest number");
      }
  }
  
  // Ternary operator (conditional operator)
  int a = 10, b = 20;
  String result = (a > b) ? "a is greater" : "b is greater";
  System.out.println(result);
  `
  },
  {
    id: 'loops',
    label: 'Loops',
    content: `
  // Loops in Java
  
  // For loop
  System.out.println("For loop:");
  for (int i = 1; i <= 5; i++) {
      System.out.println("Iteration " + i);
  }
  // Output:
  // For loop:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5
  
  // While loop
  System.out.println("While loop:");
  int j = 1;
  while (j <= 5) {
      System.out.println("Iteration " + j);
      j++;
  }
  // Output:
  // While loop:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5
  
  // Do-while loop
  System.out.println("Do-while loop:");
  int k = 1;
  do {
      System.out.println("Iteration " + k);
      k++;
  } while (k <= 5);
  // Output:
  // Do-while loop:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5
  
  // Enhanced for loop (for-each loop) for arrays
  System.out.println("Enhanced for loop:");
  int[] numbers = {1, 2, 3, 4, 5};
  for (int num : numbers) {
      System.out.println("Number: " + num);
  }
  // Output:
  // Enhanced for loop:
  // Number: 1
  // Number: 2
  // Number: 3
  // Number: 4
  // Number: 5
  
  // Nested loops
  System.out.println("Nested loops:");
  for (int m = 1; m <= 3; m++) {
      for (int n = 1; n <= 2; n++) {
          System.out.println("Outer loop iteration " + m + ", Inner loop iteration " + n);
      }
  }
  // Output:
  // Nested loops:
  // Outer loop iteration 1, Inner loop iteration 1
  // Outer loop iteration 1, Inner loop iteration 2
  // Outer loop iteration 2, Inner loop iteration 1
  // Outer loop iteration 2, Inner loop iteration 2
  // Outer loop iteration 3, Inner loop iteration 1
  // Outer loop iteration 3, Inner loop iteration 2
  `
  },
  {
    id: 'loop_control',
    label: 'Loop Control',
    content: `
  // Loop Control in Java
  
  // Break statement
  System.out.println("Break statement:");
  for (int i = 1; i <= 5; i++) {
      if (i == 3) {
          break;
      }
      System.out.println("Iteration " + i);
  }
  // Output:
  // Break statement:
  // Iteration 1
  // Iteration 2
  
  // Continue statement
  System.out.println("Continue statement:");
  for (int j = 1; j <= 5; j++) {
      if (j == 3) {
          continue;
      }
      System.out.println("Iteration " + j);
  }
  // Output:
  // Continue statement:
  // Iteration 1
  // Iteration 2
  // Iteration 4
  // Iteration 5
  
  // Labelled break statement for nested loops
  System.out.println("Labelled break statement:");
  outerLoop: for (int m = 1; m <= 3; m++) {
      for (int n = 1; n <= 2; n++) {
          if (m == 2 && n == 2) {
              break outerLoop;
          }
          System.out.println("Outer loop iteration " + m + ", Inner loop iteration " + n);
      }
  }
  // Output:
  // Labelled break statement:
  // Outer loop iteration 1, Inner loop iteration 1
  // Outer loop iteration 1, Inner loop iteration 2
  `
  }
  
];