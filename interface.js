// Add your interface code below!

const input = prompt("Please enter a description of your emoji.");

const emoji = getEmoji(input);

if (emoji === "Sorry, I don't know the emoji.") {
  console.log();
} else {
  console.log("Your emoji is: " + emoji);
}
