export const rubyCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  # Comments in Ruby
  
  # Single-line Comment
  # A single-line comment starts with a hash symbol (#).
  # Anything after the # on that line is ignored by the Ruby interpreter.
  
  # Example:
  # This is a single-line comment in Ruby
  
  =begin
  Multi-line Comment
  Multi-line comments in Ruby are created using =begin and =end.
  Everything between =begin and =end is treated as a comment and ignored by the interpreter.
  Note that the =begin and =end keywords should be at the beginning of the line.
  
  Example:
  =begin
  This is a multi-line comment in Ruby.
  It spans across multiple lines.
  =end
  
  =begin
  Note: Multi-line comments using =begin and =end are not commonly used in Ruby.
  Instead, it is more idiomatic to use multiple single-line comments.
  =end
  
  # Usage in Code:
  # Single-line comments are often used to explain specific lines of code or to add notes.
  
  # Example Code:
  def add(a, b)
    # This method adds two numbers and returns the result.
    a + b
  end
  
  puts add(3, 4) # Output: 7, this line adds 3 and 4 and prints the result
    `
  },
  {
    id: 'variables_assignment',
    label: 'Variables & Assignment',
    content: `
  # Variables and Assignment in Ruby
  
  # Variable Declaration and Initialization
  # Ruby variables are dynamically typed, which means you don't need to specify their type.
  # Variables can hold different types of data, and their types can change as the program runs.
  
  # Example:
  name = "Alice"     # String variable
  age = 30           # Integer variable
  height = 5.9       # Float variable
  is_student = true  # Boolean variable
  
  # Printing Variables
  # You can print variables using 'puts' or 'print'.
  puts "Name: #{name}"    # Output: Name: Alice
  puts "Age: #{age}"      # Output: Age: 30
  puts "Height: #{height}"# Output: Height: 5.9
  puts "Is Student: #{is_student}" # Output: Is Student: true
  
  # Changing Variable Values
  # Variables can be reassigned with values of the same or different types.
  age = "thirty"    # Reassigning to a string
  height = 180      # Reassigning to an integer
  is_student = nil  # Reassigning to nil
  
  puts "Updated Age: #{age}"     # Output: Updated Age: thirty
  puts "Updated Height: #{height}" # Output: Updated Height: 180
  puts "Is Student: #{is_student}" # Output: Is Student: 
  
  # Multiple Assignment
  # You can assign multiple variables in a single line.
  x, y, z = 1, 2, 3
  puts "x: #{x}, y: #{y}, z: #{z}" # Output: x: 1, y: 2, z: 3
  
  # Swapping Variables
  # Ruby makes it easy to swap values between two variables.
  x, y = y, x
  puts "After swapping - x: #{x}, y: #{y}" # Output: After swapping - x: 2, y: 1
  
  # Variable Scope
  # Variables have different scopes based on their naming conventions:
  # - Local variables start with a lowercase letter or underscore (_).
  # - Instance variables start with an @ symbol.
  # - Class variables start with @@.
  # - Global variables start with a $ symbol.
  
  local_var = "I am local"   # Local variable
  @instance_var = "I am an instance variable"   # Instance variable
  @@class_var = "I am a class variable"   # Class variable
  $global_var = "I am a global variable"  # Global variable
  
  # Constants
  # Constants are variables that should not change and are defined using an uppercase letter.
  PI = 3.14159
  puts "Value of PI: #{PI}" # Output: Value of PI: 3.14159
  
  # Trying to change a constant will result in a warning, but it is not enforced.
  PI = 3.14 # This will give a warning: warning: already initialized constant PI
  puts "New value of PI: #{PI}" # Output: New value of PI: 3.14
    `
  },
  {
    id: 'data_types',
    label: 'Data Types',
    content: `
  # Data Types in Ruby
  
  # Integer
  # Ruby integers can be positive or negative numbers, and they can be very large.
  integer_num = 42
  negative_integer = -100
  large_integer = 9876543210123456789
  
  puts "Integer: #{integer_num}"            # Output: Integer: 42
  puts "Negative Integer: #{negative_integer}" # Output: Negative Integer: -100
  puts "Large Integer: #{large_integer}"    # Output: Large Integer: 9876543210123456789
  
  # Float
  # Floats are numbers with decimal points. They can also be very large or very small.
  float_num = 3.14159
  negative_float = -2.71828
  large_float = 1.23e10  # Scientific notation
  
  puts "Float: #{float_num}"                # Output: Float: 3.14159
  puts "Negative Float: #{negative_float}"  # Output: Negative Float: -2.71828
  puts "Large Float: #{large_float}"        # Output: Large Float: 1.23e10
  
  # String
  # Strings are sequences of characters. They can be enclosed in single or double quotes.
  single_quoted_string = 'Hello, World!'
  double_quoted_string = "Ruby is fun!"
  interpolated_string = "The value of pi is approximately #{float_num}."
  
  puts "Single Quoted String: #{single_quoted_string}" # Output: Single Quoted String: Hello, World!
  puts "Double Quoted String: #{double_quoted_string}" # Output: Double Quoted String: Ruby is fun!
  puts "Interpolated String: #{interpolated_string}"   # Output: Interpolated String: The value of pi is approximately 3.14159.
  
  # Symbol
  # Symbols are immutable, reusable constants represented by a name prefixed with a colon.
  # They are often used as identifiers or keys in hashes.
  symbol = :ruby
  another_symbol = :ruby
  
  puts "Symbol: #{symbol}"               # Output: Symbol: ruby
  puts "Symbols are the same: #{symbol == another_symbol}" # Output: Symbols are the same: true
  
  # Boolean
  # Booleans represent true or false values.
  is_active = true
  is_finished = false
  
  puts "Is Active: #{is_active}"         # Output: Is Active: true
  puts "Is Finished: #{is_finished}"     # Output: Is Finished: false
  
  # Checking Types
  # Ruby provides methods to check the type of a variable.
  puts "Type of integer_num: #{integer_num.class}"    # Output: Type of integer_num: Integer
  puts "Type of float_num: #{float_num.class}"        # Output: Type of float_num: Float
  puts "Type of single_quoted_string: #{single_quoted_string.class}" # Output: Type of single_quoted_string: String
  puts "Type of symbol: #{symbol.class}"              # Output: Type of symbol: Symbol
  puts "Type of is_active: #{is_active.class}"        # Output: Type of is_active: TrueClass
  puts "Type of is_finished: #{is_finished.class}"    # Output: Type of is_finished: FalseClass
    `
  },
  {
    id: 'basic_operations',
    label: 'Operations',
    content: `
  # Basic Operations in Ruby
  
  # Arithmetic Operations
  # These include addition, subtraction, multiplication, division, modulus, and exponentiation.
  
  a = 10
  b = 3
  
  addition = a + b               # Addition
  subtraction = a - b            # Subtraction
  multiplication = a * b         # Multiplication
  division = a / b               # Division (integer division)
  modulus = a % b                # Modulus (remainder of division)
  exponentiation = a ** b        # Exponentiation (a raised to the power of b)
  
  puts "Addition: #{addition}"             # Output: Addition: 13
  puts "Subtraction: #{subtraction}"       # Output: Subtraction: 7
  puts "Multiplication: #{multiplication}" # Output: Multiplication: 30
  puts "Division: #{division}"             # Output: Division: 3
  puts "Modulus: #{modulus}"               # Output: Modulus: 1
  puts "Exponentiation: #{exponentiation}" # Output: Exponentiation: 1000
  
  # Comparison Operations
  # These operations compare two values and return a boolean result.
  
  x = 5
  y = 8
  
  equals = x == y            # Equality
  not_equals = x != y        # Inequality
  greater_than = x > y       # Greater than
  less_than = x < y          # Less than
  greater_or_equal = x >= y  # Greater than or equal to
  less_or_equal = x <= y     # Less than or equal to
  
  puts "Equals: #{equals}"                 # Output: Equals: false
  puts "Not Equals: #{not_equals}"         # Output: Not Equals: true
  puts "Greater Than: #{greater_than}"     # Output: Greater Than: false
  puts "Less Than: #{less_than}"           # Output: Less Than: true
  puts "Greater or Equal: #{greater_or_equal}" # Output: Greater or Equal: false
  puts "Less or Equal: #{less_or_equal}"   # Output: Less or Equal: true
  
  # Logical Operations
  # These operations are used to combine or invert boolean values.
  
  condition1 = true
  condition2 = false
  
  and_operation = condition1 && condition2  # Logical AND
  or_operation = condition1 || condition2   # Logical OR
  not_operation = !condition1               # Logical NOT
  
  puts "AND Operation: #{and_operation}"    # Output: AND Operation: false
  puts "OR Operation: #{or_operation}"      # Output: OR Operation: true
  puts "NOT Operation: #{not_operation}"    # Output: NOT Operation: false
  
  # Combining Logical and Comparison Operations
  # You can combine comparison and logical operations to form complex expressions.
  
  complex_expression = (x < y) && (a + b > 10)
  puts "Complex Expression: #{complex_expression}" # Output: Complex Expression: true
  `
  },
  {
    id: 'constants_global_variables',
    label: 'Constants & Global Variables',
    content: `
  // Constants and Global Variables in Ruby
  
  # Constants
  # In Ruby, constants are typically defined using uppercase letters.
  # They are meant to remain unchanged throughout the program.
  
  PI = 3.14159
  MAX_LIMIT = 100
  
  puts "Value of PI: #{PI}"       # Output: Value of PI: 3.14159
  puts "Maximum Limit: #{MAX_LIMIT}" # Output: Maximum Limit: 100
  
  # Constants are accessible from anywhere within their scope.
  # However, Ruby will warn you if you try to change the value of a constant.
  # Uncommenting the next line will generate a warning:
  # PI = 3.14
  
  # Global Variables
  # Global variables start with a dollar sign ($) and are accessible from anywhere in the program.
  # They have a global scope.
  
  $global_var = "I am a global variable"
  
  def display_global
    puts $global_var  # Can be accessed inside a method
  end
  
  display_global     # Output: I am a global variable
  
  # Modifying Global Variables
  $global_var = "I am modified globally"
  
  puts $global_var   # Output: I am modified globally
  
  # Be cautious with global variables, as they can be changed from anywhere in the program,
  # potentially leading to unexpected behavior.
  
  # Example showing scope access
  def another_method
    puts "Inside another_method, $global_var is: #{$global_var}"
  end
  
  another_method     # Output: Inside another_method, $global_var is: I am modified globally
  
  # Constants vs Global Variables
  # - Constants are intended to remain unchanged and are generally used for fixed values.
  # - Global variables can be modified and are accessible from any part of the program, 
  #   but their use is usually discouraged due to potential for unintended side effects.
  `
  },
  {
    id: 'conditional_statements',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in Ruby
  
  # If, Else, and Elsif
  # The 'if' statement is used to execute code based on a condition.
  # 'else' provides an alternative path when the 'if' condition is not met.
  # 'elsif' (Ruby's spelling of 'else if') allows checking multiple conditions.
  
  age = 25
  
  if age < 18
    puts "You are a minor."  # Executes if age is less than 18
  elsif age >= 18 && age < 65
    puts "You are an adult."  # Executes if age is between 18 and 64
  else
    puts "You are a senior."  # Executes if age is 65 or older
  end
  
  # Output: You are an adult.
  
  # Unless
  # The 'unless' statement is the opposite of 'if'.
  # It executes code only if the condition is false.
  
  is_raining = false
  
  unless is_raining
    puts "Let's go for a walk!"  # Executes because is_raining is false
  else
    puts "Stay indoors."  # Would execute if is_raining was true
  end
  
  # Output: Let's go for a walk!
  
  # Case Statement
  # The 'case' statement is used for comparing a variable against multiple values.
  # It is similar to the switch statement in other languages.
  
  grade = 'B'
  
  case grade
  when 'A'
    puts "Excellent!"
  when 'B'
    puts "Good job!"
  when 'C'
    puts "You can do better."
  else
    puts "Keep trying!"
  end
  
  # Output: Good job!
  
  # Inline Conditional Modifiers
  # Ruby allows for single-line conditionals using 'if' and 'unless' at the end of the statement.
  
  number = 10
  puts "Number is even." if number.even?    # Executes because number is even
  puts "Number is odd." unless number.even? # Doesn't execute because number is not odd
  
  # Output: Number is even.
  
  # Example: Checking multiple conditions
  weather = 'sunny'
  
  case weather
  when 'sunny'
    puts "Wear sunglasses."
  when 'rainy'
    puts "Take an umbrella."
  when 'snowy'
    puts "Wear a coat."
  else
    puts "Check the weather forecast!"
  end
  
  # Output: Wear sunglasses.
  `
  },
  {
    id: 'loops',
    label: 'Loops',
    content: `
  // Loops in Ruby
  
  # While Loop
  # The 'while' loop runs as long as the given condition is true.
  count = 0
  while count < 5
    puts "Count is #{count}"
    count += 1  # Increment the counter to avoid an infinite loop
  end
  
  # Output:
  # Count is 0
  # Count is 1
  # Count is 2
  # Count is 3
  # Count is 4
  
  # Until Loop
  # The 'until' loop runs as long as the given condition is false.
  number = 10
  until number <= 5
    puts "Number is #{number}"
    number -= 1  # Decrement the number to avoid an infinite loop
  end
  
  # Output:
  # Number is 10
  # Number is 9
  # Number is 8
  # Number is 7
  # Number is 6
  
  # For Loop
  # The 'for' loop iterates over a range or a collection.
  for i in 1..5
    puts "Iteration #{i}"
  end
  
  # Output:
  # Iteration 1
  # Iteration 2
  # Iteration 3
  # Iteration 4
  # Iteration 5
  
  # Each Loop
  # The 'each' method is used to iterate over elements of an array or hash.
  # It takes a block of code and applies it to each element.
  
  fruits = ['apple', 'banana', 'cherry']
  fruits.each do |fruit|
    puts "I like #{fruit}"
  end
  
  # Output:
  # I like apple
  # I like banana
  # I like cherry
  
  # Another example of 'each' loop for hash
  prices = { apple: 1.2, banana: 0.5, cherry: 2.5 }
  prices.each do |fruit, price|
    puts "The price of #{fruit} is $#{price}"
  end
  
  # Output:
  # The price of apple is $1.2
  # The price of banana is $0.5
  # The price of cherry is $2.5
  `
  },
  {
    id: 'loop_control',
    label: 'Loop Control',
    content: `
  // Loop Control in Ruby
  
  # break - Exits the loop immediately
  # Example: Breaking out of a loop when a condition is met
  for i in 1..5
    if i == 3
      break  # Exit the loop when i is 3
    end
    puts "i is #{i}"
  end
  
  # Output:
  # i is 1
  # i is 2
  
  # next - Skips the rest of the current iteration and moves to the next one
  # Example: Skipping even numbers in a loop
  for i in 1..5
    if i.even?
      next  # Skip the rest of the loop for even numbers
    end
    puts "i is #{i}"
  end
  
  # Output:
  # i is 1
  # i is 3
  # i is 5
  
  # redo - Repeats the current iteration from the start without re-evaluating the condition
  # Example: Repeating a specific iteration of a loop
  count = 0
  for i in 1..5
    if i == 3 && count < 2
      count += 1
      redo  # Repeat the iteration for i == 3 twice
    end
    puts "i is #{i}, count is #{count}"
  end
  
  # Output:
  # i is 1, count is 0
  # i is 2, count is 0
  # i is 3, count is 1
  # i is 3, count is 2
  # i is 4, count is 2
  # i is 5, count is 2
  
  # retry - Restart the loop from the beginning (valid only in ${`rescue`} blocks)
  # Example: Retrying a loop after handling an exception
  attempt = 0
  begin
    for i in 1..5
      puts "i is #{i}, attempt is #{attempt}"
      if i == 3 && attempt < 1
        attempt += 1
        raise "Retry loop"  # Raise an exception to trigger retry
      end
    end
  rescue
    retry  # Restart the loop from the beginning
  end
  
  # Output:
  # i is 1, attempt is 0
  # i is 2, attempt is 0
  # i is 3, attempt is 0
  # i is 1, attempt is 1
  # i is 2, attempt is 1
  # i is 3, attempt is 1
  # i is 4, attempt is 1
  # i is 5, attempt is 1
  `
  },
  {
    id: 'iterators_enumerators',
    label: 'Iterators & Enumerators',
    content: `
  // Iterators and Enumerators in Ruby
  
  # Iterators with blocks
  
  # Using each with an array
  [1, 2, 3, 4, 5].each do |number|
    puts "Number: #{number}"
  end
  
  # Output:
  # Number: 1
  # Number: 2
  # Number: 3
  # Number: 4
  # Number: 5
  
  # Using each with a hash
  hash = { a: 1, b: 2, c: 3 }
  hash.each do |key, value|
    puts "Key: #{key}, Value: #{value}"
  end
  
  # Output:
  # Key: a, Value: 1
  # Key: b, Value: 2
  # Key: c, Value: 3
  
  # Using map to transform an array
  doubled_numbers = [1, 2, 3, 4, 5].map { |number| number * 2 }
  puts "Doubled Numbers: #{doubled_numbers}"
  
  # Output:
  # Doubled Numbers: [2, 4, 6, 8, 10]
  
  # Using select to filter an array
  even_numbers = [1, 2, 3, 4, 5].select { |number| number.even? }
  puts "Even Numbers: #{even_numbers}"
  
  # Output:
  # Even Numbers: [2, 4]
  
  # Using reject to exclude certain elements
  odd_numbers = [1, 2, 3, 4, 5].reject { |number| number.even? }
  puts "Odd Numbers: #{odd_numbers}"
  
  # Output:
  # Odd Numbers: [1, 3, 5]
  
  # Enumerator objects
  
  # Creating an enumerator from an array
  enumerator = [10, 20, 30].each
  puts "First Element: #{enumerator.next}"
  puts "Second Element: #{enumerator.next}"
  puts "Third Element: #{enumerator.next}"
  
  # Output:
  # First Element: 10
  # Second Element: 20
  # Third Element: 30
  
  # Creating an enumerator from a range
  range_enumerator = (1..5).to_enum
  range_enumerator.each do |number|
    puts "Range Number: #{number}"
  end
  
  # Output:
  # Range Number: 1
  # Range Number: 2
  # Range Number: 3
  # Range Number: 4
  # Range Number: 5
  
  # Infinite enumerator with lazy evaluation
  # Generates squares of numbers lazily
  lazy_squares = (1..Float::INFINITY).lazy.map { |x| x * x }
  puts "First 5 Squares: #{lazy_squares.first(5)}"
  
  # Output:
  # First 5 Squares: [1, 4, 9, 16, 25]
  
  # Custom enumerators
  
  # Defining a custom enumerator with Enumerator.new
  custom_enumerator = Enumerator.new do |yielder|
    i = 0
    loop do
      yielder << i
      i += 1
    end
  end
  
  # Accessing first 5 elements from the custom enumerator
  puts "Custom Enumerator First 5: #{custom_enumerator.take(5)}"
  
  # Output:
  # Custom Enumerator First 5: [0, 1, 2, 3, 4]
  
  # Rewinding the enumerator and iterating again
  custom_enumerator.rewind
  puts "Custom Enumerator Next Element: #{custom_enumerator.next}"
  
  # Output:
  # Custom Enumerator Next Element: 0
  `
  },
  {
    id: 'methods',
    label: 'Methods',
    content: `
  // Methods in Ruby
  
  # Defining and Calling Methods
  
  # Simple method definition
  def greet
    puts "Hello, World!"
  end
  
  # Calling the method
  greet  # Output: Hello, World!
  
  # Method with parameters
  def greet_with_name(name)
    puts "Hello, #{name}!"
  end
  
  # Calling the method with an argument
  greet_with_name("Alice")  # Output: Hello, Alice!
  
  # Method with default parameters
  def greet_with_default(name = "Guest")
    puts "Hello, #{name}!"
  end
  
  # Calling the method with and without an argument
  greet_with_default("Bob")  # Output: Hello, Bob!
  greet_with_default          # Output: Hello, Guest!
  
  # Method with variable number of arguments
  def sum(*numbers)
    numbers.reduce(0) { |total, num| total + num }
  end
  
  # Calling the method with various numbers of arguments
  puts sum(1, 2, 3)  # Output: 6
  puts sum(4, 5, 6, 7)  # Output: 22
  
  # Method with keyword arguments
  def print_info(name:, age:)
    puts "Name: #{name}, Age: #{age}"
  end
  
  # Calling the method with keyword arguments
  print_info(name: "Charlie", age: 30)  # Output: Name: Charlie, Age: 30
  
  # Return Values
  
  # Method that returns a value
  def add(a, b)
    a + b
  end
  
  # Capturing the return value
  result = add(5, 7)
  puts "Sum: #{result}"  # Output: Sum: 12
  
  # Method that returns multiple values
  def multiple_values
    return 1, 2, 3
  end
  
  # Capturing multiple return values
  x, y, z = multiple_values
  puts "x: #{x}, y: #{y}, z: #{z}"  # Output: x: 1, y: 2, z: 3
  
  # Method Aliases
  
  # Define a method
  def original_method
    puts "This is the original method"
  end
  
  # Create an alias
  alias new_method_name original_method
  
  # Calling the alias
  new_method_name  # Output: This is the original method
  
  # Method Overriding
  
  # Define a class with a method
  class Parent
    def display
      puts "Parent display method"
    end
  end
  
  # Inherit the class and override the method
  class Child < Parent
    def display
      puts "Child display method"
    end
  end
  
  # Creating instances and calling the method
  parent_instance = Parent.new
  parent_instance.display  # Output: Parent display method
  
  child_instance = Child.new
  child_instance.display  # Output: Child display method
  
  `
  },
  {
    id: 'strings_symbols',
    label: 'Strings & Symbols',
    content: `
  # Strings and Symbols in Ruby
  
  # String Manipulation
  
  str = "Hello, Ruby!"
  
  # Get the length of the string
  puts str.length  # Output: 12
  
  # Convert to uppercase
  puts str.upcase  # Output: HELLO, RUBY!
  
  # Convert to lowercase
  puts str.downcase  # Output: hello, ruby!
  
  # Replace a substring (first occurrence)
  puts str.sub("Ruby", "World")  # Output: Hello, World!
  
  # Replace all occurrences of a substring
  str = "Hello, Ruby! Hello, World!"
  puts str.gsub("Hello", "Hi")  # Output: Hi, Ruby! Hi, World!
  
  # String Interpolation and Concatenation
  
  name = "Alice"
  age = 30
  
  # Interpolating variables into a string
  greeting = "Hello, #{name}. You are #{age} years old."
  puts greeting  # Output: Hello, Alice. You are 30 years old.
  
  # Concatenating strings
  part1 = "Hello, "
  part2 = "World!"
  combined = part1 + part2
  puts combined  # Output: Hello, World!
  
  # Multiline Strings (Heredocs)
  
  # Using heredoc to define a multiline string
  multiline_str = <<-HEREDOC
  This is a multiline string.
  It spans multiple lines.
  You can include anything here.
  HEREDOC
  
  puts multiline_str
  # Output:
  # This is a multiline string.
  # It spans multiple lines.
  # You can include anything here.
  
  # Symbols and Their Use Cases
  
  # Defining symbols
  sym1 = :my_symbol
  sym2 = :another_symbol
  
  # Symbols are immutable and unique
  puts sym1.object_id == :my_symbol.object_id  # Output: true
  puts sym2.object_id == :another_symbol.object_id  # Output: true
  
  # Using symbols as hash keys
  person = { name: "Bob", age: 25 }
  puts person[:name]  # Output: Bob
  puts person[:age]   # Output: 25
  
  # Symbols are often used as keys for their performance benefits over strings
  `
  },
  {
    id: 'arrays_hashes',
    label: 'Arrays & Hashes',
    content: `
  # Arrays and Hashes in Ruby
  
  # Creating and Accessing Arrays
  
  # Creating an array
  arr = [1, 2, 3, 4, 5]
  
  # Accessing elements
  puts arr[0]  # Output: 1
  puts arr[-1]  # Output: 5
  
  # Array Methods
  
  # Adding elements to the end
  arr.push(6)
  puts arr.inspect  # Output: [1, 2, 3, 4, 5, 6]
  
  # Removing elements from the end
  removed_element = arr.pop
  puts removed_element  # Output: 6
  
  # Adding elements to the beginning
  arr.unshift(0)
  puts arr.inspect  # Output: [0, 1, 2, 3, 4, 5]
  
  # Removing elements from the beginning
  removed_element = arr.shift
  puts removed_element  # Output: 0
  
  # Iterating over elements and transforming with map
  doubled_arr = arr.map { |num| num * 2 }
  puts doubled_arr.inspect  # Output: [2, 4, 6, 8, 10]
  
  # Filtering elements with select
  even_numbers = arr.select { |num| num.even? }
  puts even_numbers.inspect  # Output: [2, 4]
  
  # Creating and Accessing Hashes
  
  # Creating a hash
  person = { name: "Alice", age: 30, city: "New York" }
  
  # Accessing values
  puts person[:name]  # Output: Alice
  puts person[:age]   # Output: 30
  
  # Hash Methods
  
  # Retrieving keys
  puts person.keys.inspect  # Output: [:name, :age, :city]
  
  # Retrieving values
  puts person.values.inspect  # Output: ["Alice", 30, "New York"]
  
  # Iterating over key-value pairs with each
  person.each do |key, value|
    puts "#{key}: #{value}"
  end
  # Output:
  # name: Alice
  # age: 30
  # city: New York
  
  # Merging hashes
  additional_info = { occupation: "Engineer", hobbies: ["Reading", "Traveling"] }
  merged_hash = person.merge(additional_info)
  puts merged_hash.inspect
  # Output: {:name=>"Alice", :age=>30, :city=>"New York", :occupation=>"Engineer", :hobbies=>["Reading", "Traveling"]}
  
  # Nested Arrays and Hashes
  
  # Array of arrays
  matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  puts matrix[1][2]  # Output: 6
  
  # Hash with nested arrays
  team = {
    name: "Team A",
    members: [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 }
    ]
  }
  
  puts team[:members][0][:name]  # Output: Alice
  `
  },
  {
    id: 'blocks_procs_lambdas',
    label: 'Blocks, Procs, and Lambdas',
    content: `
  # Blocks, Procs, and Lambdas in Ruby
  
  # Blocks
  
  # A block is a chunk of code enclosed between do..end or curly braces.
  # It can be passed to methods as an implicit argument.
  
  # Using a block with the 'each' method
  [1, 2, 3].each do |number|
    puts number * 2
  end
  # Output:
  # 2
  # 4
  # 6
  
  # Passing a block to a method
  def greet
    yield if block_given?
  end
  
  # Calling the method with a block
  greet { puts "Hello from the block!" }  # Output: Hello from the block!
  
  # Blocks can also be passed with do..end syntax
  greet do
    puts "Hello again from the block!"
  end
  # Output: Hello again from the block!
  
  # Procs
  
  # Procs are objects that encapsulate blocks of code.
  # They can be stored in variables and passed around.
  
  # Creating a Proc
  my_proc = Proc.new { |name| puts "Hello, #{name}!" }
  
  # Calling the Proc
  my_proc.call("Alice")  # Output: Hello, Alice!
  
  # Passing a Proc to a method
  def repeat(proc, times)
    times.times { proc.call }
  end
  
  # Using the Proc with the method
  my_proc = Proc.new { puts "This is a Proc!" }
  repeat(my_proc, 3)
  # Output:
  # This is a Proc!
  # This is a Proc!
  # This is a Proc!
  
  # Lambdas
  
  # Lambdas are similar to Procs but have more strict argument handling and return behavior.
  # They are also objects and can be stored and passed around.
  
  # Creating a Lambda
  my_lambda = lambda { |name| puts "Hello, #{name} from lambda!" }
  
  # Calling the Lambda
  my_lambda.call("Bob")  # Output: Hello, Bob from lambda!
  
  # Differences Between Blocks, Procs, and Lambdas
  
  # 1. Blocks are not objects, while Procs and Lambdas are.
  #    Blocks are passed to methods and used with 'yield'.
  #    Procs and Lambdas can be stored in variables and passed around like regular objects.
  
  # 2. Procs and Lambdas have different argument handling:
  #    Procs allow mismatched arguments without errors, while Lambdas enforce strict argument matching.
  
  # 3. Return behavior differs:
  #    A 'return' inside a Proc returns from the enclosing method, while a 'return' inside a Lambda returns from the Lambda itself.
  
  # Example showing the argument handling and return behavior differences
  def test_proc_vs_lambda
    my_proc = Proc.new { |a, b| puts "Proc: #{a}, #{b}" }
    my_lambda = lambda { |a, b| puts "Lambda: #{a}, #{b}" }
  
    my_proc.call(1)           # Output: Proc: 1,
    my_lambda.call(1) rescue puts "Lambda argument error"  # Raises error, Output: Lambda argument error
  
    my_proc.call(1, 2, 3)     # Output: Proc: 1, 2
    my_lambda.call(1, 2, 3) rescue puts "Lambda argument error"  # Raises error, Output: Lambda argument error
  end
  
  test_proc_vs_lambda
  
  def test_return_behavior
    my_proc = Proc.new { return "Returning from Proc" }
    my_lambda = lambda { return "Returning from Lambda" }
  
    puts my_proc.call  # This line won't be executed as the Proc exits the method
    puts my_lambda.call  # Output: Returning from Lambda
    puts "End of method"  # This line won't be reached for Proc but will be for Lambda
  end
  
  test_return_behavior  # Output: Returning from Proc
  `
  },
  {
    id: 'oop_ruby',
    label: 'OOP',
    content: `
  # Object-Oriented Programming in Ruby
  
  # Classes and Objects
  
  # A class is a blueprint for creating objects (instances).
  # It encapsulates data for the object and methods to manipulate that data.
  
  class Person
    # Constructor method to initialize an object
    def initialize(name, age)
      @name = name  # Instance variable
      @age = age    # Instance variable
    end
  
    # Instance method
    def introduce
      puts "Hi, I'm #{@name} and I'm #{@age} years old."
    end
  end
  
  # Creating an object (instance) of the Person class
  person1 = Person.new("Alice", 30)
  person1.introduce  # Output: Hi, I'm Alice and I'm 30 years old.
  
  # Instance Variables and Methods
  
  # Instance variables are prefixed with '@' and are unique to each instance of the class.
  # Instance methods can access these variables and perform operations.
  
  class Dog
    def initialize(breed, name)
      @breed = breed  # Instance variable
      @name = name    # Instance variable
    end
  
    # Instance method to display dog details
    def display_details
      puts "#{@name} is a #{@breed}."
    end
  end
  
  dog1 = Dog.new("Labrador", "Buddy")
  dog1.display_details  # Output: Buddy is a Labrador.
  
  # Class Variables and Methods
  
  # Class variables are prefixed with '@@' and are shared among all instances of the class.
  # Class methods are defined using 'self' and can operate on class variables.
  
  class Vehicle
    @@count = 0  # Class variable to count the number of vehicles
  
    def initialize(type, brand)
      @type = type  # Instance variable
      @brand = brand  # Instance variable
      @@count += 1  # Increment the class variable count
    end
  
    def display_info
      puts "This is a #{@brand} #{@type}."
    end
  
    # Class method to return the total number of vehicles
    def self.total_vehicles
      @@count
    end
  end
  
  car = Vehicle.new("Car", "Toyota")
  bike = Vehicle.new("Motorcycle", "Harley-Davidson")
  
  car.display_info  # Output: This is a Toyota Car.
  bike.display_info  # Output: This is a Harley-Davidson Motorcycle.
  
  puts "Total vehicles: #{Vehicle.total_vehicles}"  # Output: Total vehicles: 2
  
  # Inheritance and Method Overriding
  
  # Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass).
  # Method overriding allows a subclass to provide a specific implementation for a method defined in its superclass.
  
  class Animal
    def speak
      puts "Animal sound"
    end
  end
  
  class Cat < Animal
    # Overriding the 'speak' method
    def speak
      puts "Meow"
    end
  end
  
  animal = Animal.new
  animal.speak  # Output: Animal sound
  
  cat = Cat.new
  cat.speak  # Output: Meow
  
  # Modules and Mixins
  
  # Modules are a way to group methods that can be mixed into classes.
  # They cannot be instantiated but can be included in classes to add functionality.
  
  module Drivable
    def drive
      puts "Driving the vehicle"
    end
  end
  
  class Car
    include Drivable  # Including the module
  
    def initialize(model)
      @model = model  # Instance variable
    end
  
    def info
      puts "This is a #{@model}."
    end
  end
  
  my_car = Car.new("Tesla Model S")
  my_car.info  # Output: This is a Tesla Model S.
  my_car.drive  # Output: Driving the vehicle
  
  # Access Control (public, private, protected)
  
  # Ruby uses access control keywords to restrict access to methods and variables:
  # - public: accessible from anywhere
  # - private: accessible only within the defining class
  # - protected: accessible within the defining class and its subclasses
  
  class AccessControlExample
    def public_method
      puts "This is a public method."
      private_method  # Can call a private method within the class
    end
  
    private
  
    def private_method
      puts "This is a private method."
    end
  
    protected
  
    def protected_method
      puts "This is a protected method."
    end
  end
  
  access_example = AccessControlExample.new
  access_example.public_method  # Output: This is a public method. This is a private method.
  
  # access_example.private_method  # This will raise an error
  # access_example.protected_method  # This will also raise an error
  
  # Protected methods can be called within subclasses or instances of the same class.
  class SubClassExample < AccessControlExample
    def call_protected
      protected_method  # Calling the protected method from the superclass
    end
  end
  
  subclass_example = SubClassExample.new
  subclass_example.call_protected  # Output: This is a protected method.
  `
  },
  {
    id: 'exceptions_handling',
    label: 'Exception Handling',
    content: `
  # Exception Handling in Ruby
  
  # Exception handling is a way to manage errors gracefully in Ruby.
  # It allows a program to continue running even when an error occurs, by providing mechanisms to catch and handle exceptions.
  
  # Using begin, rescue, ensure Blocks
  
  # The begin block contains code that might raise an exception.
  # The rescue block catches and handles the exception.
  # The ensure block contains code that runs regardless of whether an exception was raised.
  
  begin
    # Code that may raise an exception
    result = 10 / 0
    puts "Result is #{result}"
  rescue ZeroDivisionError => e
    # Handling the exception
    puts "An error occurred: #{e.message}"
  ensure
    # Code that will always execute
    puts "This block runs no matter what."
  end
  
  # Output:
  # An error occurred: divided by 0
  # This block runs no matter what.
  
  # Multiple rescue clauses can handle different types of exceptions.
  
  begin
    # Code that may raise different types of exceptions
    file = File.open("nonexistent_file.txt")
    data = file.read
    puts data
  rescue Errno::ENOENT => e
    # Handling file not found exception
    puts "File not found: #{e.message}"
  rescue StandardError => e
    # Handling all other standard errors
    puts "An error occurred: #{e.message}"
  ensure
    # Ensuring the file is closed if it was opened
    file.close if file
    puts "Cleanup code executed."
  end
  
  # Output:
  # File not found: No such file or directory - nonexistent_file.txt
  # Cleanup code executed.
  
  # Using raise Keyword
  
  # The raise keyword allows you to raise an exception manually.
  # It can be used to signal an error condition explicitly.
  
  def divide_numbers(a, b)
    raise ArgumentError, "Division by zero is not allowed" if b == 0
    a / b
  end
  
  begin
    puts divide_numbers(10, 0)
  rescue ArgumentError => e
    puts "Caught an error: #{e.message}"
  end
  
  # Output:
  # Caught an error: Division by zero is not allowed
  
  # Creating Custom Exceptions
  
  # Custom exceptions can be created by subclassing the StandardError class.
  # This allows you to define specific error types for your application.
  
  class MyCustomError < StandardError
    def initialize(msg="My custom error occurred")
      super
    end
  end
  
  def check_value(value)
    raise MyCustomError, "Invalid value: #{value}" if value < 0
    puts "Valid value: #{value}"
  end
  
  begin
    check_value(-1)
  rescue MyCustomError => e
    puts e.message
  end
  
  # Output:
  # Invalid value: -1
  
  # Catching Exceptions with catch and throw
  
  # The catch and throw keywords provide a way to break out of deeply nested loops or methods.
  # catch defines a block with a label, and throw exits the block and returns a value.
  
  def find_target(arr, target)
    catch(:found) do
      arr.each_with_index do |value, index|
        if value == target
          puts "Target #{target} found at index #{index}"
          throw :found, index  # Exit the block and return the index
        end
      end
      puts "Target #{target} not found in the array."
    end
  end
  
  index = find_target([1, 2, 3, 4, 5], 3)
  puts "Returned index: #{index}"  # Output: Returned index: 2
  
  # Output:
  # Target 3 found at index 2
  # Returned index: 2
  `
  },
  {
    id: 'error_handling',
    label: 'Error Handling',
    content: `
  # Error Handling in Ruby
  
  # In Ruby, error handling is typically done using exceptions, but for the purpose of demonstrating error codes and similar mechanisms, we'll explore how some error handling is done at a lower level, especially when interfacing with system-level operations.
  
  # Error Codes and Return Values
  
  # When working with system calls or certain library functions, you might encounter operations that return error codes.
  # These error codes are numerical values that indicate what kind of error occurred.
  
  # Example of using system call with error codes:
  require 'ffi'
  
  # Using FFI to call a C standard library function to demonstrate error handling
  module LibC
    extend FFI::Library
    ffi_lib FFI::Library::LIBC
  
    attach_function :open, [:string, :int], :int
  end
  
  # Attempting to open a non-existent file, which will return an error code
  file_descriptor = LibC.open("nonexistent_file.txt", 0)
  
  if file_descriptor == -1
    puts "Failed to open file. Error code: #{FFI.errno}"
  else
    puts "File opened successfully with descriptor #{file_descriptor}"
  end
  
  # Output:
  # Failed to open file. Error code: 2
  
  # The FFI.errno method provides the last error number encountered by the FFI library,
  # similar to the global errno in C.
  
  # Using errno and Error Macros
  
  # In Ruby, you don't typically deal with errno directly, but for interfacing with C libraries or system-level functions,
  # you may need to understand how to interpret error codes using the errno variable.
  
  require 'ffi'
  
  module LibC
    extend FFI::Library
    ffi_lib FFI::Library::LIBC
  
    attach_function :open, [:string, :int], :int
    attach_function :strerror, [:int], :string
  end
  
  file_descriptor = LibC.open("nonexistent_file.txt", 0)
  
  if file_descriptor == -1
    error_code = FFI.errno
    puts "Error code: #{error_code}"
    puts "Error message: #{LibC.strerror(error_code)}"
  else
    puts "File opened successfully with descriptor #{file_descriptor}"
  end
  
  # Output:
  # Error code: 2
  # Error message: No such file or directory
  
  # The strerror function converts an error code into a human-readable string.
  # This is useful when diagnosing system-level errors.
  
  # Using perror and strerror Functions
  
  # In Ruby, there's no direct equivalent to perror, but you can use strerror for similar purposes
  # when dealing with system errors via FFI or native extensions.
  
  # Example to demonstrate the concept:
  require 'ffi'
  
  module LibC
    extend FFI::Library
    ffi_lib FFI::Library::LIBC
  
    attach_function :open, [:string, :int], :int
    attach_function :perror, [:string], :void
  end
  
  file_descriptor = LibC.open("nonexistent_file.txt", 0)
  
  if file_descriptor == -1
    LibC.perror("File open error")
  else
    puts "File opened successfully with descriptor #{file_descriptor}"
  end
  
  # Output:
  # File open error: No such file or directory
  
  # The perror function prints an error message based on the current value of errno.
  # It's a convenient way to print both a custom message and the corresponding error description.
  
  # In Ruby, for most typical error handling scenarios, you would use exception handling mechanisms (begin-rescue-end),
  # but understanding these lower-level concepts is crucial when interacting with C libraries or system-level functions.
  
  `
  },
  {
    id: 'file_handling',
    label: 'File Handling',
    content: `
  # File Handling in Ruby
  
  # Reading from Files
  
  # Reading the entire content of a file using File.read
  file_content = File.read("example.txt")
  puts "File content:\n#{file_content}"
  
  # Reading lines into an array using File.readlines
  lines = File.readlines("example.txt")
  puts "File lines:"
  lines.each { |line| puts line }
  
  # Writing to Files
  
  # Writing to a file using File.open with 'w' mode (write mode)
  File.open("output.txt", "w") do |file|
    file.write("This is a new line.\n")
    file.puts("This is another line using puts.")
  end
  
  # Writing to a file using File.write (simpler method)
  File.write("output_simple.txt", "Simple write operation.\n")
  
  # File Modes
  
  # Demonstrating different file modes
  # 'r' - read-only, 'w' - write-only, 'a' - append, 'r+' - read/write, 'w+' - read/write (truncate), 'a+' - read/write (append)
  
  File.open("example.txt", "r") do |file|
    puts "Reading file in 'r' mode:"
    puts file.read
  end
  
  File.open("append.txt", "a") do |file|
    file.puts("Appending a new line.")
  end
  
  # File Existence and Metadata
  
  # Checking if a file exists
  if File.exist?("example.txt")
    puts "example.txt exists."
  else
    puts "example.txt does not exist."
  end
  
  # Getting file size
  file_size = File.size("example.txt")
  puts "Size of example.txt: #{file_size} bytes."
  
  # Getting file modification time
  file_mtime = File.mtime("example.txt")
  puts "Last modified time of example.txt: #{file_mtime}"
  
  # Working with Directories
  
  # Listing directory contents using Dir.entries
  puts "Current directory contents:"
  Dir.entries(".").each { |entry| puts entry }
  
  # Creating a new directory
  Dir.mkdir("new_directory") unless Dir.exist?("new_directory")
  puts "new_directory created."
  
  # Removing a directory
  if Dir.exist?("new_directory")
    Dir.rmdir("new_directory")
    puts "new_directory removed."
  end
  
  # Changing the current directory
  Dir.chdir("..") do
    puts "Changed to parent directory:"
    puts Dir.pwd  # Prints the current directory path
  end
  `
  },
  {
    id: 'modules_mixins',
    label: 'Modules & Mixins',
    content: `
  # Modules and Mixins in Ruby
  
  # Modules are collections of methods and constants. They are used to group related functionality and to implement mixins.
  
  # Defining a module with methods and constants
  module MathOperations
    PI = 3.14159
  
    def self.add(a, b)
      a + b
    end
  
    def self.subtract(a, b)
      a - b
    end
  end
  
  # Using the module's methods and constants
  puts "PI value from MathOperations module: #{MathOperations::PI}"  # Output: PI value from MathOperations module: 3.14159
  puts "Addition: #{MathOperations.add(5, 3)}"  # Output: Addition: 8
  puts "Subtraction: #{MathOperations.subtract(5, 3)}"  # Output: Subtraction: 2
  
  # Including and Extending Modules
  module Greetings
    def greet
      "Hello!"
    end
  end
  
  class Person
    include Greetings  # include mixes in module methods as instance methods
  end
  
  person = Person.new
  puts person.greet  # Output: Hello!
  
  class Robot
    extend Greetings  # extend adds module methods as class methods
  end
  
  puts Robot.greet  # Output: Hello!
  
  # Namespaces and Module Scope
  # Modules can be used to create namespaces to avoid naming conflicts.
  
  module Animals
    class Dog
      def speak
        "Woof!"
      end
    end
  
    class Cat
      def speak
        "Meow!"
      end
    end
  end
  
  dog = Animals::Dog.new
  cat = Animals::Cat.new
  
  puts dog.speak  # Output: Woof!
  puts cat.speak  # Output: Meow!
  
  # Mixins and Composition
  # Mixins allow sharing functionality among classes without using inheritance.
  
  module Movable
    def move
      "I'm moving!"
    end
  end
  
  class Vehicle
    include Movable  # Adding Movable module as a mixin
  end
  
  class Person
    include Movable  # Adding Movable module as a mixin
  end
  
  car = Vehicle.new
  john = Person.new
  
  puts car.move  # Output: I'm moving!
  puts john.move  # Output: I'm moving!
  
  # include vs extend
  # include adds module methods as instance methods.
  # extend adds module methods as class methods.
  
  module Logger
    def log(message)
      puts "LOG: #{message}"
    end
  end
  
  class App
    include Logger  # include makes log method available as an instance method
  end
  
  app = App.new
  app.log("This is an instance log message.")  # Output: LOG: This is an instance log message.
  
  class AppSingleton
    extend Logger  # extend makes log method available as a class method
  end
  
  AppSingleton.log("This is a class log message.")  # Output: LOG: This is a class log message.
  `
  },
  {
    id: 'reflection_metaprogramming',
    label: 'Reflection & Metaprogramming',
    content: `
  # Reflection and Metaprogramming in Ruby
  
  # Reflection allows you to inspect and manipulate objects and their properties at runtime.
  # Metaprogramming enables writing code that can generate or modify other code.
  
  # Inspecting Objects
  
  class Person
    attr_accessor :name, :age
  
    def initialize(name, age)
      @name = name
      @age = age
    end
  
    def greet
      "Hello, my name is #{@name}"
    end
  end
  
  person = Person.new("Alice", 30)
  
  # Inspecting the class of the object
  puts person.class  # Output: Person
  
  # Listing all methods of the object
  puts person.methods.sort  # Output: [:age, :age=, :greet, :name, :name=, ...]
  
  # Listing instance variables
  puts person.instance_variables  # Output: [:@name, :@age]
  
  # Sending Messages
  
  # The send method allows calling a method dynamically by its name
  method_name = :greet
  puts person.send(method_name)  # Output: Hello, my name is Alice
  
  # The method_missing method catches calls to undefined methods and allows custom handling
  class DynamicPerson
    def method_missing(method, *args)
      "You tried to call: \#{method} with arguments: \#{args.join(', ')}"
    end
  end
  
  dynamic_person = DynamicPerson.new
  puts dynamic_person.undefined_method("arg1", "arg2")  # Output: You tried to call: undefined_method with arguments: arg1, arg2
  
  # Dynamic Method Definition
  
  # The define_method method allows defining methods dynamically at runtime
  class Animal
    ["dog", "cat", "cow"].each do |animal|
      define_method("speak_as_\#{animal}") do
        "The \#{animal} says: #{animal == 'dog' ? 'Woof!' : animal == 'cat' ? 'Meow!' : 'Moo!'}"
      end
    end
  end
  
  animal = Animal.new
  puts animal.speak_as_dog  # Output: The dog says: Woof!
  puts animal.speak_as_cat  # Output: The cat says: Meow!
  puts animal.speak_as_cow  # Output: The cow says: Moo!
  
  # Singleton Methods and Classes
  
  # Singleton methods are methods defined on a single object rather than on all instances of a class
  dog = "Buddy"
  
  def dog.bark
    "Woof!"
    end
  
  puts dog.bark  # Output: Woof!
  
  # Singleton classes (also known as eigenclasses or metaclasses) allow defining methods for a single object
  singleton_class = class << dog
    self
  end
  
  puts singleton_class.instance_methods(false)  # Output: [:bark]
  
  # Hooks and Callbacks
  
  # Hooks like included and extended are used to run code when a module is included or extended in a class
  
  module Greeting
    def self.included(base)
      puts "\#{base} has included the Greeting module"
    end
  
    def greet
      "Hello from the Greeting module!"
    end
  end
  
  class User
    include Greeting
  end
  
  # Output: User has included the Greeting module
  
  # The included method is called when a module is included in a class. Similarly, extended is called when a module is extended by a class.
  
  module Logging
    def self.extended(base)
      puts "\#{base} has extended the Logging module"
    end
  
    def log(message)
      puts "LOG: \#{message}"
    end
  end
  
  class Logger
    extend Logging
  end
  
  # Output: Logger has extended the Logging module
  Logger.log("This is a log message.")  # Output: LOG: This is a log message.
  `
  },
  {
    id: 'regex',
    label: 'Regular Expressions',
    content: `
  # Regular Expressions in Ruby
  
  # Creating and Using Regular Expressions
  
  # A regular expression is created using either \`//\` or \`Regexp.new\`
  
  pattern1 = /hello/  # Using \`//\`
  pattern2 = Regexp.new('hello')  # Using \`Regexp.new\`
  
  # Both patterns match the string "hello" in a case-sensitive manner
  
  # Matching Patterns
  
  # The \`=~\` operator returns the position of the first match or \`nil\` if there is no match
  
  puts "hello world" =~ /world/  # Output: 6 (index of the start of the match)
  puts "goodbye" =~ /hello/      # Output: nil (no match)
  
  # The \`match\` method returns a \`MatchData\` object if the pattern matches or \`nil\` if it does not
  
  match_data = "ruby123".match(/[a-z]+\\d+/)  // \`\\d+\` matches one or more digits following letters
  puts match_data  # Output: #<MatchData "ruby123">
  
  # The \`scan\` method returns an array of all occurrences of the pattern
  
  results = "one two three".scan(/\\w+/)  // \`\\w+\` matches one or more word characters (letters, digits, or underscores)
  puts results.inspect  # Output: ["one", "two", "three"]
  
  # Substitution and Replacement
  
  # The \`sub\` method replaces the first occurrence of a pattern with a replacement string
  
  text = "Hello World"
  puts text.sub(/World/, "Ruby")  # Output: Hello Ruby
  
  # The \`gsub\` method replaces all occurrences of a pattern with a replacement string
  
  text = "hello hello"
  puts text.gsub(/hello/, "hi")  # Output: hi hi
  
  # Regular Expression Options
  
  # Regular expressions can be modified with options like case-insensitivity (\`i\`) and multiline (\`m\`)
  
  pattern_case_insensitive = /hello/i
  puts "Hello".match(pattern_case_insensitive)  # Output: #<MatchData "Hello"> (match with different case)
  
  pattern_multiline = /start.*end/m
  multiline_text = "start here\\nand end here"
  puts multiline_text.match(pattern_multiline)  # Output: #<MatchData "start here\\nand end here"> (dot matches newlines with \`m\` option)
  
  # Common Regular Expression Patterns
  # \`\\d\`: digit (0-9)
  # \`\\w\`: word character (alphanumeric + underscore)
  # \`\\s\`: whitespace (spaces, tabs, newlines)
  # \`\\b\`: word boundary
  # \`.*\`: any character (0 or more times)
  # \`+?\`: one or more (non-greedy)
  # \`\\\`: escape special characters
  
  # Usage in Ruby
  
  # Extracting email addresses from text
  email_text = "Contact us at info@example.com or support@example.com"
  emails = email_text.scan(/[\\w.]+@[\\w.]+/)
  puts emails.inspect  # Output: ["info@example.com", "support@example.com"]
  
  # Validating a phone number format
  phone_number = "(123) 456-7890"
  valid_phone = phone_number.match(/\\(\\d{3}\\) \\d{3}-\\d{4}/)
  puts valid_phone  # Output: #<MatchData "(123) 456-7890">
  `
  },
  {
    id: 'gems_and_bundler',
    label: 'Gems & Bundler',
    content: `
  # Gems and Bundler in Ruby
  
  # Gems are packaged libraries or applications that extend Ruby's functionality.
  
  # Installing and Using Gems
  
  # To install a gem, use the \`gem install\` command.
  # gem install nokogiri  # Installs the Nokogiri gem for HTML, XML, and SAX parsing.
  
  # Once installed, you can use the gem in your Ruby code by requiring it.
  require 'nokogiri'
  doc = Nokogiri::HTML('<html><body><h1>Hello World</h1></body></html>')
  puts doc.at_css('h1').text  # Output: Hello World
  
  # Creating a Gem
  
  # Gems are typically created with a specific structure. Here's a basic example.
  
  # Step 1: Create a gem directory and navigate into it
  # mkdir my_gem && cd my_gem
  
  # Step 2: Initialize the gem structure
  # bundle gem my_gem  # This sets up the basic files and directories needed for a gem.
  
  # Step 3: Edit the gemspec file to include metadata and dependencies
  # my_gem.gemspec
  Gem::Specification.new do |spec|
    spec.name          = 'my_gem'
    spec.version       = '0.1.0'
    spec.summary       = 'A brief summary of my_gem'
    spec.description   = 'A more detailed description of my_gem'
    spec.authors       = ['Your Name']
    spec.files         = ['lib/my_gem.rb']  # Files included in the gem
    spec.require_paths = ['lib']  # Load paths
  end
  
  # Step 4: Build and publish the gem
  # gem build my_gem.gemspec  # Creates a .gem file.
  # gem push my_gem-0.1.0.gem  # Uploads the gem to RubyGems.org.
  
  # Managing Dependencies with Bundler
  
  # Bundler is a tool that manages gem dependencies for your Ruby applications.
  
  # Step 1: Create a Gemfile in your project directory
  # Gemfile
  source 'https://rubygems.org'  # The source of gems
  
  gem 'rails'  # Specify the gems your project needs
  gem 'nokogiri'
  
  # Step 2: Install the dependencies listed in the Gemfile
  # bundle install  # Installs all the gems specified in the Gemfile.
  
  # This creates a Gemfile.lock that locks the gem versions to ensure consistency.
  
  # Updating and Maintaining Gems
  
  # To update gems to their latest versions, use:
  # bundle update  # Updates all gems in the Gemfile.
  
  # For specific gems:
  # bundle update nokogiri  # Updates only the Nokogiri gem.
  
  # To see outdated gems:
  # bundle outdated  # Lists gems that have newer versions available.
  
  `
  },
  {
    id: 'command_line_apps',
    label: 'Command-Line Applications',
    content: `
  # Command-Line Applications in Ruby
  
  # ARGV and Command-Line Arguments
  
  # ARGV is an array that contains the command-line arguments passed to the Ruby script.
  # For example, running \`ruby script.rb arg1 arg2\` will populate ARGV with ["arg1", "arg2"].
  
  puts "Command-line arguments:"
  ARGV.each_with_index do |arg, index|
    puts "Argument \#{index}: \#{arg}"
  end
  # Output: 
  # Argument 0: arg1
  # Argument 1: arg2
  
  # Handling User Input
  
  # \`gets\` reads a line of input from the user, including the newline character.
  # \`chomp\` removes the trailing newline character from the input.
  
  puts "Enter your name:"
  name = gets.chomp  # Reads input and removes the newline character.
  puts "Hello, \#{name}!"  # Output: If user enters 'Alice', the output will be 'Hello, Alice!'
  
  # Printing to the Console
  
  # \`puts\` adds a newline after each argument.
  # \`print\` does not add a newline after each argument.
  # \`p\` prints the object in a more 'debug-friendly' format, using the \`.inspect\` method.
  
  puts "This is puts."  # Output: This is puts.
  print "This is print."  # Output: This is print. (on the same line)
  p "This is p."  # Output: "This is p."
  
  # Exiting a Program
  
  # \`exit\` terminates the program and optionally provides an exit status (default is 0).
  # \`exit!\` terminates the program immediately without calling any at_exit handlers.
  
  puts "This message will be printed."
  exit(0)  # Program exits with status 0 (success).
  puts "This message will not be printed."
  
  # To forcefully exit the program without cleanup, use \`exit!\`.
  # exit!(1)  # Program exits with status 1 (error) without cleanup. Uncomment to test.
  
  # Example Application: Simple Greeting Program
  
  # Save the following code in a file (e.g., \`greeting.rb\`) and run it with arguments:
  # \`ruby greeting.rb John\`
  
  if ARGV.length == 0
    puts "Please provide your name as a command-line argument."
    exit(1)
  end
  
  name = ARGV[0]
  puts "Hello, \#{name}!"
  
  # The program will greet the user based on the first command-line argument provided.
  # If no argument is provided, it will prompt for the name.
  `
  },
  {
    id: 'database_interaction',
    label: 'Database Interaction',
    content: `
  # Database Interaction in Ruby using ActiveRecord
  
  # ActiveRecord is a Ruby library for working with databases. It simplifies CRUD operations,
  # schema management, and relationships between tables.
  
  # Setup for the example:
  # - Install ActiveRecord and SQLite3 gems.
  # - Create and configure the database connection.
  # - Define a migration to set up the schema.
  # - Create a model to interact with the database.
  # - Perform CRUD operations and queries.
  
  # Install the required gems by running:
  # gem install activerecord sqlite3
  
  # Required Libraries
  require 'active_record'
  require 'sqlite3'
  
  # Establishing a Connection to an SQLite Database
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'example.db'
  )
  
  # Defining a Migration to Create a Table
  class CreateUsers < ActiveRecord::Migration[6.1]
    def change
      create_table :users do |t|
        t.string :name
        t.string :email
        t.timestamps  # Adds created_at and updated_at columns
      end
    end
  end
  
  # Running the Migration
  # Uncomment the following line to run the migration:
  # CreateUsers.new.change
  
  # Define a Model that Inherits from ActiveRecord::Base
  class User < ActiveRecord::Base
    # Validations, associations, and custom methods go here
  end
  
  # Performing CRUD Operations
  
  # Create - Adding New Records
  user = User.create(name: 'Alice', email: 'alice@example.com')
  puts "User created: \#{user.inspect}"  # Output: User created: <User id: 1, name: "Alice", email: "alice@example.com", ...>
  
  # Read - Fetching Records
  all_users = User.all
  puts "All users: \#{all_users.inspect}"  # Output: All users: [<User id: 1, name: "Alice", email: "alice@example.com", ...>]
  
  # Find a user by ID
  user = User.find(1)
  puts "User with ID 1: \#{user.inspect}"  # Output: User with ID 1: <User id: 1, name: "Alice", email: "alice@example.com", ...>
  
  # Update - Modifying Existing Records
  user.update(name: 'Alice Smith')
  puts "Updated user: \#{user.inspect}"  # Output: Updated user: <User id: 1, name: "Alice Smith", email: "alice@example.com", ...>
  
  # Delete - Removing Records
  user.destroy
  puts "User destroyed. Remaining users: \#{User.all.inspect}"  # Output: User destroyed. Remaining users: []
  
  # Querying and Relations
  
  # Add some sample data for querying examples
  User.create(name: 'Bob', email: 'bob@example.com')
  User.create(name: 'Charlie', email: 'charlie@example.com')
  
  # Query using where conditions
  bob = User.where(name: 'Bob').first
  puts "User named Bob: \#{bob.inspect}"  # Output: User named Bob: <User id: 2, name: "Bob", email: "bob@example.com", ...>
  
  # Using ActiveRecord Relations
  users_with_e_in_email = User.where("email LIKE '%e%'")
  puts "Users with 'e' in their email: \#{users_with_e_in_email.inspect}"
  # Output: Users with 'e' in their email: [<User id: 3, name: "Charlie", email: "charlie@example.com", ...>]
  
  # Managing Schema with Migrations
  
  # To create and manage your database schema, use migrations.
  # Run migrations using \`rake db:migrate\` in a Rakefile or Rails application.
  
  # Using Different Databases
  
  # The configuration for MySQL or PostgreSQL would be similar, but with different adapter settings:
  # ActiveRecord::Base.establish_connection(
  #   adapter: 'mysql2',  # or 'postgresql'
  #   host: 'localhost',
  #   database: 'your_database',
  #   username: 'your_username',
  #   password: 'your_password'
  # )
  
  # Summary:
  # - Connect to a database using ActiveRecord.
  # - Use migrations to manage your schema.
  # - Define models to represent your data.
  # - Perform CRUD operations and complex queries.
  # - Easily switch between different databases by changing the adapter settings.
  `
  }
  
  
  
  
  
  
  
  
];