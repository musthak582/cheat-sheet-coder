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
    label: 'Variables and Assignment',
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
    label: 'Strings and String Methods',
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
  
  
   
];