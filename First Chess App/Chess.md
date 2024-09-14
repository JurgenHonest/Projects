# Chess App
https://sumit-chessapp.netlify.app/
### The HTML creates the chessboard with 8x8 squares using div elements, each assigned a unique ID based on coordinates. 
1. Global Styles:
Reset margin and padding for all elements and set box-sizing to border-box.
Set html and body to full width and height, and hide overflow.

2. Body Styles:
Apply a gradient background from purple to blue.
Set text color to white.

3. Root Variables:
Define CSS custom properties (variables) for colors.

4. Turn Display:
Style the turn display with padding, border, and background color changes.
5. Game Board:
Define styles for the game board container (#game), setting maximum dimensions and centering it.
Style cell prefixes and game cells with borders, dimensions, and hover effects.

6. Game Cells:
Apply transitions, border-radius, and hover effects with animations for game cells.
Define background colors for alternating cell colors (grey and green).

7. Text Animations:
Create neon glow effects using keyframe animations for different text colors (blue, orange, green).

8. Shake Animations:
Define a shake-little animation to create a shaking effect with various keyframe steps.


## HTML Code
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic Chess App</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div id="game">
      <div class="cellprefix">8</div>
      <div class="gamecell" id="1_8"></div>
      <div class="gamecell grey" id="2_8"></div>
      <div class="gamecell" id="3_8"></div>
      <div class="gamecell grey" id="4_8"></div>
      <div class="gamecell" id="5_8"></div>
      <div class="gamecell grey" id="6_8"></div>
      <div class="gamecell" id="7_8"></div>
      <div class="gamecell grey" id="8_8"></div>

      <div class="cellprefix">7</div>
      <div class="gamecell grey" id="1_7"></div>
      <div class="gamecell" id="2_7"></div>
      <div class="gamecell grey" id="3_7"></div>
      <div class="gamecell" id="4_7"></div>
      <div class="gamecell grey" id="5_7"></div>
      <div class="gamecell" id="6_7"></div>
      <div class="gamecell grey" id="7_7"></div>
      <div class="gamecell" id="8_7"></div>

      <div class="cellprefix">6</div>
      <div class="gamecell" id="1_6"></div>
      <div class="gamecell grey" id="2_6"></div>
      <div class="gamecell" id="3_6"></div>
      <div class="gamecell grey" id="4_6"></div>
      <div class="gamecell" id="5_6"></div>
      <div class="gamecell grey" id="6_6"></div>
      <div class="gamecell" id="7_6"></div>
      <div class="gamecell grey" id="8_6"></div>

      <div class="cellprefix">5</div>
      <div class="gamecell grey" id="1_5"></div>
      <div class="gamecell" id="2_5"></div>
      <div class="gamecell grey" id="3_5"></div>
      <div class="gamecell" id="4_5"></div>
      <div class="gamecell grey" id="5_5"></div>
      <div class="gamecell" id="6_5"></div>
      <div class="gamecell grey" id="7_5"></div>
      <div class="gamecell" id="8_5"></div>

      <div class="cellprefix">4</div>
      <div class="gamecell" id="1_4"></div>
      <div class="gamecell grey" id="2_4"></div>
      <div class="gamecell" id="3_4"></div>
      <div class="gamecell grey" id="4_4"></div>
      <div class="gamecell" id="5_4"></div>
      <div class="gamecell grey" id="6_4"></div>
      <div class="gamecell" id="7_4"></div>
      <div class="gamecell grey" id="8_4"></div>

      <div class="cellprefix">3</div>
      <div class="gamecell grey" id="1_3"></div>
      <div class="gamecell" id="2_3"></div>
      <div class="gamecell grey" id="3_3"></div>
      <div class="gamecell" id="4_3"></div>
      <div class="gamecell grey" id="5_3"></div>
      <div class="gamecell" id="6_3"></div>
      <div class="gamecell grey" id="7_3"></div>
      <div class="gamecell" id="8_3"></div>

      <div class="cellprefix">2</div>
      <div class="gamecell" id="1_2"></div>
      <div class="gamecell grey" id="2_2"></div>
      <div class="gamecell" id="3_2"></div>
      <div class="gamecell grey" id="4_2"></div>
      <div class="gamecell" id="5_2"></div>
      <div class="gamecell grey" id="6_2"></div>
      <div class="gamecell" id="7_2"></div>
      <div class="gamecell grey" id="8_2"></div>

      <div class="cellprefix">1</div>
      <div class="gamecell grey" id="1_1"></div>
      <div class="gamecell" id="2_1"></div>
      <div class="gamecell grey" id="3_1"></div>
      <div class="gamecell" id="4_1"></div>
      <div class="gamecell grey" id="5_1"></div>
      <div class="gamecell" id="6_1"></div>
      <div class="gamecell grey" id="7_1"></div>
      <div class="gamecell" id="8_1"></div>

      <div class="cellprefix"></div>
      <div class="cellprefix">a</div>
      <div class="cellprefix">b</div>
      <div class="cellprefix">c</div>
      <div class="cellprefix">d</div>
      <div class="cellprefix">e</div>
      <div class="cellprefix">f</div>
      <div class="cellprefix">g</div>
      <div class="cellprefix">h</div>

      <div class="turn" id="turn">Its White turn</div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <script src="script.js"></script>
  </body>
</html>

```
