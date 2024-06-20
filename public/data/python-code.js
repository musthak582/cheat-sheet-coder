export const pythonCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  # Single-line comments use the hash (#) symbol
  # They are useful for brief explanations or notes
  
  # Example of a single-line comment
  x = 42  # This is an inline comment explaining that x is set to 42
  
  """
  Multi-line comments, often called docstrings when placed at the beginning of a module, class, or function,
  are enclosed in triple quotes (either ''' or """). They can span multiple lines.
  """
  
  """
  Example of a multi-line comment:
  This is a longer comment that can span multiple lines.
  It's useful for detailed explanations or documentation.
  """
  
  # Alternatively, multi-line comments can also use multiple single-line comments:
  # This is a multi-line comment
  # using single-line comment symbols.
  # It can be just as effective for longer explanations.
  
  # Docstrings are a special type of multi-line comment used for documentation.
  def example_function():
      """
      This is a docstring for the example_function.
      It explains what the function does.
      """
      pass
  
  # Docstrings can also be used in classes and methods
  class ExampleClass:
      """
      This is a docstring for the ExampleClass.
      It describes the purpose and usage of the class.
      """
      def method(self):
          """
          This is a docstring for the method.
          It explains the method's functionality.
          """
          pass
  `
  },
  {
    id: 'variables_and_assignment',
    label: 'Variables & Assignment',
    content: `
  # Variables in Python are used to store data values.
  # Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.
  
  # Variable assignment examples:
  x = 5       # x is of type int
  y = "Hello" # y is of type str
  z = 3.14    # z is of type float
  
  # Python is dynamically typed, meaning you do not need to declare variable types explicitly.
  
  # Variable names in Python:
  # - Must start with a letter (a-z, A-Z) or underscore (_)
  # - Can contain letters, numbers, and underscores
  # - Case-sensitive (age, Age, and AGE are three different variables)
  
  # Assigning multiple values to multiple variables:
  a, b, c = 1, 2, 3
  
  # Assigning the same value to multiple variables:
  d = e = f = "same"
  
  # Constants in Python (convention):
  # Constants are usually declared and assigned in uppercase letters.
  MAX_VALUE = 100
  
  # Variable scope:
  # - Variables created outside of functions are global by default.
  # - Local variables are defined within a function and cannot be accessed outside of it without special syntax.
  
  # Example of global and local variables:
  global_var = "global" # Global variable
  
  def example_function():
      local_var = "local" # Local variable
      print("Inside function:", local_var)
      print("Inside function accessing global variable:", global_var)
  
  example_function()
  # print("Outside function:", local_var) # This would cause an error because local_var is not accessible outside the function
  
  # Variable reassignment:
  variable_reassign = "initial value"
  variable_reassign = "new value" # Variable value can be changed or reassigned
  
  # Deleting variables:
  del variable_reassign
  
  # Note: Python does not have block-level scope; variables inside blocks like if statements or loops retain their values even after the block exits.
  `
  },
  {
    id: 'data_types',
    label: 'Data Types',
    content: `
  # Data types specify the type of data that variables can hold in a programming language.
  
  # Basic Data Types in Python:
  
  # 1. Integer (int):
  x = 10
  
  # 2. Float (float):
  y = 3.14
  
  # 3. String (str):
  name = "Alice"
  
  # 4. Boolean (bool):
  is_valid = True
  
  # 5. NoneType (None):
  value = None
  
  # 6. Complex (complex):
  z = 5 + 2j
  
  # Checking the type of a variable:
  print(type(x))       # <class 'int'>
  print(type(y))       # <class 'float'>
  print(type(name))    # <class 'str'>
  print(type(is_valid))# <class 'bool'>
  print(type(value))   # <class 'NoneType'>
  print(type(z))       # <class 'complex'>
  
  # Type Conversion:
  # Converting from one data type to another is done using constructors like int(), float(), str(), etc.
  a = float(10)
  b = int(3.14)
  c = str(5)
  
  # Dynamic Typing:
  # Python is dynamically typed, meaning you don't need to declare the type of a variable explicitly.
  dynamic_var = 10     # dynamic_var is of type int
  dynamic_var = "Hello"# dynamic_var is now of type str
  
  # Type Inference:
  # Python uses type inference to determine the type of variables based on the assigned value.
  inferred_var = 10    # inferred_var is of type int
  inferred_var = 3.14  # inferred_var is now of type float
  
  # Complex Data Types:
  
  # 1. List:
  my_list = [1, 2, 3, 4, 5]
  
  # 2. Tuple:
  my_tuple = (1, "hello", 3.14)
  
  # 3. Set:
  my_set = {1, 2, 3, 4, 5}
  
  # 4. Dictionary:
  my_dict = {"name": "Alice", "age": 30}
  
  # 5. Bytes:
  my_bytes = b"Hello"
  
  # 6. Bytearray:
  my_bytearray = bytearray(10)
  
  # 7. Range:
  my_range = range(5)
  
  # Special Data Types:
  
  # 1. Ellipsis (...)
  ellipsis_var = ...
  
  # 2. NotImplemented:
  not_implemented_var = NotImplemented
  
  # 3. Boolean Values:
  true_var = True
  false_var = False
  `
  },
  {
    id: 'basic_operations',
    label: 'Basic Operations',
    content: `
  # Basic Operations in Python
  
  # Arithmetic Operations:
  a = 10
  b = 3
  
  # Addition (+)
  addition = a + b       # 10 + 3 = 13
  
  # Subtraction (-)
  subtraction = a - b    # 10 - 3 = 7
  
  # Multiplication (*)
  multiplication = a * b # 10 * 3 = 30
  
  # Division (/)
  division = a / b       # 10 / 3 = 3.3333 (float)
  
  # Floor Division (//)
  floor_division = a // b# 10 // 3 = 3 (integer)
  
  # Modulus (%)
  modulus = a % b        # 10 % 3 = 1 (remainder)
  
  # Exponentiation (**)
  exponentiation = a ** b# 10 ** 3 = 1000
  
  # Comparison Operations:
  x = 5
  y = 10
  
  # Equal to (==)
  equal_to = x == y      # False
  
  # Not equal to (!=)
  not_equal_to = x != y  # True
  
  # Greater than (>)
  greater_than = x > y   # False
  
  # Less than (<)
  less_than = x < y      # True
  
  # Greater than or equal to (>=)
  greater_than_or_equal = x >= y  # False
  
  # Less than or equal to (<=)
  less_than_or_equal = x <= y     # True
  
  # Logical Operations:
  p = True
  q = False
  
  # Logical AND (and)
  logical_and = p and q  # False
  
  # Logical OR (or)
  logical_or = p or q    # True
  
  # Logical NOT (not)
  logical_not_p = not p  # False
  logical_not_q = not q  # True
  `
  },
  {
    id: 'strings_and_string_methods',
    label: 'Strings & String Methods',
    content: `
  # Strings and String Methods in Python
  
  # Define a string
  message = "Hello, Python!"
  
  # String length
  length = len(message)   # 14
  
  # Accessing characters (indexing)
  first_char = message[0]       # 'H'
  last_char = message[-1]       # '!'
  
  # Slicing strings
  substring = message[7:13]     # 'Python'
  
  # Concatenation
  greeting = "Hello"
  name = "Alice"
  full_greeting = greeting + ", " + name + "!"   # 'Hello, Alice!'
  
  # String interpolation (formatted strings)
  formatted_greeting = f"{greeting}, {name}!"    # 'Hello, Alice!'
  
  # String methods
  lowercase = message.lower()      # 'hello, python!'
  uppercase = message.upper()      # 'HELLO, PYTHON!'
  capitalized = message.capitalize()  # 'Hello, python!'
  replaced = message.replace('Python', 'World')  # 'Hello, World!'
  
  # Checking substrings
  contains_hello = 'Hello' in message   # True
  
  # Splitting strings
  words = message.split(',')    # ['Hello', ' Python!']
  
  # Stripping whitespace
  text = "  Hello, World!  "
  stripped = text.strip()      # 'Hello, World!'
  
  # String formatting with placeholders
  formatted = "Name: {}, Age: {}".format("Alice", 30)   # 'Name: Alice, Age: 30'
  `
  },
  {
    id: 'numbers',
    label: 'Numbers',
    content: `
  # Numbers in Python
  
  # Integer assignment
  number = 10
  
  # Floating point assignment
  float_number = 3.14
  
  # Arithmetic operations
  sum_result = 10 + 5      # 15
  difference = 10 - 5      # 5
  product = 10 * 5         # 50
  division = 10 / 5        # 2.0 (float division)
  integer_division = 10 // 5   # 2 (integer division)
  remainder = 10 % 3       # 1 (remainder of division)
  
  # Exponentiation
  power = 2 ** 3           # 8 (2 raised to the power of 3)
  
  # Increment and decrement
  number += 1              # Increment by 1
  number -= 1              # Decrement by 1
  
  # Absolute value
  absolute_value = abs(-10)   # 10
  
  # Type conversion
  integer_from_float = int(3.14)   # 3 (conversion from float to int)
  float_from_integer = float(10)   # 10.0 (conversion from int to float)
  
  # Built-in mathematical functions
  import math
  square_root = math.sqrt(16)     # 4.0 (square root)
  `
  },
  {
    id: 'lists',
    label: 'Lists',
    content: `
  # Lists in Python
  
  # Creating a list
  my_list = [1, 2, 3, 4, 5]
  
  # Accessing elements
  first_element = my_list[0]      # 1 (first element)
  last_element = my_list[-1]      # 5 (last element)
  
  # Slicing a list
  sliced_list = my_list[1:4]      # [2, 3, 4] (elements from index 1 to 3)
  partial_slice = my_list[:3]     # [1, 2, 3] (elements from start to index 2)
  reverse_list = my_list[::-1]    # [5, 4, 3, 2, 1] (reversed list)
  
  # Modifying elements
  my_list[0] = 10                 # [10, 2, 3, 4, 5] (modify first element)
  
  # Adding elements
  my_list.append(6)               # [10, 2, 3, 4, 5, 6] (append at end)
  my_list.insert(1, 1.5)          # [10, 1.5, 2, 3, 4, 5, 6] (insert at index 1)
  
  # Removing elements
  removed_element = my_list.pop() # 6 (remove and return last element)
  my_list.remove(3)               # [10, 1.5, 2, 4, 5] (remove by value)
  
  # List operations
  concatenated_list = my_list + [7, 8]   # [10, 1.5, 2, 4, 5, 7, 8] (concatenate lists)
  repeated_list = my_list * 2            # [10, 1.5, 2, 4, 5, 10, 1.5, 2, 4, 5] (repeat list)
  list_length = len(my_list)             # 5 (length of the list)
  `
  },
  {
    id: 'tuples',
    label: 'Tuples',
    content: `
  # Tuples in Python
  
  # Creating a tuple
  my_tuple = (1, 2, 3, 4, 5)
  
  # Accessing elements
  first_element = my_tuple[0]      # 1 (first element)
  last_element = my_tuple[-1]      # 5 (last element)
  
  # Slicing a tuple
  sliced_tuple = my_tuple[1:4]     # (2, 3, 4) (elements from index 1 to 3)
  partial_slice = my_tuple[:3]     # (1, 2, 3) (elements from start to index 2)
  reverse_tuple = my_tuple[::-1]   # (5, 4, 3, 2, 1) (reversed tuple)
  
  # Tuples are immutable
  # my_tuple[0] = 10               # Error: 'tuple' object does not support item assignment
  
  # Tuple unpacking
  a, b, c = my_tuple               # a = 1, b = 2, c = 3 (unpacking tuple into variables)
  
  # Single-element tuple
  single_element_tuple = (10,)     # (10,) (single-element tuple)
  
  # Tuple operations
  concatenated_tuple = my_tuple + (6, 7)   # (1, 2, 3, 4, 5, 6, 7) (concatenate tuples)
  repeated_tuple = my_tuple * 2            # (1, 2, 3, 4, 5, 1, 2, 3, 4, 5) (repeat tuple)
  tuple_length = len(my_tuple)            # 5 (length of the tuple)
  `
  },
  {
    id: 'sets',
    label: 'Sets',
    content: `
  # Sets in Python
  
  # Creating a set
  my_set = {1, 2, 3, 4, 5}
  
  # Adding elements to a set
  my_set.add(6)       # {1, 2, 3, 4, 5, 6}
  my_set.update({7, 8})   # {1, 2, 3, 4, 5, 6, 7, 8}
  
  # Removing elements from a set
  my_set.remove(3)    # {1, 2, 4, 5, 6, 7, 8} (raises KeyError if element not found)
  my_set.discard(4)   # {1, 2, 5, 6, 7, 8} (does not raise error if element not found)
  my_set.pop()        # Removes and returns a random element from the set
  
  # Set operations
  set1 = {1, 2, 3}
  set2 = {3, 4, 5}
  
  union_set = set1 | set2         # {1, 2, 3, 4, 5} (union of two sets)
  intersection_set = set1 & set2  # {3} (intersection of two sets)
  difference_set = set1 - set2    # {1, 2} (difference of two sets)
  symmetric_difference_set = set1 ^ set2  # {1, 2, 4, 5} (symmetric difference of two sets)
  
  # Set methods
  length_of_set = len(my_set)     # 6 (number of elements in the set)
  `
  },
  {
    id: 'dictionaries',
    label: 'Dictionaries',
    content: `
  # Dictionaries in Python
  
  # Creating a dictionary
  my_dict = {
      'name': 'Alice',
      'age': 30,
      'city': 'New York'
  }
  
  # Accessing elements in a dictionary
  name = my_dict['name']   # 'Alice'
  age = my_dict.get('age') # 30
  
  # Adding or updating elements in a dictionary
  my_dict['email'] = 'alice@example.com'  # {'name': 'Alice', 'age': 30, 'city': 'New York', 'email': 'alice@example.com'}
  my_dict.update({'age': 31, 'city': 'San Francisco'})  # {'name': 'Alice', 'age': 31, 'city': 'San Francisco', 'email': 'alice@example.com'}
  
  # Removing elements from a dictionary
  del my_dict['city']     # {'name': 'Alice', 'age': 31, 'email': 'alice@example.com'}
  age = my_dict.pop('age')    # 31, {'name': 'Alice', 'email': 'alice@example.com'}
  
  # Dictionary methods
  keys = my_dict.keys()   # dict_keys(['name', 'email'])
  values = my_dict.values()   # dict_values(['Alice', 'alice@example.com'])
  items = my_dict.items() # dict_items([('name', 'Alice'), ('email', 'alice@example.com')])
  length_of_dict = len(my_dict)   # 2 (number of key-value pairs in the dictionary)
  `
  },
  {
    id: 'conditional_statements',
    label: 'Conditional Statements',
    content: `
  # Conditional Statements in Python
  
  # if statement
  age = 18
  if age >= 18:
      print("You are an adult.")  # Output: You are an adult.
  
  # if-else statement
  is_raining = False
  if is_raining:
      print("Take an umbrella.")
  else:
      print("Enjoy the sunshine.")  # Output: Enjoy the sunshine.
  
  # if-elif-else statement
  score = 85
  if score >= 90:
      print("Grade: A")
  elif score >= 80:
      print("Grade: B")  # Output: Grade: B
  elif score >= 70:
      print("Grade: C")
  else:
      print("Grade: D")
  
  # Nested if statements
  temperature = 30
  if temperature > 20:
      if temperature < 30:
          print("The weather is warm.")  # Output: The weather is warm.
      else:
          print("The weather is hot.")
  else:
      print("The weather is cool.")
  
  # Ternary conditional operator
  number = 5
  parity = "even" if number % 2 == 0 else "odd"
  print(parity)  # Output: odd
  `
  },
  {
    id: 'loops',
    label: 'Loops',
    content: `
  # Loops in Python
  
  # for loop: iterating over a list
  fruits = ["apple", "banana", "cherry"]
  for fruit in fruits:
      print(fruit)
  # Output:
  # apple
  # banana
  # cherry
  
  # for loop: iterating over a range
  for i in range(5):
      print(i)
  # Output:
  # 0
  # 1
  # 2
  # 3
  # 4
  
  # while loop: repeating until a condition is met
  count = 0
  while count < 5:
      print("Count:", count)
      count += 1
  # Output:
  # Count: 0
  # Count: 1
  # Count: 2
  # Count: 3
  # Count: 4
  
  # Using break to exit a loop early
  for i in range(10):
      if i == 5:
          break
      print(i)
  # Output:
  # 0
  # 1
  # 2
  # 3
  # 4
  
  # Using continue to skip to the next iteration
  for i in range(10):
      if i % 2 == 0:
          continue
      print(i)
  # Output:
  # 1
  # 3
  # 5
  # 7
  # 9
  
  # Nested loops
  for i in range(3):
      for j in range(2):
          print(f"i: {i}, j: {j}")
  # Output:
  # i: 0, j: 0
  # i: 0, j: 1
  # i: 1, j: 0
  # i: 1, j: 1
  # i: 2, j: 0
  # i: 2, j: 1
  `
  },
  {
    id: 'loop_control',
    label: 'Loop Control',
    content: `
  # Loop Control in Python
  
  # Using 'break' to exit a loop prematurely
  # The 'break' statement stops the loop even if the condition is still true.
  for number in range(1, 11):
      if number == 5:
          break
      print(number)
  # Output:
  # 1
  # 2
  # 3
  # 4
  # Loop stops here because of 'break'
  
  # Using 'continue' to skip the current iteration and continue with the next one
  # The 'continue' statement skips the rest of the code inside the loop for the current iteration.
  for number in range(1, 11):
      if number % 2 == 0:
          continue
      print(number)
  # Output:
  # 1
  # 3
  # 5
  # 7
  # 9
  # Even numbers are skipped due to 'continue'
  
  # Using 'else' with loops
  # The 'else' block runs when the loop finishes normally (no 'break' occurred).
  for number in range(1, 6):
      print(number)
  else:
      print("Loop completed successfully")
  # Output:
  # 1
  # 2
  # 3
  # 4
  # 5
  # Loop completed successfully
  
  # Using 'else' with loops and 'break'
  # The 'else' block does not run if the loop exits due to a 'break' statement.
  for number in range(1, 6):
      if number == 3:
          break
      print(number)
  else:
      print("Loop completed successfully")
  # Output:
  # 1
  # 2
  # Loop stops at 3 and 'else' block does not execute
  
  # Nested loops with control statements
  # 'break' or 'continue' can be used inside nested loops to control their execution.
  for i in range(3):
      for j in range(3):
          if j == 1:
              break  # Breaks the inner loop only
          print(f"i: {i}, j: {j}")
  # Output:
  # i: 0, j: 0
  # i: 1, j: 0
  # i: 2, j: 0
  # The inner loop breaks at j == 1, but the outer loop continues
  
  # Using 'pass' in loops
  # The 'pass' statement is a placeholder that does nothing; it is often used for syntactic reasons.
  for number in range(1, 6):
      if number % 2 == 0:
          pass  # Placeholder for future code
      print(number)
  # Output:
  # 1
  # 2
  # 3
  # 4
  # 5
  # 'pass' does nothing and the loop continues as usual
  `
  },
  {
    id: 'functions',
    label: 'Functions',
    content: `
  # Functions in Python
  
  # Basic function definition
  def greet(name):
      """
      This function greets the person passed as an argument.
      :param name: The name of the person to greet.
      """
      return f"Hello, {name}!"
  
  # Calling the function
  print(greet("Alice"))
  # Output: Hello, Alice!
  
  # Function with multiple parameters
  def add(a, b):
      """
      This function returns the sum of two numbers.
      :param a: The first number.
      :param b: The second number.
      """
      return a + b
  
  # Calling the function
  result = add(5, 3)
  print(result)
  # Output: 8
  
  # Function with default parameter values
  def describe_pet(pet_name, animal_type="dog"):
      """
      This function displays information about a pet.
      :param pet_name: The name of the pet.
      :param animal_type: The type of animal (default is 'dog').
      """
      print(f"I have a {animal_type} named {pet_name}.")
  
  # Calling the function with and without the default parameter
  describe_pet("Buddy")
  # Output: I have a dog named Buddy.
  describe_pet("Whiskers", "cat")
  # Output: I have a cat named Whiskers.
  
  # Function with variable-length arguments (*args)
  def summarize(*numbers):
      """
      This function returns the sum of all numbers passed as arguments.
      :param numbers: A list of numbers to sum up.
      """
      return sum(numbers)
  
  # Calling the function with different numbers of arguments
  print(summarize(1, 2, 3))
  # Output: 6
  print(summarize(4, 5, 6, 7, 8))
  # Output: 30
  
  # Function with keyword arguments (**kwargs)
  def build_profile(first, last, **user_info):
      """
      This function builds a dictionary containing user profile information.
      :param first: The first name of the user.
      :param last: The last name of the user.
      :param user_info: Other keyword arguments for additional profile details.
      """
      profile = {'first_name': first, 'last_name': last}
      profile.update(user_info)
      return profile
  
  # Calling the function with keyword arguments
  user_profile = build_profile('John', 'Doe', location='New York', occupation='Engineer')
  print(user_profile)
  # Output: {'first_name': 'John', 'last_name': 'Doe', 'location': 'New York', 'occupation': 'Engineer'}
  
  # Lambda (anonymous) functions
  # A lambda function to add two numbers
  add = lambda x, y: x + y
  print(add(5, 3))
  # Output: 8
  
  # Higher-order function using a lambda
  def apply_operation(x, func):
      """
      This function applies a given function to a value.
      :param x: The value to be processed.
      :param func: The function to apply.
      """
      return func(x)
  
  # Using a lambda with the higher-order function
  result = apply_operation(10, lambda n: n * 2)
  print(result)
  # Output: 20
  
  # Recursion: a function calling itself
  def factorial(n):
      """
      This function returns the factorial of a number using recursion.
      :param n: The number to calculate the factorial for.
      """
      if n == 0:
          return 1
      else:
          return n * factorial(n - 1)
  
  # Calling the recursive function
  print(factorial(5))
  # Output: 120
  `
  },
  {
    id: 'modules_and_packages',
    label: 'Modules & Packages',
    content: `
  # Modules and Packages in Python
  
  # Creating and Using Modules
  
  # my_module.py
  # This is a simple module with a function and a variable.
  def greet(name):
      return f"Hello, {name}!"
  
  pi = 3.14159
  
  # Using the module in another script
  # main.py
  import my_module
  
  # Using the function from the module
  print(my_module.greet("Alice"))
  # Output: Hello, Alice!
  
  # Accessing the variable from the module
  print(my_module.pi)
  # Output: 3.14159
  
  # Importing specific functions or variables from a module
  from my_module import greet, pi
  
  # Now we can use greet and pi directly without prefixing with 'my_module.'
  print(greet("Bob"))
  # Output: Hello, Bob!
  print(pi)
  # Output: 3.14159
  
  # Renaming an imported module using an alias
  import my_module as mm
  
  print(mm.greet("Charlie"))
  # Output: Hello, Charlie!
  
  # Working with Packages
  
  # Directory structure for a package:
  # my_package/
  # ├── __init__.py
  # ├── module1.py
  # └── module2.py
  
  # __init__.py can be empty or used to initialize the package.
  # It allows the directory to be treated as a package.
  
  # module1.py
  def add(a, b):
      return a + b
  
  # module2.py
  def subtract(a, b):
      return a - b
  
  # Using the package in another script
  # main.py
  from my_package import module1, module2
  
  # Using functions from the modules within the package
  print(module1.add(5, 3))
  # Output: 8
  print(module2.subtract(10, 4))
  # Output: 6
  
  # Importing all functions from a module using *
  from my_package.module1 import *
  
  # Now we can use add directly
  print(add(7, 2))
  # Output: 9
  
  # Importing a specific function with alias
  from my_package.module2 import subtract as sub
  
  print(sub(9, 5))
  # Output: 4
  
  # Advanced: Importing modules dynamically
  import importlib
  
  # Load module1 dynamically from my_package
  module1_dynamic = importlib.import_module('my_package.module1')
  print(module1_dynamic.add(4, 6))
  # Output: 10
  
  # Note: Use dynamic imports with caution as it may complicate code readability and debugging.
  `
  },
  {
    id: 'file_handling',
    label: 'File Handling',
    content: `
  # File Handling in Python
  
  # Opening and Reading Files
  
  # Open a file for reading (default mode)
  file = open('example.txt', 'r')
  # Read the entire content of the file
  content = file.read()
  print(content)
  # Always close the file after use
  file.close()
  
  # Using 'with' statement for better resource management
  with open('example.txt', 'r') as file:
      # Read the entire content of the file
      content = file.read()
      print(content)
  # The file is automatically closed when the block is exited
  
  # Reading lines from a file
  with open('example.txt', 'r') as file:
      for line in file:
          print(line.strip())  # strip() removes any trailing newline characters
  
  # Writing to Files
  
  # Open a file for writing (creates the file if it doesn't exist)
  with open('output.txt', 'w') as file:
      file.write("Hello, world!\n")
      file.write("This is a test file.")
  
  # Writing multiple lines at once
  lines = ["First line\n", "Second line\n", "Third line\n"]
  with open('output.txt', 'w') as file:
      file.writelines(lines)
  
  # Appending to Files
  
  # Open a file for appending
  with open('output.txt', 'a') as file:
      file.write("Appending a new line.\n")
  
  # Reading and Writing Binary Files
  
  # Open a binary file for reading
  with open('image.png', 'rb') as file:
      binary_content = file.read()
      print(binary_content[:20])  # Print first 20 bytes
  
  # Open a binary file for writing
  with open('copy.png', 'wb') as file:
      file.write(binary_content)
  
  # Useful File Handling Functions
  
  # Checking if a file exists
  import os
  if os.path.exists('output.txt'):
      print("The file exists.")
  else:
      print("The file does not exist.")
  
  # Getting the size of a file
  file_size = os.path.getsize('output.txt')
  print(f"The file size is {file_size} bytes.")
  
  # Renaming a file
  os.rename('output.txt', 'renamed_output.txt')
  
  # Deleting a file
  os.remove('renamed_output.txt')
  
  # Error Handling
  
  try:
      with open('non_existent_file.txt', 'r') as file:
          content = file.read()
  except FileNotFoundError:
      print("The file was not found.")
  except IOError:
      print("An I/O error occurred.")
  
  `
  },
  {
    id: 'exception_handling',
    label: 'Exception Handling',
    content: `
  # Exception Handling in Python
  
  # Basic try-except block
  try:
      # Code that might raise an exception
      result = 10 / 0  # This will raise a ZeroDivisionError
  except ZeroDivisionError:
      # Code that runs if the exception occurs
      print("You cannot divide by zero!")
  
  # Catching multiple exceptions
  try:
      num = int(input("Enter a number: "))
      result = 100 / num
  except ValueError:
      # Handles cases where input is not an integer
      print("Invalid input! Please enter a valid number.")
  except ZeroDivisionError:
      # Handles division by zero
      print("You cannot divide by zero!")
  
  # Handling all exceptions
  try:
      result = 10 / 0
  except Exception as e:
      # Catches any exception and prints its message
      print(f"An error occurred: {e}")
  
  # Using else clause
  try:
      num = int(input("Enter a number: "))
      result = 100 / num
  except ZeroDivisionError:
      print("You cannot divide by zero!")
  except ValueError:
      print("Invalid input! Please enter a valid number.")
  else:
      # Executed if no exception occurs
      print(f"Result is: {result}")
  
  # Using finally clause
  try:
      file = open('example.txt', 'r')
      content = file.read()
      print(content)
  except FileNotFoundError:
      print("File not found!")
  finally:
      # Always executed, regardless of whether an exception occurs
      file.close()
  
  # Raising exceptions manually
  def check_age(age):
      if age < 0:
          # Raises a ValueError if the age is less than 0
          raise ValueError("Age cannot be negative!")
      print(f"Valid age: {age}")
  
  try:
      check_age(-5)
  except ValueError as e:
      print(f"Error: {e}")
  
  # Custom exceptions
  
  # Define a custom exception class
  class CustomError(Exception):
      def __init__(self, message):
          self.message = message
  
  # Function using custom exception
  def check_even(number):
      if number % 2 != 0:
          # Raise custom exception if number is not even
          raise CustomError("The number is not even!")
      print(f"{number} is an even number.")
  
  try:
      check_even(3)
  except CustomError as e:
      print(f"Custom error: {e.message}")
  
  `
  },
  {
    id: 'object_oriented_programming',
    label: 'OOP',
    content: `
  # Object-Oriented Programming (OOP) in Python
  
  # Class definition
  class Animal:
      # Class attribute
      species = "Animal"
      
      # Initializer / Instance attributes
      def __init__(self, name, age):
          self.name = name  # Instance attribute
          self.age = age    # Instance attribute
  
      # Instance method
      def speak(self):
          return f"{self.name} makes a noise."
  
      # Class method
      @classmethod
      def info(cls):
          return f"This is a {cls.species}."
  
      # Static method
      @staticmethod
      def is_animal(thing):
          return isinstance(thing, Animal)
  
  # Creating instances (objects) of the class
  dog = Animal("Buddy", 5)
  cat = Animal("Whiskers", 3)
  
  # Accessing instance attributes and methods
  print(dog.name)          # Output: Buddy
  print(cat.age)           # Output: 3
  print(dog.speak())       # Output: Buddy makes a noise.
  
  # Accessing class methods
  print(Animal.info())     # Output: This is a Animal
  print(dog.info())        # Output: This is a Animal
  
  # Accessing static methods
  print(Animal.is_animal(dog))  # Output: True
  print(Animal.is_animal("not an animal"))  # Output: False
  
  # Inheritance
  class Dog(Animal):
      # New attribute for the subclass
      species = "Dog"
  
      # Method overriding
      def speak(self):
          return f"{self.name} barks."
  
  # Creating an instance of the subclass
  my_dog = Dog("Rex", 2)
  
  # Accessing overridden method
  print(my_dog.speak())  # Output: Rex barks.
  
  # Checking class and subclass relationships
  print(isinstance(my_dog, Dog))     # Output: True
  print(isinstance(my_dog, Animal))  # Output: True
  
  # Encapsulation
  class Account:
      def __init__(self, owner, balance):
          self.owner = owner
          self.__balance = balance  # Private attribute (by convention)
      
      def deposit(self, amount):
          if amount > 0:
              self.__balance += amount
              print(f"Added {amount} to the balance")
          else:
              print("Enter a valid amount.")
      
      def withdraw(self, amount):
          if amount <= self.__balance:
              self.__balance -= amount
              print(f"Withdrew {amount} from the balance")
          else:
              print("Insufficient funds.")
      
      def get_balance(self):
          return self.__balance
  
  # Creating an instance of Account
  my_account = Account("Alice", 1000)
  
  # Interacting with encapsulated data
  my_account.deposit(500)      # Output: Added 500 to the balance
  my_account.withdraw(200)     # Output: Withdrew 200 from the balance
  print(my_account.get_balance())  # Output: 1300
  `
  },
  {
    id: 'map_filter_reduce_functions',
    label: 'Map, Filter, Reduce Functions',
    content: `
  # Functional Programming in Python: Map, Filter, Reduce
  
  # Map function example
  # Applying a function to each item in a list
  numbers = [1, 2, 3, 4, 5]
  squared_numbers = list(map(lambda x: x ** 2, numbers))
  print(squared_numbers)  # Output: [1, 4, 9, 16, 25]
  
  # Filter function example
  # Filtering items in a list based on a condition
  even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
  print(even_numbers)  # Output: [2, 4]
  
  # Reduce function example (from functools module)
  # Reducing a list to a single value using a binary function
  from functools import reduce
  sum_of_numbers = reduce(lambda x, y: x + y, numbers)
  print(sum_of_numbers)  # Output: 15
  `
  },
  {
    id: 'list_comprehensions_generator_expressions',
    label: 'Comprehensions & Expressions',
    content: `
  # List Comprehensions and Generator Expressions in Python
  
  # List comprehension to create a list of squares
  squares = [x ** 2 for x in range(1, 6)]
  print(squares)  # Output: [1, 4, 9, 16, 25]
  
  # List comprehension with a condition
  even_squares = [x ** 2 for x in range(1, 6) if x % 2 == 0]
  print(even_squares)  # Output: [4, 16]
  
  # Generator expression to create a generator of squares
  square_gen = (x ** 2 for x in range(1, 6))
  for square in square_gen:
      print(square)  # Output: 1 4 9 16 25 (printed one by one)
  `
  },
  {
    id: 'decorators',
    label: 'Decorators',
    content: `
  # Decorators in Python
  
  # Basic decorator example
  def simple_decorator(func):
      def wrapper():
          print("Before the function call.")
          func()
          print("After the function call.")
      return wrapper
  
  @simple_decorator
  def say_hello():
      print("Hello!")
  
  say_hello()
  # Output:
  # Before the function call.
  # Hello!
  # After the function call.
  
  # Decorator with arguments
  def decorator_with_args(func):
      def wrapper(*args, **kwargs):
          print(f"Arguments passed: {args}, {kwargs}")
          return func(*args, **kwargs)
      return wrapper
  
  @decorator_with_args
  def add(a, b):
      return a + b
  
  result = add(5, 3)
  print(result)  # Output: 8 Arguments passed: (5, 3)
                 
  `
  },
  {
    id: 'closures',
    label: 'Closures',
    content: `
  # Closures in Python
  
  # Closure example
  def outer_function(message):
      def inner_function():
          print(message)
      return inner_function
  
  # Create a closure
  hello_closure = outer_function("Hello, World!")
  
  # Call the closure
  hello_closure()  # Output: Hello, World!
  
  # Another closure example for counter
  def make_counter():
      count = 0
      def increment():
          nonlocal count
          count += 1
          return count
      return increment
  
  counter = make_counter()
  print(counter())  # Output: 1
  print(counter())  # Output: 2
  `
  },
  {
    id: 'iterators_and_generators',
    label: 'Iterators & Generators',
    content: `
  # Iterators and Generators in Python
  
  # Iterators example
  class Counter:
      def __init__(self, start, end):
          self.current = start
          self.end = end
      
      def __iter__(self):
          return self
      
      def __next__(self):
          if self.current > self.end:
              raise StopIteration
          else:
              self.current += 1
              return self.current - 1
  
  # Using the iterator
  counter = Counter(1, 5)
  for num in counter:
      print(num)
  
  # Generators example
  def fibonacci(n):
      a, b = 0, 1
      count = 0
      while count < n:
          yield a
          a, b = b, a + b
          count += 1
  
  # Using the generator
  fib = fibonacci(5)
  print("Fibonacci sequence:")
  for num in fib:
      print(num)
  `
  },
  {
    id: 'context_managers',
    label: 'Context Managers',
    content: `
  # Context Managers in Python
  
  # Using context manager with 'with' statement
  with open('example.txt', 'w') as file:
      file.write('Hello, Python!')
  
  # Custom context manager
  class DatabaseConnection:
      def __enter__(self):
          print("Opening database connection")
          # Code to establish database connection
          return self
      
      def __exit__(self, exc_type, exc_val, exc_tb):
          print("Closing database connection")
          # Code to close database connection
  
  # Using custom context manager
  with DatabaseConnection() as db_conn:
      # Perform database operations
      print("Executing database query")
      # Example database query
      # db_conn.query('SELECT * FROM table')
  `
  },
  {
    id: 'regular_expressions',
    label: 'Regular Expressions',
    content: `
  # Regular Expressions in Python
  
  import re
  
  # Example of matching a pattern
  text = "Hello, Python!"
  pattern = r'Hello, (\w+)!'
  match = re.search(pattern, text)
  if match:
      print("Pattern found:", match.group(1))
  
  # Example of replacing text using regex
  text = "Python is fun!"
  pattern = r'fun'
  replaced_text = re.sub(pattern, 'awesome', text)
  print("Replaced text:", replaced_text)
  
  # Example of splitting text using regex
  text = "apple, banana; cherry.orange"
  pattern = r'[;,.\s]+'
  splitted_text = re.split(pattern, text)
  print("Splitted text:", splitted_text)
  `
  },
  {
    id: 'networking_and_apis',
    label: 'Networking and APIs',
    content: `
  # Networking and APIs in Python
  
  import requests
  
  # Making a GET request
  response = requests.get('https://api.example.com/data')
  if response.status_code == 200:
      data = response.json()
      print("Data retrieved:", data)
  else:
      print("Error:", response.status_code)
  
  # Making a POST request
  payload = {'key': 'value'}
  response = requests.post('https://api.example.com/submit', json=payload)
  if response.status_code == 200:
      print("Submission successful")
  else:
      print("Error:", response.status_code)
  `
  },
  {
    id: 'asynchronous_programming',
    label: 'Asynchronous Programming',
    content: `
  # Asynchronous Programming with asyncio in Python
  
  import asyncio
  
  # Async function example
  async def fetch_data(url):
      print(f"Fetching data from {url}")
      await asyncio.sleep(1)  # Simulate network delay
      return f"Data from {url}"
  
  # Asyncio event loop
  async def main():
      tasks = [fetch_data('https://api.example.com/data') for _ in range(3)]
      results = await asyncio.gather(*tasks)
      print("Results:", results)
  
  # Running the event loop
  if __name__ == "__main__":
      asyncio.run(main())
  `
  },
  {
    id: 'working_with_numpy',
    label: 'Numpy',
    content: `
  # Working with numpy in Python
  
  import numpy as np
  
  # Creating numpy arrays
  arr1 = np.array([1, 2, 3, 4, 5])
  arr2 = np.array([[1, 2, 3], [4, 5, 6]])
  
  # Basic operations with numpy arrays
  print("Shape of arr1:", arr1.shape)
  print("Shape of arr2:", arr2.shape)
  
  # Element-wise operations
  arr_sum = arr1 + arr2
  arr_prod = arr1 * arr2
  
  # Matrix multiplication
  arr_dot = np.dot(arr1, arr2.T)
  
  # Statistical operations
  mean_arr1 = np.mean(arr1)
  std_dev_arr2 = np.std(arr2)
  
  # Generating random numbers
  rand_arr = np.random.rand(3, 3)
  
  print("Array sum:", arr_sum)
  print("Array product:", arr_prod)
  print("Array dot product:", arr_dot)
  print("Mean of arr1:", mean_arr1)
  print("Standard deviation of arr2:", std_dev_arr2)
  print("Random array:", rand_arr)
  `
  },
  {
    id: 'data_manipulation_with_pandas',
    label: 'Pandas',
    content: `
  # Data Manipulation with pandas in Python
  
  import pandas as pd
  
  # Creating a DataFrame
  data = {
      'Name': ['Alice', 'Bob', 'Charlie'],
      'Age': [25, 30, 35],
      'City': ['New York', 'Los Angeles', 'Chicago']
  }
  df = pd.DataFrame(data)
  
  # Displaying the DataFrame
  print("DataFrame:")
  print(df)
  
  # Basic operations with pandas DataFrame
  print("Column names:", df.columns)
  print("Shape of DataFrame:", df.shape)
  print("Data types:")
  print(df.dtypes)
  
  # Selecting data
  print("Name column:")
  print(df['Name'])
  
  # Filtering data
  filtered_df = df[df['Age'] > 25]
  print("Filtered DataFrame:")
  print(filtered_df)
  `
  },
  {
    id: 'basic_plotting_with_matplotlib_seaborn',
    label: 'Matplotlib & Seaborn',
    content: `
  # Basic Plotting with matplotlib and seaborn in Python
  
  import matplotlib.pyplot as plt
  import seaborn as sns
  
  # Data for plotting
  x = [1, 2, 3, 4, 5]
  y = [2, 4, 6, 8, 10]
  
  # Plotting with matplotlib
  plt.figure(figsize=(8, 4))
  plt.plot(x, y, marker='o', linestyle='--', color='b', label='Line Plot')
  plt.title('Line Plot with Matplotlib')
  plt.xlabel('X-axis')
  plt.ylabel('Y-axis')
  plt.legend()
  plt.grid(True)
  plt.show()
  
  # Plotting with seaborn
  sns.set(style='whitegrid')
  plt.figure(figsize=(8, 4))
  sns.barplot(x=['A', 'B', 'C'], y=[10, 20, 15], palette='pastel')
  plt.title('Bar Plot with Seaborn')
  plt.xlabel('Categories')
  plt.ylabel('Values')
  plt.show()
  `
  },
  {
    id: 'handling_csv_and_excel_files',
    label: 'Handling CSV & Excel Files',
    content: `
  # Handling CSV and Excel Files in Python
  
  import pandas as pd
  
  # Reading CSV file
  csv_data = pd.read_csv('data.csv')
  print("CSV Data:")
  print(csv_data.head())
  
  # Writing CSV file
  csv_data.to_csv('output.csv', index=False)
  print("CSV Data written to output.csv")
  
  # Reading Excel file
  excel_data = pd.read_excel('data.xlsx', sheet_name='Sheet1')
  print("Excel Data:")
  print(excel_data.head())
  
  # Writing Excel file
  excel_data.to_excel('output.xlsx', sheet_name='Sheet1', index=False)
  print("Excel Data written to output.xlsx")
  `
  }
  
    
];