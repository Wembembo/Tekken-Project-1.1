"use strict";

const characters = ["Alisa", "Asuka", "Azucena", "Bryan", "Claudio", "Devil", "Dragunov", 
  "Eddy", "Feng", "Heihachi", "Hwoarang", "Jack", "Jin", "Jun", "Kazuya", "King", "Kuma", "Lars", "Law", 
  "Lee", "Leo", "Leroy", "Lidia", "Lili", "Nina", "Panda", "Paul", "Raven", "Reina", "Shaheen", 
  "Steve", "Victor", "Xiaoyu", "Yoshimitsu", "Zafina"];

const characters2 = ["Alisa", "Asuka", "Azucena", "Bryan", "Claudio", "Devil", "Dragunov", 
  "Eddy", "Feng", "Heihachi", "Hwoarang", "Jack", "Jin", "Jun", "Kazuya", "King", "Kuma", "Lars", "Law",
   "Lee", "Leo", "Leroy", "Lidia", "Lili", "Nina", "Panda", "Paul", "Raven", "Reina", "Shaheen", 
   "Steve", "Victor", "Xiaoyu", "Yoshimitsu", "Zafina"];


var playerOneSelection = document.getElementById("playerOneSelection");

playerOneSelection.addEventListener("change", function (e) {
  
  characters.forEach((character) => {
    document.getElementById(character + "-Tables").classList.add("invisible", "fade-in");
  });
  document.getElementById(this.value + "-Tables").classList.toggle("invisible");
  console.log(e)
});

var playerTwoSelection = document.getElementById("playerTwoSelection");

playerTwoSelection.addEventListener("change", function (i) {
  characters2.forEach((character2) => {
    document.getElementById(character2 + "-Tables2").classList.add("invisible", "fade-in");
  });
  document.getElementById(this.value + "-Tables2").classList.toggle("invisible");
  console.log(i)  
});
2