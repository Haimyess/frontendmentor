/** @format */

function capitalizeName(name) {
  const lowerName = name.toLowerCase();
  const nameItems = lowerName.split(" ");
  const upperName = [];

  for (let n of nameItems) {
    upperName.push(n[0].toUpperCase() + n.slice(1));
    // upperName.push(n.replace(n[0], n[0].toUpperCase()));
  }

  return upperName.join(" ");
}

const myName = capitalizeName("haim yeShurUN");
console.log(myName);
