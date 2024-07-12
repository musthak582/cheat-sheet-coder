export const goCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  // Comments in Go
  
  // In Go, comments are an essential part of making code readable and maintainable. There are two types of comments:
  
  // 1. Single-line comments
  // 2. Multi-line comments
  
  // Single-line comments
  // These comments start with two forward slashes (//) and extend to the end of the line.
  package main
  
  import "fmt"
  
  func main() {
      // This is a single-line comment
      fmt.Println("Hello, World!")  // Output: Hello, World!
  }
  
  // Multi-line comments
  /* 
  These comments start with a forward slash and an asterisk 
  and end with an asterisk and a forward slash.
  They can span multiple lines.
  */
  package main
  
  import "fmt"
  
  func main() {
      /*
      This is a multi-line comment.
      It can span multiple lines.
      */
      fmt.Println("Hello, World!")  // Output: Hello, World!
  }
  
  /*
  Important uses of comments in Go:
  
  1. Documentation: Comments are used to describe what a piece of code does, making it easier for others to understand.
  
  2. Disabling Code: During debugging, comments can temporarily disable code without deleting it.
  
  3. Documentation Comments: In Go, comments immediately preceding a package, function, type, or variable declaration are used to generate documentation.
  
  Example:
  */
  
  // Package greetings provides functions to greet users.
  package greetings
  
  import "fmt"
  
  // Hello returns a greeting for the named person.
  func Hello(name string) string {
      // Return a greeting that embeds the name in a message.
      message := fmt.Sprintf("Hi, %v. Welcome!", name)
      return message
  }
  `
  },
  {
    id: 'variables-constants',
    label: 'Variables & Constants',
    content: `
  // Variables and Constants in Go
  
  package main
  
  import "fmt"
  
  func main() {
      // Declaring Variables
      // The \`var\` keyword is used to declare variables.
      var name string = "Alice"
      var age int = 30
  
      // Type Inference
      // Go can infer the type of variables based on the assigned value.
      var city = "New York"
      var population = 8_336_817
  
      // Short Variable Declaration
      // The \`:=\` syntax is a shorthand for declaring and initializing variables.
      country := "USA"
      isCitizen := true
  
      // Constants
      // The \`const\` keyword is used to declare constants. Constants are immutable and must be assigned at the time of declaration.
      const pi float64 = 3.14159
      const greeting = "Hello, World!"
  
      // Multiple Variable Declarations
      // Multiple variables can be declared in a single line.
      var x, y, z int = 1, 2, 3
      var a, b = 4.5, "Go"
  
      // Zero Values
      // Variables declared without an initial value are assigned a zero value of their type.
      var zeroInt int      // Default value is 0
      var zeroString string // Default value is ""
      var zeroBool bool     // Default value is false
  
      // Printing Variables and Constants
      fmt.Println("Name:", name)
      fmt.Println("Age:", age)
      fmt.Println("City:", city)
      fmt.Println("Population:", population)
      fmt.Println("Country:", country)
      fmt.Println("Is Citizen:", isCitizen)
      fmt.Println("Pi:", pi)
      fmt.Println("Greeting:", greeting)
      fmt.Println("x, y, z:", x, y, z)
      fmt.Println("a, b:", a, b)
      fmt.Println("Zero Int:", zeroInt)
      fmt.Println("Zero String:", zeroString)
      fmt.Println("Zero Bool:", zeroBool)
  }
  `
  },
  {
    id: 'data-types',
    label: 'Data Types',
    content: `
  // Data Types in Go
  
  package main
  
  import (
      "fmt"
      "math/cmplx"
  )
  
  func main() {
      // Integers
      var int8Val int8 = 127             // 8-bit integer
      var int16Val int16 = 32767         // 16-bit integer
      var int32Val int32 = 2147483647    // 32-bit integer
      var int64Val int64 = 9223372036854775807 // 64-bit integer
  
      // Unsigned Integers
      var uint8Val uint8 = 255           // 8-bit unsigned integer
      var uint16Val uint16 = 65535       // 16-bit unsigned integer
      var uint32Val uint32 = 4294967295  // 32-bit unsigned integer
      var uint64Val uint64 = 18446744073709551615 // 64-bit unsigned integer
  
      // Floating-Point Numbers
      var float32Val float32 = 3.14
      var float64Val float64 = 3.141592653589793
  
      // Complex Numbers
      var complex64Val complex64 = complex(1, 2) // 64-bit complex number
      var complex128Val complex128 = cmplx.Sqrt(-5 + 12i) // 128-bit complex number
  
      // Boolean
      var boolVal bool = true
  
      // Strings
      var stringVal string = "Hello, Go!"
  
      // Characters
      var charVal rune = 'G' // rune is an alias for int32
  
      // Zero Values
      var zeroInt int
      var zeroFloat float64
      var zeroBool bool
      var zeroString string
  
      // Printing Data Types
      fmt.Println("Integer Values:")
      fmt.Println("int8:", int8Val)
      fmt.Println("int16:", int16Val)
      fmt.Println("int32:", int32Val)
      fmt.Println("int64:", int64Val)
  
      fmt.Println("Unsigned Integer Values:")
      fmt.Println("uint8:", uint8Val)
      fmt.Println("uint16:", uint16Val)
      fmt.Println("uint32:", uint32Val)
      fmt.Println("uint64:", uint64Val)
  
      fmt.Println("Floating-Point Values:")
      fmt.Println("float32:", float32Val)
      fmt.Println("float64:", float64Val)
  
      fmt.Println("Complex Values:")
      fmt.Println("complex64:", complex64Val)
      fmt.Println("complex128:", complex128Val)
  
      fmt.Println("Boolean Value:", boolVal)
      fmt.Println("String Value:", stringVal)
      fmt.Println("Character Value (rune):", charVal)
  
      fmt.Println("Zero Values:")
      fmt.Println("Zero Int:", zeroInt)
      fmt.Println("Zero Float:", zeroFloat)
      fmt.Println("Zero Bool:", zeroBool)
      fmt.Println("Zero String:", zeroString)
  }
  `
  },
  {
    id: 'operators',
    label: 'Operators',
    content: `
  // Operators in Go
  
  package main
  
  import (
      "fmt"
  )
  
  func main() {
      // Arithmetic Operators
      a, b := 10, 3
      fmt.Println("Arithmetic Operators:")
      fmt.Println("a + b =", a + b)  // Addition - Output: a + b = 13
      fmt.Println("a - b =", a - b)  // Subtraction - Output: a - b = 7
      fmt.Println("a * b =", a * b)  // Multiplication - Output: a * b = 30
      fmt.Println("a / b =", a / b)  // Division - Output: a / b = 3
      fmt.Println("a % b =", a % b)  // Modulus - Output: a % b = 1
  
      // Comparison Operators
      fmt.Println("Comparison Operators:")
      fmt.Println("a == b:", a == b)  // Equal to - Output: a == b: false
      fmt.Println("a != b:", a != b)  // Not equal to - Output: a != b: true
      fmt.Println("a > b:", a > b)    // Greater than - Output: a > b: true
      fmt.Println("a < b:", a < b)    // Less than - Output: a < b: false
      fmt.Println("a >= b:", a >= b)  // Greater than or equal to - Output: a >= b: true
      fmt.Println("a <= b:", a <= b)  // Less than or equal to - Output: a <= b: false
  
      // Logical Operators
      x, y := true, false
      fmt.Println("Logical Operators:")
      fmt.Println("x && y:", x && y)  // Logical AND - Output: x && y: false
      fmt.Println("x || y:", x || y)  // Logical OR - Output: x || y: true
      fmt.Println("!x:", !x)          // Logical NOT - Output: !x: false
  
      // Bitwise Operators
      fmt.Println("Bitwise Operators:")
      fmt.Println("a & b =", a & b)   // Bitwise AND - Output: a & b = 2
      fmt.Println("a | b =", a | b)   // Bitwise OR - Output: a | b = 11
      fmt.Println("a ^ b =", a ^ b)   // Bitwise XOR - Output: a ^ b = 9
      fmt.Println("a &^ b =", a &^ b) // Bitwise AND NOT - Output: a &^ b = 8
      fmt.Println("a << 1 =", a << 1) // Left shift - Output: a << 1 = 20
      fmt.Println("a >> 1 =", a >> 1) // Right shift - Output: a >> 1 = 5
  
      // Compound Assignment Operators
      fmt.Println("Compound Assignment Operators:")
      a += b  // a = a + b
      fmt.Println("a += b:", a)  // Output: a += b: 13
      a -= b  // a = a - b
      fmt.Println("a -= b:", a)  // Output: a -= b: 10
      a *= b  // a = a * b
      fmt.Println("a *= b:", a)  // Output: a *= b: 30
      a /= b  // a = a / b
      fmt.Println("a /= b:", a)  // Output: a /= b: 10
      a %= b  // a = a % b
      fmt.Println("a %= b:", a)  // Output: a %= b: 1
      a &= b  // a = a & b
      fmt.Println("a &= b:", a)  // Output: a &= b: 1
      a |= b  // a = a | b
      fmt.Println("a |= b:", a)  // Output: a |= b: 3
      a ^= b  // a = a ^ b
      fmt.Println("a ^= b:", a)  // Output: a ^= b: 0
      a &^= b // a = a &^ b
      fmt.Println("a &^= b:", a) // Output: a &^= b: 0
      a = 10  // Reset a to 10 for shift operations
      a <<= 1 // a = a << 1
      fmt.Println("a <<= 1:", a) // Output: a <<= 1: 20
      a >>= 1 // a = a >> 1
      fmt.Println("a >>= 1:", a) // Output: a >>= 1: 10
  }
  `
  },
  {
    id: 'type_inference_conversion',
    label: 'Type Inference & Conversion',
    content: `
  // Type Inference & Conversion in Go
  
  package main
  
  import (
      "fmt"
      "strconv"
  )
  
  func main() {
      // Type Inference
      var x = 10       // Go infers the type of x as int
      var y = 10.5     // Go infers the type of y as float64
      var z = "hello"  // Go infers the type of z as string
  
      fmt.Println(x)  // Output: 10
      fmt.Println(y)  // Output: 10.5
      fmt.Println(z)  // Output: hello
  
      // Type Conversion
      var a int = 42
      var b float64 = float64(a)  // int to float64
      var c int = int(b)          // float64 to int
  
      fmt.Println(a)  // Output: 42
      fmt.Println(b)  // Output: 42
      fmt.Println(c)  // Output: 42
  
      // String to Integer Conversion
      str := "100"
      num, err := strconv.Atoi(str)
      if err != nil {
          fmt.Println(err)
      } else {
          fmt.Println(num)  // Output: 100
      }
  
      // Integer to String Conversion
      number := 200
      strNum := strconv.Itoa(number)
      fmt.Println(strNum)  // Output: 200
  
      // String to Float Conversion
      floatStr := "123.45"
      floatNum, err := strconv.ParseFloat(floatStr, 64)
      if err != nil {
          fmt.Println(err)
      } else {
          fmt.Println(floatNum)  // Output: 123.45
      }
  
      // Float to String Conversion
      floatValue := 678.90
      strFloat := strconv.FormatFloat(floatValue, 'f', 2, 64)
      fmt.Println(strFloat)  // Output: 678.90
  }
  `
  },
  {
    id: 'conditionals',
    label: 'Conditional Statements',
    content: `
  // Conditional Statements in Go
  
  package main
  
  import "fmt"
  
  func main() {
      a := 10
      b := 20
  
      // if statement
      if a < b {
          fmt.Println("a is less than b")  // Output: a is less than b
      }
  
      // if-else statement
      if a > b {
          fmt.Println("a is greater than b")
      } else {
          fmt.Println("a is not greater than b")  // Output: a is not greater than b
      }
  
      // if-else if-else statement
      if a == b {
          fmt.Println("a is equal to b")
      } else if a < b {
          fmt.Println("a is less than b")  // Output: a is less than b
      } else {
          fmt.Println("a is greater than b")
      }
  
      // Short statement with if
      if c := a + b; c > 30 {
          fmt.Println("c is greater than 30")  // Output: c is greater than 30
      } else {
          fmt.Println("c is not greater than 30")
      }
  }
  `
  },
  {
    id: 'switch_statements',
    label: 'Switch Statements',
    content: `
  // Switch Statements in Go
  
  package main
  
  import "fmt"
  
  func main() {
      // Example 1: Basic Switch Statement
      number := 2
      switch number {
      case 1:
          fmt.Println("One")  // Output: (nothing, because number is not 1)
      case 2:
          fmt.Println("Two")  // Output: Two
      case 3:
          fmt.Println("Three")
      default:
          fmt.Println("Other number")
      }
  
      // Example 2: Multiple Expressions in Case
      day := "Saturday"
      switch day {
      case "Saturday", "Sunday":
          fmt.Println("Weekend")  // Output: Weekend
      default:
          fmt.Println("Weekday")
      }
  
      // Example 3: Switch with Condition
      score := 85
      switch {
      case score >= 90:
          fmt.Println("A")  // Output: (nothing, because score is not >= 90)
      case score >= 80:
          fmt.Println("B")  // Output: B
      case score >= 70:
          fmt.Println("C")
      default:
          fmt.Println("F")
      }
  
      // Example 4: Switch Without Expression
      i := 10
      switch {
      case i < 5:
          fmt.Println("i is less than 5")  // Output: (nothing, because i is not < 5)
      case i == 10:
          fmt.Println("i is 10")  // Output: i is 10
      default:
          fmt.Println("i is greater than 5")
      }
  
      // Example 5: Fallthrough Keyword
      grade := "B"
      switch grade {
      case "A":
          fmt.Println("Excellent")
      case "B":
          fmt.Println("Good")  // Output: Good
          fallthrough
      case "C":
          fmt.Println("Fair")  // Output: Fair
      default:
          fmt.Println("Fail")
      }
  }
  `
  },
  {
    id: 'loops',
    label: 'Loops',
    content: `
  // Loops in Go
  
  package main
  
  import "fmt"
  
  func main() {
      // For loop: basic syntax
      for i := 0; i < 5; i++ {
          fmt.Println(i)  // Output: 0, 1, 2, 3, 4
      }
  
      // While loop: Go doesn't have a while loop, but you can use for as a while loop
      j := 0
      for j < 5 {
          fmt.Println(j)  // Output: 0, 1, 2, 3, 4
          j++
      }
  
      // Infinite loop
      for {
           fmt.Println("Infinite loop")
      }
  
      // Loop with break statement
      for k := 0; k < 10; k++ {
          if k == 5 {
              break
          }
          fmt.Println(k)  // Output: 0, 1, 2, 3, 4
      }
  
      // Loop with continue statement
      for l := 0; l < 10; l++ {
          if l%2 == 0 {
              continue
          }
          fmt.Println(l)  // Output: 1, 3, 5, 7, 9
      }
  
      // Range loop: iterating over an array
      arr := []int{10, 20, 30, 40, 50}
      for index, value := range arr {
          fmt.Printf("Index: %d, Value: %d\\n", index, value)
          // Output:
          // Index: 0, Value: 10
          // Index: 1, Value: 20
          // Index: 2, Value: 30
          // Index: 3, Value: 40
          // Index: 4, Value: 50
      }
  }
  `
  }
  
  
  
  
];