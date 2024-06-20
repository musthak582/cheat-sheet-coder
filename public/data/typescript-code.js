export const typeScriptCodeBlocks =[
  {
    id: 'typing_variables_example',
    label: 'Typing Variables',
    content: `
    // Declare variables with types
    let message: string = "Hello, TypeScript!";
    let isCompleted: boolean = true;
    let total: number = 100;
    
    // Arrays
    let numbers: number[] = [1, 2, 3, 4, 5];
    let messages: Array<string> = ["Hello", "World"];
  
    // Tuples
    let tuple: [string, number];
    tuple = ["Hello", 10]; // Correct
    // tuple = [10, "Hello"]; // Error: Type 'number' is not assignable to type 'string'
  
    // Enum
    enum Color { Red, Green, Blue }
    let c: Color = Color.Green;
  
    // Any type
    let randomValue: any = 10;
    randomValue = "Hello";
    randomValue = true;
  
    // Unknown type
    let unknownValue: unknown = 10;
    unknownValue = "Hello";
    unknownValue = true;
    `
  },
  {
    id: 'typing_functions_example',
    label: 'Typing Functions',
    content: `
    // Function with typed parameters and return type
    function add(a: number, b: number): number {
      return a + b;
    }
  
    // Function with optional parameter
    function greet(name: string, greeting?: string): string {
      if (greeting) {
        return \`\${greeting}, \${name}!\`;
      }
      return \`Hello, \${name}!\`;
    }
  
    // Function with default parameter
    function greetWithDefault(name: string, greeting: string = "Hello"): string {
      return \`\${greeting}, \${name}!\`;
    }
    `
  },
  {
    id: 'typing_react_components_example',
    label: 'Typing React Components',
    content: `
    import React from 'react';
  
    // Props type definition
    type GreetingProps = {
      name: string;
      age?: number; // Optional prop
    };
  
    // Functional component with typed props
    const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
      return (
        <div>
          <h1>Hello, {name}!</h1>
          {age && <p>You are {age} years old.</p>}
        </div>
      );
    };
  
    export default Greeting;
    `
  },
  {
    id: 'react_fc_example',
    label: 'React Functional Component',
    content: `
    import React from 'react';
  
    // Props type definition
    type ButtonProps = {
      label: string;
      onClick: () => void;
    };
  
    // Using React.FC to define a functional component
    const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
      return <button onClick={onClick}>{label}</button>;
    };
  
    export default Button;
    `
  },
  {
    id: 'typing_props_example',
    label: 'Typing Props',
    content: `
    import React from 'react';
  
    // Props type definition
    type UserProps = {
      name: string;
      age: number;
    };
  
    // Functional component with typed props
    const User: React.FC<UserProps> = ({ name, age }) => {
      return (
        <div>
          <h2>User Name: {name}</h2>
          <p>Age: {age}</p>
        </div>
      );
    };
  
    export default User;
    `
  },
  {
    id: 'any_type_example',
    label: 'Any Type',
    content: `
    // Variable with 'any' type can hold any value
    let randomValue: any = 10;
    randomValue = "Hello, TypeScript!";
    randomValue = { key: "value" };
  
    // Function with 'any' type parameters and return type
    function processValue(value: any): any {
      return value;
    }
    `
  },
  {
    id: 'type_return_value_of_component_example',
    label: 'Type Return Value of Component',
    content: `
    import React from 'react';
  
    // Props type definition
    type ProductProps = {
      name: string;
      price: number;
    };
  
    // Functional component with typed props and explicit return type
    const Product: React.FC<ProductProps> = ({ name, price }): React.ReactElement => {
      return (
        <div>
          <h3>Product: {name}</h3>
          <p>Price: {price}</p>
        </div>
      );
    };
  
    export default Product;
    `
  },
  {
    id: 'union_type_example',
    label: 'Union Type',
    content: `
    // Variable with union type
    let id: number | string;
    id = 101; // OK
    id = "A101"; // OK
    // id = true; // Error: Type 'boolean' is not assignable to type 'number | string'
  
    // Function with union type parameter
    function printId(id: number | string): void {
      console.log(\`ID: \${id}\`);
    }
  
    printId(123);  // OK
    printId("123");  // OK
    // printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'
    `
  },
  {
    id: 'typing_arrays_example',
    label: 'Typing Arrays',
    content: `
    // Array of numbers
    let numbers: number[] = [1, 2, 3, 4, 5];
  
    // Array of strings
    let strings: string[] = ["Hello", "World"];
  
    // Array of objects with a specific type
    type User = {
      name: string;
      age: number;
    };
  
    let users: User[] = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 }
    ];
  
    // Using generics to define an array
    let genericArray: Array<number> = [10, 20, 30];
    `
  },
  {
    id: 'tuple_type_example',
    label: 'Tuple Type',
    content: `
    // Declare a tuple type
    let person: [string, number];
    
    // Initialize the tuple correctly
    person = ["Alice", 30]; // Correct
    // person = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string'
  
    // Accessing tuple elements
    const [name, age] = person;
    console.log(\`Name: \${name}, Age: \${age}\`);
  
    // Tuple with more than two elements
    let mixedTuple: [string, number, boolean] = ["Bob", 40, true];
    `
  },
  {
    id: 'react_css_properties_example',
    label: 'React CSS Properties',
    content: `
    import React from 'react';
  
    const boxStyle: React.CSSProperties = {
      backgroundColor: "lightblue",
      padding: "10px",
      border: "1px solid blue"
    };
  
    const StyledBox: React.FC = () => {
      return <div style={boxStyle}>Styled Box</div>;
    };
  
    export default StyledBox;
    `
  },
  {
    id: 'record_type_example',
    label: 'Record Type',
    content: `
    // Record type for mapping string keys to number values
    const salary: Record<string, number> = {
      Alice: 50000,
      Bob: 60000,
      Carol: 70000
    };
  
    // Accessing values using keys
    console.log(salary["Alice"]); // 50000
    console.log(salary.Bob); // 60000
  
    // Adding new key-value pair
    salary["Dave"] = 80000;
    console.log(salary.Dave); // 80000
    `
  },
  {
    id: 'typing_children_example',
    label: 'Typing Children',
    content: `
    import React from 'react';
  
    // Props type definition with children
    type ContainerProps = {
      children: React.ReactNode;
    };
  
    // Functional component with typed children
    const Container: React.FC<ContainerProps> = ({ children }) => {
      return <div className="container">{children}</div>;
    };
  
    export default Container;
    `
  },
  {
    id: 'react_jsx_element_vs_react_node_example',
    label: 'React JSX Element vs React Node',
    content: `
    import React from 'react';
  
    // Using React.JSX.Element for return type
    const Header: React.FC = (): React.JSX.Element => {
      return <h1>This is a header</h1>;
    };
  
    // Using React.ReactNode for props type
    type WrapperProps = {
      content: React.ReactNode;
    };
  
    const Wrapper: React.FC<WrapperProps> = ({ content }) => {
      return <div className="wrapper">{content}</div>;
    };
  
    const App: React.FC = () => {
      return (
        <div>
          <Header />
          <Wrapper content={<p>This is some content</p>} />
        </div>
      );
    };
  
    export default App;
    `
  },
  {
    id: 'typing_use_state_setter_example',
    label: 'Typing useState Setter',
    content: `
    import React, { useState } from 'react';
  
    const Counter: React.FC = () => {
      // State with number type and typed setter function
      const [count, setCount] = useState<number>(0);
  
      // Function to handle increment
      const increment = (): void => {
        setCount(prevCount => prevCount + 1);
      };
  
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    };
  
    export default Counter;
    `
  },
  {
    id: 'default_prop_values_example',
    label: 'Default Prop Values',
    content: `
    import React from 'react';
  
    type GreetingProps = {
      name: string;
      greeting?: string;
    };
  
    const Greeting: React.FC<GreetingProps> = ({ name, greeting = "Hello" }) => {
      return <h1>{\`\${greeting}, \${name}!\`}</h1>;
    };
  
    export default Greeting;
    `
  },
  {
    id: 'type_alias_vs_interface_example',
    label: 'Type Alias vs Interface',
    content: `
    // Type Alias
    type Point = {
      x: number;
      y: number;
    };
  
    const pointA: Point = { x: 10, y: 20 };
  
    // Interface
    interface Rectangle {
      width: number;
      height: number;
    };
  
    const rectA: Rectangle = { width: 30, height: 40 };
  
    // Extending Type Alias
    type ThreeDPoint = Point & { z: number };
  
    const pointB: ThreeDPoint = { x: 10, y: 20, z: 30 };
  
    // Extending Interface
    interface ColoredRectangle extends Rectangle {
      color: string;
    }
  
    const rectB: ColoredRectangle = { width: 30, height: 40, color: "blue" };
    `
  },
  {
    id: 'component_props_without_ref_example',
    label: 'Component Props Without Ref',
    content: `
    import React from 'react';
  
    // Define a Button component
    const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
      return <button {...props}>{children}</button>;
    };
  
    // Using ComponentPropsWithoutRef to type props of another component that uses Button
    type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>;
  
    const CustomButton: React.FC<ButtonProps> = (props) => {
      return <Button {...props} />;
    };
  
    export default CustomButton;
    `
  },
  {
    id: 'rest_and_spread_example',
    label: 'Rest and Spread',
    content: `
    import React from 'react';
  
    // Define a Card component with rest props
    type CardProps = {
      title: string;
      description: string;
      // ...rest allows any other props to be passed
      [key: string]: any;
    };
  
    const Card: React.FC<CardProps> = ({ title, description, ...rest }) => {
      return (
        <div className="card" {...rest}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      );
    };
  
    // Using spread syntax to pass props to Card
    const App: React.FC = () => {
      const cardProps = {
        title: "Card Title",
        description: "This is a card description.",
        style: { border: "1px solid #ccc", padding: "10px" },
        onClick: () => alert('Card clicked!')
      };
  
      return <Card {...cardProps} />;
    };
  
    export default App;
    `
  },
  {
    id: 'intersection_type_example',
    label: 'Intersection Type',
    content: `
    // Two separate types
    type HasName = {
      name: string;
    };
  
    type HasAge = {
      age: number;
    };
  
    // Intersection type combining both
    type Person = HasName & HasAge;
  
    const person: Person = {
      name: "John",
      age: 30,
    };
  
    console.log(\`\${person.name} is \${person.age} years old.\`);
    `
  },
  {
    id: 'interface_extends_example',
    label: 'Interface Extends',
    content: `
    // Base interface
    interface Animal {
      name: string;
    }
  
    // Extended interface
    interface Dog extends Animal {
      breed: string;
    }
  
    const myDog: Dog = {
      name: "Buddy",
      breed: "Golden Retriever",
    };
  
    console.log(\`\${myDog.name} is a \${myDog.breed}.\`);
    `
  },
  {
    id: 'typing_event_handler_functions_example',
    label: 'Typing Event Handler Functions',
    content: `
    import React from 'react';
  
    const Button: React.FC = () => {
      // Typed event handler function
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log('Button clicked', event);
      };
  
      return <button onClick={handleClick}>Click Me</button>;
    };
  
    export default Button;
    `
  },
  {
    id: 'typing_use_state_hook_example',
    label: 'Typing useState Hook',
    content: `
    import React, { useState } from 'react';
  
    const Counter: React.FC = () => {
      // useState hook with type
      const [count, setCount] = useState<number>(0);
  
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
  
    export default Counter;
    `
  },
  {
    id: 'typing_use_ref_hook_example',
    label: 'Typing useRef Hook',
    content: `
    import React, { useRef } from 'react';
  
    const TextInput: React.FC = () => {
      // useRef hook with input element type
      const inputRef = useRef<HTMLInputElement>(null);
  
      const focusInput = (): void => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };
  
      return (
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={focusInput}>Focus Input</button>
        </div>
      );
    };
  
    export default TextInput;
    `
  },
  {
    id: 'as_const_example',
    label: 'As Const',
    content: `
    // Using 'as const' to create a readonly tuple
    const colors = ["red", "green", "blue"] as const;
  
    // Type of 'colors' is readonly ['red', 'green', 'blue']
    const firstColor = colors[0]; // Type is 'red'
    // colors[0] = "yellow"; // Error: Cannot assign to '0' because it is a read-only property.
    `
  },
  {
    id: 'omit_utility_example',
    label: 'Omit Utility',
    content: `
    // Define a type with multiple properties
    type Person = {
      name: string;
      age: number;
      address: string;
    };
  
    // Create a new type by omitting 'address' property
    type PersonWithoutAddress = Omit<Person, "address">;
  
    const person: PersonWithoutAddress = {
      name: "Alice",
      age: 25,
      // address: "123 Main St" // Error: 'address' does not exist in type 'PersonWithoutAddress'
    };
  
    console.log(\`\${person.name} is \${person.age} years old.\`);
    `
  },
  {
    id: 'as_type_assertion_example',
    label: 'As Type Assertion',
    content: `
    // Initializing a variable with a broad type
    let value: unknown = "Hello, TypeScript";
  
    // Using 'as' to assert the type
    let strLength: number = (value as string).length;
  
    console.log(\`The length of the string is \${strLength}.\`);
  
    // Alternative syntax
    let strLengthAlternative: number = (<string>value).length;
    console.log(\`The length of the string (alternative syntax) is \${strLengthAlternative}.\`);
    `
  },
  {
    id: 'generics_easy_example',
    label: 'Generics Easy',
    content: `
    // Generic function to return an array of items
    function createArray<T>(items: T[]): T[] {
      return [...items];
    }
  
    const numberArray = createArray<number>([1, 2, 3]);
    const stringArray = createArray<string>(["a", "b", "c"]);
  
    console.log(numberArray); // [1, 2, 3]
    console.log(stringArray); // ["a", "b", "c"]
    `
  },
  {
    id: 'generics_in_react_example',
    label: 'Generics In React',
    content: `
    import React from 'react';
  
    // Generic component
    type ListProps<T> = {
      items: T[];
      renderItem: (item: T) => React.ReactNode;
    };
  
    function List<T>({ items, renderItem }: ListProps<T>): React.ReactElement {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>
          ))}
        </ul>
      );
    }
  
    // Usage of generic component with number type
    const NumberList: React.FC = () => {
      return (
        <List
          items={[1, 2, 3]}
          renderItem={(item) => <span>{item}</span>}
        />
      );
    };
  
    // Usage of generic component with string type
    const StringList: React.FC = () => {
      return (
        <List
          items={["a", "b", "c"]}
          renderItem={(item) => <span>{item}</span>}
        />
      );
    };
  
    export { NumberList, StringList };
    `
  },
  {
    id: 'index_vs_types_example',
    label: 'Index Vs Types',
    content: `
  // index.d.ts
  // Typically used for ambient type declarations, defining types for the entire project or for libraries without type definitions.
  declare module "my-library" {
    export function myFunction(): void;
  }
  
  // types.ts
  // Usually contains specific type definitions used within a particular project or module.
  export type User = {
    name: string;
    age: number;
  };
  
  export interface Product {
    id: string;
    price: number;
  };
  `
  },
  {
    id: 'import_type_example',
    label: 'Import Type',
    content: `
  // Import only the type definitions
  import type { User } from './types';
  
  const printUser = (user: User): void => {
    console.log(\`User: \${user.name}, Age: \${user.age}\`);
  };
  
  const user: User = { name: "Alice", age: 25 };
  printUser(user);
  `
  },
  {
    id: 'unknown_type_example',
    label: 'Unknown Type',
    content: `
  // Variable with unknown type
  let value: unknown;
  
  value = "Hello"; // OK
  value = 42; // OK
  
  // Cannot use value directly without type assertion or type checking
  // let str: string = value; // Error: Type 'unknown' is not assignable to type 'string'
  
  // Type assertion
  let str: string = value as string;
  
  // Type checking
  if (typeof value === "string") {
    str = value;
  }
  `
  },
  {
    id: 'zod_example',
    label: 'Zod',
    content: `
  import { z } from "zod";
  
  // Define a schema
  const UserSchema = z.object({
    name: z.string(),
    age: z.number().min(0),
  });
  
  // Parse and validate data
  const userData = { name: "Alice", age: 25 };
  const user = UserSchema.parse(userData); // Throws if validation fails
  
  console.log(user);
  
  // Safe parsing
  const result = UserSchema.safeParse(userData);
  if (result.success) {
    console.log(result.data);
  } else {
    console.error(result.error);
  }
  `
  },
  {
    id: 'ts_reset_library_example',
    label: 'TypeScript Reset Library',
    content: `
  // TypeScript reset utility types
  import { OmitStrict } from "ts-reset";
  
  // Using OmitStrict to create a type with certain keys omitted
  type User = {
    name: string;
    age: number;
    email: string;
  };
  
  type UserWithoutEmail = OmitStrict<User, "email">;
  
  const user: UserWithoutEmail = {
    name: "Alice",
    age: 25,
    // email: "alice@example.com" // Error: 'email' does not exist in type 'UserWithoutEmail'
  };
  `
  },
  {
    id: 'third_party_types_example',
    label: 'Third-Party Types',
    content: `
  // Importing types from @types packages
  import * as express from "express";
  
  const app: express.Application = express();
  
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello, world!");
  });
  
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
  `
  },
  {
    id: 'tsConfig-json-example',
    label: 'Ts ConfigJson',
    content: `
  // tsconfig.json
  {
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
  }
  `
  },
  {
    id: 'next-env-dts-example',
    label: 'Next Env Dts',
    content: `
  /// <reference types="next" />
  /// <reference types="next/types/global" />
  /// <reference types="next/image-types/global" />

  // NOTE: This file should not be edited
  // See https://nextjs.org/docs/basic-features/typescript for more information.
  `
  },  
];
