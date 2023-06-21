// Business Logic

function wordCounter(text) {
    if (text.length === 0) {
        return 0;
    }   
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(word) {
      wordCount++;
    });
    return wordCount;
  }

  function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }

function includesRarestLetter(word) {
    if (word.toLowerCase().includes("q")) {
      return true;
    }
    return false;
  }

  function omitOffensiveWords(text) {
    // List of offensive words
    const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  }

  const words = text.split(" ");

  const lowercaseWord = word.toLowerCase()

  if (offensiveWords.includes(lowercaseWord)) {
    return "*".repeat(word.length);
    } else {
      return word;
    }

  const cleanText = cleanWords.join(" ");

  return cleanText;



  