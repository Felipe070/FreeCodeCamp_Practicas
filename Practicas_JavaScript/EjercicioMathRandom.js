let fortuna1 = "Mañana será un lindo día";
let fortuna2 = "Cuidado con los gatos de la calle...";
let fortuna3 = "Ya no confiaría tanto en esa persona...";
let fortuna4 = "Veo fortuna, dinero y buna vida";
let fortuna5 = "Sos feo/a, con eso no se puede hacer mucho";

let randomNumber = Math.floor(Math.random()*(6-1))+1;

let fortunaSelecta;

if(randomNumber == 1){
  selectedFortune = fortuna1;
} else if (randomNumber == 2){ 
  selectedFortune = fortuna2;
} else if (randomNumber == 3){
  selectedFortune = fortuna3;
} else if (randomNumber == 4){
  selectedFortune = fortuna4;
} else if (randomNumber == 5){
  selectedFortune = fortuna5;
}

console.log(selectedFortune);
// hola