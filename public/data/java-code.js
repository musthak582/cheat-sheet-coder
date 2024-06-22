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
    label: 'Keywords & Identifiers',
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
    label: 'Strings & String Methods',
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
    id: 'arrays',
    label: 'Arrays & Array Methods',
    content: `
      // Arrays and Array Methods in Java
  
      import java.util.Arrays;
  
      public class ArrayExample {
          public static void main(String[] args) {
              // Single-dimensional array
              int[] numbers = {1, 2, 3, 4, 5};
              
              // Multi-dimensional array
              int[][] matrix = {
                  {1, 2, 3},
                  {4, 5, 6},
                  {7, 8, 9}
              };
  
              // Accessing elements
              System.out.println("First element: " + numbers[0]); // Output: 1
  
              // Modifying an element
              numbers[1] = 10;
              System.out.println("Modified array: " + Arrays.toString(numbers)); // Output: [1, 10, 3, 4, 5]
  
              // Length of the array
              System.out.println("Length of the array: " + numbers.length); // Output: 5
  
              // Sorting an array
              Arrays.sort(numbers);
              System.out.println("Sorted array: " + Arrays.toString(numbers)); // Output: [1, 3, 4, 5, 10]
  
              // Iterating over an array
              for (int num : numbers) {
                  System.out.println("Array element: " + num);
              }
  
              // Output:
              // First element: 1
              // Modified array: [1, 10, 3, 4, 5]
              // Length of the array: 5
              // Sorted array: [1, 3, 4, 5, 10]
              // Array element: 1
              // Array element: 3
              // Array element: 4
              // Array element: 5
              // Array element: 10
          }
      }
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
  },
  {
    id: 'defining_methods',
    label: 'Defining Methods',
    content: `
  // Defining Methods in Java
  
  public class MethodsExample {
  
      // A simple method with no parameters and no return value
      public void greet() {
          System.out.println("Hello, welcome!");
      }
  
      // A method with parameters
      public void greetUser(String name) {
          System.out.println("Hello, " + name + "!");
      }
  
      // A method with a return value
      public int add(int a, int b) {
          return a + b;
      }
  
      public static void main(String[] args) {
          MethodsExample example = new MethodsExample();
  
          // Calling methods
          example.greet();  // Output: Hello, welcome!
          example.greetUser("Alice");  // Output: Hello, Alice!
          int sum = example.add(5, 3);
          System.out.println("Sum: " + sum);  // Output: Sum: 8
      }
  }
  `
  },
  {
    id: 'parameters_and_return_values',
    label: 'Parameters & Return Values',
    content: `
  // Parameters and Return Values in Java
  
  public class ParametersExample {
  
      // Method with parameters and return value
      public int multiply(int x, int y) {
          return x * y;
      }
  
      // Method with no return value (void)
      public void printMessage(String message) {
          System.out.println(message);
      }
  
      public static void main(String[] args) {
          ParametersExample example = new ParametersExample();
  
          // Using method with return value
          int result = example.multiply(4, 5);
          System.out.println("Multiplication Result: " + result);  // Output: Multiplication Result: 20
  
          // Using method with no return value
          example.printMessage("Hello, Java!");  // Output: Hello, Java!
      }
  }
  `
  },
  {
    id: 'method_overloading',
    label: 'Method Overloading',
    content: `
  // Method Overloading in Java
  
  public class OverloadingExample {
  
      // Method with no parameters
      public void display() {
          System.out.println("No parameters");
      }
  
      // Overloaded method with one integer parameter
      public void display(int a) {
          System.out.println("Integer parameter: " + a);
      }
  
      // Overloaded method with two integer parameters
      public void display(int a, int b) {
          System.out.println("Two integers: " + a + " and " + b);
      }
  
      // Overloaded method with one string parameter
      public void display(String str) {
          System.out.println("String parameter: " + str);
      }
  
      public static void main(String[] args) {
          OverloadingExample example = new OverloadingExample();
  
          // Calling different overloaded methods
          example.display();  // Output: No parameters
          example.display(10);  // Output: Integer parameter: 10
          example.display(20, 30);  // Output: Two integers: 20 and 30
          example.display("Java");  // Output: String parameter: Java
      }
  }
  `
  },
  {
    id: 'method_overriding',
    label: 'Method Overriding',
    content: `
      // Method Overriding in Java
  
      // Base class
      class Animal {
          // Method to be overridden
          public void makeSound() {
              System.out.println("Animal makes a sound");
          }
      }
  
      // Derived class
      class Dog extends Animal {
          // Overriding the makeSound method
          @Override
          public void makeSound() {
              System.out.println("Dog barks");
          }
      }
  
      // Derived class
      class Cat extends Animal {
          // Overriding the makeSound method
          @Override
          public void makeSound() {
              System.out.println("Cat meows");
          }
      }
  
      public class MethodOverridingExample {
          public static void main(String[] args) {
              Animal genericAnimal = new Animal();
              Dog dog = new Dog();
              Cat cat = new Cat();
  
              // Call the makeSound method on each object
              genericAnimal.makeSound();  // Output: Animal makes a sound
              dog.makeSound();  // Output: Dog barks
              cat.makeSound();  // Output: Cat meows
  
              // Demonstrating polymorphism
              Animal animalDog = new Dog();
              Animal animalCat = new Cat();
  
              animalDog.makeSound();  // Output: Dog barks
              animalCat.makeSound();  // Output: Cat meows
          }
      }
    `
  },
  {
    id: 'static_methods',
    label: 'Static Methods',
    content: `
  // Static Methods in Java
  
  public class StaticExample {
  
      // Static method
      public static void printStaticMessage() {
          System.out.println("This is a static method.");
      }
  
      // Non-static method
      public void printNonStaticMessage() {
          System.out.println("This is a non-static method.");
      }
  
      public static void main(String[] args) {
          // Calling static method directly using the class name
          StaticExample.printStaticMessage();  // Output: This is a static method.
  
          // Calling non-static method requires creating an instance of the class
          StaticExample example = new StaticExample();
          example.printNonStaticMessage();  // Output: This is a non-static method.
      }
  }
  `
  },
  {
    id: 'recursion',
    label: 'Recursion',
    content: `
  // Recursion in Java
  
  public class RecursionExample {
  
      // Recursive method to calculate factorial
      public int factorial(int n) {
          if (n == 0) {
              return 1;  // Base case: factorial of 0 is 1
          } else {
              return n * factorial(n - 1);  // Recursive case
          }
      }
  
      public static void main(String[] args) {
          RecursionExample example = new RecursionExample();
  
          int number = 5;
          int result = example.factorial(number);
          System.out.println("Factorial of " + number + " is " + result);  // Output: Factorial of 5 is 120
      }
  }
  `
  },
  {
    id: 'classes_and_objects',
    label: 'Classes & Objects',
    content: `
      // Defining a class named Car
      class Car {
          // Instance variables (fields)
          String color;
          String model;
          int year;
  
          // Method to display car details
          public void displayDetails() {
              System.out.println("Car Model: " + model);
              System.out.println("Car Color: " + color);
              System.out.println("Car Year: " + year);
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating an object of the Car class
              Car myCar = new Car();
  
              // Setting the fields of the Car object
              myCar.color = "Red";
              myCar.model = "Toyota";
              myCar.year = 2022;
  
              // Calling the method to display the car's details
              myCar.displayDetails();
              // Output:
              // Car Model: Toyota
              // Car Color: Red
              // Car Year: 2022
          }
      }
    `
  },
  {
    id: 'constructors',
    label: 'Constructors',
    content: `
      // Class with a constructor
      class Person {
          String name;
          int age;
  
          // Constructor to initialize fields
          public Person(String name, int age) {
              this.name = name;
              this.age = age;
          }
  
          // Method to display person details
          public void displayPersonInfo() {
              System.out.println("Name: " + name);
              System.out.println("Age: " + age);
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating objects using the constructor
              Person person1 = new Person("Alice", 30);
              Person person2 = new Person("Bob", 25);
  
              // Displaying the person details
              person1.displayPersonInfo();
              // Output:
              // Name: Alice
              // Age: 30
  
              person2.displayPersonInfo();
              // Output:
              // Name: Bob
              // Age: 25
          }
      }
    `
  },
  {
    id: 'instance_variables_and_methods',
    label: 'Instance Variables & Methods',
    content: `
      // Class with instance variables and methods
      class Rectangle {
          // Instance variables
          double length;
          double width;
  
          // Method to calculate area
          public double calculateArea() {
              return length * width;
          }
  
          // Method to calculate perimeter
          public double calculatePerimeter() {
              return 2 * (length + width);
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating a Rectangle object
              Rectangle rect = new Rectangle();
  
              // Setting the instance variables
              rect.length = 5.0;
              rect.width = 3.0;
  
              // Calling the methods to calculate area and perimeter
              double area = rect.calculateArea();
              double perimeter = rect.calculatePerimeter();
  
              System.out.println("Area: " + area);
              // Output: Area: 15.0
  
              System.out.println("Perimeter: " + perimeter);
              // Output: Perimeter: 16.0
          }
      }
    `
  },
  {
    id: 'access_modifiers',
    label: 'Access Modifiers',
    content: `
      // Access modifiers in Java
  
      class AccessExample {
          // Public variable: accessible from anywhere
          public String publicVar = "I am public";
  
          // Private variable: accessible only within the class
          private String privateVar = "I am private";
  
          // Protected variable: accessible within the package and subclasses
          protected String protectedVar = "I am protected";
  
          // Default (package-private) variable: accessible only within the package
          String defaultVar = "I am default";
  
          // Public method: can access all variables
          public void displayVariables() {
              System.out.println("Public Variable: " + publicVar);
              System.out.println("Private Variable: " + privateVar);
              System.out.println("Protected Variable: " + protectedVar);
              System.out.println("Default Variable: " + defaultVar);
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              AccessExample example = new AccessExample();
  
              // Accessing public variable directly
              System.out.println(example.publicVar); // Output: I am public
  
              // Accessing protected and default variables within the same package
              System.out.println(example.protectedVar); // Output: I am protected
              System.out.println(example.defaultVar); // Output: I am default
  
              // Cannot access private variable directly; would cause an error
              // System.out.println(example.privateVar); // Uncommenting this line will cause a compilation error
  
              // Calling method to display all variables
              example.displayVariables();
              // Output:
              // Public Variable: I am public
              // Private Variable: I am private
              // Protected Variable: I am protected
              // Default Variable: I am default
          }
      }
    `
  },
  {
    id: 'inheritance',
    label: 'Inheritance',
    content: `
      // Demonstrating inheritance in Java
  
      // Base class (superclass)
      class Animal {
          // Method in the superclass
          public void makeSound() {
              System.out.println("Animal makes a sound");
          }
      }
  
      // Derived class (subclass)
      class Dog extends Animal {
          // Method overridden in the subclass
          @Override
          public void makeSound() {
              System.out.println("Dog barks");
          }
  
          // Additional method in the subclass
          public void fetch() {
              System.out.println("Dog fetches the ball");
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating an instance of the subclass
              Dog myDog = new Dog();
  
              // Calling methods on the subclass instance
              myDog.makeSound(); // Output: Dog barks
              myDog.fetch(); // Output: Dog fetches the ball
  
              // Polymorphism: using a superclass reference to a subclass object
              Animal myAnimal = new Dog();
              myAnimal.makeSound(); // Output: Dog barks (overridden method is called)
              // myAnimal.fetch(); // This line would cause a compilation error since Animal does not have fetch method
          }
      }
    `
  },
  {
    id: 'polymorphism',
    label: 'Polymorphism',
    content: `
      // Demonstrating polymorphism in Java
  
      // Superclass
      class Shape {
          // Method to be overridden
          public void draw() {
              System.out.println("Drawing a shape");
          }
      }
  
      // Subclass 1
      class Circle extends Shape {
          // Overriding the draw method
          @Override
          public void draw() {
              System.out.println("Drawing a circle");
          }
      }
  
      // Subclass 2
      class Rectangle extends Shape {
          // Overriding the draw method
          @Override
          public void draw() {
              System.out.println("Drawing a rectangle");
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating objects of subclasses
              Shape myShape = new Shape();
              Shape myCircle = new Circle();
              Shape myRectangle = new Rectangle();
  
              // Polymorphism: calling overridden methods
              myShape.draw(); // Output: Drawing a shape
              myCircle.draw(); // Output: Drawing a circle
              myRectangle.draw(); // Output: Drawing a rectangle
  
              // Using a method that accepts a Shape type
              displayShape(myShape); // Output: Drawing a shape
              displayShape(myCircle); // Output: Drawing a circle
              displayShape(myRectangle); // Output: Drawing a rectangle
          }
  
          // Method that demonstrates polymorphism by accepting a Shape parameter
          public static void displayShape(Shape shape) {
              shape.draw(); // Calls the overridden draw method
          }
      }
    `
  },
  {
    id: 'abstract_classes_interfaces',
    label: 'Abstract Classes & Interfaces',
    content: `
      // Abstract Classes and Interfaces in Java
  
      // Abstract class
      abstract class Animal {
          // Abstract method (no implementation)
          public abstract void makeSound();
  
          // Concrete method
          public void sleep() {
              System.out.println("Animal is sleeping");
          }
      }
  
      // Subclass extending the abstract class
      class Dog extends Animal {
          // Implementing the abstract method
          @Override
          public void makeSound() {
              System.out.println("Dog barks");
          }
      }
  
      // Interface
      interface Playable {
          void play();
      }
  
      // Class implementing the interface
      class Cat extends Animal implements Playable {
          // Implementing the abstract method from Animal
          @Override
          public void makeSound() {
              System.out.println("Cat meows");
          }
  
          // Implementing the method from Playable interface
          @Override
          public void play() {
              System.out.println("Cat plays with a ball");
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating instances of Dog and Cat
              Animal myDog = new Dog();
              Animal myCat = new Cat();
  
              // Calling methods on the instances
              myDog.makeSound(); // Output: Dog barks
              myDog.sleep(); // Output: Animal is sleeping
  
              myCat.makeSound(); // Output: Cat meows
              myCat.sleep(); // Output: Animal is sleeping
  
              // Interface reference to a Cat object
              Playable playableCat = (Cat) myCat;
              playableCat.play(); // Output: Cat plays with a ball
          }
      }
    `
  },
  {
    id: 'encapsulation',
    label: 'Encapsulation',
    content: `
      // Encapsulation in Java
  
      class Person {
          // Private fields
          private String name;
          private int age;
  
          // Public getter for name
          public String getName() {
              return name;
          }
  
          // Public setter for name
          public void setName(String name) {
              this.name = name;
          }
  
          // Public getter for age
          public int getAge() {
              return age;
          }
  
          // Public setter for age
          public void setAge(int age) {
              if (age >= 0) { // Basic validation
                  this.age = age;
              }
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating an instance of Person
              Person person = new Person();
  
              // Setting properties using setters
              person.setName("Alice");
              person.setAge(30);
  
              // Accessing properties using getters
              System.out.println("Name: " + person.getName()); // Output: Name: Alice
              System.out.println("Age: " + person.getAge()); // Output: Age: 30
  
              // Attempting to set invalid age
              person.setAge(-5); // Invalid, will not update the age
              System.out.println("Updated Age: " + person.getAge()); // Output: Updated Age: 30
          }
      }
    `
  },
  {
    id: 'inner_classes',
    label: 'Inner Classes',
    content: `
      // Inner Classes in Java
  
      class OuterClass {
          private String message = "Hello from the outer class!";
  
          // Member inner class
          class InnerClass {
              public void displayMessage() {
                  // Accessing outer class's private member
                  System.out.println("Message: " + message);
              }
          }
  
          // Static inner class
          static class StaticInnerClass {
              public void staticDisplay() {
                  System.out.println("Hello from the static inner class!");
              }
          }
  
          public void createLocalClass() {
              // Local inner class
              class LocalInnerClass {
                  public void localDisplay() {
                      System.out.println("Hello from the local inner class!");
                  }
              }
  
              // Creating an instance of the local inner class
              LocalInnerClass localInner = new LocalInnerClass();
              localInner.localDisplay(); // Output: Hello from the local inner class!
          }
      }
  
      public class Main {
          public static void main(String[] args) {
              // Creating an instance of the outer class
              OuterClass outer = new OuterClass();
  
              // Creating an instance of the member inner class
              OuterClass.InnerClass inner = outer.new InnerClass();
              inner.displayMessage(); // Output: Message: Hello from the outer class!
  
              // Creating an instance of the static inner class
              OuterClass.StaticInnerClass staticInner = new OuterClass.StaticInnerClass();
              staticInner.staticDisplay(); // Output: Hello from the static inner class!
  
              // Calling the method that creates a local inner class
              outer.createLocalClass(); // Output: Hello from the local inner class!
          }
      }
    `
  },
  {
    id: 'try_catch_finally',
    label: 'try, catch, finally Blocks',
    content: `
      // Exception Handling in Java with try, catch, and finally
  
      public class ExceptionHandlingExample {
          public static void main(String[] args) {
              try {
                  // Block of code where exception can occur
                  int result = 10 / 0; // This will cause an ArithmeticException
                  System.out.println("Result: " + result); // This line will not execute
              } catch (ArithmeticException e) {
                  // Block of code to handle the exception
                  System.out.println("Caught an ArithmeticException: " + e.getMessage());
              } finally {
                  // Block of code that will always execute
                  System.out.println("This is the finally block, it always runs.");
              }
          }
      }
  
      // Output:
      // Caught an ArithmeticException: / by zero
      // This is the finally block, it always runs.
  
      // - try Block: Contains code that might throw an exception.
      // - catch Block: Handles the specific type of exception that occurs.
      // - finally Block: Executes regardless of whether an exception is thrown or not, useful for cleanup activities.
    `
  },
  {
    id: 'throw_throws',
    label: 'throw and throws Keywords',
    content: `
      // Using throw and throws in Java
  
      public class ThrowsExample {
          public static void main(String[] args) {
              try {
                  checkNumber(-1); // This will throw an IllegalArgumentException
              } catch (IllegalArgumentException e) {
                  System.out.println("Caught an exception: " + e.getMessage());
              }
          }
  
          // Method that throws an exception
          static void checkNumber(int number) throws IllegalArgumentException {
              if (number < 0) {
                  throw new IllegalArgumentException("Number must be non-negative");
              }
              System.out.println("Number is valid: " + number);
          }
      }
  
      // Output:
      // Caught an exception: Number must be non-negative
  
      // - throws Keyword: Indicates that a method can throw certain exceptions, and callers of the method must handle or declare these exceptions.
      // - throw Keyword: Used to explicitly throw an exception within the method, typically for custom error conditions or validations.
    `
  },
  {
    id: 'custom_exceptions',
    label: 'Custom Exceptions',
    content: `
      // Defining and Using Custom Exceptions in Java
  
      // Custom exception class
      class InvalidAgeException extends Exception {
          public InvalidAgeException(String message) {
              super(message);
          }
      }
  
      public class CustomExceptionExample {
          public static void main(String[] args) {
              try {
                  checkAge(15); // This will throw an InvalidAgeException
              } catch (InvalidAgeException e) {
                  System.out.println("Caught an exception: " + e.getMessage());
              }
          }
  
          // Method that throws a custom exception
          static void checkAge(int age) throws InvalidAgeException {
              if (age < 18) {
                  throw new InvalidAgeException("Age must be 18 or older");
              }
              System.out.println("Age is valid: " + age);
          }
      }
  
      // Output:
      // Caught an exception: Age must be 18 or older
  
      // - Custom Exceptions: Allow for more specific and readable error handling tailored to application needs.
      // - Extending Exception: Custom exceptions are created by extending the Exception class or any of its subclasses.
      // - Throwing Custom Exceptions: Custom exceptions can be thrown using the throw keyword and must be declared using throws in the method signature.
    `
  },
  {
    id: 'list_interface',
    label: 'List Interface',
    content: `
      // List Interface: Ordered collection that allows duplicate elements.
      // ArrayList: Resizable array implementation.
      // LinkedList: Doubly linked list implementation, better for frequent insertions/deletions.
  
      import java.util.ArrayList;
      import java.util.LinkedList;
      import java.util.List;
  
      public class ListExample {
          public static void main(String[] args) {
              // Using ArrayList
              List<String> arrayList = new ArrayList<>();
              arrayList.add("Apple");
              arrayList.add("Banana");
              arrayList.add("Cherry");
  
              // Using LinkedList
              List<String> linkedList = new LinkedList<>();
              linkedList.add("Dog");
              linkedList.add("Elephant");
              linkedList.add("Frog");
  
              // Accessing elements
              System.out.println("ArrayList: " + arrayList);
              System.out.println("LinkedList: " + linkedList);
  
              // Output:
              // ArrayList: [Apple, Banana, Cherry]
              // LinkedList: [Dog, Elephant, Frog]
          }
      }
    `
  },
  {
    id: 'set_interface',
    label: 'Set Interface',
    content: `
      // Set Interface: Unordered collection that does not allow duplicate elements.
      // HashSet: Uses a hash table for storage, no guaranteed order.
      // TreeSet: Sorted set implementation, uses a Red-Black tree, elements are sorted.
  
      import java.util.HashSet;
      import java.util.Set;
      import java.util.TreeSet;
  
      public class SetExample {
          public static void main(String[] args) {
              // Using HashSet
              Set<String> hashSet = new HashSet<>();
              hashSet.add("Lion");
              hashSet.add("Tiger");
              hashSet.add("Bear");
              hashSet.add("Lion"); // Duplicate, will not be added
  
              // Using TreeSet
              Set<String> treeSet = new TreeSet<>();
              treeSet.add("Lion");
              treeSet.add("Tiger");
              treeSet.add("Bear");
  
              // Displaying elements
              System.out.println("HashSet: " + hashSet);
              System.out.println("TreeSet: " + treeSet);
  
              // Output:
              // HashSet: [Bear, Tiger, Lion] // Order may vary
              // TreeSet: [Bear, Lion, Tiger] // Sorted order
          }
      }
    `
  },
  {
    id: 'map_interface',
    label: 'Map Interface',
    content: `
      // Map Interface: Collection of key-value pairs, keys are unique.
      // HashMap: Uses a hash table for storage, no guaranteed order.
      // TreeMap: Sorted map implementation, uses a Red-Black tree, keys are sorted.
  
      import java.util.HashMap;
      import java.util.Map;
      import java.util.TreeMap;
  
      public class MapExample {
          public static void main(String[] args) {
              // Using HashMap
              Map<String, Integer> hashMap = new HashMap<>();
              hashMap.put("One", 1);
              hashMap.put("Two", 2);
              hashMap.put("Three", 3);
  
              // Using TreeMap
              Map<String, Integer> treeMap = new TreeMap<>();
              treeMap.put("One", 1);
              treeMap.put("Two", 2);
              treeMap.put("Three", 3);
  
              // Accessing elements
              System.out.println("HashMap: " + hashMap);
              System.out.println("TreeMap: " + treeMap);
  
              // Output:
              // HashMap: {One=1, Two=2, Three=3} // Order may vary
              // TreeMap: {One=1, Three=3, Two=2} // Sorted by keys
          }
      }
    `
  },
  {
    id: 'queue_interface',
    label: 'Queue Interface',
    content: `
      // Queue Interface: Collection for holding elements prior to processing, follows FIFO (First-In-First-Out) principle.
      // PriorityQueue: Elements are ordered based on their natural ordering or by a Comparator.
      // LinkedList: Can also be used as a queue with methods for adding and removing elements from both ends.
  
      import java.util.LinkedList;
      import java.util.PriorityQueue;
      import java.util.Queue;
  
      public class QueueExample {
          public static void main(String[] args) {
              // Using PriorityQueue
              Queue<Integer> priorityQueue = new PriorityQueue<>();
              priorityQueue.add(3);
              priorityQueue.add(1);
              priorityQueue.add(2);
  
              // Using LinkedList as a Queue
              Queue<String> linkedListQueue = new LinkedList<>();
              linkedListQueue.add("First");
              linkedListQueue.add("Second");
              linkedListQueue.add("Third");
  
              // Accessing elements
              System.out.println("PriorityQueue: " + priorityQueue);
              System.out.println("LinkedListQueue: " + linkedListQueue);
  
              // Output:
              // PriorityQueue: [1, 3, 2] // Ordered by natural ordering
              // LinkedListQueue: [First, Second, Third] // FIFO order
          }
      }
    `
  },
  {
    id: 'iterators',
    label: 'Iterators',
    content: `
      // Iterators: Allow traversal of elements in a collection. They provide methods to check for next element and to remove elements safely.
  
      import java.util.ArrayList;
      import java.util.Iterator;
      import java.util.List;
  
      public class IteratorExample {
          public static void main(String[] args) {
              List<String> fruits = new ArrayList<>();
              fruits.add("Apple");
              fruits.add("Banana");
              fruits.add("Cherry");
  
              // Using Iterator to traverse the list
              Iterator<String> iterator = fruits.iterator();
              while (iterator.hasNext()) {
                  String fruit = iterator.next();
                  System.out.println(fruit);
                  // Example: Remove "Banana" during iteration
                  if (fruit.equals("Banana")) {
                      iterator.remove();
                  }
              }
  
              System.out.println("List after iteration and removal: " + fruits);
  
              // Output:
              // Apple
              // Banana
              // Cherry
              // List after iteration and removal: [Apple, Cherry]
          }
      }
    `
  }
  
  
  
  
  
  
  
  

  
];