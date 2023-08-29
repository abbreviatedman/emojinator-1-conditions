# Emojinator 1 - Conditions

An AnnieCannons project.

### Introduction

We'll be making an **emoji picker app** today: Emojinator. It prompts the user for the name of an emoji, and then prints that out in the dev console. Users can then copy and paste the emoji wherever they'd like!

In the process, **we'll be learning**:

1. How to **leverage a test environment** ([baconatr.js](https://github.com/abbreviatedman/bconatr-js)) to write functions that are **provably correct**.
2. How to separate our **interface code** from our **business logic**, so that we can change either independently.

You will also get the opportunity to add whichever emojis you want. So that's 🔥.

### Instructions

##### Prep

You'll be mainly working in **2** files, `logic.js` and `interface.js`.

But **before you can start with that**, you'll need to make sure your `index.html` file **executes both of those files**.

1. Add the following line to your `index.html` file:

``` html
<script src="./logic.js">
```

This will execute your business logic file whenever the page is loaded in a browser.

2. Next, _after_ the above line, add the following `script` tag to execute your interface code:

``` html
<script src="./interface.js">
```

