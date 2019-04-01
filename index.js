// Code your solutions in this file
function printBadges(employees){
  for(let i = 0; i < employees.length; i++){
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees ;
}

function tailsNeverFails(){
  let i = 0;
  while(Math.random() >= 0.5){
    i++;
  }
  return `You got ${i} tails in a row!`;
}
