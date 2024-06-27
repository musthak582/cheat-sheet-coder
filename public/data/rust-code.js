export const rustCodeBlocks = [
  {
    id: 'comments',
    label: 'Comments',
    content: `
  // Single-line comments start with two forward slashes.
  
  // This is a single-line comment.
  
  /*
     Block comments can span multiple lines.
     Everything between the /* and */ is part of the comment.
  */
  
  fn main() {
      // This is a single-line comment inside the main function.
  
      /*
         Block comments can be used within functions or anywhere in the code.
         They are useful for temporarily disabling code or for adding detailed explanations.
      */
      println!("Hello, Rust!"); // You can place comments at the end of a line of code.
      
      /*
      Block comments can be nested.
      /*
          This is a nested block comment.
      */
      */
  }
  
  /* 
      Documentation comments are a special type of comments that generate HTML documentation.
      They use triple slashes and are typically placed above functions, structs, enums, or modules.
      For example:
  */
  
  /// Adds two numbers together.
  /// 
  /// # Arguments
  ///
  /// * \`a\` - The first number.
  /// * \`b\` - The second number.
  /// 
  /// # Returns
  ///
  /// * The sum of \`a\` and \`b\`.
  fn add(a: i32, b: i32) -> i32 {
      a + b
  }
  
  // To view the generated documentation, you can run \`cargo doc --open\` in the terminal.
  `
  }
  
];