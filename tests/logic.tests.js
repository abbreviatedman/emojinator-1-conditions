const testRunner = new Bconatr();

testRunner.runTests({
  getEmoji: {
    tests: [
      {
        testDescription:
          'getEmoji should convert "smile" to a smiling face emoji',
        evaluationString: 'getEmoji("smile")',
        expectedValue: "☺",
      },
      {
        testDescription:
        'getEmoji should convert "frown" to a frowning face emoji',
        evaluationString: 'getEmoji("frown")',
        expectedValue: "☹",
      },
      {
        testDescription:
        'getEmoji should convert "heart" to a heart emoji',
        evaluationString: 'getEmoji("heart")',
        expectedValue: "❤",
      },
      {
        testDescription:
        'getEmoji should convert "star" to a star emoji',
        evaluationString: 'getEmoji("star")',
        expectedValue: "⭐",
      },
      {
        testDescription:
        'getEmoji should return a message if the input is not an emoji in the list, test 1',
        evaluationString: 'getEmoji("not an emoji")',
        expectedValue: "Sorry, I don't know that emoji.",
      },
      {
        testDescription:
        'getEmoji should return a message if the input is not an emoji in the list, test 2',
        evaluationString: 'getEmoji("another non-emoji")',
        expectedValue: "Sorry, I don't know that emoji.",
      },
    ],
  },
});
