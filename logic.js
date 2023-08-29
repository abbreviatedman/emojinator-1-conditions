// Add your business logic functions below!

function getEmoji(emojiDescription) {
  if (emojiDescription === "smile") {
    return "☺";
  } else if (emojiDescription === "frown") {
    return "☹";
  } else if (emojiDescription === "heart") {
    return "❤";
  } else if (emojiDescription === "star") {
    return "⭐";
  } else {
    return "Sorry, I don't know that emoji.";
  }
}

function getEmojiBonusVersion(emojiDescription) {
  const emojiList = {
    smile: "☺",
    frown: "☹",
    heart: "❤",
    star: "⭐",
  };

  if (emojiList[emojiDescription]) {
    return emojiList[emojiDescription];
  } else {
    return "Sorry, I don't know that emoji.";
  }
}
