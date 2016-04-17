/*
Program Name: Recipe Display Application
Author: Melissa Gorham
Date:4/15/16
Filename: script.js
*/

//displays the next element after the current target
/*global $*/
function display(event) {
    
$(event.currentTarget).next().fadeIn("slow");
 
}//end of display
//attach event listener to h3 elements to invoke display function when clicked

//$("h3").click(display);

//displays and animates the next element after the current target
/*global $*/
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);