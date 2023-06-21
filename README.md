Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 2 if a passage has two words."
Code: function omitOffensiveWords(text) {
    // List of offensive words
    const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  }
const text = "zoinks muppeteer biffaroni loopdaloop";
wordCounter(text);
Expected Output: 4