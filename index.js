"use strict";

const characters = ["Alisa", "Asuka", "Azucena", "Bryan", "Claudio", "Clive", "Devil", "Dragunov", 
  "Eddy", "Feng", "Heihachi", "Hwoarang", "Jack", "Jin", "Jun", "Kazuya", "King", "Kuma", "Lars", "Law", 
  "Lee", "Leo", "Leroy", "Lidia", "Lili", "Nina", "Panda", "Paul", "Raven", "Reina", "Shaheen", 
  "Steve", "Victor", "Xiaoyu", "Yoshimitsu", "Zafina"];

const characters2 = ["Alisa", "Asuka", "Azucena", "Bryan", "Claudio", "Clive", "Devil", "Dragunov", 
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

//Test area for Character Data

const data = {
  Kazuya: [
    {
      headers: ["Term", "Notation", "Input"],
      rows: [
        [
          "During Heat",
          "Devil Form",
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R5_01_HEAT.png'>`,
        ],
        [
          "Crouch Dash",
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_All.png'>`,
          "d5sx",
        ],
        [
          "Electric Wind God Fist",
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "d5sx9",
        ],
        [
          "Hellsweep",
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_All.png'>37`,
          "d5sx37",
        ],
      ],
    },
    {
      headers: ["Input", "Description"],
      rows: [
        [
          "7 ― 779",
          "Jab to start offense. The full string can be hit confirmed",
        ],
        ["d3", "Mid attack for pressure that has counter properties"],
        ["x9", "Homing mid counterhit launcher that is unsafe on block"],
        ["z9", "Low poke to pressure the opponent"],
        ["dd1", "Safe mid launcher that can be used in mixups"],
        ["dd3", "Useful to get opponents off the ground"],
        [
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "High launching attack useful in many situations",
        ],
        [
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_All.png'>37`,
          "A strong low that is the base of his mixup game",
        ],
      ],
    },
    {
      headers: ["Input", "Description"],
      rows: [
        ["d8", "Has punch parry effect"],
        ["d9", "Power Crush"],
      ],
    },
  ],
  Jin: [
    {
      headers: ["Term", "Notation", "Input"],
      rows: [
        [
          "Electric Wind Hook Fist",
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "d5sx9",
        ],
        [
          "Crouch Dash",
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_Jin.png'>`,
          "d5sx",
        ],
        [
          "Zen",
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_ZEN.png'>`,
          "a2/d2",
        ],
      ],
    },
    {
      headers: ["Input", "Description"],
      rows: [
        ["7", "Quick jab to start offense. Has many extensions."],
        ["3", "High Homing Attack to check sidestepping opponents"],
        ["x7", "A mid to harass the opponent. Has follow-ups"],
        ["s9", "Strong low that launches on counter"],
        ["z3", "Good low poke to pressure the opponent"],
        ["d3", "Long range mid that launches on counter"],
        [
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "High launching attack useful in many situations",
        ],
        ["w9", "Evasive punch that can be used to challenge situations"],
      ],
    },
    {
      headers: ["Input", "Description"],
      rows: [
        ["a4\\a6", "Parry"],
        ["a8", "Has punch parry effect"],
        ["s7", "Power Crush"],
      ],
    },
  ],
};

