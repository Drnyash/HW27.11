let sandar = [];

while (true) {
  let san =+prompt("Сан енгізіңіз (0 енгізсеңіз, тоқтайды):");
  
  if (san == 0) {
    break;
  }

  if (san % 2 == 0) {
    sandar.unshift(san);
  } 
  else {
    sandar.push(san);
  }
}

console.log("Массив:", sandar);
console.log("Ұзындығы:", sandar.length);
