export const javaCodeBlocks = [
  {
    "id": "comments",
    "label": "Comments",
    "content": `
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
    "id": "variables_and_assignment",
    "label": "Variables and Assignment",
    "content": `
      public class VariablesAndAssignment {
          public static void main(String[] args) {
              // Declaring and initializing variables
              int age = 25; // Integer variable
              double salary = 50000.75; // Double (floating-point) variable
              char initial = 'A'; // Character variable
              boolean isEmployee = true; // Boolean variable
  
              // Declaring variables without initialization
              int count;
              String name;
  
              // Assigning values to variables
              count = 10;
              name = "Alice";
  
              // Printing variable values
              System.out.println("Age: " + age);
              System.out.println("Salary: " + salary);
              System.out.println("Initial: " + initial);
              System.out.println("Is Employee: " + isEmployee);
              System.out.println("Count: " + count);
              System.out.println("Name: " + name);
          }
      }
    `
  }
  
];