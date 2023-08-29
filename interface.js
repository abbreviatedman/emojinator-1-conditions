// Add your interface code below!

const userWord = prompt("Please enter a description of your emoji.");

const emoji = getEmoji(userWord);

if (emoji === null) {
  console.log("Sorry, I don't know the emoji: " + userWord);
} else {
  console.log("Your emoji is: " + emoji);
}
