export const reactCodeBlocks = [
  {
    id: 'jsx_elements',
    label: 'JSX Elements',
    content: `
    /* JSX Elements */
  
    // JSX allows you to use HTML-like syntax to create React elements.
    const element = <h1>Hello, world!</h1>;
  
    // This element represents a heading with the text "Hello, world!".
    // It will be rendered as:
    // <h1>Hello, world!</h1>
    `
  },
  
  {
    id: 'jsx_expressions',
    label: 'JSX Expressions',
    content: `
    /* JSX Expressions */
  
    const name = 'John Doe';
    const age = 30;
    const element1 = <h1>Hello, {name}</h1>;
    const element2 = <p>Age: {age}</p>;
    const element3 = (
      <div>
        <h2>User Details:</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
    `
  },
  {
    id: 'jsx_attributes',
    label: 'JSX Attributes',
    content: `
    /* JSX Attributes */
  
    const imageUrl = 'https://example.com/image.jpg';
    const element = <img src={imageUrl} alt="React Logo" className="logo" />;
  
    // This element represents an image with a source attribute pointing to 'imageUrl',
    // an alt attribute set to 'React Logo', and a className attribute set to 'logo'.
    // It will be rendered as:
    // <img src="https://example.com/image.jpg" alt="React Logo" class="logo" />
    `
  },
  {
    id: 'jsx_functions',
    label: 'JSX Functions',
    content: `
    /* JSX Functions */
  
    // Function Component
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
  
    // Using the component with a prop
    const element = <Welcome name="John" />;
    `
  },
  {
    id: 'jsx_conditional_rendering',
    label: 'JSX Conditional Rendering',
    content: `
    /* JSX Conditional Rendering */
  
    // Function Component for Conditional Rendering
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
      }
      return <h1>Please sign up.</h1>;
    }
  
    // Using the component with a prop to determine the message
    const element = <Greeting isLoggedIn={true} />;
    `
  },
  {
    id: 'react_element_tags',
    label: 'React Element Tags',
    content: `
    /* React Element Tags */
  
    // JSX allows you to use HTML-like syntax to create React elements.
    const element = <h1>Hello, world!</h1>;
  
    // This element represents a heading with the text "Hello, world!".
    // It will be rendered as:
    // <h1>Hello, world!</h1>
    `
  },
  {
    id: 'react_element_attributes',
    label: 'React Element Attributes',
    content: `
    /* React Element Attributes */
  
    // JSX also allows you to include attributes in your elements.
    const imageUrl = 'https://example.com/image.jpg';
    const element = <img src={imageUrl} alt="React Logo" className="logo" />;
  
    // This element represents an image with a source attribute pointing to 'imageUrl',
    // an alt attribute set to 'React Logo', and a className attribute set to 'logo'.
    // It will be rendered as:
    // <img src="https://example.com/image.jpg" alt="React Logo" class="logo" />
  
    // In JSX, the attribute for setting CSS classes is called 'className' instead of 'class'.
    // This is because 'class' is a reserved keyword in JavaScript, so 'className' is used to avoid conflicts.
    // While 'class' is used in regular HTML, 'className' must be used in JSX to assign CSS classes.
    `
  },
  {
    id: 'react_elements_embedded_js',
    label: 'Embedded JavaScript',
    content: `
    /* React Elements with Embedded JavaScript */
  
    // You can embed JavaScript expressions inside JSX curly braces.
    const name = 'John Doe';
    const element = <h1>Hello, {name}</h1>;
  
    // This element represents a heading with the text "Hello, John Doe!".
    // It will be rendered as:
    // <h1>Hello, John Doe!</h1>
    `
  },
  {
    id: 'react_element_inline_styles',
    label: 'React Element with Inline Styles',
    content: `
    /* React Element with Inline Styles */
  
    // JSX allows you to set inline styles using JavaScript objects.
    const styles = {
      color: 'blue',
      backgroundColor: 'lightgray'
    };
    const element = <h1 style={styles}>Hello, world!</h1>;
  
    // This element represents a heading with inline styles applied.
    // It will be rendered with blue text on a light gray background.
    // <h1 style="color: blue; background-color: lightgray;">Hello, world!</h1>
    `
  },
  {
    id: 'react_fragments',
    label: 'React Fragments',
    content: `
    /* React Fragments */
  
    // Fragments allow you to group multiple elements without adding extra nodes to the DOM.
    const element = (
      <>
        <h1>Hello</h1>
        <h2>World</h2>
      </>
    );
  
    // This element represents two headings grouped together.
    // It will be rendered without any extra wrapper elements.
    // <h1>Hello</h1>
    // <h2>World</h2>
    `
  },
  {
    id: 'functional_components',
    label: 'Functional Components',
    content: `
    /* Functional Components */
  
    // Functional components are JavaScript functions that accept props and return JSX.
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
  
    //Using arrow function
    const Welcome = (props) => {
        return <h1>Hello, {props.name}</h1>;
    };
  
    // Usage:
    const element = <Welcome name="John" />;
    `
  },
  {
    id: 'component_props',
    label: 'Component Props',
    content: `
    /* Component Props */
  
    // Props allow you to pass data from a parent component to a child component.
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
  
    // Usage:
    const element = <Welcome name="John" />;
    `
  },
  {
    id: 'children_prop',
    label: 'Children Prop',
    content: `
    /* Children Prop */
  
    // The children prop allows you to pass JSX elements as children to a component.
    function Welcome(props) {
      return (
        <div>
          <h1>Hello, {props.name}</h1>
          {props.children}
        </div>
      );
    }
  
    // Usage:
    const element = (
      <Welcome name="John">
        <p>Welcome to my website!</p>
      </Welcome>
    );
    `
  },
  {
    id: 'conditional_rendering',
    label: 'Conditional Rendering',
    content: `
    /* Conditional Rendering */
  
    // Conditional rendering allows you to render different content based on conditions.
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
    }
  
    // Usage:
    const element = <Greeting isLoggedIn={true} />;
    `
  },
  {
    id: 'lists_in_components',
    label: 'Lists in Components',
    content: `
    /* Lists in Components */
  
    // Lists can be rendered using JavaScript map() function inside JSX.
    function List(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
      return <ul>{listItems}</ul>;
    }
  
    // Usage:
    const numbers = [1, 2, 3, 4, 5];
    const element = <List numbers={numbers} />;
    `
  },
  {
    id: 'memo',
    label: 'Memo',
    content: `
    /* Memo */
  
    // Memo is a higher-order component that memoizes the result of a functional component rendering.
    const MemoizedComponent = React.memo(function MyComponent(props) {
      // Component logic...
    });
  
    // Usage:
    const element = <MemoizedComponent />;
    `
  },
  {
    id: 'context',
    label: 'Context',
    content: `
    /* Context */
  
    // Context provides a way to pass data through the component tree without having to pass props down manually at every level.
    const ThemeContext = React.createContext('light');
  
    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return <button className={theme}>Themed Button</button>;
    }
  
    // Usage:
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>;
    `
  },
  {
    id: 'use_state_example',
    label: 'useState',
    content: `
    import React, { useState } from 'react';
  
    function Counter() {
      const [count, setCount] = useState(0); // Initialize state variable 'count' with initial value 0
  
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button> {/* Update 'count' state on button click */}
        </div>
      );
    }
    // Use useState when you need to add state to functional components.
    `
  },
  {
    id: 'use_effect_example',
    label: 'useEffect',
    content: `
    import React, { useState, useEffect } from 'react';
  
    function Timer() {
      const [seconds, setSeconds] = useState(0); // Initialize state variable 'seconds' with initial value 0
  
      useEffect(() => {
        const intervalId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1); // Update 'seconds' state every second
        }, 1000);
  
        return () => clearInterval(intervalId); // Cleanup function to clear interval
      }, []); // Empty dependency array ensures effect runs only once on component mount
  
      return <p>Timer: {seconds} seconds</p>;
    }
    // Use useEffect for performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
    `
  },
  {
    id: 'use_layout_effect_example',
    label: 'useLayoutEffect',
    content: `
    import React, { useLayoutEffect, useRef } from 'react';
  
    function UseLayoutEffectExample() {
      const elementRef = useRef(); // Create a ref to access DOM element
  
      useLayoutEffect(() => {
        // Do something after DOM has been updated (like setting styles)
        elementRef.current.style.backgroundColor = 'red';
      }, []); // Empty dependency array ensures effect runs only once on component mount
  
      return <div ref={elementRef}>UseLayoutEffect Example</div>;
    }
    // Use useLayoutEffect when you need to perform DOM mutations immediately after the browser has painted.
    `
  },
  {
    id: 'use_ref_example',
    label: 'useRef',
    content: `
    import React, { useRef } from 'react';
  
    function InputWithFocusButton() {
      const inputRef = useRef(); // Create a ref to access input element
  
      const handleClick = () => {
        inputRef.current.focus(); // Focus on the input element
      };
  
      return (
        <div>
          <input ref={inputRef} type="text" />
          <button onClick={handleClick}>Focus Input</button> {/* On button click, focus the input element */}
        </div>
      );
    }
    // Use useRef when you need to access DOM nodes or persist values between renders without causing re-renders.
    `
  },
  {
    id: 'use_callback_example',
    label: 'useCallback',
    content: `
    import React, { useState, useCallback } from 'react';
  
    function ParentComponent() {
      const [count, setCount] = useState(0); // Initialize state variable 'count' with initial value 0
  
      const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1); // Increment 'count' state
      }, []); // Empty dependency array ensures 'increment' function is memoized and doesn't change on re-renders
  
      return (
        <div>
          <p>Count: {count}</p>
          <ChildComponent increment={increment} />
        </div>
      );
    }
  
    function ChildComponent({ increment }) {
      return <button onClick={increment}>Increment</button>; // Pass the memoized 'increment' function as a prop
    }
    // Use useCallback to memoize functions to prevent unnecessary re-renders of child components that receive functions as props.
    `
  },
  {
    id: 'use_memo_example',
    label: 'useMemo',
    content: `
    import React, { useState, useMemo } from 'react';
  
    function ExpensiveCalculationComponent({ value }) {
      const expensiveValue = useMemo(() => {
        // Expensive calculation here, memoized to avoid unnecessary re-calculations
        return value * 2;
      }, [value]); // Re-run calculation only if 'value' prop changes
  
      return <p>Expensive value: {expensiveValue}</p>;
    }
    // Use useMemo to memoize the result of expensive computations to avoid re-calculating them on every render.
    `
  },
  {
    id: 'use_context_example',
    label: 'useContext',
    content: `
    import React, { useContext } from 'react';
  
    const ThemeContext = React.createContext('light'); // Create a context with default value 'light'
  
    function ThemedButton() {
      const theme = useContext(ThemeContext); // Access the current value of the context 'ThemeContext'
      return <button className={theme}>Themed Button</button>;
    }
  
    // Usage:
    <ThemeContext.Provider value="dark"> {/* Provide a new value for the context */}
      <ThemedButton /> {/* ThemedButton will receive the updated value 'dark' */}
    </ThemeContext.Provider>;
    // Use useContext to access context values in functional components when you need to avoid prop drilling.
    `
  },
  {
    id: 'class_component_constructor',
    label: 'Class Component Constructor',
    content: `
    import React, { Component } from 'react';
  
    class MyComponent extends Component {
      constructor(props) {
        super(props); // Call the constructor of the parent class (Component)
        
        // Initialize state in constructor
        this.state = {
          count: 0 // Initial state value for 'count'
        };
      }
  
      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p> {/* Accessing the state value */}
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button> {/* Updating the state value */}
          </div>
        );
      }
    }
  
    // Use a constructor in a class component to initialize state and bind methods.
    `
  },
  {
    id: 'class_component_state',
    label: 'Class Component State',
    content: `
    import React, { Component } from 'react';
  
    class MyComponent extends Component {
      constructor(props) {
        super(props); // Call the constructor of the parent class (Component)
        
        // Initialize state in constructor
        this.state = {
          count: 0 // Initial state value for 'count'
        };
      }
  
      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p> {/* Accessing the state value */}
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button> {/* Updating the state value */}
          </div>
        );
      }
    }
  
    // Use state in a class component to manage data that changes over time and affects the component's rendering.
    `
  },
  {
    id: 'component_did_mount_example',
    label: 'ComponentDidMount',
    content: `
    import React, { Component } from 'react';
  
    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: null // Initial state
        };
      }
  
      componentDidMount() {
        // Lifecycle method called once after the component is mounted
        // Good place to fetch data from an API
        fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }
  
      render() {
        const { data } = this.state;
        return (
          <div>
            {data ? <p>Data: {data}</p> : <p>Loading...</p>}
          </div>
        );
      }
    }
  
    // Use componentDidMount to perform side effects like data fetching, subscriptions, or initializing non-DOM properties.
    `
  },
  {
    id: 'component_will_unmount_example',
    label: 'ComponentWillUnmount',
    content: `
    import React, { Component } from 'react';
  
    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          timer: null // Initial state
        };
      }
  
      componentDidMount() {
        // Set up a timer when the component is mounted
        const timer = setInterval(() => {
          console.log('Tick');
        }, 1000);
        this.setState({ timer });
      }
  
      componentWillUnmount() {
        // Lifecycle method called just before the component is unmounted and destroyed
        // Good place to clean up timers, cancel network requests, or clean up subscriptions
        clearInterval(this.state.timer);
      }
  
      render() {
        return <p>Timer is running. Check the console for ticks.</p>;
      }
    }
  
    // Use componentWillUnmount to clean up resources and prevent memory leaks.
    `
  },
  {
    id: 'component_did_update_example',
    label: 'ComponentDidUpdate',
    content: `
    import React, { Component } from 'react';
  
    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0 // Initial state
        };
      }
  
      componentDidUpdate(prevProps, prevState) {
        // Lifecycle method called after the component is updated
        // Good place to perform actions based on state or prop changes
        if (prevState.count !== this.state.count) {
          console.log('Count changed:', this.state.count);
        }
      }
  
      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
          </div>
        );
      }
    }
  
    // Use componentDidUpdate to act on state or prop changes, such as updating the DOM or making network requests.
    `
  },
  {
    id: 'get_derived_state_from_error_example',
    label: 'getDerivedStateFromError',
    content: `
    import React, { Component } from 'react';
  
    class ErrorBoundary extends Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false }; // Initialize state to track error
      }
  
      static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
      }
  
      render() {
        if (this.state.hasError) {
          // Render fallback UI when an error is encountered
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children; // Render children if no error
      }
    }
  
    // Usage:
    class MyComponent extends Component {
      render() {
        throw new Error('Test Error'); // Simulating an error
        return <div>My Component</div>;
      }
    }
  
    function App() {
      return (
        <ErrorBoundary>
          <MyComponent />
        </ErrorBoundary>
      );
    }
  
    // Use getDerivedStateFromError to update the state and display a fallback UI when an error is encountered in a child component.
    `
  },
  {
    id: 'component_did_catch_example',
    label: 'componentDidCatch',
    content: `
    import React, { Component } from 'react';
  
    class ErrorBoundary extends Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false }; // Initialize state to track error
      }
  
      static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
      }
  
      componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service
        console.error('Error:', error, 'Error Info:', errorInfo);
      }
  
      render() {
        if (this.state.hasError) {
          // Render fallback UI when an error is encountered
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children; // Render children if no error
      }
    }
  
    // Usage:
    class MyComponent extends Component {
      render() {
        throw new Error('Test Error'); // Simulating an error
        return <div>My Component</div>;
      }
    }
  
    function App() {
        return (
          <ErrorBoundary>
            <MyComponent />
          </ErrorBoundary>
        );
      }
      
      // Use componentDidCatch to log error information or perform other side effects when an error is caught by an Error Boundary.
    `
  },
  {
    id: 'error_boundary_example',
    label: 'Error Boundary',
    content: `
    import React, { Component } from 'react';
  
    class ErrorBoundary extends Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false }; // Initialize state to track error
      }
  
      static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
      }
  
      componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service
        console.error('Error:', error, 'Error Info:', errorInfo);
      }
  
      render() {
        if (this.state.hasError) {
          // Render fallback UI when an error is encountered
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children; // Render children if no error
      }
    }
  
    // Usage:
    class MyComponent extends Component {
      render() {
        throw new Error('Test Error'); // Simulating an error
        return <div>My Component</div>;
      }
    }
  
    function App() {
      return (
        <ErrorBoundary>
          <MyComponent />
        </ErrorBoundary>
      );
    }
  
    // Use getDerivedStateFromError to update the state and display a fallback UI when an error is encountered in a child component.
    // Use componentDidCatch to log error information or perform other side effects when an error is caught by an Error Boundary.
    `
  }
   
];

