export const cssCodeBlocks = [
  {
    id: 'css-syntax',
    label: 'Syntax',
    content: `
    /* CSS Syntax and Basic Structure */
  
    /* CSS comments start with '/*' and end with '* /' */
    /* This is a comment */
  
    /* CSS rulesets consist of a selector and one or more declarations */
    selector {
      property: value;
    }
    /* Example: */
    h1 {
      color: blue;
      font-size: 24px;
    }
    `
  },
  {
    id: 'selectors',
    label: 'Selectors',
    content: `
    /* CSS Selectors */
  
    /* Element Selector */
    p {
      color: red;
    }
  
    /* Class Selector */
    .myClass {
      background-color: yellow;
    }
  
    /* ID Selector */
    #myID {
      font-weight: bold;
    }
  
    /* Attribute Selector */
    input[type="text"] {
      border: 1px solid black;
    }
  
    /* Descendant Selector */
    div p {
      font-style: italic;
    }
  
    /* Child Selector */
    ul > li {
      list-style-type: square;
    }
  
    /* Sibling Selector */
    h2 + p {
      margin-top: 20px;
    }
  
    /* Pseudo-classes */
    a:hover {
      color: purple;
    }
  
    /* Pseudo-elements */
    p::first-line {
      font-weight: bold;
    }
    `
  },
  {
    id: 'css-comments',
    label: 'Comments',
    content: `
    /* CSS Comments */
  
    /* This is a single-line comment */
  
    /*
      This is a multi-line comment
      It can span multiple lines
    */
    `
  },
  {
    id: 'css-units',
    label: 'Units',
    content: `
    /* CSS Units Examples */
  
    /* Pixels (px) */
    .container-pixels {
      width: 300px;
      height: 200px;
      border: 1px solid black;
    }
  
    /* Percentages (%) */
    .container-percentages {
      width: 50%;
      height: 50%;
      background-color: lightblue;
    }
  
    /* Em Units (em) */
    .container-em {
      font-size: 16px; /* 1em = 16px */
      padding: 1em; /* 1em = 16px */
    }
  
    /* Rem Units (rem) */
    html {
      font-size: 16px; /* Base font size for the document */
    }
    .container-rem {
      font-size: 1.2rem; /* 1.2 * base font size */
      padding: 1rem; /* 1 * base font size */
    }
  
    /* Viewport Units (vw, vh, vmin, vmax) */
    .container-viewport {
      width: 50vw; /* 50% of viewport width */
      height: 50vh; /* 50% of viewport height */
    }
  
    /* Other Units (ex, ch, cm, mm, in, pt, pc) */
    .container-other {
      width: 20ex; /* 20 times the height of 'x' character */
      height: 10ch; /* 10 times the width of '0' character */
    }
    `
  },
  {
    id: 'box-model',
    label: 'Box Model',
    content: `
    /* Box Model Example */
  
    /* Define a box with width, height, border, padding, and margin */
    .box {
      width: 200px; /* Width of the content area */
      height: 100px; /* Height of the content area */
      border: 2px solid black; /* Border around the content area */
      padding: 20px; /* Space between the content area and the border */
      margin: 20px; /* Space outside the border */
    }
  
    /* Border: Defines the border around the content area */
    .box-border {
      border: 5px solid blue; /* Border with 5px width and blue color */
    }
  
    /* Padding: Defines the space between the content area and the border */
    .box-padding {
      padding: 30px; /* Padding with 30px space around the content */
    }
  
    /* Margin: Defines the space outside the border */
    .box-margin {
      margin: 30px; /* Margin with 30px space outside the border */
    }
  
    /* Top, Bottom, Right, Left: Individual properties for margin and padding */
    .box-tblr {
      padding-top: 10px; /* 10px padding at the top */
      padding-bottom: 20px; /* 20px padding at the bottom */
      padding-right: 15px; /* 15px padding on the right */
      padding-left: 25px; /* 25px padding on the left */
      
      margin-top: 10px; /* 10px margin at the top */
      margin-bottom: 20px; /* 20px margin at the bottom */
      margin-right: 15px; /* 15px margin on the right */
      margin-left: 25px; /* 25px margin on the left */
    }
    `
  },
  {
    id: 'display-property',
    label: 'Display',
    content: `
    /* Display Property Example */
  
    /* Inline: Elements are displayed inline, allowing other elements to be beside them */
    .inline-element {
      display: inline;
    }
  
    /* Block: Elements are displayed as blocks, taking up the full width available */
    .block-element {
      display: block;
    }
  
    /* Inline-Block: Elements are displayed inline, but can have width and height properties */
    .inline-block-element {
      display: inline-block;
    }
  
    /* Flex: Elements are displayed as flexible boxes, allowing easy alignment and distribution */
    .flex-container {
      display: flex;
    }
  
    /* Grid: Elements are displayed as grid items, arranged in rows and columns */
    .grid-container {
      display: grid;
    }
  
    /* None: Element is not displayed on the page */
    .none-element {
      display: none;
    }
    `
  },
  {
    id: 'positioning',
    label: 'Positioning',
    content: `
    /* Positioning Examples */
  
    /* Static: Default positioning */
    .static-element {
      position: static;
    }
  
    /* Relative: Positioned relative to its normal position */
    .relative-element {
      position: relative;
      top: 20px;
      left: 30px;
    }
  
    /* Absolute: Positioned relative to the nearest positioned ancestor */
    .absolute-element {
      position: absolute;
      top: 50px;
      right: 20px;
    }
  
    /* Fixed: Positioned relative to the viewport */
    .fixed-element {
      position: fixed;
      bottom: 0;
      left: 0;
    }
  
    /* Sticky: Positioned based on the user's scroll position */
    .sticky-element {
      position: sticky;
      top: 0;
    }
    `
  },
  {
    id: 'floats',
    label: 'Floats',
    content: `
    /* Floats Examples */
  
    /* Float elements to the left */
    .float-left {
      float: left;
    }
  
    /* Float elements to the right */
    .float-right {
      float: right;
    }
    `
  },
  {
    id: 'clear-property',
    label: 'Clear',
    content: `
    /* Clear Property Example */
  
    /* Clearfix: Clears floats to prevent layout issues */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
    `
  },
  {
    id: 'background-properties',
    label: 'Background',
    content: `
    /* Background Properties Example */
  
    /* Background color */
    .background-color {
      background-color: lightblue;
    }
  
    /* Background image with cover */
    .background-image {
      background-image: url('example.jpg');
      background-size: cover;
    }
  
    /* Background image with no repeat */
    .background-repeat {
      background-image: url('example.jpg');
      background-repeat: no-repeat;
    }
  
    /* Background image positioned at center */
    .background-position {
      background-image: url('example.jpg');
      background-position: center;
    }
    `
  },
  {
    id: 'color-properties',
    label: 'Color',
    content: `
    /* Color Properties Example */
  
    /* Sets the text color to red */
    .color-example {
      color: red;
    }
  
    /* Sets the opacity of the element to 50% */
    .opacity-example {
      opacity: 0.5;
    }
    `
  },
  {
    id: 'text-properties',
    label: 'Text',
    content: `
    /* Text Properties Example */
  
    /* Specifies the font family */
    .text-example {
      font-family: Arial, sans-serif;
      /* Specifies the font size */
      font-size: 16px;
      /* Specifies the font weight */
      font-weight: bold;
      /* Specifies the font style */
      font-style: italic;
      /* Specifies the text alignment */
      text-align: center;
      /* Specifies the text decoration */
      text-decoration: underline;
    }
    `
  },
  {
    id: 'box-sizing-property',
    label: 'Box-Sizing',
    content: `
    /* Box-Sizing Property Example */
  
    /* Includes padding and border in the element's total width and height */
    .box-sizing-example {
      box-sizing: border-box;
    }
    `
  },
  {
    id: 'overflow-property',
    label: 'Overflow',
    content: `
    /* Overflow Property Example */
  
    /* Allows scrolling when content overflows the element */
    .overflow-example {
      width: 200px;
      height: 100px;
      overflow: auto;
    }
    `
  },
  {
    id: 'visibility-property',
    label: 'Visibility',
    content: `
    /* Visibility Property Example */
  
    /* Element is visible */
    .visible-example {
      visibility: visible;
    }
  
    /* Element is hidden, but still occupies space */
    .hidden-example {
      visibility: hidden;
    }
  
    /* For table elements, collapses the row or column */
    .collapse-example {
      visibility: collapse;
    }
    `
  },
  {
    id: 'z-index-property',
    label: 'Z-Index',
    content: `
    /* Z-Index Property Example */
  
    /* Required for z-index to work */
    .z-index-example {
      position: relative;
    }
  
    /* Element with higher z-index value will be displayed on top */
    .element1 {
      z-index: 1;
    }
  
    .element2 {
      z-index: 2;
    }
    `
  },
  {
    id: 'border-properties',
    label: 'Border',
    content: `
    /* Border Properties Example */
  
    /* Specifies the width of the border */
    /* Specifies the style of the border */
    /* Specifies the color of the border */
    /* Specifies the radius of the border corners */
    .border-example {
      border-width: 2px;
      border-style: solid;
      border-color: #000;
      border-radius: 5px;
    }
    `
  },
  {
    id: 'outline-property',
    label: 'Outline',
    content: `
    /* Outline Property Example */
  
    /* Specifies the style, width, and color of the outline */
    .outline-example {
      outline: 2px dashed red;
    }
    `
  },
  {
    id: 'box-shadow-property',
    label: 'Box-Shadow',
    content: `
    /* Box-Shadow Property Example */
  
    /* Specifies the horizontal offset, vertical offset, blur radius, spread radius, and color of the shadow */
    .box-shadow-example {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }
    `
  },
  {
    id: 'text-shadow-example',
    label: 'Text Shadow',
    content: `
    /* Text Shadow Example */
  
    /* Specifies the horizontal offset, vertical offset, blur radius, and color of the shadow */
    .text-shadow-example {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    `
  },
  {
    id: 'transforms-example',
    label: 'Transforms',
    content: `
    /* Transforms Example */
  
    /* Rotates the element by 45 degrees */
    .transform-rotate {
      transform: rotate(45deg);
    }
  
    /* Scales the element to 1.5 times its original size */
    .transform-scale {
      transform: scale(1.5);
    }
  
    /* Skews the element by 30 degrees */
    .transform-skew {
      transform: skew(30deg);
    }
  
    /* Translates the element by 50px horizontally and 20px vertically */
    .transform-translate {
      transform: translate(50px, 20px);
    }
    `
  },
  {
    id: 'transitions-example',
    label: 'Transitions',
    content: `
    /* Transitions Example */
  
    /* Specifies the properties to transition */
    /* Specifies the duration of the transition */
    /* Specifies the timing function of the transition */
    /* Specifies the delay before the transition starts */
    .transition-example {
      transition-property: background-color, color;
      transition-duration: 0.5s;
      transition-timing-function: ease, linear, ease-in, ease-out, ease-in-out, step-start, step-end, steps(4, end), cubic-bezier(0.25, 0.1, 0.25, 1);
      transition-delay: 0.2s;
    }
    `
  },
  {
    id: 'flex-container-properties-example',
    label: 'Flex Container',
    content: `
    /* Flex Container Properties Example */
  
    /* Specifies a flex container */
    /* Specifies the direction of the flex items */
    /* Specifies whether flex items are forced onto one line or can wrap onto multiple lines */
    /* Specifies how flex items are aligned along the main axis */
    /* Specifies how flex items are aligned along the cross axis when they do not take up all available space */
    /* Specifies how flex lines are aligned within the flex container when there is extra space in the cross axis */
    .flex-container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
    }
    `
  },
  {
    id: 'flex-item-properties-example',
    label: 'Flex Item',
    content: `
    /* Flex Item Properties Example */
  
    /* Specifies how much a flex item will grow relative to the rest of the flex items */
    /* Specifies how much a flex item will shrink relative to the rest of the flex items */
    /* Specifies the initial main size of a flex item */
    /* Specifies the order of the flex item relative to the other flex items */
    /* Specifies how a flex item is aligned along the cross axis, overriding the align-items value for the specific item */
    .flex-item {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      order: 0;
      align-self: auto;
    }
    `
  },
  {
    id: 'grid-container-properties-example',
    label: 'Grid Container',
    content: `
    /* Grid Container Properties Example */
  
    /* Specifies a grid container */
    /* Specifies the size of the rows in the grid */
    /* Specifies the size of the columns in the grid */
    /* Specifies the grid layout using named grid areas */
    /* Specifies the size of the gap between grid items */
    /* Specifies how grid items are aligned along the inline (row) axis */
    /* Specifies how grid items are aligned along the block (column) axis */
    .grid-container {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: auto;
      grid-template-areas: none;
      grid-gap: 10px;
      justify-items: stretch;
      align-items: stretch;
    }
    `
  },
  {
    id: 'grid-item-properties-example',
    label: 'Grid Item',
    content: `
    /* Grid Item Properties Example */
  
    /* Specifies the start position of the grid item in the grid row axis */
    /* Specifies the end position of the grid item in the grid row axis */
    /* Specifies the start position of the grid item in the grid column axis */
    /* Specifies the end position of the grid item in the grid column axis */
    /* Specifies the grid area that the grid item occupies */
    /* Specifies how the grid item is aligned along the inline (row) axis inside its grid area */
    /* Specifies how the grid item is aligned along the block (column) axis inside its grid area */
    .grid-item {
      grid-row-start: auto;
      grid-row-end: auto;
      grid-column-start: auto;
      grid-column-end: auto;
      grid-area: auto;
      justify-self: stretch;
      align-self: stretch;
    }
    `
  },
  {
    id: 'media-queries-example',
    label: 'Media Queries',
    content: `
    /* Media Queries Example */
  
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      .example-element {
        font-size: 14px;
        padding: 10px;
      }
    }
  
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      .example-element {
        font-size: 16px;
        padding: 15px;
      }
    }
  
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      .example-element {
        font-size: 18px;
        padding: 20px;
      }
    }
  
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      .example-element {
        font-size: 20px;
        padding: 25px;
      }
    }
  
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      .example-element {
        font-size: 22px;
        padding: 30px;
      }
    }
    `
  }

];
