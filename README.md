# Mr Robogers Neighborhood

#### By _**Joe Roaden**_

#### _a webpage used to generate responses based on user input.  This projects uses arrays and loopoing to generate a result_

## Technologies Used

* _html_
* _css_
* _javascript_
* _bootstrap_
* _jquery_



## Description

_A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range_

- [x] _This project's GitHub repo can be found at the following link_ [GitHub Pages](https://github.com/joeroaden/mr-robogers-neighborhood).  


## Setup/Installation Requirements

* _To properly view this project, please see the steps below on cloning from GitHub_

1. Locate this projects GitHub Repository via [GitHub Pages](https://github.com/joeroaden/mr-robogers-neighborhood).  

2. Within the terminal, navigate to the directory where you want to clone and save this project (Typically Desktop, but just be sure you do not clone into another project's directory)

3. Once within your desired directory to save the clone, type the following in your terminal
_$ git clone https://github.com/joeroaden/mr-robogers-neighborhood_

4. Since this is a public repository, no credentials will be needed and you can now navigate into the programming-suggestor directory to access the directory

5. Acces the html page called mr-robogers-neighborhood.html and you are ready to begin using the application

6. For additional information and help, here is a link to GitHub Docs that provides detailed explanations - https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository


## Known Bugs

* _there are no known bugs at this time_


## License

_MIT License_



Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

Copyright (c) June 10th, 2022 Joe Roaden

_Tests_

Describe: beepBoop()

  Test: It should return an array of numbers from 0 to the user's inputted number
  Code: beepBoop(5);
  Expected Output: [0, 1, 2, 3, 4, 5]

Describe: beepBoopBeep()

  Test: It should return an array of numbers from 0 to the user's inputted number and replace all 1's with "Beep!
  Code: beepBoop(5);
  Expected Output: [0, "Beep!", 2, 3, 4, 5]

  Test: "It should return an array of numbers from 0 to the user's inputted number and replace all 2's with "Boop!"
  Code: beepBoop(5);
  Expected Output: [0, "Beep!", "Boop", 3, 4, 5]

  Test: It should return an array of numbers from 0 to the user's inputted number and replace all 3's with "Won't you be my neighbor?
  Code: beepBoop(5);
  Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5]

  Test: "The number 13 should be replaced with "Won't you be my neighbor?" per Hierarchy of Substitutions
  Code: beepBoop(13);
  Expected Output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?]

  Test: "The number 12 should be replaced with "Boop!" per Hierarchy of Substitutions
  Code: beepBoop(12);
  Expected Output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!]

  Test: "The number 23 should be replaced with "Won't you be my neighbor?" per Hierarchy of Substitutions and overiding 2
  Code: beepBoop(23);
  Expected Output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!,Boop!,Won't you be my neighbor?]

  Test: "The number 21 should be replaced with "Boop!" per Hierarchy of Substitutions overiding 1
  Code: beepBoop(21);
  Expected Output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!]

  Test: "The number 32 should be replaced with "Won't you be my neighbor?" per Hierarchy of Substitutions overiding 2
  Code: beepBoop(32);
  Expected Output: [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!,Boop!,Won't you be my neighbor?,Boop!,Boop!,Boop!,Boop!,Boop!,Boop!,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?]