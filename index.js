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
  Template: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Alisa: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Asuka: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Azucena: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Bryan: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Claudio: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Clive: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Devil: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Dragunov: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Eddy: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Feng: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Heihachi: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Hwoarang: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Jack: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

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
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
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
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows: [
        ["a4\\a6", "Parry"],
        ["a8", "Has punch parry effect"],
        ["s7", "Power Crush"],
      ],
    },
  ],
  Jun: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
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
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows: [
        [
          "7 \ 779",
          "Jab to start offense. The full string can be hit confirmed",
          "10 \ 13",
          "High \ High High Mid",
          "+1 \ -17",
          ""
        ],
        ["d3", "Mid attack for pressure that has counter properties", "13", "Mid", "-9", ""],
        ["x9", "Homing mid counterhit launcher that is unsafe on block", "14", "Mid", "-9", ""],
        ["z9", "Low poke to pressure the opponent", "20", "Mid", "-9", ""],
        ["dD1", "Safe mid launcher that can be used in mixups", "20", "Mid", "-3", ""],
        ["dd3", "Useful to get opponents off the ground", "17", "Mid", "-3", ""],
        [
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "High launching attack useful in many situations",
          "11", "High", "+5", ""
        ],
        [
          `<img class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_All.png'>37`,
          "A strong low that is the base of his mixup game", "26", "Low, Mid", "+5", ""
        ],
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows: [
        ["d8", "Has punch parry effect", "25", "Mid", "-9"],
        ["d9", "Power Crush", "20", "Mid", "-12"],
      ],
    },
  ],
  King: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Kuma: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Lars: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Law: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Lee: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Leo: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Leroy: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Lidia: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Lili: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Nina: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Panda: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Paul: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Raven: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Reina: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Shaheen: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Steve: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Victor: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Template: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Xiaoyu: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Yoshimitsu: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
  Zafina: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[

      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[

      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[

      ],
    },
  ],
};

