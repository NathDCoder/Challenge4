# Challenge-4
This is my attempt at challenge 4.
-------------------------------------------
1. Not going to lie, pretty dissapointed in this one. 
I didn't have enough time to complete it.
I was able to show the first question successfully and make a countdown timer.
That is all I was able to accomplish. I scratched this project a couple of times because I wasn't satisfied how it was going the first couple of times. I will try to finish this project and resubmit it on a later date.

2. Its a simple HTML dock with each element given a class to manipulate in JS and CSS.
In JS I created all the variables for the start button, timer, questions, and choices.
I just created a Start Quiz function that would contain hide classes for the rulesbox and start button, So when that when you click start they would dissappear and show the question and the timer would start.

3. I had to also create a timer function so that there is an if statement stating that when it reaches zero it would start another method called "quizend". From "quizend" we can create a function that would stop the timer from infinitely counting backwards. 

4. I created another JS file that contains an array of questions and answers, and linked it to the html file. Now the two JS files can communicate with each other. I created another function to get the questions from the array and then used document.getElementById to target where the question should be displayed and then I used text content to display the question. 

5. Lastly I called the get function and added an event listener to start the whole process. 
--------------------------------------------------------------------------------------------
Things I couldn't figure out or missed.
---------------------------------------------
I could not figure out how to get the next button to display the next question in the array.
I also had a plan to display the answers the same way I did the question, and create a true statement for one of them. I tried this before and I couldn't get it to work, but I'm sure it was just my lack of syntax knowledge on how to actually write this successfully. I also was unable to create the Score function in JS in time before the group project, although I had the html written in place for it. I also was unable to create a place for users to save their initials, and then a Try Again button to start the quiz over.