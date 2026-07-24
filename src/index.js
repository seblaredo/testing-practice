function capitalize(string) {
  return string
    .slice(0, 1)
    .toUpperCase()
    .concat(string.slice(1, string.length));
}

function reverseString(string) {
  let reverse = "";
  for (let i = 0; i < string.length; i++) {
    reverse += string.charAt(string.length - i - 1);
  }
  return reverse;
}

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function caesarCipher(string, shift) {
  let codeUnits = [];
  let charCodeA = "a".charCodeAt(0);
  let charCodeZ = "z".charCodeAt(0);
  let charCodeUpperA = "A".charCodeAt(0);
  let charCodeUpperZ = "Z".charCodeAt(0);

  for (let i = 0; i < string.length; i++) {
    let currentCharCode = string.charCodeAt(i);
    let lowercase = /[a-z]/.test(string.charAt(i));
    let uppercase = /[A-Z]/.test(string.charAt(i));

    if (currentCharCode + shift <= charCodeZ && lowercase) {
      codeUnits.push(currentCharCode + shift);
    } else if (currentCharCode + shift > charCodeZ && lowercase) {
      codeUnits.push(currentCharCode + shift - charCodeZ + charCodeA - 1);
    } else if (currentCharCode + shift <= charCodeUpperZ && uppercase) {
      codeUnits.push(currentCharCode + shift);
    } else if (uppercase) {
      codeUnits.push(
        currentCharCode + shift - charCodeUpperZ + charCodeUpperA - 1,
      );
    } else {
      codeUnits.push(currentCharCode);
    }
  }
  return String.fromCharCode(...codeUnits);
}

function analyzeArray(array) {
  let average = array.reduce((sum, item) => item + sum, 0)/array.length;
  let min = Math.min(...array);
  let max = Math.max(...array);
  return {
    "average": average,
    "min": Math.min(...array),
    "max": Math.max(...array),
    "length": array.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
