# etch-a-sketch
The Odin Project Etch-a-Sketch 

Interesting time ahead building this project...
1. Setup Git repository.
2. Create a webpage with 16x16 grid of square divs.
Create div id gridContainer on index.html.
Create src file script.jsfor JavaScript coding.
Style the container flexbox to make divs appear as a grid.
Style the grid box lines and color.

Declare const variable to getElementById for gridContainer.
Declare const variable for gridSize element.

Create function to create grid with for loop that 
    will create a const variable div element for the grid squares. 
    add const variable sizes for height and width for the grid squares.
    append the child const variable.

Create an addEventListener requesting size of grid

3. setup hover effect so grid divs change color leaving pixalated trail.
(Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.)
(There are multiple ways to change the color of the divs, including:
Adding a new class to the div.
Changing the div’s background color using JavaScript.)

4. Add a button on the top of the screen for popup asking number of squares per side for the new grid - max 100 squares. 
Existing grid should be removed
New grid created in the same total space as before (e.g., 960px wide) 
New sketch pad created.
Button tags in HTML with JavaScript function to run when clicked.
Add prompt

Extra credit
Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.

Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. 
The goal is to achieve a fully black (or completely colored) square in only ten interactions.

Hint: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.

You can choose to do either one or both of these challenges, it’s up to you.

