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
    ],
  },
});
