/** @format */

function maskData(number) {
  // check if the inputs are within the acceptable, like, if posisition !== start || end, throw an error, etc..
  // We can make it more reusable if we select where is going to be showing, how many, with what
  // function maskData(number, showing, position) {
  const string = number.toString();
  // const string = number + ''
  // const string = String(number)

  // Showing last 4 numbers
  const showNumbers = string.slice(-4);

  return showNumbers.padStart(string.length, "*");
}

const result = maskData(123456789);
console.log(result);
