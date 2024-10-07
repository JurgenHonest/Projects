# Age Calcualator
--
## HTML Structure: 
a. &nbsp;The document is structured with the basic HTML tags including DOCTYPE html, html, head, and body elements.<br>
b. &nbsp;The head section includes meta tags for character encoding and viewport settings, a title for the page ("Age Calculator to practice"), and a link to an external CSS file (style.css).<br>
c. &nbsp;The body section contains the main content of the calculator, wrapped inside a container.
### The Content of HTML:
a. &nbsp;There is a div element with class calculator, which houses the entire age calculator.<br>
b. &nbsp;A heading (h1) reads "Javascript Age Calculator".<br>
c. &nbsp;An input box (input type="date") allows the user to select their birthdate.<br>
d. &nbsp;A button calls the JavaScript function calculateAge() when clicked.<br>
e. &nbsp;An empty p element with id="result" is used to display the calculated age.
## CSS Structure: 
### 1.Container (.container):
Takes up the full width (100%) and height (min-height: 100vh) of the viewport.<br>
The background is a gradient transitioning from purple (#4203a9) to light blue (#90bafc).<br>
Text color is set to white (#fff), and padding is added around the content.
### 2.Calculator Wrapper (.calculator):
Has a maximum width of 600px and is horizontally aligned with left margin set to 10%.<br>
Positioned vertically with a top margin of 10%.
### 3. Calculator Heading (.calculator h1):
The heading font size is large (60px).<br>
The span inside the heading has a yellow color (#ffff76) for added emphasis.
### 4. Input Box Styling (.input-box):
Adds spacing (margin: 40px 0;) and padding (35px), with a background that is semi-transparent white (rgba(255, 255, 255, 0.3)).<br>
The layout is flexbox-based to horizontally align the input and button elements.
### 5. Input Field (.input-box input):
The input stretches to fill available space (flex: 1) and has no borders or outline.
The ::webkit-calendar-picker-indicator pseudo-element is customized to change the size and positioning of the date picker control.
### 6.Button (.input-box button):
Styled with a yellow background (#ffff76), no borders, and rounded corners.<br>
Has a padding of 15px 30px and changes the cursor to a pointer on hover for better interactivity.
### 7.Result Section (#result):
The result text will have a font size of 20px.<br>
Any span inside the result is highlighted in yellow (#ffff76), similar to the heading style.
