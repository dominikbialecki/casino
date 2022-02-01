# White Hat Gaming Front End Developer Technical Test

## Introduction

This exercise is intended to test your web design, layout and programming ability. As far as is
possible, it intends to replicate a normal work assignment. It is intended to be performed within a
fixed time period but will be judged more on the quality of the work and functionality which is
completed rather than the amount that is completed. The test administrator should be treated as a
colleague and as such you are encouraged to ask them questions to help complete the work.

## The Task

The task is to create a simple page which acts as a page of available games for a casino web site. A
design will be provided and must be used to create a seamless responsive web page. The output of
the task is not intended to be a complete finished product but it will be assessed as an initial
prototype. The code behind it though should be as close to production quality code as can be
achieved in the time available.
No particular technologies or frameworks are imposed or in fact provided. You are free to use
whatever you feel most comfortable with given the time available. But the result will be expected to be
purely client side technology and be clean, efficient and extensible, again within the time constraints.
A list of the games will be provided as a feed to be used by the page. A small number of the games
will be jackpot games which means a jackpot will be gradually increasing based on betting activity
until the jackpot is won. An additional feed is provided to get the current jackpot value for such games.

## The Resources

The following resources are provided:

1. A desktop design for the feature
2. Colour palette
3. An JSON feed of the games available
4. A JSON feed of the current value of any jackpots
5. “new” and “top” ribbon PNGs

### Colour Palette

"#8DC63F, #373737, #fff, #FCFCFC"


## The game feed

### http://stage.whgstage.com/front-end-test/games.php

### This is a JSON feed of all the games available to the player.

### This lists the games, each item contains the following properties:

- ​categories – Array of category IDs
- ​name – Full name of the game
- ​image – The URL of an image for the game
- ​id – The ID of the game

### Additionally the labels for the various game categories can be found in the same

### document.

## The jackpot feed

### http://stage.whgstage.com/front-end-test/jackpots.php

### This provides the current value for any games which have a jackpot.

### It will return a JSON array, each item contains the following properties:

- ​game – Game ID
- ​amount – Jackpot amount

### The amount field should be just treated as the jackpot value in pounds.

### Design

### Go by the design as much as you can with responsive in mind. Do not dwell on pixel

### perfection.

### http://stage.whgstage.com/front-end-test/design.png


### “new” and “top” ribbons

### Games that are part of the categories “new” and “top” should have the relevant ribbon

### when shown in other categories. Create this using CSS.

### Hover state

### Create a sensible hover state for the games.

## Task Priorities

It is highly likely that you will not have sufficient time to complete this task. As such the priority of the
functionality to be completed is as follows, with the most important listed first:

1. Lay out the games according to the design, with responsive in mind
2. Allow the user to navigate between categories, with an “active” state for the selected
   category. (seen in design)
3. Show the current jackpot for appropriate games when the page is rendered
4. Update the current jackpot for appropriate games every few seconds
5. New and Top Games have a relevant ribbon indicating it’s category when in the context of a
   category which isn’t “top” or “new”. (ie. when a “top” game is also in the category of “slots”)
6. Hovering on a game brings up the “play” button and game name. (clicking does nothing)
7. Group “ball”, “virtual” and “fun” in an “Other” category.

## Submission

### Once the allotted time has expired you can either:

- provide an accessible URL for the page
- zip up the page and all necessary files and email those to the test administrator.

### You may be asked subsequent questions about your submission once the administrator has reviewed your work.


