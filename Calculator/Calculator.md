# Calculator Using Javascript
--
## HTML Of Project:
The structure defines a simple calculator interface with buttons for numbers, basic operators, and functions like clear (C) and calculate (=). It includes an input field to display the user's input and results. JavaScript is used to append values to the display, clear the display, and evaluate the entered expression using the eval() function to compute the result.
## CSS Of Project:
### 1&nbsp;.Body:
Centered layout using Flexbox .
```
  display: flex;
  justify-content:center;
  align-items: center
```
Full height with a light gray background.
### 2.&nbsp;Calculator (#calculator):
Dark background with rounded corners and a max width of 500px.
### 3.&nbsp;Display (#display):
Full width, large text, dark background, white text, no border.
### 4.&nbsp;Keypad (#keys):
Grid layout (4 columns), with 10px spacing between buttons.
### 5.&nbsp;Buttons:
Circular, 100x100px, dark gray background, white bold text, pointer cursor.
Hover and active states lighten the background color.
### 6.&nbsp;Operator Buttons (.operatorbtn):

Orange background with lighter hover and active states for emphasis.
## JS Of Project:
### 1.&nbsp;appendToDisplay(input):
Appends the clicked button’s value (input) to the calculator's display.
Updates the display value using display.value += input.
### 2.&nbsp;clearDisplay():
Clears the current input by setting the display value to an empty string (display.value = "").
### 3.&nbsp;calculate():
Uses the eval() function to evaluate the arithmetic expression in the display.
If the expression is invalid, it catches the error and displays "Error".
