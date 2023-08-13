/** @format */

function toCamelCase(text) {
  const items = text.split(" "); // We create an array with the items ["underscore_case", "first_name"...]

  let output = "";

  //   Here we take out the spacing, put every word in lower case and take out the nderscore and destructure and create 2 variables
  for (const [sentence, index] of items.entries()) {
    // first part and second part
    const [first, second] = sentence.toLowerCase().trim().split("_");

    // Create a string with the first letter of the second part of the string being uppercase
    const phrase = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    // Adding the equivalent ok emojis depending based on index, after 20 spaces from the begining of the phrase

    // Result: underscoreCase       '✅'
    //1234567891011121314...spaces up until the ok emoji
    output = `${phrase.padStart(20)}${"✅".repeat(index + 1)}`;
  }

  //   Return the string already modified
  return output;
}

const string = "underscore_case first_name Some_Variable calculate AGE";

const result = toCamelCase(string);
console.log(result);
