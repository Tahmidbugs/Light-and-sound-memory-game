# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Tahmid Ahmed

Time spent: ~10 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Neon Text in the header for aesthetic puropose
- [x] Time remaining only pops up after the user clicks start
- [x] Ticking sound played in the background when the time is below 5 seconds
- [x] Sweetalert instead of regular alert to pop any messages of win/loss/timeout
- [x] Gifs implemented in the sweetalert to add humor to the game
- [x] Sound effects when the alerts pop up.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

**Wrong Answer**

![](gif1-link-here)![](https://i.imgur.com/Bv95BHf.gif)

**Time over**

![](gif2-link-here)![](https://i.imgur.com/IG1SU1D.gif)

**Game lose**
![](gif3-link-here)![](https://i.imgur.com/B4XbHVj.gif)

**Game win**
![](gif2-link-here)![](https://i.imgur.com/7fCpUOH.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

[Stackoverflow](https://stackoverflow.com/), [w3schools](https://www.w3schools.com/), [Sweetalert2github.io ](https://sweetalert2.github.io/)

It goes without saying stackoverflow has been extremely helpful whenever I wanted to debug any issue or look into how something like the timer can be implemented. I have also used extensive help from w3schools to remind myself of syntax in css and javascript. I also looked at the sweetalert documentation to understand how the alert ticks and how to implement it. But other than that the resources provided in the stem of the assignment were comprehensive and clear.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

I did not really face a crazy challenge while completing this project. But I did quite a few blunders when I wrote code for the optional features. It took me some time to trace down the errors and debug them. As you know with javascript we are limited by the number of ways to debug. Console.log() function here and there and tracking them to understand what part of the code the problem lies in was a real struggle. But it was my fault. I could’ve easily avoided this by testing my code after every new change instead of piling everything and then testing. This would be a great takeaway from this project: to test as I progress.

Aside from that, I faced challenge with the positioning of html elements. I struggled a little with trying to keep the buttons at the same position when a button gets hidden and the other gets displayed. At the end, it was only happening because header elements in html has a predefined margin which I was ignorant about.

These are the small challenges I faced while doing the assignment and even though I am annoyed at myself for making blunders that I had trouble debugging, I am satisfied to know in my heart that I will be more careful the next time I do a project.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

Over the two days, roughly 10 hours that it took me to complete this project, I have looked up every question I had and was provided satisfying answers in websites like stackoverflow. After looking up syntax, better ways to implement a particular code such as the Neon text or the sweetalert that I implemented, I realized that these features were unheard of when I first learnt HTML and CSS about 5 years ago. So my question is, how does one keep up with the new features that comes out everyday which makes life easier? Because I realize if I am not told of a built in function or a library that has been released to make 20 lines of code into 1 single function call, I would only continue with the tedious approach.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

Since I have completed all the listed optional features to include and had fun doing so, I would probably use more time adding more features to make the memory game more exciting. Some of the ideas are listed below:

- Adding animation to show that when the wrong button is pressed, the screen shakes and there is vibration along with the buzz sound I already have.
- Add a pause button that user can use to save their progress, take a deep breath and resume.
- Add a series of four buttons to set difficuly: Easy, medium, Difficult, Extreme. Hovering those difficulty buttons will tell one what each mode does. In Easy mode, the pace at which the Clue play are constant. At Medium mode, the pace increases slightly with every Clue played. At difficult mode, the speed is as fast as it can be right from the start. At Extreme mode, the sounds of all the cards will be played from 1 to 8 at first, then the pattern will be revealed by individual button sounds with no flipping of buttons and the user would need to judge from the sound which button it is. For that, the sounds will need to be made very distinct from one another.

As for refactoring functions, the code isn’t the cleanest. There are multiple instances where the code can be made more succinct. One example being the guess function. Buch of if else statements here and there which could be avoided by combining conditions in a smarter way… only if I was given a few more hours.

## Interview Recording URL Link

[My 5-minute Interview Recording](<[your-link-here](https://www.loom.com/share/4e9d98d0b41d44c2a3c25359367ab0d3)>)

## License

    Copyright Tahmid Ahmed

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
