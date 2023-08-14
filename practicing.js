/** @format */

const flights =
  "_Delayed_departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel74392299980;fao93766109;12:05+_Departure;fao93766109;lis232363985;12:30";

const arrayOfFlights = flights.split("+");
console.log(arrayOfFlights);

for (let flight of arrayOfFlights) {
  let [status, origin, destination, time] = flight.split(";");
  const output = `${
    status.startsWith("_Delayed") ? "🔴" : ""
  }${status.replaceAll("_", " ")} from ${takeOutAndUpperCase(
    0,
    3,
    origin
  )} to ${destination.slice(0, 3).toUpperCase()} at (${time.replace(
    ":",
    "h"
  )})`;
  console.log(output);
}

function takeOutAndUpperCase(from, to, text) {
  return text.slice(from, to).toUpperCase();
}
