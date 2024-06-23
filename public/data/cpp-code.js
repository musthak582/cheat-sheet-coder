export const cppCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  // Single-line comment
  // This is a single-line comment in C++. It starts with two slashes.
  
  /*
   * Multi-line comment
   * This type of comment spans multiple lines.
   * It starts with a slash and an asterisk and ends with an asterisk and a slash.
   */
  
  /**
   * Documentation comment
   * This is a documentation comment used to generate documentation with Doxygen or other tools.
   * It provides descriptions for classes, methods, and functions.
   * @param argc Number of arguments
   * @param argv Array of arguments
   */
  #include <iostream>
  
  int main(int argc, char* argv[]) {
      // This line prints a message to the console
      std::cout << "Hello, World!" << std::endl; // Inline comment
  
      return 0;
  }
  `
  },
  {
    id: 'variables_and_data_types_cpp',
    label: 'Variables & Data Types',
    content: `
  // Variables and Data Types in C++
  
  #include <iostream>
  using namespace std;
  
  int main() {
    // Integer variable
    int age = 30;
    cout << "Age: " << age << endl;
  
    // Floating-point variable
    float pi = 3.14;
    cout << "Pi: " << pi << endl;
  
    // Double precision floating-point variable
    double distance = 15678.345;
    cout << "Distance: " << distance << endl;
  
    // Character variable
    char grade = 'A';
    cout << "Grade: " << grade << endl;
  
    // Boolean variable
    bool isPassed = true;
    cout << "Passed: " << isPassed << endl;
  
    // String variable (requires <string> header)
    string name = "John Doe";
    cout << "Name: " << name << endl;
  
    return 0;
  }
  `
  },
  {
    id: 'input_output_cpp',
    label: 'Input & Output',
    content: `
  // Input and Output in C++
  
  #include <iostream>
  using namespace std;
  
  int main() {
    // Output to console
    cout << "Hello, World!" << endl;
  
    // Input from console
    int number;
    cout << "Enter a number: ";
    cin >> number;
    cout << "You entered: " << number << endl;
  
    return 0;
  }
  `
  },
  {
    id: 'operators_cpp',
    label: 'Operators',
    content: `
  // Operators in C++
  
  #include <iostream>
  using namespace std;
  
  int main() {
    // Arithmetic operators
    int a = 10, b = 5;
    cout << "Arithmetic Operators:" << endl;
    cout << "Addition: " << (a + b) << endl;
    cout << "Subtraction: " << (a - b) << endl;
    cout << "Multiplication: " << (a * b) << endl;
    cout << "Division: " << (a / b) << endl;
    cout << "Modulus: " << (a % b) << endl << endl;
  
    // Relational operators
    cout << "Relational Operators:" << endl;
    cout << "a > b: " << (a > b) << endl;
    cout << "a < b: " << (a < b) << endl;
    cout << "a == b: " << (a == b) << endl;
    cout << "a != b: " << (a != b) << endl << endl;
  
    // Logical operators
    bool x = true, y = false;
    cout << "Logical Operators:" << endl;
    cout << "AND (x && y): " << (x && y) << endl;
    cout << "OR (x || y): " << (x || y) << endl;
    cout << "NOT (!x): " << (!x) << endl << endl;
  
    // Assignment operators
    int c = 7;
    cout << "Assignment Operators:" << endl;
    cout << "c = " << c << endl;
    c += 3;
    cout << "c += 3: " << c << endl;
    c -= 2;
    cout << "c -= 2: " << c << endl;
    c *= 5;
    cout << "c *= 5: " << c << endl << endl;
  
    // Bitwise operators
    unsigned int d = 5, e = 9;
    cout << "Bitwise Operators:" << endl;
    cout << "AND (d & e): " << (d & e) << endl;
    cout << "OR (d | e): " << (d | e) << endl;
    cout << "XOR (d ^ e): " << (d ^ e) << endl;
    cout << "Shift Left (d << 1): " << (d << 1) << endl;
    cout << "Shift Right (e >> 1): " << (e >> 1) << endl;
  
    return 0;
  }
  `
  },
  {
    id: 'conditional_statements_cpp',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in C++
  
  #include <iostream>
  using namespace std;
  
  int main() {
    // If statement
    int number = 10;
    cout << "If Statement:" << endl;
    if (number > 0) {
      cout << number << " is positive." << endl;
    }
  
    // If-else statement
    cout << "If-Else Statement:" << endl;
    if (number % 2 == 0) {
      cout << number << " is even." << endl;
    } else {
      cout << number << " is odd." << endl;
    }
  
    // Else if ladder
    cout << "Else If Ladder:" << endl;
    int score = 85;
    if (score >= 90) {
      cout << "Grade A" << endl;
    } else if (score >= 80) {
      cout << "Grade B" << endl;
    } else if (score >= 70) {
      cout << "Grade C" << endl;
    } else if (score >= 60) {
      cout << "Grade D" << endl;
    } else {
      cout << "Grade F" << endl;
    }
  
    // Nested if-else statement
    int age = 17;
    bool hasLicense = true;
    cout << "Nested If-Else Statement:" << endl;
    if (age >= 18) {
      if (hasLicense) {
        cout << "You are eligible to drive." << endl;
      } else {
        cout << "You need a driving license." << endl;
      }
    } else {
      cout << "You are not eligible to drive." << endl;
    }
  
    // Switch statement
    char grade = 'B';
    cout << "Switch Statement:" << endl;
    switch (grade) {
      case 'A':
        cout << "Excellent!" << endl;
        break;
      case 'B':
        cout << "Good!" << endl;
        break;
      case 'C':
        cout << "Fair!" << endl;
        break;
      default:
        cout << "Invalid grade!" << endl;
    }
  
    return 0;
  }
  `
  },
  {
    id: 'loops',
    label: 'Loops',
    content: `
  // Loops in C++
  
  // 1. For Loop
  for (int i = 1; i <= 5; i++) {
      std::cout << "Iteration " << i << std::endl;
  }
  // Output:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5
  
  // 2. While Loop
  int j = 1;
  while (j <= 5) {
      std::cout << "Iteration " << j << std::endl;
      j++;
  }
  // Output:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5
  
  // 3. Do-While Loop
  int k = 1;
  do {
      std::cout << "Iteration " << k << std::endl;
      k++;
  } while (k <= 5);
  // Output:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5
    `
  },
  {
    id: 'break_continue_cpp',
    label: 'Break & Continue',
    content: `
  // Break and Continue in C++
  
  #include <iostream>
  using namespace std;
  
  int main() {
      // Break example
      cout << "Break example:" << endl;
      for (int i = 1; i <= 5; ++i) {
          if (i == 3) {
              break; // Exit loop when i equals 3
          }
          cout << "Iteration " << i << endl;
      }
      // Output:
      // Break example:
      // Iteration 1
      // Iteration 2
  
      // Continue example
      cout << "Continue example:" << endl;
      for (int j = 1; j <= 5; ++j) {
          if (j == 3) {
              continue; // Skip iteration when j equals 3
          }
          cout << "Iteration " << j << endl;
      }
      // Output:
      // Continue example:
      // Iteration 1
      // Iteration 2
      // Iteration 4
      // Iteration 5
  
      return 0;
  }
  `
  },
  {
    id: 'arrays_cpp_example',
    label: 'Arrays',
    content: `
  // Arrays in C++
  
  #include <iostream>
  
  using namespace std;
  
  int main() {
      // Declaring and initializing arrays
      int numbers[5];  // Array of 5 integers
  
      // Initializing array elements
      numbers[0] = 10;
      numbers[1] = 20;
      numbers[2] = 30;
      numbers[3] = 40;
      numbers[4] = 50;
  
      // Accessing array elements
      cout << "Element at index 0: " << numbers[0] << endl;
      cout << "Element at index 1: " << numbers[1] << endl;
      cout << "Element at index 2: " << numbers[2] << endl;
      cout << "Element at index 3: " << numbers[3] << endl;
      cout << "Element at index 4: " << numbers[4] << endl;
  
      // Multidimensional Arrays
      int matrix[3][3] = {
          {1, 2, 3},
          {4, 5, 6},
          {7, 8, 9}
      };
  
      // Accessing elements in a multidimensional array
      cout << "Element at row 0, column 1: " << matrix[0][1] << endl;
      cout << "Element at row 1, column 2: " << matrix[1][2] << endl;
      cout << "Element at row 2, column 0: " << matrix[2][0] << endl;
  
      return 0;
  }
  `
  },
  {
    id: 'strings_cpp',
    label: 'Strings',
    content: `
  // Strings in C++
  
  #include <iostream>
  #include <string>
  using namespace std;
  
  int main() {
    // Initializing strings
    string greeting = "Hello, ";
    string name = "Alice";
  
    // Concatenation
    string message = greeting + name;
    cout << "Concatenated string: " << message << endl;
  
    // Length of a string
    cout << "Length of message: " << message.length() << endl;
  
    // Accessing characters
    cout << "First character: " << message[0] << endl;
    cout << "Last character: " << message[message.length() - 1] << endl;
  
    // Modifying strings
    message += "!";
    cout << "Modified message: " << message << endl;
  
    // String comparison
    string otherName = "Bob";
    if (name == otherName) {
      cout << name << " is equal to " << otherName << endl;
    } else {
      cout << name << " is not equal to " << otherName << endl;
    }
  
    // Substring
    string sub = message.substr(7, 5);
    cout << "Substring: " << sub << endl;
  
    // Finding characters or substrings
    size_t found = message.find("Alice");
    if (found != string::npos) {
      cout << "'Alice' found at position: " << found << endl;
    } else {
      cout << "'Alice' not found" << endl;
    }
  
    return 0;
  }
  `
  },
  {
    id: 'functions_cpp',
    label: 'Functions',
    content: `
  // Functions in C++
  
  #include <iostream>
  using namespace std;
  
  // Defining a function
  void greet() {
    cout << "Hello, World!" << endl;
  }
  
  // Function with parameters and return value
  int add(int a, int b) {
    return a + b;
  }
  
  // Function overloading
  double add(double a, double b) {
    return a + b;
  }
  
  // Inline function
  inline int multiply(int a, int b) {
    return a * b;
  }
  
  // Recursive function
  int factorial(int n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  int main() {
    // Calling a function
    greet();
  
    // Calling a function with parameters and returning a value
    int sum1 = add(5, 3);
    double sum2 = add(2.5, 3.7);
    cout << "Sum of integers: " << sum1 << endl;
    cout << "Sum of doubles: " << sum2 << endl;
  
    // Calling an inline function
    int product = multiply(4, 6);
    cout << "Product: " << product << endl;
  
    // Calling a recursive function
    int num = 5;
    cout << "Factorial of " << num << " is: " << factorial(num) << endl;
  
    return 0;
  }
  `
  },
  {
    id: 'pointers_cpp',
    label: 'Pointers',
    content: `
  // Pointers in C++
  
  #include <iostream>
  using namespace std;
  
  int main() {
    // Declare a variable and a pointer
    int num = 10;
    int *ptr;
  
    // Assign address of num to ptr
    ptr = &num;
  
    // Accessing value via pointer
    cout << "Value of num: " << num << endl;
    cout << "Value of num using pointer: " << *ptr << endl;
  
    // Modifying value using pointer
    *ptr = 20;
    cout << "Modified value of num: " << num << endl;
  
    // Pointer arithmetic
    int arr[] = {1, 2, 3, 4, 5};
    int *ptr_arr = arr;
  
    cout << "First element: " << *ptr_arr << endl;
    cout << "Second element: " << *(ptr_arr + 1) << endl;
    cout << "Third element: " << *(ptr_arr + 2) << endl;
  
    // Null pointers
    int *ptr_null = nullptr;
    cout << "Null pointer: " << ptr_null << endl;
  
    return 0;
  }
  `
  },
  {
    id: 'references_cpp',
    label: 'References',
    content: `
  // References in C++
  
  #include <iostream>
  using namespace std;
  
  int main() {
    // Declare a variable and a reference
    int num = 10;
    int &ref = num;
  
    // Accessing value via reference
    cout << "Value of num: " << num << endl;
    cout << "Value of num using reference: " << ref << endl;
  
    // Modifying value using reference
    ref = 20;
    cout << "Modified value of num: " << num << endl;
  
    // References as function parameters
    int a = 10, b = 5;
    swap(a, b);
    cout << "After swap: a = " << a << ", b = " << b << endl;
  
    return 0;
  }
  
  // Function to swap values using references
  void swap(int &x, int &y) {
    int temp = x;
    x = y;
    y = temp;
  }
  `
  },
  {
    id: 'classes_objects_cpp',
    label: 'Classes & Objects',
    content: `
  // Classes and Objects in C++
  
  #include <iostream>
  using namespace std;
  
  // Class declaration
  class Rectangle {
  private:
      int length;
      int width;
  
  public:
      // Constructor
      Rectangle(int l, int w) {
          length = l;
          width = w;
      }
  
      // Member function to calculate area
      int area() {
          return length * width;
      }
  
      // Member function to calculate perimeter
      int perimeter() {
          return 2 * (length + width);
      }
  
      // Getter method for length
      int getLength() {
          return length;
      }
  
      // Setter method for length
      void setLength(int l) {
          length = l;
      }
  
      // Getter method for width
      int getWidth() {
          return width;
      }
  
      // Setter method for width
      void setWidth(int w) {
          width = w;
      }
  };
  
  int main() {
      // Creating objects of Rectangle class
      Rectangle r1(5, 3); // Object 1 with initial dimensions
      Rectangle r2(7, 4); // Object 2 with initial dimensions
  
      // Accessing member functions
      cout << "Area of r1: " << r1.area() << endl;
      cout << "Perimeter of r1: " << r1.perimeter() << endl;
  
      // Changing dimensions using setter methods
      r1.setLength(10);
      r1.setWidth(5);
  
      // Accessing updated dimensions and calculations
      cout << "Updated length of r1: " << r1.getLength() << endl;
      cout << "Updated width of r1: " << r1.getWidth() << endl;
      cout << "Updated area of r1: " << r1.area() << endl;
  
      return 0;
  }
  `
  },
  {
    id: 'constructors_destructors_cpp',
    label: 'Constructors & Destructors',
    content: `
  // Constructors and Destructors in C++
  
  #include <iostream>
  using namespace std;
  
  // Class declaration
  class Car {
  private:
      string brand;
      string model;
      int year;
  
  public:
      // Constructor with parameters
      Car(string b, string m, int y) {
          brand = b;
          model = m;
          year = y;
          cout << "Constructor called for " << brand << " " << model << " " << year << endl;
      }
  
      // Destructor
      ~Car() {
          cout << "Destructor called for " << brand << " " << model << " " << year << endl;
      }
  
      // Method to display car details
      void displayInfo() {
          cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << endl;
      }
  };
  
  int main() {
      // Creating objects of Car class using different constructors
      Car car1("Toyota", "Camry", 2020); // Object 1 with constructor
      Car car2("Ford", "Mustang", 2018); // Object 2 with constructor
  
      // Displaying car information
      car1.displayInfo();
      car2.displayInfo();
  
      // Destructor is automatically called when objects go out of scope
      return 0;
  }
  `
  },
  {
    id: 'encapsulation_cpp',
    label: 'Encapsulation',
    content: `
  // Encapsulation in C++
  
  #include <iostream>
  using namespace std;
  
  // Class declaration with private and public access specifiers
  class BankAccount {
  private:
      string accountNumber;
      string accountHolderName;
      double balance;
  
  public:
      // Constructor with parameters
      BankAccount(string accNum, string accHolder, double initialBalance) {
          accountNumber = accNum;
          accountHolderName = accHolder;
          balance = initialBalance;
      }
  
      // Method to deposit money into the account
      void deposit(double amount) {
          balance += amount;
          cout << amount << " deposited successfully." << endl;
      }
  
      // Method to withdraw money from the account
      void withdraw(double amount) {
          if (amount <= balance) {
              balance -= amount;
              cout << amount << " withdrawn successfully." << endl;
          } else {
              cout << "Insufficient balance." << endl;
          }
      }
  
      // Method to display account information
      void displayAccountInfo() {
          cout << "Account Number: " << accountNumber << endl;
          cout << "Account Holder: " << accountHolderName << endl;
          cout << "Balance: " << balance << endl;
      }
  };
  
  int main() {
      // Creating an object of BankAccount class
      BankAccount myAccount("123456789", "John Doe", 5000);
  
      // Depositing and withdrawing money from the account
      myAccount.deposit(2000);
      myAccount.withdraw(1000);
  
      // Displaying account information
      myAccount.displayAccountInfo();
  
      return 0;
  }
  `
  },
  {
    id: 'inheritance_cpp',
    label: 'Inheritance',
    content: `
  // Inheritance in C++
  
  #include <iostream>
  using namespace std;
  
  // Base class
  class Shape {
  protected:
      int width;
      int height;
  
  public:
      // Constructor with parameters
      Shape(int w, int h) : width(w), height(h) {}
  
      // Method to calculate area (to be overridden)
      virtual int area() {
          cout << "Parent class area :" << endl;
          return 0;
      }
  };
  
  // Derived class
  class Rectangle : public Shape {
  public:
      // Constructor with parameters
      Rectangle(int w, int h) : Shape(w, h) {}
  
      // Override method to calculate area for rectangle
      int area() override {
          cout << "Rectangle class area :" << endl;
          return (width * height);
      }
  };
  
  // Derived class
  class Triangle : public Shape {
  public:
      // Constructor with parameters
      Triangle(int w, int h) : Shape(w, h) {}
  
      // Override method to calculate area for triangle
      int area() override {
          cout << "Triangle class area :" << endl;
          return (width * height / 2);
      }
  };
  
  int main() {
      // Creating objects of derived classes
      Rectangle rect(5, 6);
      Triangle tri(5, 6);
  
      // Calling area methods
      cout << "Area of Rectangle: " << rect.area() << endl; // Output: Rectangle class area
      cout << "Area of Triangle: " << tri.area() << endl;   // Output: Triangle class area
  
      return 0;
  }
  `
  },
  {
    id: 'polymorphism_cpp',
    label: 'Polymorphism',
    content: `
  // Polymorphism in C++ using Virtual Functions
  
  #include <iostream>
  using namespace std;
  
  // Base class
  class Shape {
  protected:
      int width;
      int height;
  
  public:
      // Constructor with parameters
      Shape(int w, int h) : width(w), height(h) {}
  
      // Virtual function for calculating area (to be overridden)
      virtual int area() {
          cout << "Parent class area :" << endl;
          return 0;
      }
  
      // Non-virtual function
      void display() {
          cout << "Displaying from parent class." << endl;
      }
  };
  
  // Derived class Rectangle
  class Rectangle : public Shape {
  public:
      // Constructor with parameters
      Rectangle(int w, int h) : Shape(w, h) {}
  
      // Override method to calculate area for rectangle
      int area() override {
          cout << "Rectangle class area :" << endl;
          return (width * height);
      }
  };
  
  // Derived class Triangle
  class Triangle : public Shape {
  public:
      // Constructor with parameters
      Triangle(int w, int h) : Shape(w, h) {}
  
      // Override method to calculate area for triangle
      int area() override {
          cout << "Triangle class area :" << endl;
          return (width * height / 2);
      }
  };
  
  int main() {
      // Base class pointer pointing to derived class objects
      Shape* shape;
  
      // Creating objects of derived classes
      Rectangle rect(5, 6);
      Triangle tri(5, 6);
  
      // Pointing base class pointer to Rectangle object
      shape = &rect;
      // Calling area method of Rectangle through pointer
      cout << "Area of Rectangle: " << shape->area() << endl; // Output: Rectangle class area
  
      // Pointing base class pointer to Triangle object
      shape = &tri;
      // Calling area method of Triangle through pointer
      cout << "Area of Triangle: " << shape->area() << endl;   // Output: Triangle class area
  
      return 0;
  }
  `
  },
  {
    id: 'abstract_classes_cpp',
    label: 'Abstract Classes',
    content: `
  // Abstract Classes and Pure Virtual Functions in C++
  
  #include <iostream>
  using namespace std;
  
  // Abstract Base Class (Interface)
  class Shape {
  protected:
      int width;
      int height;
  
  public:
      // Constructor with parameters
      Shape(int w, int h) : width(w), height(h) {}
  
      // Pure virtual function (to be overridden by derived classes)
      virtual int area() = 0;
  
      // Non-virtual function
      void display() {
          cout << "Displaying from parent class." << endl;
      }
  };
  
  // Derived class Rectangle
  class Rectangle : public Shape {
  public:
      // Constructor with parameters
      Rectangle(int w, int h) : Shape(w, h) {}
  
      // Override method to calculate area for rectangle
      int area() override {
          cout << "Rectangle class area :" << endl;
          return (width * height);
      }
  };
  
  // Derived class Triangle
  class Triangle : public Shape {
  public:
      // Constructor with parameters
      Triangle(int w, int h) : Shape(w, h) {}
  
      // Override method to calculate area for triangle
      int area() override {
          cout << "Triangle class area :" << endl;
          return (width * height / 2);
      }
  };
  
  int main() {
      // Shape* shape = new Shape(5, 6); // Error: Cannot instantiate abstract class
  
      // Base class pointer pointing to derived class objects
      Shape* shape;
  
      // Creating objects of derived classes
      Rectangle rect(5, 6);
      Triangle tri(5, 6);
  
      // Pointing base class pointer to Rectangle object
      shape = &rect;
      // Calling area method of Rectangle through pointer
      cout << "Area of Rectangle: " << shape->area() << endl; // Output: Rectangle class area
  
      // Pointing base class pointer to Triangle object
      shape = &tri;
      // Calling area method of Triangle through pointer
      cout << "Area of Triangle: " << shape->area() << endl;   // Output: Triangle class area
  
      return 0;
  }
  `
  },
  {
    id: 'stl_cpp_example',
    label: 'STL',
    content: `
  // STL (Standard Template Library) Example in C++
  
  #include <iostream>
  #include <vector>
  #include <deque>
  #include <list>
  #include <queue>
  #include <stack>
  #include <set>
  #include <map>
  #include <algorithm>
  #include <numeric>
  #include <functional>
  #include <string>
  
  using namespace std;
  
  int main() {
      // Vector example
      vector<int> vec = {5, 2, 9, 1, 7};
  
      // Displaying vector elements using iterators
      cout << "Vector elements: ";
      for (auto it = vec.begin(); it != vec.end(); ++it) {
          cout << *it << " ";
      }
      cout << endl;
  
      // Sorting vector elements
      sort(vec.begin(), vec.end());
  
      // Displaying sorted vector elements
      cout << "Sorted vector elements: ";
      for (auto num : vec) {
          cout << num << " ";
      }
      cout << endl;
  
      // Deque example
      deque<int> deq = {3, 1, 4, 1, 5};
      cout << "Deque elements (front to back): ";
      for (auto num : deq) {
          cout << num << " ";
      }
      cout << endl;
  
      // List example
      list<int> lst = {10, 20, 30};
      lst.push_back(40);
      lst.push_front(5);
      cout << "List elements: ";
      for (auto num : lst) {
          cout << num << " ";
      }
      cout << endl;
  
      // Queue example
      queue<int> que;
      que.push(1);
      que.push(2);
      que.push(3);
      cout << "Queue front: " << que.front() << endl;
  
      // Stack example
      stack<int> stk;
      stk.push(10);
      stk.push(20);
      stk.push(30);
      cout << "Stack top: " << stk.top() << endl;
  
      // Set example (unique elements)
      set<int> st = {1, 2, 3, 1, 2, 3};
      cout << "Set elements: ";
      for (auto num : st) {
          cout << num << " ";
      }
      cout << endl;
  
      // Map example (key-value pairs)
      map<string, int> mp;
      mp["Alice"] = 25;
      mp["Bob"] = 30;
      cout << "Map elements: ";
      for (auto pair : mp) {
          cout << pair.first << ":" << pair.second << " ";
      }
      cout << endl;
  
      // Iterators and Algorithms
      vector<int> nums = {1, 2, 3, 4, 5};
      auto it = find(nums.begin(), nums.end(), 3);
      if (it != nums.end()) {
          cout << "Found element 3 at position: " << distance(nums.begin(), it) << endl;
      }
  
      int sum = accumulate(nums.begin(), nums.end(), 0);
      cout << "Sum of vector elements: " << sum << endl;
  
      // Function Objects (Functors)
      struct Increment {
          void operator()(int& x) const { x++; }
      };
      for_each(nums.begin(), nums.end(), Increment());
      cout << "After incrementing each element: ";
      for (auto num : nums) {
          cout << num << " ";
      }
      cout << endl;
  
      // String manipulation with std::string
      string str = "Hello, World!";
      cout << "Original string: " << str << endl;
      cout << "Length of string: " << str.length() << endl;
      cout << "Substring from index 7: " << str.substr(7) << endl;
  
      return 0;
  }
  `
  },
  {
    id: 'file_handling_cpp_example',
    label: 'File Handling',
    content: `
  // File Handling in C++
  
  #include <iostream>
  #include <fstream>
  #include <string>
  
  using namespace std;
  
  int main() {
      // Writing to a file
      ofstream outFile("output.txt");
      if (!outFile) {
          cerr << "Error opening output file!" << endl;
          return 1;
      }
  
      outFile << "Hello, File Handling in C++!" << endl;
      outFile.close();
  
      cout << "Data written to file successfully." << endl;
  
      // Reading from a file
      ifstream inFile("input.txt");
      if (!inFile) {
          cerr << "Error opening input file!" << endl;
          return 1;
      }
  
      string line;
      cout << "Contents of input file:" << endl;
      while (getline(inFile, line)) {
          cout << line << endl;
      }
      inFile.close();
  
      // Binary File I/O
      struct Employee {
          char name[50];
          int age;
          double salary;
      };
  
      Employee emp1 = {"John Doe", 30, 50000.0};
  
      ofstream binFile("employees.bin", ios::binary);
      if (!binFile) {
          cerr << "Error opening binary file!" << endl;
          return 1;
      }
  
      binFile.write(reinterpret_cast<char*>(&emp1), sizeof(Employee));
      binFile.close();
  
      ifstream binInFile("employees.bin", ios::binary);
      if (!binInFile) {
          cerr << "Error opening binary input file!" << endl;
          return 1;
      }
  
      Employee emp2;
      binInFile.read(reinterpret_cast<char*>(&emp2), sizeof(Employee));
      binInFile.close();
  
      cout << "Read data from binary file:" << endl;
      cout << "Name: " << emp2.name << endl;
      cout << "Age: " << emp2.age << endl;
      cout << "Salary: " << emp2.salary << endl;
  
      return 0;
  }
  `
  },
  {
    id: 'exception_handling_cpp_example',
    label: 'Exception Handling',
    content: `
  // Exception Handling in C++
  
  #include <iostream>
  #include <stdexcept>
  
  using namespace std;
  
  // Custom exception class
  class CustomException : public exception {
  public:
      virtual const char* what() const throw() {
          return "Custom Exception: Something went wrong!";
      }
  };
  
  // Function that throws exceptions
  void performDangerousOperation(int value) {
      if (value < 0) {
          throw runtime_error("Negative value passed!"); // Throwing a runtime_error
      } else if (value == 0) {
          throw logic_error("Zero value detected!"); // Throwing a logic_error
      } else if (value > 100) {
          throw CustomException(); // Throwing a custom exception
      }
  }
  
  int main() {
      try {
          // Example 1: Handling standard exceptions
          performDangerousOperation(-5);
  
      } catch (const runtime_error& ex) {
          cerr << "Caught runtime_error: " << ex.what() << endl;
  
      } catch (const logic_error& ex) {
          cerr << "Caught logic_error: " << ex.what() << endl;
  
      } catch (const exception& ex) {
          cerr << "Caught generic exception: " << ex.what() << endl;
  
      }
  
      try {
          // Example 2: Handling custom exceptions
          performDangerousOperation(150);
  
      } catch (const CustomException& ex) {
          cerr << "Caught custom exception: " << ex.what() << endl;
  
      } catch (const exception& ex) {
          cerr << "Caught generic exception: " << ex.what() << endl;
  
      }
  
      return 0;
  }
  `
  }
  
  
  
  
  

  
];