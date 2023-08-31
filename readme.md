# Emojinator 1 - Conditions

An AnnieCannons project.

## Introduction

We'll be making an **emoji picker app** today: Emojinator. You can see [the deployed solution here](https://abbreviatedman.github.io/emojinator-1-conditions/). The app prompts the user for the name of an emoji, and then prints that out in the dev console. Users can then copy and paste the emoji wherever they'd like!

In the process, **we'll be learning**:

1. How to **leverage a test environment** ([baconatr.js](https://github.com/abbreviatedman/bconatr-js)) to write functions that are **provably correct**.
2. How to separate our **interface code** from our **business logic**, so that we can change either independently.

You will also get the opportunity to add whichever emojis you want. So that's 🔥.

## Instructions

#### Prep

First, make sure that you are working with **your fork** of the assignment.

You'll be mainly working in **2** files, `logic.js` and `interface.js`.

But **before you can start with that**, you'll need to make sure your `index.html` file **executes both of those files**.

1. Add the following line to your `index.html` file, above the code comments.

``` html
<script src="./logic.js">
```

This will execute your business logic file whenever the page is loaded in a browser.

2. Next, _after_ the above line (but still before the code comments), add the following `script` tag to execute your interface code:

``` html
<script src="./interface.js">
```

#### Understanding The Assignment's Structure

The **logic file** (which we've named `logic.js`, but which _could_ be called anything) will contain code for the main functionality of our app.

The **interface file** (which we've named `interface.js`, but which _could_ be called anything) will contain code for getting input from and output to the user. It will need to get answers from functions you create in the **logic file**, since it will not be in charge of functionality itself . This is why it should be loaded _after_. If it were loaded first, those logic functions wouldn't exist yet! (With a note that we _could_ use hoisting to avoid caring about order, depending on whether we're using function expressions or function declarations.)

Finally, the **testing files** (loaded into the page last, below the code comments) are there to run your **logic functions**, to make sure that you're getting the specified functionality.  They will help you by telling you _exactly_ what your functions should expect for **input**, what they **should output**, what they're **currently outputting** if you haven't completed the task yet, and letting you know **when you have completed the task**.

#### What Does The App Actually DO?

See [the deployed solution](https://abbreviatedman.github.io/emojinator-1-conditions/). It will prompt you for a word—try typing "smile". Now open the dev console to see your emoji!

It can also handle "frown", "heart", and "star".

If you enter anything else, you'll see a message telling you the app doesn't know that emoji.

#### Steps For Completing The Assignment

###### Part 1: Functionality

1. Run **Live Server**.
2. Open up **the dev console**. You'll note that you are failing the tests. That's okay! You just haven't started yet.
3. **Add script tags** for `logic.js` and `interface.js` to the HTML. See the steps under Prep above, and the comments in the HTML, if you need guidance.
4. **Take a look at the tests**. The first one says that the test code is checking your functionality by calling a function called `getEmoji` and passing in `"smile"`, but it's evaluating to `undefined`. The function doesn't exist yet—**our task is to make it**. (Calling a non-existent function should actually be an error, but our test runner is letting you fail tests without crashing the app.)
5. In `logic.js`, define a `getEmoji` function. You can see from the tests that it's being passed one  argument, a string. Name the parameter whatever you'd like.
6. The first test checks if `getEmoji("smile")` evaluates to the string `"☺"`. So although **this is definitely not going to solve the whole functionality**, add `return "☺";` into the body of your function.
7. Go back to the dev console. You should see that you're passing the test!
8. Now finish the function so that it passes all tests. When the test code calls `getEmoji("frown")`, you'll have to return a frown emoji, and so on. You'll need to be able to return one emoji or another depending on a **condition**. Pay careful attention to what **the tests are telling you**, and ask your colleagues if you're unsure (and an instructor if you can't figure it out together!). This is a new framework for you, but this kind of test-driven code is extremely common in the developer world, so we'll need to learn how to read them!
9. Once you have all tests passing, feel free to go back and "refactor" your code, so that it's readable, clear, and not overly long. Remove any logging statements you added during development. It's time to get ready for production and **create an interface**!

###### Part 2: Interface

There are no tests for the interface. Part of the reason for separating logic from interface is that "business logic" code is very easy to test, while interfaces are not.

However, the interface for this assignment is quite simple. We've written this code before!

1. Make sure there's a script tag for `interface.js` linked in `index.html`, and that it's **below logic.js**.
2. OPTIONALLY: comment out the script tag for the test file, `tests/logic.tests.js`. This will make it easier to read your console, since it won't have test output in it. If you do this, **make sure** that you are passing all the tests first, _and_ that you **run the tests again when you're done** with the interface, so you can confirm it all still works.
3. Prompt the user for what emoji they want (they should enter "smile" or "frown" or "heart" or "star"). Save that value in a variable.
4. That string is _exactly_ what `getEmoji` is designed to take in as an argument. Even though it's not in this file, we still have access to it, so call the function, passing in the value you got from the user. Save what that all evaluates to in a new variable (very similarly to what you did with the `prompt` function).
5. Log a message such as "Your emoji is: " or, "Here's your emoji!" or "Emojinator has found you the following emoji: " or whatever you'd like, along with the value you got back from `getEmoji`. If you passed the tests in the previous steps, that should be the right emoji!
6. Final step: handle the case that they typed in "spinosaur" or some other words that we don't have emojis for. You'll know that they did so because `getEmoji` will return `null`. Check if the value you got back is `null`, and if it is, log to the console a message telling them that's not an emoji we have on our list (in whatever way you want to say it!).
7. **You should only log one message or another.** In other words, be sure that when you type a valid emoji word, you get the emoji and _not_ the message that we don't have that emoji. And when you type in "colin", you should only see the message about an invalid emoji, and _not_ a message attempting to give them an emoji we don't have.
8. If you're getting the right messages back, you've done it! You're done! You made an app. It might be a console-based app, but it's an app nonetheless.

###### Part 3: Stretch?

There are some things you can do to improve the app's functionality and code quality. If you're done with the above, keep going into these stretch goals! **Do these tasks in any order you'd like**—again, they're not requirements for this assignment, and since they're stretch goals, they're about how **you** want to stretch.

- Add more emojis! You can add as many as you'd like. You'll need to add them to the `getEmoji` function, but you _won't_ need to add them to the interface code, since the interface code is just calling `getEmoji` and doesn't care what it returns.
- Make the app case-insensitive. Right now, if you type "Smile" or "SMILE" or "sMiLe", it won't work. But it would be nice if it did!
- Refactor the `getEmoji` function to use something other than the conditional code you used. For example, you could use a `switch` statement, or you could use an object with keys and values. (If you're not sure what that means, ask your colleagues or an instructor!) For this goal, make sure to run the tests, so that you know you're still passing them.
