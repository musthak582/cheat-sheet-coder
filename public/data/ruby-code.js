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
  
];