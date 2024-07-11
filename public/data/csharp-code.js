export const csharpCodeBlocks = [
  {
    id: 'comments-csharp',
    label: 'Comments',
    content: `
  // Comments in C#
  
  // Single-line comments start with //
  // This is a single-line comment in C#
  
  // Multi-line comments start with /* and end with */
  /* 
     This is a multi-line
     comment in C#
  */
  
  /// <summary>
  /// XML Documentation comments start with ///
  /// They are used to provide documentation for types and members.
  /// </summary>
  
  // Example code with comments
  class Program
  {
      static void Main(string[] args)
      {
          // Single-line comment
          Console.WriteLine("Hello, World!"); // Output: Hello, World!
  
          /*
           * Multi-line comment
           * This will print a message to the console.
           */
          Console.WriteLine("Multi-line comment");
  
          // XML Documentation comment
          /// <summary>
          /// This method writes a message to the console.
          /// </summary>
          void PrintMessage()
          {
              Console.WriteLine("Printing message");
          }
  
          // Calling the method
          PrintMessage(); // Output: Printing message
      }
  }
  `
  },
  {
    id: 'variables-and-constants-csharp',
    label: 'Variables & Constants',
    content: `
  // Variables and Constants in C#
  
  // Variables
  
  // Variables in C# are declared with a type, followed by the variable name.
  // Variable names are case-sensitive and should start with a letter or underscore.
  
  int number = 42;       // Integer variable
  double pi = 3.14159;   // Double variable
  string message = "Hello, C#";  // String variable
  bool isCSharpFun = true;  // Boolean variable
  
  // Variables can also be declared without an initial value.
  int uninitialized; // This variable is declared but not initialized
  
  // The \`var\` keyword can be used for implicit typing, where the compiler infers the type.
  var inferredInt = 100;        // Inferred as int
  var inferredDouble = 9.81;    // Inferred as double
  var inferredString = "Auto";  // Inferred as string
  
  // Variable Scope
  
  // Variables declared within a method are local to that method.
  void ExampleMethod()
  {
      int localVariable = 5;  // Local variable, accessible only within this method
  }
  
  // Variables declared within a class but outside methods are instance variables (fields).
  class ExampleClass
  {
      int instanceVariable = 10;  // Instance variable, each object of this class has its own copy
  
      // Static variables are shared among all instances of a class.
      static int staticVariable = 20;  // Static variable, shared across all instances
  
      void DisplayVariables()
      {
          Console.WriteLine(instanceVariable);  // Accessing instance variable
          Console.WriteLine(staticVariable);    // Accessing static variable
      }
  }
  
  // Constants
  
  // Constants in C# are defined using the \`const\` keyword and must be initialized when they are declared.
  // Constants cannot be changed after they are defined.
  
  const double Pi = 3.14159;
  const string Greeting = "Welcome to C#";
  const int MaxValue = 100;
  
  // Constants are typically declared at the class level.
  
  class ConstantsExample
  {
      public const string CompanyName = "TechCorp";
      private const int MaxUsers = 1000;
  
      void ShowConstants()
      {
          Console.WriteLine(CompanyName);  // Accessing public constant
          Console.WriteLine(MaxUsers);     // Accessing private constant
      }
  }
  
  // Read-only Fields
  
  // Read-only fields are similar to constants but can be initialized in the constructor.
  // They cannot be changed after the constructor completes.
  
  class ReadOnlyExample
  {
      public readonly int ReadOnlyValue;
  
      public ReadOnlyExample(int value)
      {
          ReadOnlyValue = value;  // Initialized in the constructor
      }
  }
  
  // The main function demonstrating variables and constants
  class Program
  {
      static void Main(string[] args)
      {
          // Local variables
          int localNumber = 5;
          double localPi = 3.14;
          string localMessage = "Hello, Local Variables!";
  
          Console.WriteLine(localNumber);   // Output: 5
          Console.WriteLine(localPi);       // Output: 3.14
          Console.WriteLine(localMessage);  // Output: Hello, Local Variables!
  
          // Instance and static variables
          ExampleClass example = new ExampleClass();
          example.DisplayVariables();  // Output: 10 and 20
  
          // Constants
          Console.WriteLine(Pi);        // Output: 3.14159
          Console.WriteLine(Greeting);  // Output: Welcome to C#
          Console.WriteLine(MaxValue);  // Output: 100
  
          // Read-only field
          ReadOnlyExample readOnlyExample = new ReadOnlyExample(42);
          Console.WriteLine(readOnlyExample.ReadOnlyValue);  // Output: 42
      }
  }
  `
  },
  {
    id: 'data-types-csharp',
    label: 'Data Types',
    content: `
  // Data Types in C#
  
  // C# is a strongly typed language, meaning each variable and constant must be declared with a specific data type.
  // C# provides a variety of data types, which can be categorized as follows:
  
  // Primitive Types
  
  // Integer Types
  // These types represent whole numbers.
  
  byte byteValue = 255;         // 8-bit unsigned integer (0 to 255)
  sbyte sbyteValue = -128;      // 8-bit signed integer (-128 to 127)
  short shortValue = -32768;    // 16-bit signed integer (-32,768 to 32,767)
  ushort ushortValue = 65535;   // 16-bit unsigned integer (0 to 65,535)
  int intValue = 2147483647;    // 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
  uint uintValue = 4294967295;  // 32-bit unsigned integer (0 to 4,294,967,295)
  long longValue = 9223372036854775807L; // 64-bit signed integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
  ulong ulongValue = 18446744073709551615UL; // 64-bit unsigned integer (0 to 18,446,744,073,709,551,615)
  
  // Floating-Point Types
  // These types represent numbers with fractional parts.
  
  float floatValue = 3.14F;     // 32-bit floating point (-3.402823e38 to 3.402823e38)
  double doubleValue = 3.14159; // 64-bit floating point (-1.7976931348623157e308 to 1.7976931348623157e308)
  decimal decimalValue = 79228162514264337593543950335M; // 128-bit precise decimal (-7.9228e28 to 7.9228e28)
  
  // Character and String Types
  // These types represent individual characters or sequences of characters.
  
  char charValue = 'A';         // 16-bit Unicode character
  string stringValue = "Hello, C#";  // Sequence of Unicode characters
  
  // Boolean Type
  // This type represents a truth value.
  
  bool boolValue = true;        // true or false
  
  // Special Types
  
  // Object Type
  // The object type is the base type for all other types in C#. It can hold any type of data.
  
  object objValue = "This is a string stored as an object";  // Can hold any data type
  
  // Dynamic Type
  // The dynamic type skips compile-time type checking. It defers the type checking to runtime.
  
  dynamic dynamicValue = 10;    // Initially an integer
  dynamicValue = "Now a string";  // Can change to any type at runtime
  
  // Nullable Types
  // Nullable types are used to represent all the values of an underlying value type plus an additional null value.
  
  int? nullableInt = null;      // Nullable int can be null or an integer
  bool? nullableBool = true;    // Nullable bool can be true, false, or null
  
  // Arrays
  // Arrays are collections of elements of the same type.
  
  int[] intArray = new int[] { 1, 2, 3, 4, 5 };  // Array of integers
  string[] stringArray = { "one", "two", "three" };  // Array of strings
  
  // Enum Type
  // Enums are distinct value types that define a set of named constants.
  
  enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
  Days today = Days.Wednesday;  // Enum variable
  
  // User-Defined Types
  
  // Struct Type
  // Structs are value types that can encapsulate data and related functionality.
  
  struct Point
  {
      public int X;
      public int Y;
  }
  Point point = new Point { X = 10, Y = 20 };  // Struct instance
  
  // Class Type
  // Classes are reference types that encapsulate data and functionality.
  
  class Person
  {
      public string Name { get; set; }
      public int Age { get; set; }
  }
  Person person = new Person { Name = "Alice", Age = 30 };  // Class instance
  
  // Nullable Type Example
  
  // Checking if nullableInt has a value
  if (nullableInt.HasValue)
  {
      Console.WriteLine("Nullable integer has a value: " + nullableInt.Value);
  }
  else
  {
      Console.WriteLine("Nullable integer is null.");
  }
  
  // Demonstrating Object and Dynamic Types
  
  object objExample = "Hello, Object!";
  dynamic dynExample = "Hello, Dynamic!";
  Console.WriteLine(objExample);  // Output: Hello, Object!
  Console.WriteLine(dynExample);  // Output: Hello, Dynamic!
  
  // Changing dynamic type at runtime
  dynExample = 42;
  Console.WriteLine(dynExample);  // Output: 42
  
  `
  },
  {
    id: 'operators-csharp',
    label: 'Operators',
    content: `
  // Operators in C#
  
  // Operators in C# are used to perform operations on variables and values. They can be categorized into different types based on their functionality.
  
  // Arithmetic Operators
  // These operators are used to perform basic mathematical operations.
  
  int addition = 10 + 5;        // Addition: 15
  int subtraction = 10 - 5;     // Subtraction: 5
  int multiplication = 10 * 5;  // Multiplication: 50
  int division = 10 / 5;        // Division: 2
  int modulus = 10 % 3;         // Modulus: 1
  
  // Increment and Decrement Operators
  // These operators are used to increase or decrease the value of a variable by 1.
  
  int increment = 5;
  increment++;                  // Increment: 6 (postfix)
  ++increment;                  // Increment: 7 (prefix)
  
  int decrement = 5;
  decrement--;                  // Decrement: 4 (postfix)
  --decrement;                  // Decrement: 3 (prefix)
  
  // Comparison Operators
  // These operators are used to compare two values and return a boolean result.
  
  bool equal = (5 == 5);        // Equal to: true
  bool notEqual = (5 != 3);     // Not equal to: true
  bool greaterThan = (5 > 3);   // Greater than: true
  bool lessThan = (5 < 3);      // Less than: false
  bool greaterThanOrEqual = (5 >= 5); // Greater than or equal to: true
  bool lessThanOrEqual = (5 <= 3);    // Less than or equal to: false
  
  // Logical Operators
  // These operators are used to perform logical operations on boolean values.
  
  bool and = (true && false);   // Logical AND: false
  bool or = (true || false);    // Logical OR: true
  bool not = !true;             // Logical NOT: false
  
  // Bitwise Operators
  // These operators are used to perform operations on the binary representations of integers.
  
  int andBitwise = 5 & 3;       // Bitwise AND: 1 (binary 0101 & 0011 = 0001)
  int orBitwise = 5 | 3;        // Bitwise OR: 7 (binary 0101 | 0011 = 0111)
  int xorBitwise = 5 ^ 3;       // Bitwise XOR: 6 (binary 0101 ^ 0011 = 0110)
  int notBitwise = ~5;          // Bitwise NOT: -6 (binary ~0101 = 1010 in two's complement)
  int shiftLeft = 5 << 1;       // Left shift: 10 (binary 0101 << 1 = 1010)
  int shiftRight = 5 >> 1;      // Right shift: 2 (binary 0101 >> 1 = 0010)
  
  // Assignment Operators
  // These operators are used to assign values to variables. They can also combine assignment with arithmetic operations.
  
  int assign = 10;              // Simple assignment: 10
  assign += 5;                  // Addition assignment: 15 (equivalent to assign = assign + 5)
  assign -= 3;                  // Subtraction assignment: 12 (equivalent to assign = assign - 3)
  assign *= 2;                  // Multiplication assignment: 24 (equivalent to assign = assign * 2)
  assign /= 4;                  // Division assignment: 6 (equivalent to assign = assign / 4)
  assign %= 3;                  // Modulus assignment: 0 (equivalent to assign = assign % 3)
  
  // Compound Assignment Operators
  // These operators combine assignment with another operation.
  
  assign &= 3;                  // Bitwise AND assignment: 0 (equivalent to assign = assign & 3)
  assign |= 2;                  // Bitwise OR assignment: 2 (equivalent to assign = assign | 2)
  assign ^= 1;                  // Bitwise XOR assignment: 3 (equivalent to assign = assign ^ 1)
  assign <<= 1;                 // Left shift assignment: 6 (equivalent to assign = assign << 1)
  assign >>= 1;                 // Right shift assignment: 3 (equivalent to assign = assign >> 1)
  
  // Ternary Operator
  // This is a shorthand for an if-else statement. It takes three operands.
  
  string ternaryResult = (5 > 3) ? "True" : "False";  // Output: "True"
  
  // Null-Coalescing Operator
  // This operator returns the left-hand operand if it is not null, otherwise it returns the right-hand operand.
  
  string nullCoalescing = null ?? "Default";  // Output: "Default"
  
  // Null-Conditional Operator
  // This operator is used to safely access members of an object that might be null.
  
  string nullConditional = null?.ToString();  // Output: null
  
  `
  },
  {
    id: 'conditional-statements-csharp',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in C#
  
  // The \`if\` Statement
  // The \`if\` statement allows you to execute a block of code only if a specified condition is true.
  
  int number = 10;
  
  if (number > 5)
  {
      Console.WriteLine("The number is greater than 5"); // Output: The number is greater than 5
  }
  
  // The \`else\` Statement
  // The \`else\` statement allows you to execute a block of code if the condition in the \`if\` statement is false.
  
  if (number < 5)
  {
      Console.WriteLine("The number is less than 5");
  }
  else
  {
      Console.WriteLine("The number is not less than 5"); // Output: The number is not less than 5
  }
  
  // The \`else if\` Statement
  // The \`else if\` statement allows you to specify a new condition to test if the first condition is false.
  
  if (number == 5)
  {
      Console.WriteLine("The number is equal to 5");
  }
  else if (number > 5)
  {
      Console.WriteLine("The number is greater than 5"); // Output: The number is greater than 5
  }
  else
  {
      Console.WriteLine("The number is less than 5");
  }
  
  // The \`switch\` Statement
  // The \`switch\` statement is used to select one of many code blocks to be executed.
  
  int dayOfWeek = 3;
  
  switch (dayOfWeek)
  {
      case 1:
          Console.WriteLine("Monday");
          break;
      case 2:
          Console.WriteLine("Tuesday");
          break;
      case 3:
          Console.WriteLine("Wednesday"); // Output: Wednesday
          break;
      case 4:
          Console.WriteLine("Thursday");
          break;
      case 5:
          Console.WriteLine("Friday");
          break;
      default:
          Console.WriteLine("Weekend");
          break;
  }
  
  // The \`switch\` Expression (C# 8.0 and later)
  // The \`switch\` expression provides a concise syntax for the \`switch\` statement and returns a value.
  
  string dayName = dayOfWeek switch
  {
      1 => "Monday",
      2 => "Tuesday",
      3 => "Wednesday", // Output: Wednesday
      4 => "Thursday",
      5 => "Friday",
      _ => "Weekend"
  };
  
  Console.WriteLine(dayName); // Output: Wednesday
  
  // Pattern Matching in \`switch\` (C# 8.0 and later)
  // The \`switch\` statement can be combined with pattern matching for more complex scenarios.
  
  object value = "hello";
  
  switch (value)
  {
      case int i when i > 0:
          Console.WriteLine("Positive integer");
          break;
      case string s:
          Console.WriteLine($"String of length {s.Length}"); // Output: String of length 5
          break;
      case null:
          Console.WriteLine("Null value");
          break;
      default:
          Console.WriteLine("Other type");
          break;
  }
  `
  },
  {
    id: 'loops-csharp',
    label: 'Loops',
    content: `
  // Loops in C#
  
  // The \`while\` Loop
  // The \`while\` loop executes a block of code as long as a specified condition is true.
  
  int counter = 0;
  
  while (counter < 5)
  {
      Console.WriteLine("Counter: " + counter);  // Output: Counter: 0, Counter: 1, Counter: 2, Counter: 3, Counter: 4
      counter++;
  }
  
  // The \`do-while\` Loop
  // The \`do-while\` loop is similar to the \`while\` loop, but it guarantees that the block of code will be executed at least once.
  
  int doCounter = 0;
  
  do
  {
      Console.WriteLine("Do Counter: " + doCounter);  // Output: Do Counter: 0
      doCounter++;
  } while (doCounter < 1);  // The condition is checked after the first iteration
  
  // The \`for\` Loop
  // The \`for\` loop is used when you know in advance how many times you want to execute a statement or a block of statements.
  
  for (int i = 0; i < 5; i++)
  {
      Console.WriteLine("For Loop Index: " + i);  // Output: For Loop Index: 0, 1, 2, 3, 4
  }
  
  // The \`foreach\` Loop
  // The \`foreach\` loop is used to iterate over a collection or array.
  
  int[] numbers = { 1, 2, 3, 4, 5 };
  
  foreach (int number in numbers)
  {
      Console.WriteLine("Number: " + number);  // Output: Number: 1, 2, 3, 4, 5
  }
  
  // Nested Loops
  // Loops can be nested inside one another to perform more complex iterations.
  
  for (int row = 1; row <= 3; row++)
  {
      for (int col = 1; col <= 2; col++)
      {
          Console.WriteLine($"Row {row}, Column {col}");  // Output: Row 1, Column 1, Row 1, Column 2, etc.
      }
  }
  
  // Breaking Out of Loops
  // The \`break\` statement exits the loop immediately, regardless of the loop's condition.
  
  for (int j = 0; j < 10; j++)
  {
      if (j == 5)
      {
          break;  // Exit the loop when j equals 5
      }
      Console.WriteLine("Break Example: " + j);  // Output: Break Example: 0, 1, 2, 3, 4
  }
  
  // Continuing the Next Iteration
  // The \`continue\` statement skips the rest of the loop's current iteration and proceeds with the next iteration.
  
  for (int k = 0; k < 5; k++)
  {
      if (k == 2)
      {
          continue;  // Skip the rest of the iteration when k equals 2
      }
      Console.WriteLine("Continue Example: " + k);  // Output: Continue Example: 0, 1, 3, 4
  }
  `
  },
  {
    id: 'methods-functions-csharp',
    label: 'Methods',
    content: `
  // Methods and Functions in C#
  
  // Defining and Calling Methods
  // Methods in C# are blocks of code that perform a specific task and are defined within a class or struct.
  
  public class Example
  {
      // Method definition
      public void Greet()
      {
          Console.WriteLine("Hello, World!");
      }
      
      // Method with parameters and return value
      public int Add(int a, int b)
      {
          return a + b;
      }
  }
  
  // Creating an instance of the class
  Example example = new Example();
  
  // Calling a method
  example.Greet();  // Output: Hello, World!
  
  // Calling a method with parameters
  int result = example.Add(5, 3);
  Console.WriteLine(result);  // Output: 8
  
  // Method Parameters and Return Values
  // Methods can take zero or more parameters and can return a value. Parameters can be passed by value or by reference.
  
  public class MathOperations
  {
      // Method with parameters
      public int Multiply(int x, int y)
      {
          return x * y;
      }
  
      // Method with parameters passed by reference using the \`ref\` keyword
      public void Increment(ref int number)
      {
          number++;
      }
  
      // Method with parameters passed by reference using the \`out\` keyword
      public void Initialize(out int number)
      {
          number = 10;  // \`out\` parameters must be assigned before the method ends
      }
  }
  
  MathOperations operations = new MathOperations();
  int value = 5;
  
  // Passing parameters by value
  int product = operations.Multiply(4, 3);
  Console.WriteLine(product);  // Output: 12
  
  // Passing parameters by reference using \`ref\`
  operations.Increment(ref value);
  Console.WriteLine(value);  // Output: 6
  
  // Passing parameters by reference using \`out\`
  operations.Initialize(out value);
  Console.WriteLine(value);  // Output: 10
  
  // Method Overloading
  // Method overloading allows multiple methods to have the same name but different parameters.
  
  public class OverloadExample
  {
      // Method with no parameters
      public void Display()
      {
          Console.WriteLine("Display without parameters");
      }
  
      // Overloaded method with one parameter
      public void Display(string message)
      {
          Console.WriteLine("Display message: " + message);
      }
  
      // Overloaded method with two parameters
      public void Display(string message, int number)
      {
          Console.WriteLine("Display message and number: " + message + " " + number);
      }
  }
  
  OverloadExample overload = new OverloadExample();
  overload.Display();  // Output: Display without parameters
  overload.Display("Hello");  // Output: Display message: Hello
  overload.Display("Number", 42);  // Output: Display message and number: Number 42
  
  // Lambda Expressions and Anonymous Methods
  // Lambda expressions provide a concise way to represent anonymous methods using the \`=>\` syntax.
  
  Func<int, int, int> add = (x, y) => x + y;
  Console.WriteLine(add(3, 4));  // Output: 7
  
  // Lambda expressions can be used in method parameters, especially with LINQ or delegate types.
  
  List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
  var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
  Console.WriteLine(string.Join(", ", evenNumbers));  // Output: 2, 4
  
  // Anonymous methods use the \`delegate\` keyword and can be assigned to delegates or passed as parameters.
  
  Func<int, int, int> subtract = delegate (int a, int b)
  {
      return a - b;
  };
  Console.WriteLine(subtract(10, 5));  // Output: 5
  
  // Passing Parameters by Value, by Reference (\`ref\`), and Output (\`out\`)
  // - \`by value\`: The default method of passing parameters. Changes to the parameter inside the method do not affect the original value.
  // - \`by reference\` (\`ref\`): Allows the method to modify the original value of the parameter.
  // - \`output\` (\`out\`): Used to return multiple values from a method.
  
  public class ParameterExample
  {
      public void Square(int number)
      {
          number = number * number;  // This change will not affect the original value
      }
  
      public void SquareRef(ref int number)
      {
          number = number * number;  // This change will modify the original value
      }
  
      public void GetSumAndProduct(int a, int b, out int sum, out int product)
      {
          sum = a + b;
          product = a * b;
      }
  }
  
  ParameterExample paramExample = new ParameterExample();
  int value = 5;
  
  // By value
  paramExample.Square(value);
  Console.WriteLine(value);  // Output: 5 (original value is unchanged)
  
  // By reference
  paramExample.SquareRef(ref value);
  Console.WriteLine(value);  // Output: 25 (original value is modified)
  
  int sum, product;
  paramExample.GetSumAndProduct(3, 4, out sum, out product);
  Console.WriteLine($"Sum: {sum}, Product: {product}");  // Output: Sum: 7, Product: 12
  
  `
  },
  {
    id: 'classes-objects-csharp',
    label: 'Classes & Objects',
    content: `
  // Classes and Objects in C#
  
  // Creating Classes and Objects
  // Classes are blueprints for creating objects. They define the properties and methods that the objects created from the class will have.
  
  public class Person
  {
      // Fields (usually private)
      private string name;
      private int age;
  
      // Constructor
      public Person(string name, int age)
      {
          this.name = name;
          this.age = age;
      }
  
      // Method
      public void DisplayInfo()
      {
          Console.WriteLine($"Name: {name}, Age: {age}");
      }
  }
  
  // Creating an object of the Person class
  Person person = new Person("Alice", 30);
  person.DisplayInfo();  // Output: Name: Alice, Age: 30
  
  // Constructors (default, parameterized, static)
  // Constructors are special methods used to initialize objects. They can be overloaded to provide different ways of initializing objects.
  
  public class Product
  {
      // Fields
      private string productName;
      private double price;
  
      // Default constructor
      public Product()
      {
          productName = "Unknown";
          price = 0.0;
      }
  
      // Parameterized constructor
      public Product(string name, double price)
      {
          this.productName = name;
          this.price = price;
      }
  
      // Static constructor (used to initialize static members)
      static Product()
      {
          Console.WriteLine("Static constructor called.");
      }
  
      // Method
      public void DisplayProduct()
      {
          Console.WriteLine($"Product: {productName}, Price: {price}");
      }
  }
  
  // Using the default constructor
  Product defaultProduct = new Product();
  defaultProduct.DisplayProduct();  // Output: Product: Unknown, Price: 0
  
  // Using the parameterized constructor
  Product parameterizedProduct = new Product("Laptop", 999.99);
  parameterizedProduct.DisplayProduct();  // Output: Product: Laptop, Price: 999.99
  
  // Properties (auto-implemented, read-only, write-only)
  // Properties provide a way to access the fields of a class with get and set accessors.
  
  public class Book
  {
      // Auto-implemented property
      public string Title { get; set; }
  
      // Read-only property
      public string Author { get; }
  
      // Write-only property
      private double _price;
      public double Price
      {
          set { _price = value; }
      }
  
      // Constructor
      public Book(string title, string author)
      {
          Title = title;
          Author = author;
      }
  
      // Method to display book information
      public void DisplayBook()
      {
          Console.WriteLine($"Title: {Title}, Author: {Author}, Price: {_price}");
      }
  }
  
  Book book = new Book("C# Programming", "John Doe");
  book.Price = 29.99;  // Setting the write-only property
  book.DisplayBook();  // Output: Title: C# Programming, Author: John Doe, Price: 29.99
  
  // Encapsulation (public, private, protected, internal)
  // Encapsulation hides the internal state of an object and only allows access through public methods and properties.
  
  public class BankAccount
  {
      // Private fields
      private string accountNumber;
      private double balance;
  
      // Public property
      public string AccountNumber
      {
          get { return accountNumber; }
      }
  
      // Constructor
      public BankAccount(string accountNumber, double initialBalance)
      {
          this.accountNumber = accountNumber;
          balance = initialBalance;
      }
  
      // Public method
      public void Deposit(double amount)
      {
          if (amount > 0)
          {
              balance += amount;
          }
      }
  
      // Protected method (accessible within the class and derived classes)
      protected double GetBalance()
      {
          return balance;
      }
  
      // Internal method (accessible within the same assembly)
      internal void DisplayBalance()
      {
          Console.WriteLine($"Account: {accountNumber}, Balance: {balance}");
      }
  }
  
  BankAccount account = new BankAccount("123456", 1000.0);
  account.Deposit(500.0);
  account.DisplayBalance();  // Output: Account: 123456, Balance: 1500.0
  
  // Static Members and Static Classes
  // Static members belong to the class itself rather than to any specific object. Static classes can only contain static members.
  
  public class MathUtilities
  {
      // Static field
      public static double Pi = 3.14159;
  
      // Static method
      public static double Square(double number)
      {
          return number * number;
      }
  }
  
  // Using static members
  Console.WriteLine(MathUtilities.Pi);  // Output: 3.14159
  Console.WriteLine(MathUtilities.Square(5));  // Output: 25
  
  // Static classes
  public static class Constants
  {
      public static readonly double GravitationalConstant = 9.81;
  
      // Static method
      public static void DisplayConstant()
      {
          Console.WriteLine($"Gravitational Constant: {GravitationalConstant}");
      }
  }
  
  // Accessing static class members
  Console.WriteLine(Constants.GravitationalConstant);  // Output: 9.81
  Constants.DisplayConstant();  // Output: Gravitational Constant: 9.81
  `
  },
  {
    id: 'inheritance-polymorphism-csharp',
    label: 'Inheritance & Polymorphism',
    content: `
  // Inheritance and Polymorphism in C#
  
  // Inheriting Classes
  // Inheritance allows a class to inherit fields, properties, and methods from another class.
  // The 'derived' class inherits from the 'base' class.
  
  public class Animal
  {
      public string Name { get; set; }
  
      public void Speak()
      {
          Console.WriteLine("Animal sound");
      }
  }
  
  // Dog class inherits from Animal class
  public class Dog : Animal
  {
      public void Bark()
      {
          Console.WriteLine("Woof! Woof!");
      }
  }
  
  Dog dog = new Dog();
  dog.Name = "Buddy";
  dog.Speak();  // Inherited from Animal class: Output: Animal sound
  dog.Bark();   // Output: Woof! Woof!
  
  // Method Overriding and Base Keyword
  // Method overriding allows a derived class to provide a specific implementation of a method already defined in its base class.
  // The 'base' keyword is used to access members of the base class from within a derived class.
  
  public class Animal
  {
      public virtual void Speak()
      {
          Console.WriteLine("Animal sound");
      }
  }
  
  public class Dog : Animal
  {
      public override void Speak()
      {
          Console.WriteLine("Bark");
      }
  }
  
  Animal myDog = new Dog();
  myDog.Speak();  // Output: Bark (method overridden)
  
  public class Cat : Animal
  {
      public override void Speak()
      {
          base.Speak();  // Call the base class method
          Console.WriteLine("Meow");
      }
  }
  
  Animal myCat = new Cat();
  myCat.Speak();  // Output: Animal sound (from base class) followed by Meow
  
  // Abstract Classes and Abstract Methods
  // Abstract classes cannot be instantiated and are meant to be inherited by other classes.
  // Abstract methods in an abstract class must be overridden in any derived class.
  
  public abstract class Shape
  {
      public abstract double Area();
  }
  
  public class Circle : Shape
  {
      public double Radius { get; set; }
  
      public Circle(double radius)
      {
          Radius = radius;
      }
  
      public override double Area()
      {
          return Math.PI * Radius * Radius;
      }
  }
  
  public class Rectangle : Shape
  {
      public double Width { get; set; }
      public double Height { get; set; }
  
      public Rectangle(double width, double height)
      {
          Width = width;
          Height = height;
      }
  
      public override double Area()
      {
          return Width * Height;
      }
  }
  
  Shape circle = new Circle(5);
  Console.WriteLine(circle.Area());  // Output: Area of the circle
  
  Shape rectangle = new Rectangle(4, 6);
  Console.WriteLine(rectangle.Area());  // Output: Area of the rectangle
  
  // Sealed Classes and Members
  // Sealed classes cannot be inherited. Sealed methods in a class cannot be overridden in derived classes.
  
  public class Animal
  {
      public virtual void Speak()
      {
          Console.WriteLine("Animal sound");
      }
  }
  
  public class Bird : Animal
  {
      public sealed override void Speak()
      {
          Console.WriteLine("Chirp");
      }
  }
  
  // This class cannot override the sealed Speak method from Bird
  public class Parrot : Bird
  {
      // Compilation error if we try to override Speak()
      // public override void Speak()
      // {
      //     Console.WriteLine("Squawk");
      // }
  }
  
  // Interface Implementation
  // Interfaces define a contract that implementing classes must follow. Classes can implement multiple interfaces.
  
  public interface IAnimal
  {
      void Speak();
  }
  
  public interface IPet
  {
      void Play();
  }
  
  public class Dog : IAnimal, IPet
  {
      public void Speak()
      {
          Console.WriteLine("Bark");
      }
  
      public void Play()
      {
          Console.WriteLine("Dog is playing");
      }
  }
  
  IAnimal animalDog = new Dog();
  animalDog.Speak();  // Output: Bark
  
  IPet petDog = new Dog();
  petDog.Play();  // Output: Dog is playing
  
  // An interface can also be implemented explicitly, allowing different implementations for the same method.
  
  public class Robot : IAnimal
  {
      void IAnimal.Speak()
      {
          Console.WriteLine("Robot sound");
      }
  
      public void Speak()
      {
          Console.WriteLine("Beep boop");
      }
  }
  
  Robot robot = new Robot();
  robot.Speak();  // Output: Beep boop
  
  IAnimal animalRobot = robot;
  animalRobot.Speak();  // Output: Robot sound (interface method)
  `
  },
  {
    id: 'interfaces-abstract-classes-csharp',
    label: 'Interfaces & Abstract Classes',
    content: `
  // Interfaces and Abstract Classes in C#
  
  // Defining Interfaces
  // An interface in C# is a contract that defines a set of methods and properties without implementation.
  // Classes and structs that implement the interface must provide the implementation for these members.
  
  public interface IVehicle
  {
      void Drive();
      int GetSpeed();
  }
  
  // Implementing Interfaces
  // A class that implements an interface must provide the implementation for all its members.
  
  public class Car : IVehicle
  {
      private int speed;
  
      public void Drive()
      {
          Console.WriteLine("Car is driving.");
      }
  
      public int GetSpeed()
      {
          return speed;
      }
  
      public void SetSpeed(int value)
      {
          speed = value;
      }
  }
  
  Car myCar = new Car();
  myCar.Drive();  // Output: Car is driving.
  myCar.SetSpeed(60);
  Console.WriteLine(myCar.GetSpeed());  // Output: 60
  
  // Interface Inheritance
  // Interfaces can inherit from other interfaces, allowing for more complex structures.
  
  public interface IEngine
  {
      void Start();
  }
  
  public interface IElectricEngine : IEngine
  {
      void ChargeBattery();
  }
  
  public class ElectricCar : IElectricEngine
  {
      public void Start()
      {
          Console.WriteLine("Electric engine started.");
      }
  
      public void ChargeBattery()
      {
          Console.WriteLine("Battery is charging.");
      }
  }
  
  ElectricCar myElectricCar = new ElectricCar();
  myElectricCar.Start();  // Output: Electric engine started.
  myElectricCar.ChargeBattery();  // Output: Battery is charging.
  
  // Abstract Classes vs. Interfaces
  // Abstract classes can have both abstract members (without implementation) and concrete members (with implementation).
  // Interfaces can only have declarations of methods and properties, without implementation.
  
  public abstract class Animal
  {
      public string Name { get; set; }
  
      public abstract void Speak();  // Abstract method
  
      public void Sleep()            // Concrete method
      {
          Console.WriteLine("Sleeping");
      }
  }
  
  public class Dog : Animal
  {
      public override void Speak()
      {
          Console.WriteLine("Bark");
      }
  }
  
  Dog myDog = new Dog();
  myDog.Name = "Buddy";
  myDog.Speak();  // Output: Bark
  myDog.Sleep();  // Output: Sleeping
  
  // Differences Between Abstract Classes and Interfaces:
  // - Abstract classes can have fields, constructors, and method implementations.
  // - Interfaces can only declare methods and properties; they cannot have fields or implementations.
  // - A class can inherit only one abstract class but can implement multiple interfaces.
  
  public interface IFlyable
  {
      void Fly();
  }
  
  public interface ISwimmable
  {
      void Swim();
  }
  
  public class Duck : IFlyable, ISwimmable
  {
      public void Fly()
      {
          Console.WriteLine("Duck is flying.");
      }
  
      public void Swim()
      {
          Console.WriteLine("Duck is swimming.");
      }
  }
  
  Duck myDuck = new Duck();
  myDuck.Fly();  // Output: Duck is flying.
  myDuck.Swim(); // Output: Duck is swimming.
  
  // Multiple Interface Implementation
  // A class can implement multiple interfaces, allowing for flexible and reusable designs.
  
  public interface IRunnable
  {
      void Run();
  }
  
  public interface IJumpable
  {
      void Jump();
  }
  
  public class Athlete : IRunnable, IJumpable
  {
      public void Run()
      {
          Console.WriteLine("Athlete is running.");
      }
  
      public void Jump()
      {
          Console.WriteLine("Athlete is jumping.");
      }
  }
  
  Athlete myAthlete = new Athlete();
  myAthlete.Run();   // Output: Athlete is running.
  myAthlete.Jump();  // Output: Athlete is jumping.
  
  // Explicit Interface Implementation
  // Sometimes, you might want to implement interface methods explicitly, particularly when implementing multiple interfaces with methods of the same name.
  
  public interface IPrinter
  {
      void Print();
  }
  
  public interface IScanner
  {
      void Print();  // Note: Same method name as in IPrinter interface
  }
  
  public class MultiFunctionDevice : IPrinter, IScanner
  {
      // Explicit interface method implementation
      void IPrinter.Print()
      {
          Console.WriteLine("Printing document.");
      }
  
      void IScanner.Print()
      {
          Console.WriteLine("Scanning document.");
      }
  
      public void NormalPrint()
      {
          Console.WriteLine("Normal printing.");
      }
  }
  
  MultiFunctionDevice device = new MultiFunctionDevice();
  device.NormalPrint();  // Output: Normal printing.
  
  // Casting is required to call explicitly implemented interface methods
  IPrinter printerDevice = device;
  printerDevice.Print();  // Output: Printing document.
  
  IScanner scannerDevice = device;
  scannerDevice.Print();  // Output: Scanning document.
  `
  },
  {
    id: 'exception-handling-csharp',
    label: 'Exception Handling',
    content: `
  // Exception Handling in C#
  
  // Exception handling in C# is managed using \`try\`, \`catch\`, and \`finally\` blocks.
  // The \`try\` block contains code that may throw an exception, while \`catch\` blocks handle specific exceptions.
  // The \`finally\` block contains code that will run regardless of whether an exception was thrown.
  
  try
  {
      // Code that may throw an exception
      int[] numbers = { 1, 2, 3 };
      Console.WriteLine(numbers[5]);  // Throws IndexOutOfRangeException
  }
  catch (IndexOutOfRangeException ex)
  {
      // Handle the specific exception
      Console.WriteLine("An index out of range error occurred: " + ex.Message);
  }
  catch (Exception ex)
  {
      // Handle any other exceptions
      Console.WriteLine("An error occurred: " + ex.Message);
  }
  finally
  {
      // Code that will always run, regardless of an exception
      Console.WriteLine("This will always be executed.");
  }
  
  // Throwing Exceptions
  // Exceptions can be thrown using the \`throw\` keyword, and you can create and throw custom exceptions.
  
  public class NegativeNumberException : Exception
  {
      public NegativeNumberException(string message) : base(message) { }
  }
  
  public class MathOperations
  {
      public int SquareRoot(int number)
      {
          if (number < 0)
          {
              throw new NegativeNumberException("Cannot calculate the square root of a negative number.");
          }
          return (int)Math.Sqrt(number);
      }
  }
  
  try
  {
      MathOperations mathOps = new MathOperations();
      Console.WriteLine(mathOps.SquareRoot(-5));  // Throws NegativeNumberException
  }
  catch (NegativeNumberException ex)
  {
      Console.WriteLine("Custom exception caught: " + ex.Message);
  }
  
  // Custom Exception Classes
  // You can create custom exception classes by inheriting from the \`Exception\` class.
  
  public class CustomException : Exception
  {
      public DateTime ErrorTime { get; }
  
      public CustomException(string message, DateTime errorTime) : base(message)
      {
          ErrorTime = errorTime;
      }
  }
  
  try
  {
      throw new CustomException("A custom error occurred.", DateTime.Now);
  }
  catch (CustomException ex)
  {
      Console.WriteLine("Custom exception: " + ex.Message);
      Console.WriteLine("Error occurred at: " + ex.ErrorTime);
  }
  
  // Handling Unhandled Exceptions
  // You can handle unhandled exceptions globally using the \`AppDomain.CurrentDomain.UnhandledException\` event.
  
  AppDomain.CurrentDomain.UnhandledException += (sender, args) =>
  {
      Exception ex = (Exception)args.ExceptionObject;
      Console.WriteLine("Unhandled exception: " + ex.Message);
  };
  
  // Example of causing an unhandled exception
  // This code will be caught by the above event handler if uncommented.
  // throw new InvalidOperationException("This is an unhandled exception.");
  
  // Exception Filters (\`when\` keyword)
  // Exception filters allow you to handle exceptions conditionally using the \`when\` keyword.
  
  try
  {
      int divisor = 0;
      int result = 10 / divisor;  // This will cause a DivideByZeroException
  }
  catch (DivideByZeroException ex) when (ex.Message.Contains("zero"))
  {
      Console.WriteLine("Caught a divide by zero error: " + ex.Message);
  }
  
  // Summary
  // - The \`try\` block contains the code that might throw exceptions.
  // - The \`catch\` blocks handle exceptions of specific types.
  // - The \`finally\` block contains code that executes regardless of exceptions.
  // - The \`throw\` keyword is used to throw exceptions.
  // - Custom exceptions can be created by inheriting from the \`Exception\` class.
  // - Global exception handling can be set up using \`AppDomain.CurrentDomain.UnhandledException\`.
  // - Exception filters using the \`when\` keyword allow for conditional exception handling.
  `
  },
  {
    id: 'collections-and-generics-csharp',
    label: 'Collections & Generics',
    content: `
  // Collections and Generics in C#
  
  // Arrays and Lists
  
  // Arrays
  // Arrays in C# are fixed-size, strongly-typed collections of elements.
  // You declare arrays using square brackets [].
  
  int[] numbers = { 1, 2, 3, 4, 5 };
  Console.WriteLine(numbers[0]);  // Output: 1
  
  // Lists
  // Lists in C# are dynamic-size, strongly-typed collections.
  // You can use the List<T> class from the System.Collections.Generic namespace.
  
  List<string> fruits = new List<string> { "Apple", "Banana", "Cherry" };
  fruits.Add("Date");
  Console.WriteLine(fruits[3]);  // Output: Date
  
  // Lists provide methods to add, remove, and access elements dynamically.
  
  fruits.Remove("Banana");
  Console.WriteLine(fruits.Count);  // Output: 3
  
  // Dictionaries
  
  // Dictionaries in C# are collections of key-value pairs, where each key is unique.
  // You can use the Dictionary<TKey, TValue> class from the System.Collections.Generic namespace.
  
  Dictionary<string, int> ages = new Dictionary<string, int>
  {
      { "Alice", 25 },
      { "Bob", 30 },
      { "Charlie", 35 }
  };
  
  ages["Diana"] = 40;
  Console.WriteLine(ages["Alice"]);  // Output: 25
  
  // Dictionaries allow fast lookups by key and provide methods to add, remove, and access elements.
  
  ages.Remove("Bob");
  Console.WriteLine(ages.ContainsKey("Bob"));  // Output: False
  
  // Queues and Stacks
  
  // Queues
  // Queues in C# follow the First-In-First-Out (FIFO) principle.
  // You can use the Queue<T> class from the System.Collections.Generic namespace.
  
  Queue<string> line = new Queue<string>();
  line.Enqueue("First");
  line.Enqueue("Second");
  line.Enqueue("Third");
  
  Console.WriteLine(line.Dequeue());  // Output: First
  Console.WriteLine(line.Peek());     // Output: Second
  
  // Stacks
  // Stacks in C# follow the Last-In-First-Out (LIFO) principle.
  // You can use the Stack<T> class from the System.Collections.Generic namespace.
  
  Stack<string> stack = new Stack<string>();
  stack.Push("Bottom");
  stack.Push("Middle");
  stack.Push("Top");
  
  Console.WriteLine(stack.Pop());  // Output: Top
  Console.WriteLine(stack.Peek()); // Output: Middle
  
  // Generics
  
  // Generics allow you to define classes, methods, and data structures with a placeholder for the type of data they store or use.
  // This promotes type safety and reusability without sacrificing performance.
  
  public class Box<T>
  {
      private T _value;
  
      public Box(T value)
      {
          _value = value;
      }
  
      public T GetValue()
      {
          return _value;
      }
  }
  
  Box<int> intBox = new Box<int>(123);
  Box<string> stringBox = new Box<string>("Hello, World!");
  
  Console.WriteLine(intBox.GetValue());    // Output: 123
  Console.WriteLine(stringBox.GetValue()); // Output: Hello, World!
  
  // Type Constraints
  // You can add constraints to generic type parameters to specify the requirements for the types that can be used with the generic class or method.
  
  public class Repository<T> where T : class
  {
      public void Save(T item)
      {
          // Implementation for saving an item
      }
  }
  
  // Custom Generic Methods
  // Generic methods allow type parameters to be specified for individual methods, even within non-generic classes.
  
  public class Utility
  {
      public static void Print<T>(T value)
      {
          Console.WriteLine(value);
      }
  }
  
  Utility.Print<int>(10);        // Output: 10
  Utility.Print<string>("Text"); // Output: Text
  
  // Summary
  // - Arrays are fixed-size collections, while lists are dynamic-size collections.
  // - Dictionaries are key-value pairs for fast lookups by key.
  // - Queues follow the FIFO principle, and stacks follow the LIFO principle.
  // - Generics promote type safety and reusability for classes and methods.
  // - Type constraints restrict the types that can be used with generics.
  // - Custom generic methods enable type flexibility in method signatures.
  `
  },
  {
    id: 'delegates-events-csharp',
    label: 'Delegates & Events',
    content: `
  // Delegates and Events in C#
  
  // Declaring and Using Delegates
  // A delegate is a type that represents references to methods with a specific parameter list and return type.
  // Delegates are used to pass methods as arguments to other methods.
  
  public delegate void GreetDelegate(string message);
  
  public class Greeter
  {
      public void Greet(string message)
      {
          Console.WriteLine(message);
      }
  }
  
  GreetDelegate greet = new Greeter().Greet;
  greet("Hello, World!");  // Output: Hello, World!
  
  // Multicast Delegates
  // Multicast delegates can hold references to multiple methods. They invoke all the methods in the invocation list.
  
  public delegate void MultiGreetDelegate(string message);
  
  public class MultiGreeter
  {
      public void GreetEnglish(string message)
      {
          Console.WriteLine("English: " + message);
      }
  
      public void GreetSpanish(string message)
      {
          Console.WriteLine("Spanish: " + message);
      }
  }
  
  MultiGreeter multiGreeter = new MultiGreeter();
  MultiGreetDelegate multiGreet = multiGreeter.GreetEnglish;
  multiGreet += multiGreeter.GreetSpanish;
  
  multiGreet("Hello!");  
  // Output:
  // English: Hello!
  // Spanish: Hello!
  
  // Lambda Expressions with Delegates
  // Lambda expressions provide a concise way to write inline methods for delegates.
  
  Func<int, int, int> add = (a, b) => a + b;
  Console.WriteLine(add(3, 4));  // Output: 7
  
  // Events and Event Handlers
  // Events are special delegates used to provide notifications. They are declared using the 'event' keyword.
  
  public class Publisher
  {
      public event EventHandler SomethingHappened;
  
      public void DoSomething()
      {
          Console.WriteLine("Doing something...");
          OnSomethingHappened(EventArgs.Empty);
      }
  
      protected virtual void OnSomethingHappened(EventArgs e)
      {
          SomethingHappened?.Invoke(this, e);
      }
  }
  
  public class Subscriber
  {
      public void OnSomethingHappened(object sender, EventArgs e)
      {
          Console.WriteLine("Event received by Subscriber.");
      }
  }
  
  Publisher publisher = new Publisher();
  Subscriber subscriber = new Subscriber();
  publisher.SomethingHappened += subscriber.OnSomethingHappened;
  
  publisher.DoSomething();
  // Output:
  // Doing something...
  // Event received by Subscriber.
  
  // EventHandler and EventArgs
  // The EventHandler delegate and EventArgs class are commonly used in event declarations and handling.
  
  public class CustomEventArgs : EventArgs
  {
      public string Message { get; set; }
  
      public CustomEventArgs(string message)
      {
          Message = message;
      }
  }
  
  public class PublisherWithEventArgs
  {
      public event EventHandler<CustomEventArgs> CustomEvent;
  
      public void TriggerEvent(string message)
      {
          CustomEventArgs args = new CustomEventArgs(message);
          OnCustomEvent(args);
      }
  
      protected virtual void OnCustomEvent(CustomEventArgs e)
      {
          CustomEvent?.Invoke(this, e);
      }
  }
  
  public class SubscriberWithEventArgs
  {
      public void HandleCustomEvent(object sender, CustomEventArgs e)
      {
          Console.WriteLine($"Custom event received: {e.Message}");
      }
  }
  
  PublisherWithEventArgs publisherWithEventArgs = new PublisherWithEventArgs();
  SubscriberWithEventArgs subscriberWithEventArgs = new SubscriberWithEventArgs();
  publisherWithEventArgs.CustomEvent += subscriberWithEventArgs.HandleCustomEvent;
  
  publisherWithEventArgs.TriggerEvent("Hello from custom event!");
  // Output: Custom event received: Hello from custom event!
  `
  },
  {
    id: 'linq-csharp',
    label: 'LINQ',
    content: `
  // LINQ (Language Integrated Query) in C#
  
  // LINQ is a powerful feature in C# that allows you to query and manipulate data in a more readable and concise manner.
  // It can be used to query collections, databases, XML, and more.
  
  // Querying Data with LINQ
  // LINQ queries can be written in two main styles: query syntax and method syntax.
  
  using System;
  using System.Collections.Generic;
  using System.Linq;
  
  var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
  
  // LINQ Query Syntax
  var evenNumbersQuery = from num in numbers
                         where num % 2 == 0
                         select num;
  
  Console.WriteLine("Even numbers using query syntax:");
  foreach (var num in evenNumbersQuery)
  {
      Console.WriteLine(num);
  }
  
  // Output:
  // Even numbers using query syntax:
  // 2
  // 4
  // 6
  // 8
  // 10
  
  // LINQ Method Syntax
  var evenNumbersMethod = numbers.Where(n => n % 2 == 0);
  
  Console.WriteLine("Even numbers using method syntax:");
  foreach (var num in evenNumbersMethod)
  {
      Console.WriteLine(num);
  }
  
  // Output:
  // Even numbers using method syntax:
  // 2
  // 4
  // 6
  // 8
  // 10
  
  // Standard Query Operators
  // LINQ provides a set of standard query operators for filtering, projecting, sorting, and grouping data.
  
  // Where
  // Filters elements based on a condition.
  var oddNumbers = numbers.Where(n => n % 2 != 0);
  Console.WriteLine("Odd numbers:");
  foreach (var num in oddNumbers)
  {
      Console.WriteLine(num);
  }
  
  // Select
  // Projects each element into a new form.
  var squares = numbers.Select(n => n * n);
  Console.WriteLine("Squares of numbers:");
  foreach (var square in squares)
  {
      Console.WriteLine(square);
  }
  
  // OrderBy
  // Sorts elements in ascending order.
  var sortedNumbers = numbers.OrderBy(n => n);
  Console.WriteLine("Numbers in ascending order:");
  foreach (var num in sortedNumbers)
  {
      Console.WriteLine(num);
  }
  
  // GroupBy
  // Groups elements that share a common attribute.
  var groupedByParity = numbers.GroupBy(n => n % 2 == 0 ? "Even" : "Odd");
  Console.WriteLine("Numbers grouped by parity:");
  foreach (var group in groupedByParity)
  {
      Console.WriteLine(group.Key + " numbers:");
      foreach (var num in group)
      {
          Console.WriteLine(num);
      }
  }
  
  // LINQ to Objects
  // LINQ to Objects allows querying in-memory collections like arrays, lists, etc.
  
  var fruits = new List<string> { "apple", "banana", "cherry", "date", "elderberry" };
  
  // Query fruits that start with a vowel
  var fruitsWithVowelStart = from fruit in fruits
                             where "aeiou".Contains(fruit[0])
                             select fruit;
  
  Console.WriteLine("Fruits starting with a vowel:");
  foreach (var fruit in fruitsWithVowelStart)
  {
      Console.WriteLine(fruit);
  }
  
  // LINQ to XML (XDocument, XElement)
  // LINQ can be used to query and manipulate XML documents using the XDocument and XElement classes.
  
  using System.Xml.Linq;
  
  var xml = @"
  <books>
    <book id='1' genre='fantasy'>
      <title>The Hobbit</title>
      <author>J.R.R. Tolkien</author>
    </book>
    <book id='2' genre='sci-fi'>
      <title>Dune</title>
      <author>Frank Herbert</author>
    </book>
  </books>";
  
  var doc = XDocument.Parse(xml);
  
  // Querying XML to find books with a specific genre
  var fantasyBooks = from book in doc.Descendants("book")
                     where book.Attribute("genre")?.Value == "fantasy"
                     select book.Element("title")?.Value;
  
  Console.WriteLine("Fantasy books:");
  foreach (var title in fantasyBooks)
  {
      Console.WriteLine(title);
  }
  
  // Output:
  // Fantasy books:
  // The Hobbit
  
  // LINQ Query Syntax vs. Method Syntax
  // LINQ queries can be written using either query syntax (similar to SQL) or method syntax (using extension methods).
  
  var querySyntax = from n in numbers
                    where n > 5
                    select n;
  
  var methodSyntax = numbers.Where(n => n > 5);
  
  Console.WriteLine("Numbers greater than 5 using query syntax:");
  foreach (var num in querySyntax)
  {
      Console.WriteLine(num);
  }
  
  Console.WriteLine("Numbers greater than 5 using method syntax:");
  foreach (var num in methodSyntax)
  {
      Console.WriteLine(num);
  }
  
  // Output:
  // Numbers greater than 5 using query syntax:
  // 6
  // 7
  // 8
  // 9
  // 10
  // Numbers greater than 5 using method syntax:
  // 6
  // 7
  // 8
  // 9
  // 10
  
  // Both styles are functionally equivalent, and you can choose the one that you find more readable or convenient.
  `
  },
  {
    id: 'file-io-and-streams',
    label: 'File I/O & Streams',
    content: `
  // File I/O and Streams in C#
  
  // C# provides extensive support for reading and writing files, working with directories, and serializing data.
  // This guide covers basic to advanced file operations and demonstrates both synchronous and asynchronous methods.
  
  // Reading and Writing Files
  
  using System;
  using System.IO;
  
  // FileStream, StreamReader, StreamWriter
  
  // FileStream
  // FileStream is used to read from and write to any location in a file. It supports both synchronous and asynchronous operations.
  
  string filePath = "example.txt";
  
  // Writing to a file using FileStream
  using (FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
  {
      byte[] data = System.Text.Encoding.UTF8.GetBytes("Hello, FileStream!");
      fs.Write(data, 0, data.Length);
  }
  
  // Reading from a file using FileStream
  using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
  {
      byte[] buffer = new byte[fs.Length];
      fs.Read(buffer, 0, buffer.Length);
      string content = System.Text.Encoding.UTF8.GetString(buffer);
      Console.WriteLine("File content: " + content);  // Output: Hello, FileStream!
  }
  
  // StreamReader and StreamWriter
  // StreamReader and StreamWriter are convenient for reading and writing text files.
  
  string textFilePath = "example.txt";
  
  // Writing to a file using StreamWriter
  using (StreamWriter writer = new StreamWriter(textFilePath))
  {
      writer.WriteLine("Hello, StreamWriter!");
  }
  
  // Reading from a file using StreamReader
  using (StreamReader reader = new StreamReader(textFilePath))
  {
      string content = reader.ReadToEnd();
      Console.WriteLine("File content: " + content);  // Output: Hello, StreamWriter!
  }
  
  // Working with Directories
  
  // The Directory and DirectoryInfo classes provide methods for creating, moving, and enumerating through directories and subdirectories.
  
  string directoryPath = "ExampleDir";
  
  // Creating a directory
  Directory.CreateDirectory(directoryPath);
  
  // Checking if a directory exists
  if (Directory.Exists(directoryPath))
  {
      Console.WriteLine("Directory created successfully.");
  }
  
  // Listing files in a directory
  string[] files = Directory.GetFiles(directoryPath);
  Console.WriteLine("Files in directory: " + string.Join(", ", files));
  
  // Working with DirectoryInfo
  DirectoryInfo dirInfo = new DirectoryInfo(directoryPath);
  
  // Getting directory information
  Console.WriteLine("Directory Name: " + dirInfo.Name);
  Console.WriteLine("Full Path: " + dirInfo.FullName);
  
  // Moving and Deleting directories
  // Directory.Move("sourceDir", "destDir");
  // Directory.Delete(directoryPath, true); // true to delete all subdirectories and files
  
  // Binary Serialization
  
  // BinaryFormatter is used to serialize and deserialize objects into a binary format.
  
  using System.Runtime.Serialization.Formatters.Binary;
  
  [Serializable]
  public class Person
  {
      public string Name { get; set; }
      public int Age { get; set; }
  }
  
  Person person = new Person { Name = "John", Age = 30 };
  
  // Serializing the object to a binary file
  using (FileStream fs = new FileStream("person.bin", FileMode.Create))
  {
      BinaryFormatter formatter = new BinaryFormatter();
      formatter.Serialize(fs, person);
  }
  
  // Deserializing the object from a binary file
  using (FileStream fs = new FileStream("person.bin", FileMode.Open))
  {
      BinaryFormatter formatter = new BinaryFormatter();
      Person deserializedPerson = (Person)formatter.Deserialize(fs);
      Console.WriteLine("Deserialized Person: " + deserializedPerson.Name + ", Age: " + deserializedPerson.Age);
  }
  
  // XML Serialization
  
  // XmlSerializer is used to serialize and deserialize objects into an XML format.
  
  using System.Xml.Serialization;
  
  Person xmlPerson = new Person { Name = "Alice", Age = 25 };
  
  // Serializing the object to an XML file
  using (FileStream fs = new FileStream("person.xml", FileMode.Create))
  {
      XmlSerializer serializer = new XmlSerializer(typeof(Person));
      serializer.Serialize(fs, xmlPerson);
  }
  
  // Deserializing the object from an XML file
  using (FileStream fs = new FileStream("person.xml", FileMode.Open))
  {
      XmlSerializer serializer = new XmlSerializer(typeof(Person));
      Person deserializedXmlPerson = (Person)serializer.Deserialize(fs);
      Console.WriteLine("Deserialized XML Person: " + deserializedXmlPerson.Name + ", Age: " + deserializedXmlPerson.Age);
  }
  
  // Using async and await for Asynchronous File Operations
  
  // C# supports asynchronous file operations to prevent blocking the main thread.
  
  string asyncFilePath = "asyncExample.txt";
  
  // Writing to a file asynchronously
  async Task WriteToFileAsync(string path, string content)
  {
      using (StreamWriter writer = new StreamWriter(path, append: true))
      {
          await writer.WriteLineAsync(content);
      }
  }
  
  await WriteToFileAsync(asyncFilePath, "Hello, asynchronous writing!");
  
  // Reading from a file asynchronously
  async Task<string> ReadFromFileAsync(string path)
  {
      using (StreamReader reader = new StreamReader(path))
      {
          return await reader.ReadToEndAsync();
      }
  }
  
  string asyncContent = await ReadFromFileAsync(asyncFilePath);
  Console.WriteLine("Async file content: " + asyncContent);  // Output: Hello, asynchronous writing!
  `
  },
  {
    id: 'asynchronous-programming',
    label: 'Asynchronous Programming',
    content: `
  // Asynchronous Programming in C#
  
  // Asynchronous programming allows you to write non-blocking code, which improves the responsiveness and performance of applications.
  // C# supports asynchronous programming with the 'async' and 'await' keywords, as well as tasks and other asynchronous patterns.
  
  // async and await Syntax
  
  // The 'async' keyword is used to define an asynchronous method. The 'await' keyword is used to pause the execution of an async method until the awaited task is complete.
  
  using System;
  using System.Threading.Tasks;
  
  // Defining an asynchronous method
  public async Task<int> GetNumberAsync()
  {
      // Simulating an asynchronous operation using Task.Delay
      await Task.Delay(1000);  // Pauses the method for 1 second
      return 42;
  }
  
  // Calling an asynchronous method
  public async Task MainAsync()
  {
      int result = await GetNumberAsync();  // Waits for GetNumberAsync to complete
      Console.WriteLine($"Result: {result}");  // Output: Result: 42
  }
  
  await MainAsync();
  
  // Futures and the Future<T> Trait
  
  // The Task type represents an asynchronous operation. It can be used with or without a return value (Task<T>).
  // Task<T> is similar to Future<T> in other languages, representing a future result of an asynchronous operation.
  
  // Asynchronous I/O (async/await)
  
  // Asynchronous I/O operations can be performed without blocking the main thread. This is especially useful for applications that involve file or network I/O.
  
  using System.IO;
  
  public async Task ReadFileAsync(string filePath)
  {
      using (StreamReader reader = new StreamReader(filePath))
      {
          string content = await reader.ReadToEndAsync();
          Console.WriteLine(content);
      }
  }
  
  await ReadFileAsync("example.txt");
  
  // Using Task.Run for CPU-bound work
  
  // For CPU-bound operations, you can use Task.Run to run a method on a separate thread and await its completion.
  
  public int Calculate(int value)
  {
      // Simulating a CPU-bound operation
      int result = 0;
      for (int i = 0; i < value; i++)
      {
          result += i;
      }
      return result;
  }
  
  public async Task<int> CalculateAsync(int value)
  {
      // Task.Run executes the Calculate method on a background thread
      return await Task.Run(() => Calculate(value));
  }
  
  int calcResult = await CalculateAsync(10000);
  Console.WriteLine($"Calculation Result: {calcResult}");
  
  // Asynchronous Methods and Exceptions
  
  // Exceptions thrown in asynchronous methods can be caught using try-catch within the async method or when awaiting the task.
  
  public async Task PerformOperationAsync()
  {
      try
      {
          // Simulating an operation that throws an exception
          await Task.Run(() => throw new InvalidOperationException("Operation failed"));
      }
      catch (Exception ex)
      {
          Console.WriteLine($"Caught Exception: {ex.Message}");  // Output: Caught Exception: Operation failed
      }
  }
  
  await PerformOperationAsync();
  
  // async and await with Parallel Tasks
  
  // You can run multiple tasks in parallel using Task.WhenAll, which waits for all the provided tasks to complete.
  
  public async Task ParallelTasksAsync()
  {
      Task task1 = Task.Delay(1000);  // Simulates a task taking 1 second
      Task task2 = Task.Delay(2000);  // Simulates a task taking 2 seconds
      Task task3 = Task.Delay(3000);  // Simulates a task taking 3 seconds
  
      await Task.WhenAll(task1, task2, task3);  // Waits for all tasks to complete
      Console.WriteLine("All tasks completed.");
  }
  
  await ParallelTasksAsync();
  
  // stream and async Iterators
  
  // The 'IAsyncEnumerable<T>' interface represents an asynchronous sequence of elements, allowing iteration over data that is being produced asynchronously.
  
  using System.Collections.Generic;
  using System.Threading;
  
  // Defining an asynchronous iterator
  public async IAsyncEnumerable<int> GenerateNumbersAsync()
  {
      for (int i = 0; i < 10; i++)
      {
          await Task.Delay(500);  // Simulates an asynchronous delay
          yield return i;  // Returns the next element in the sequence
      }
  }
  
  // Consuming an asynchronous iterator
  public async Task ConsumeNumbersAsync()
  {
      await foreach (var number in GenerateNumbersAsync())
      {
          Console.WriteLine(number);  // Outputs numbers from 0 to 9 with a delay
      }
  }
  
  await ConsumeNumbersAsync();
  
  // Summary
  
  // Asynchronous programming in C# is essential for writing efficient and responsive applications.
  // The 'async' and 'await' keywords, along with the Task type and async iterators, provide powerful tools for handling asynchronous operations.
  
  `
  },
  {
    id: 'reflection-and-attributes',
    label: 'Reflection & Attributes',
    content: `
  // Reflection and Attributes in C#
  
  // Reflection is a powerful feature in C# that allows you to inspect and manipulate metadata about types, methods, and fields at runtime.
  // Attributes provide a way to add metadata to code elements and can be accessed through reflection.
  
  // Inspecting Types and Members
  
  // The 'System.Reflection' namespace contains classes that allow you to inspect types and members (methods, fields, properties, etc.) at runtime.
  
  using System;
  using System.Reflection;
  
  public class Example
  {
      public int Number { get; set; }
      public void Display() => Console.WriteLine("Hello from Example class!");
  }
  
  public void InspectType()
  {
      // Getting the Type object for the Example class
      Type type = typeof(Example);
      
      // Displaying type information
      Console.WriteLine($"Type Name: {type.Name}");          // Output: Example
      Console.WriteLine($"Namespace: {type.Namespace}");     // Output: Namespace where Example class is defined
  
      // Getting and displaying members of the type
      MemberInfo[] members = type.GetMembers();
      foreach (var member in members)
      {
          Console.WriteLine($"{member.MemberType}: {member.Name}");
      }
  }
  
  InspectType();
  // Example Output:
  // Type Name: Example
  // Namespace: YourNamespace
  // Method: Display
  // Property: Number
  
  // Using Attributes
  
  // Attributes are used to add metadata to code elements such as classes, methods, and properties.
  // You can define custom attributes by deriving from the 'Attribute' class.
  
  [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
  public class CustomAttribute : Attribute
  {
      public string Description { get; }
      public CustomAttribute(string description)
      {
          Description = description;
      }
  }
  
  [Custom("This is a sample class with a custom attribute.")]
  public class SampleClass
  {
      [Custom("This is a sample method with a custom attribute.")]
      public void SampleMethod() { }
  }
  
  public void DisplayAttributes()
  {
      // Getting the type object for SampleClass
      Type type = typeof(SampleClass);
      
      // Displaying custom attributes applied to the class
      foreach (var attribute in type.GetCustomAttributes(true))
      {
          Console.WriteLine($"Class Attribute: {attribute}");
      }
  
      // Getting the method info for SampleMethod
      MethodInfo method = type.GetMethod("SampleMethod");
      
      // Displaying custom attributes applied to the method
      foreach (var attribute in method.GetCustomAttributes(true))
      {
          Console.WriteLine($"Method Attribute: {attribute}");
      }
  }
  
  DisplayAttributes();
  // Example Output:
  // Class Attribute: CustomAttribute: This is a sample class with a custom attribute.
  // Method Attribute: CustomAttribute: This is a sample method with a custom attribute.
  
  // Custom Attributes
  
  // Custom attributes are defined by creating a class that derives from 'System.Attribute'.
  // You can specify usage restrictions and define properties or fields to store attribute data.
  
  [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
  public class ImportantAttribute : Attribute
  {
      public string Note { get; }
      public ImportantAttribute(string note)
      {
          Note = note;
      }
  }
  
  public class ImportantData
  {
      [Important("This is a critical property.")]
      public string CriticalProperty { get; set; }
  }
  
  // Reflection Emit
  
  // The 'System.Reflection.Emit' namespace allows you to define and create new types at runtime.
  // This advanced feature is often used in dynamic code generation and frameworks that require runtime type creation.
  
  using System.Reflection.Emit;
  
  public void CreateDynamicType()
  {
      // Creating a dynamic assembly and module
      AssemblyName assemblyName = new AssemblyName("DynamicAssembly");
      AssemblyBuilder assemblyBuilder = AssemblyBuilder.DefineDynamicAssembly(assemblyName, AssemblyBuilderAccess.Run);
      ModuleBuilder moduleBuilder = assemblyBuilder.DefineDynamicModule("MainModule");
  
      // Defining a new type in the dynamic module
      TypeBuilder typeBuilder = moduleBuilder.DefineType("DynamicClass", TypeAttributes.Public);
  
      // Defining a method in the new type
      MethodBuilder methodBuilder = typeBuilder.DefineMethod("DynamicMethod", MethodAttributes.Public, null, null);
      ILGenerator ilGenerator = methodBuilder.GetILGenerator();
      ilGenerator.EmitWriteLine("Hello from dynamically created method!");
      ilGenerator.Emit(OpCodes.Ret);
  
      // Creating the new type
      Type dynamicType = typeBuilder.CreateType();
  
      // Invoking the dynamic method
      object instance = Activator.CreateInstance(dynamicType);
      dynamicType.GetMethod("DynamicMethod").Invoke(instance, null);
  }
  
  CreateDynamicType();
  // Example Output:
  // Hello from dynamically created method!
  
  // Runtime Type Identification
  
  // C# provides several mechanisms to check and work with types at runtime.
  
  object obj = new Example();
  Type objType = obj.GetType();
  Console.WriteLine($"Object Type: {objType}");  // Output: Object Type: Example
  
  // The 'typeof' operator gets the Type object for a type known at compile time.
  Console.WriteLine(typeof(int));  // Output: System.Int32
  
  // The 'is' keyword checks if an object is of a specific type.
  Console.WriteLine(obj is Example);  // Output: True
  
  // The 'as' keyword attempts to cast an object to a specific type and returns null if the cast fails.
  Example exampleObj = obj as Example;
  if (exampleObj != null)
  {
      exampleObj.Display();  // Output: Hello from Example class!
  }
  
  // Summary
  
  // Reflection allows for powerful runtime type inspection and manipulation, while attributes enable the addition of metadata to code elements.
  // These features are fundamental for advanced programming techniques in C#, such as frameworks and dynamic code generation.
  
  `
  },
  {
    id: 'networking-and-web-services',
    label: 'Networking & Web Services',
    content: `
  // Networking and Web Services in C#
  
  // C# provides extensive support for networking and web services, allowing you to create clients and servers, make web requests, and consume APIs. 
  // Here's an overview of some key networking and web services functionalities in C#.
  
  // Creating TCP/IP Clients and Servers
  
  /* 
     C# supports TCP/IP communication using the \`TcpClient\` and \`TcpListener\` classes in the \`System.Net.Sockets\` namespace.
     These classes provide methods to connect to servers, listen for client connections, and transmit data.
  */
  
  using System;
  using System.Net;
  using System.Net.Sockets;
  using System.Text;
  
  public void TcpClientExample()
  {
      try
      {
          // Connecting to a TCP server
          TcpClient client = new TcpClient("127.0.0.1", 8000);
          
          // Sending data to the server
          NetworkStream stream = client.GetStream();
          byte[] data = Encoding.UTF8.GetBytes("Hello, Server!");
          stream.Write(data, 0, data.Length);
          
          // Receiving response from the server
          byte[] response = new byte[256];
          int bytesRead = stream.Read(response, 0, response.Length);
          Console.WriteLine($"Received: {Encoding.UTF8.GetString(response, 0, bytesRead)}");
          
          // Closing the connection
          stream.Close();
          client.Close();
      }
      catch (Exception e)
      {
          Console.WriteLine($"Exception: {e.Message}");
      }
  }
  
  public void TcpServerExample()
  {
      try
      {
          // Setting up a TCP listener
          TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 8000);
          server.Start();
          Console.WriteLine("Server started. Waiting for a connection...");
          
          // Accepting a client connection
          TcpClient client = server.AcceptTcpClient();
          Console.WriteLine("Client connected.");
          
          // Receiving data from the client
          NetworkStream stream = client.GetStream();
          byte[] buffer = new byte[256];
          int bytesRead = stream.Read(buffer, 0, buffer.Length);
          Console.WriteLine($"Received: {Encoding.UTF8.GetString(buffer, 0, bytesRead)}");
          
          // Sending response to the client
          byte[] response = Encoding.UTF8.GetBytes("Hello, Client!");
          stream.Write(response, 0, response.Length);
          
          // Closing the connection
          stream.Close();
          client.Close();
          server.Stop();
      }
      catch (Exception e)
      {
          Console.WriteLine($"Exception: {e.Message}");
      }
  }
  
  // Web Requests and Responses
  
  /* 
     To perform web requests and handle responses in C#, you can use the \`HttpClient\`, \`HttpWebRequest\`, and \`HttpWebResponse\` classes from the \`System.Net.Http\` and \`System.Net\` namespaces.
     These classes allow you to interact with web servers, retrieve resources, and send data over HTTP.
  */
  
  using System.Net.Http;
  using System.Threading.Tasks;
  
  public async Task HttpClientExample()
  {
      HttpClient client = new HttpClient();
  
      try
      {
          // Sending a GET request
          HttpResponseMessage response = await client.GetAsync("https://api.github.com");
          response.EnsureSuccessStatusCode();
  
          // Reading the response content
          string responseBody = await response.Content.ReadAsStringAsync();
          Console.WriteLine(responseBody);
      }
      catch (HttpRequestException e)
      {
          Console.WriteLine($"Request error: {e.Message}");
      }
      finally
      {
          // Disposing the client
          client.Dispose();
      }
  }
  
  // Consuming RESTful APIs
  
  /* 
     C# can consume RESTful APIs using the \`HttpClient\` class. This involves making HTTP requests (GET, POST, PUT, DELETE) to endpoints and processing the JSON or XML responses.
  */
  
  public async Task ConsumeRestApi()
  {
      HttpClient client = new HttpClient();
      
      try
      {
          // Sending a GET request to a RESTful API
          HttpResponseMessage response = await client.GetAsync("https://jsonplaceholder.typicode.com/posts/1");
          response.EnsureSuccessStatusCode();
          
          // Reading and deserializing the response content
          string responseBody = await response.Content.ReadAsStringAsync();
          Console.WriteLine(responseBody);
      }
      catch (HttpRequestException e)
      {
          Console.WriteLine($"Request error: {e.Message}");
      }
      finally
      {
          // Disposing the client
          client.Dispose();
      }
  }
  
  // SOAP Web Services
  
  /* 
     SOAP web services can be consumed and created in C# using WCF (\`Windows Communication Foundation\`), \`WebService\` class, or even with \`HttpClient\` for HTTP-based SOAP requests.
     WCF provides a framework for building service-oriented applications, allowing for easy creation and consumption of SOAP services.
  */
  
  using System.ServiceModel;
  
  // Defining a service contract
  [ServiceContract]
  public interface ICalculator
  {
      [OperationContract]
      int Add(int x, int y);
  }
  
  // Implementing the service
  public class CalculatorService : ICalculator
  {
      public int Add(int x, int y) => x + y;
  }
  
  // Hosting the service
  public void HostSoapService()
  {
      ServiceHost host = new ServiceHost(typeof(CalculatorService), new Uri("http://localhost:8001/CalculatorService"));
      host.AddServiceEndpoint(typeof(ICalculator), new BasicHttpBinding(), "");
      host.Open();
      Console.WriteLine("Service hosted and running...");
      Console.ReadLine();
      host.Close();
  }
  
  // ASP.NET Core for Web Development
  
  /* 
     ASP.NET Core is a cross-platform framework for building modern web applications and services. It supports REST APIs, MVC pattern, and Razor pages.
     ASP.NET Core integrates seamlessly with C# and provides extensive tools and libraries for web development.
  */
  
  using Microsoft.AspNetCore.Builder;
  using Microsoft.AspNetCore.Hosting;
  using Microsoft.Extensions.DependencyInjection;
  
  public class Startup
  {
      public void ConfigureServices(IServiceCollection services)
      {
          services.AddControllers(); // Adding support for controllers and API endpoints
      }
  
      public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
      {
          if (env.IsDevelopment())
          {
              app.UseDeveloperExceptionPage();
          }
          
          app.UseRouting();
          
          app.UseEndpoints(endpoints =>
          {
              endpoints.MapControllers(); // Mapping API endpoints
          });
      }
  }
  
  // Program.cs entry point for ASP.NET Core application
  public class Program
  {
      public static void Main(string[] args)
      {
          CreateHostBuilder(args).Build().Run();
      }
  
      public static IHostBuilder CreateHostBuilder(string[] args) =>
          Host.CreateDefaultBuilder(args)
              .ConfigureWebHostDefaults(webBuilder =>
              {
                  webBuilder.UseStartup<Startup>();
              });
  }
  
  // This basic example sets up a simple ASP.NET Core application that supports API controllers and routing.
  `
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];