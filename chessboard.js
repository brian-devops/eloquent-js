/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

const size = 8;

let board = ""; //placeholder for the space or #

for (let i = 0; i < size; i++) {
  //outer loop adding the newline to seperate each row
  for (let x = 0; x < size; x++) {
    //inner loop is for each line and adding a space or #
    if ((x + i) % 2 == 0) board += " ";
    //if no remainer it equals a space
    else board += "#"; //if yes remainer it equals a #
  }
  board += "\n"; // new line in outer loop
}

console.log(board);
