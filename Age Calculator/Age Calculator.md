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

## JS Structure:
### 1.Date Input Restriction:
userInput.max restricts the date input field to prevent selecting a future date by setting the maximum value to today's date using new Date().toISOString().split("T")[0].
### 2.Age Calculation (calculateAge function):
Retrieves the selected date (birthDate) from the input field.<br>
Extracts the day, month, and year from both the birthdate (d1, m1, y1) and the current date (d2, m2, y2).
### 3.Year Calculation:
(y3 = y2 - y1:) Subtracts the birth year from the current year to calculate the initial difference in years.
### 4.Month Calculation:
If the current month (m2) is greater than or equal to the birth month (m1), the month difference is calculated as m3 = m2 - m1.
If the current month is smaller, it adjusts the year (y3--) and calculates the month difference by adding 12 to the current month (m3 = 12 + m2 - m1).
### 5.Day Calculation:
If the current day (d2) is greater than or equal to the birth day (d1), the day difference is simply (d3 = d2 - d1).<br>
Otherwise, it reduces the month (m3--) and uses the getDaysInMonth function to calculate how many days are in the previous month, then adjusts the day difference (d3 = getDaysInMonth(y1, m1) + d2 - d1).
### 6.Final Adjustment:
If m3 < 0, it means the month difference is negative, so it adjusts both the year (y3--) and sets the month difference to 11 (m3 = 11).
### 7.Display the Result:
The calculated age in years, months, and days is displayed in the result paragraph using innerHTML with highlighted values in <span> tags.
### 8.Helper Function:
getDaysInMonth: This function returns the number of days in a specific month by creating a new date object for the given year and month, using the 0 day to reference the last day of the previous month.
