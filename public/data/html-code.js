export const htmlCodeBlocks = [
  {
    id: 'html-Structure',
    label: 'Html Structure',
    content:`<!DOCTYPE html>
<!-- This is the document type declaration that defines the document as an HTML5 document -->
<html lang="en">
<!-- The opening <html> tag signifies the start of the HTML document -->
<head>
  <!-- The <head> tag contains meta-information about the document,
  such as its title, and links to stylesheets and scripts -->
  <meta charset="UTF-8">
  <!-- <meta charset="UTF-8"> sets the character encoding for the document to UTF-8 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- The viewport meta tag optimizes the page for mobile devices -->
  <title>My Awesome Page</title>
  <!-- The <title> tag sets the title of the webpage, visible in the browser tab -->
</head>
<body>
  <!-- The <body> tag contains all the content of the HTML document, such as text, images, and other elements -->
  <h1>Welcome to My Website</h1>
  <!-- This is a heading tag, <h1> is the highest level heading -->
  <p>This is a paragraph of text.</p>
  <!-- The <p> tag is used to define a paragraph -->
</body>
</html>
<!-- The closing </html> tag signifies the end of the HTML document -->
`
  },
  {
    id: 'doc-type-declaration',
    label: 'Doctype Declaration',
    content:
    `<!DOCTYPE html>
<!-- This declaration tells the browser that the document is an HTML5 document.
It should always be the very first line in an HTML document. -->`
  },
  {
    id: 'html-elements',
    label: 'Html Elements',
    content:
    `<!-- Common HTML elements -->

<h1>This is a Heading</h1>
<!-- <h1> to <h6> are heading tags, with <h1> being the most important -->

<p>This is a paragraph.</p>
<!-- <p> tags define paragraphs of text -->

<a href="https://www.example.com">This is a link</a>
<!-- <a> tags create hyperlinks to other pages or resources -->

<img src="image.jpg" alt="A description of the image">
<!-- <img> embeds an image, the src attribute specifies the source, and alt provides alternative text -->

<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
<!-- <ul> is an unordered list with <li> elements as list items -->

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
<!-- <ol> is an ordered list with <li> elements as list items -->`
  },
  {
    id: 'html-tags',
    label: 'Html Tags',
    content:
    `<!-- Examples of various HTML tags -->

<h2>Heading Level 2</h2>
<!-- <h2> represents a second-level heading -->

<p><strong>Bold text</strong> and <em>italic text</em>.</p>
<!-- <strong> makes text bold, <em> makes text italic -->

<div>
  <p>This is a <code>div</code> element.</p>
  <!-- <div> defines a division or section, <code> represents inline code -->
</div>

<span style="color: red;">This is a span with inline style.</span>
<!-- <span> is used to apply styles or group inline elements -->`
  },
  {
    id: 'headings-example',
    label: 'Headings',
    content:
    `<!-- HTML provides six levels of headings -->

<h1>This is an H1 heading - the most important</h1>
<h2>This is an H2 heading - slightly less important</h2>
<h3>This is an H3 heading</h3>
<h4>This is an H4 heading</h4>
<h5>This is an H5 heading</h5>
<h6>This is an H6 heading - the least important</h6>
<!-- Headings <h1> to <h6> decrease in importance -->`
  },
  {
    id: 'paragraphs-example',
    label: 'Paragraphs',
    content:
    `<!-- Paragraphs are defined using the <p> tag. 
    They create a block of text with space before and after. -->

<p>This is the first paragraph. It introduces the topic.</p>
<p>This is the second paragraph. It provides additional details.</p>
<!-- Each <p> tag represents a separate block of text. -->`
  },
  {
    id: 'line-breaks',
    label: 'Line Breaks',
    content:
    `<!-- The <br> tag inserts a line break without starting a new paragraph. It is a self-closing tag. -->

<p>This is the first line.<br>This is the second line on the same paragraph.</p>
<!-- Here, <br> creates a new line within the same paragraph. -->`
  },
  {
    id: 'horizontal-rule',
    label: 'Horizontal Rule',
    content:
    `<!-- The <hr> tag inserts a horizontal line (rule) across the page to separate content. It is also a self-closing tag. -->

<p>This is some text above the line.</p>
<hr>
<p>This is some text below the line.</p>
<!-- The <hr> tag is often used to visually separate sections of content. -->`
  },
  {
    id: 'text-formatting',
    label: 'Text Formatting',
    content:
    `<!-- Text formatting tags modify the appearance of text. -->

<p><strong>This text is bold.</strong></p>
<!-- The <strong> tag makes text bold. It signifies strong importance. -->

<p><em>This text is italic.</em></p>
<!-- The <em> tag italicizes text. It indicates emphasis. -->

<p><u>This text is underlined.</u></p>
<!-- The <u> tag underlines text. -->

<p>You can also <strong><em>combine</em> <u>multiple</u></strong> formatting tags.</p>
<!-- Tags can be nested to apply multiple styles to the same text. -->`
  },
  {
    id: 'comments',
    label: 'Comments',
    content:
    `<!-- Comments are written between <!-- and -->. They are not displayed on the webpage and are used to add notes or explanations in the code. -->

<p>This is visible text.</p>
<!-- This is a comment and will not be displayed on the webpage. -->
<p>Comments are useful for documentation or leaving messages in the code.</p>
<!-- Comments can span multiple lines. They are ignored by the browser. -->`
  },
  {
    id: 'extended-links',
    label: 'Extended Links',
    content:
    `<!-- The <a> tag creates hyperlinks with various target options. -->

<a href="https://www.example.com" target="_blank">Open in New Tab</a>
<!-- target="_blank" opens the link in a new browser tab or window. -->

<a href="https://www.example.com" target="_self">Open in Same Frame</a>
<!-- target="_self" opens the link in the same frame. This is the default behavior if no target attribute is specified. -->

<a href="https://www.example.com" target="_parent">Open in Parent Frame</a>
<!-- target="_parent" opens the link in the parent frame. If there are no parent frames, it behaves like _self. -->

<a href="https://www.example.com" target="_top">Open in Full Body of the Window</a>
<!-- target="_top" opens the link in the full body of the window, breaking out of all frames. -->

<!-- For named iframes: -->
<iframe name="myIframe" src="about:blank" style="width: 100%; height: 100px;"></iframe>
<!-- This iframe is a target for the next link. -->

<a href="https://www.example.com" target="myIframe">Open in Named Iframe</a>
<!-- target="myIframe" opens the link in the iframe with the name "myIframe". -->`
  },
  {
    id: 'images',
    label: 'Images',
    content:
    `<!-- The <img> tag embeds an image in the document. It is a self-closing tag. -->

<img src="image.jpg" alt="A description of the image">
<!-- The src attribute specifies the image source URL.
     The alt attribute provides alternative text if the image cannot be displayed or for accessibility. -->

<img src="https://www.example.com/image.jpg" alt="Example Image" width="200" height="100">
<!-- width and height attributes define the dimensions of the image in pixels. -->

<img src="image.jpg" alt="Responsive Image" style="max-width:100%; height:auto;">
<!-- Using CSS, max-width: 100% and height: auto make the image responsive, adjusting to the container size. -->`
  },
  {
    id: 'lists',
    label: 'Lists',
    content:
    `<!-- Lists can be ordered or unordered, each containing list items. -->

<ul>
  <!-- Unordered list (bulleted) -->
  <li>First item in unordered list</li>
  <li>Second item in unordered list</li>
  <li>Third item in unordered list</li>
</ul>

<ol>
  <!-- Ordered list (numbered) -->
  <li>First item in ordered list</li>
  <li>Second item in ordered list</li>
  <li>Third item in ordered list</li>
</ol>

<ul>
  <!-- Lists can be nested inside each other -->
  <li>First item in unordered list
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
  <li>Second item in unordered list</li>
</ul>`
  },
  {
    id: 'tables',
    label: 'Table',
    content:
    `<!-- Tables are used to display tabular data. -->

<table border="1">
  <!-- The <table> tag defines the table. The border attribute adds a border around the table. -->
  <tr>
    <!-- <tr> defines a table row -->
    <th>Header 1</th>
    <!-- <th> defines a header cell. Header cells are bold and centered by default. -->
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <!-- <td> defines a standard data cell. -->
    <td>Data 2</td>
  </tr>
  <tr>
    <td>Data 3</td>
    <td>Data 4</td>
  </tr>
</table>

<!-- You can also use CSS for table styling. Example: -->
<table style="width:100%; border-collapse: collapse;">
  <tr style="background-color: #f2f2f2;">
    <th style="border: 1px solid #ddd; padding: 8px;">Header 1</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Header 2</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Data 1</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Data 2</td>
  </tr>
  <tr style="background-color: #f9f9f9;">
    <td style="border: 1px solid #ddd; padding: 8px;">Data 3</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Data 4</td>
  </tr>
</table>`
  },
  {
    id: 'forms',
    label: 'Forms',
    content:`
  <!-- Forms collect user inputs and send data to a server or process it on the client side. -->

  <form action="/submit" method="post">
    <!-- The <form> tag defines a form. The action attribute specifies where to send the form data.
    The method attribute specifies how to send the data (GET or POST). -->
  
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <!-- <label> tags are associated with inputs for better accessibility.
    The <input> tag with type="text" creates a single-line text field.
    The required attribute makes this field mandatory. -->
  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <!-- type="email" ensures that the entered value is a valid email address. -->
  
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    <!-- The <textarea> tag creates a multi-line text input.
    The rows and cols attributes specify the visible size. -->
  
    <label for="country">Country:</label>
    <select id="country" name="country">
      <!-- The <select> tag creates a dropdown list. -->
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </select>
  
    <button type="submit">Submit</button>
    <!-- The <button> tag creates a clickable button. type="submit" submits the form data. -->
  </form>
  `
  },
  {
    id: 'input-types',
    label: 'Input Types',
    content: `
  <!-- Various input types for different kinds of data collection. -->
  
  <form action="/process" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <!-- type="text" for single-line text input -->
  
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <!-- type="password" for a password field, where characters are masked -->
  
    <label for="remember">Remember Me:</label>
    <input type="checkbox" id="remember" name="remember">
    <!-- type="checkbox" creates a checkbox for binary choices -->
  
    <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <!-- type="radio" for selecting one option from a group -->
  
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">
    <!-- type="date" allows selecting a date from a calendar -->
  
    <label for="color">Favorite Color:</label>
    <input type="color" id="color" name="color">
    <!-- type="color" provides a color picker -->
  
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10">
    <!-- type="number" for numeric input with min and max values -->
  
    <label for="file">Upload File:</label>
    <input type="file" id="file" name="file">
    <!-- type="file" for file uploads -->
  
    <input type="submit" value="Submit">
    <!-- type="submit" creates a submit button -->
  
    <input type="reset" value="Reset">
    <!-- type="reset" creates a reset button to clear the form -->
  </form>
  `
  },
  {
    id: 'form-attributes',
    label: 'Form Attributes',
    content: `
  <!-- Form attributes specify how and where to send the form data. -->
  
  <form action="/submit-form" method="post">
    <!-- The action attribute specifies the URL where the form data will be sent after submission. -->
    <!-- The method attribute specifies how to send the form data.
    Use "GET" to append form data to the URL, or "POST" to send it as a request body. -->
  
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  
    <button type="submit">Submit</button>
    <!-- The submit button triggers the form to be sent to the specified action URL using the specified method. -->
  </form>
  
  <!-- Example using the GET method -->
  
  <form action="/search" method="get">
    <label for="query">Search:</label>
    <input type="text" id="query" name="query">
    <button type="submit">Search</button>
    <!-- With method="get", the form data is appended to the action URL as query parameters. -->
  </form>
  `
  },
  {
    id: 'labels',
    label: 'Labels',
    content: `
  <!-- The <label> tag defines a label for an input element, improving accessibility and usability. -->
  
  <form>
    <label for="username">Username:</label>
    <!-- The 'for' attribute links the label to the input with the specified id. -->
    <input type="text" id="username" name="username">
    
    <br>
  
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <br>
  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <br>
  
    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments"></textarea>
    <!-- The <textarea> element also benefits from a linked label for accessibility. -->
  
    <br>
  
    <label>
      <input type="checkbox" name="subscribe">
      Subscribe to newsletter
      <!-- Labels can also wrap input elements, making them clickable as a unit. -->
    </label>
  </form>
  `
  },
  {
    id: 'fieldsets',
    label: 'Fieldsets',
    content: `
  <!-- The <fieldset> element groups related form elements, with an optional <legend> to provide a caption. -->
  
  <form>
    <fieldset>
      <legend>Personal Information</legend>
      <!-- The <legend> provides a title for the fieldset. -->
  
      <label for="firstname">First Name:</label>
      <input type="text" id="firstname" name="firstname">
  
      <br>
  
      <label for="lastname">Last Name:</label>
      <input type="text" id="lastname" name="lastname">
  
      <br>
  
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob">
    </fieldset>
  
    <fieldset>
      <legend>Account Details</legend>
      <!-- This <fieldset> groups account-related form elements. -->
  
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
  
      <br>
  
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
      
      <br>
  
      <label for="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" name="confirm_password">
    </fieldset>
  
    <br>
  
    <button type="submit">Submit</button>
    <!-- Submit button to send the form data -->
  </form>
  `
  },
  {
    id: 'semantic-html',
    label: 'Semantic HTML',
    content: `
  <!-- Semantic HTML elements provide meaning to the content they enclose,
  making it more understandable for both browsers and developers. -->
  
  <header>
    <h1>Website Header</h1>
    <!-- The <header> tag represents introductory content,
    typically containing navigation links or site branding. -->
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <!-- The <nav> tag defines a section with navigation links. -->
  </header>
  
  <section>
    <h2>Main Section</h2>
    <!-- The <section> tag defines a section of a document,
    such as chapters, headers, footers, or any other thematic grouping of content. -->
    <article>
      <h3>Article Title</h3>
      <!-- The <article> tag defines an independent, self-contained piece of content,
      such as a blog post or news article. -->
      <p>Article content goes here...</p>
    </article>
  
    <aside>
      <!-- The <aside> tag defines content that is tangentially related to the content around it. -->
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </ul>
    </aside>
  </section>
  
  <footer>
    <!-- The <footer> tag defines a footer for a document or section. -->
    <p>&copy; 2024 My Website</p>
  </footer>
  `
  },
  {
    id: 'meta-tags',
    label: 'Meta Tags',
    content: `
  <!-- Meta tags provide metadata about the HTML document, such as character set, viewport settings, and description. -->
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <!-- Defines the character encoding for the document -->
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Sets the viewport width to the device width and initial zoom level to 1 -->
  
    <title>My Website</title>
    <!-- Sets the title of the webpage -->
  
    <meta name="description" content="This is a description of my website.">
    <!-- Provides a brief description of the webpage -->
  </head>
  <body>
    <!-- Body content goes here -->
  </body>
  </html>
  `
  },
  {
    id: 'html-entities',
    label: 'HTML Entities',
    content: `
  <!-- HTML entities are special characters that are represented by codes or names to display symbols,
  mathematical signs, and other characters in HTML. -->
  
  <p>&copy; 2024 My Website</p>
  <!-- &copy; is the HTML entity for the copyright symbol © -->
  
  <p>&reg; 2024 My Company</p>
  <!-- &reg; is the HTML entity for the registered trademark symbol ® -->
  
  <p>&lt; &gt; &amp; &quot; &apos;</p>
  <!-- &lt; represents <, &gt; represents >, &amp; represents &, &quot; represents ", &apos; represents ' -->
  `
  },
  {
    id: 'audio-video',
    label: 'Audio and Video',
    content: `
  <!-- The <audio> and <video> elements allow embedding audio and video content into web pages. -->
  
  <audio controls>
    <!-- The controls attribute adds audio controls (play, pause, volume) to the player. -->
    <source src="audio.mp3" type="audio/mpeg">
    <!-- The <source> tag specifies multiple media resources for the media element. -->
    Your browser does not support the audio element.
    <!-- Fallback content displayed if the browser doesn't support the audio element. -->
  </audio>
  
  <video controls width="400">
    <!-- The width attribute sets the width of the video player. -->
    <source src="video.mp4" type="video/mp4">
    <!-- The <source> tag specifies multiple video resources for the video element. -->
    Your browser does not support the video element.
    <!-- Fallback content displayed if the browser doesn't support the video element. -->
  </video>
  `
  },
  {
    id: 'iframes',
    label: 'Iframes',
    content: `
  <!-- The <iframe> element embeds another HTML page into the current page. -->
  
  <iframe src="https://www.example.com"></iframe>
  <!-- The src attribute specifies the URL of the page to embed. -->
  
  <iframe src="https://www.example.com" width="500" height="300"></iframe>
  <!-- The width and height attributes define the dimensions of the iframe. -->
  `
  },
  {
    id: 'embedding-content',
    label: 'Embedding Content',
    content: `
  <!-- The <embed> and <object> elements embed external content such as multimedia or interactive content. -->
  
  <embed src="example.swf" type="application/x-shockwave-flash">
  <!-- The src attribute specifies the URL of the embedded content, and the type attribute specifies the MIME type. -->
  
  <object data="example.swf" type="application/x-shockwave-flash" width="400" height="300">
    <!-- The data attribute specifies the URL of the embedded content. -->
    <param name="movie" value="example.swf">
    <!-- The <param> tag provides parameters for the embedded content. -->
    Your browser does not support embedded content.
    <!-- Fallback content displayed if the browser doesn't support the embedded content. -->
  </object>
  `
  },
  {
    id: 'canvas',
    label: 'Canvas',
    content: `
  <!-- The <canvas> element provides a space on which JavaScript can be used to draw graphics,
  animations, or other visual effects. -->
  
  <canvas id="myCanvas" width="200" height="100"></canvas>
  <!-- The width and height attributes define the size of the canvas. -->
  
  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 80);
  </script>
  <!-- JavaScript code to draw a green rectangle on the canvas. -->
  `
  },
  {
    id: 'svg',
    label: 'SVG',
    content: `
  <!-- SVG (Scalable Vector Graphics) is used to define vector-based graphics for the web. -->
  
  <svg width="200" height="200">
    <!-- The width and height attributes define the size of the SVG viewport. -->
    <circle cx="100" cy="100" r="50" fill="red" />
    <!-- The <circle> element creates a circle with the specified center (cx, cy) and radius (r). -->
  </svg>
  `
  },
  {
    id: 'responsive-design',
    label: 'Responsive Design',
    content: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- The viewport meta tag ensures proper rendering and scaling on mobile devices. -->
    <title>Responsive Design Example</title>
    <style>
      /* CSS Media Queries for responsive design */
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        body {
          font-size: 14px;
        }
      }
  
      /* Small devices (portrait tablets and large phones, 601px to 768px) */
      @media only screen and (min-width: 601px) and (max-width: 768px) {
        body {
          font-size: 16px;
        }
      }
  
      /* Medium devices (landscape tablets, 769px to 992px) */
      @media only screen and (min-width: 769px) and (max-width: 992px) {
        body {
          font-size: 18px;
        }
      }
  
      /* Large devices (laptops/desktops, 993px and up) */
      @media only screen and (min-width: 993px) {
        body {
          font-size: 20px;
        }
      }
    </style>
  </head>
  <body>
    <h1>Responsive Design Example</h1>
    <p>This text will have different font sizes based on the screen width.</p>
  </body>
  </html>
  `
  }
  
];

