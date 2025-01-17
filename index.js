"use strict";

const characters = ["Alisa", "Asuka", "Azucena", "Bryan", "Claudio", "Clive", "Devil", "Dragunov", 
  "Eddy", "Feng", "Heihachi", "Hwoarang", "Jack", "Jin", "Jun", "Kazuya", "King", "Kuma", "Lars", "Law", 
  "Lee", "Leo", "Leroy", "Lidia", "Lili", "Nina", "Panda", "Paul", "Raven", "Reina", "Shaheen", 
  "Steve", "Victor", "Xiaoyu", "Yoshimitsu", "Zafina"];

const characters2 = ["Alisa", "Asuka", "Azucena", "Bryan", "Claudio", "Clive", "Devil", "Dragunov", 
  "Eddy", "Feng", "Heihachi", "Hwoarang", "Jack", "Jin", "Jun", "Kazuya", "King", "Kuma", "Lars", "Law",
  "Lee", "Leo", "Leroy", "Lidia", "Lili", "Nina", "Panda", "Paul", "Raven", "Reina", "Shaheen", 
  "Steve", "Victor", "Xiaoyu", "Yoshimitsu", "Zafina"];

function renderTables(character, containerID) {
  const container = document.getElementById(containerID);
  container.innerHTML = ""; // Clear previous content

  const tables = data[character];
  if (!tables) {
    container.innerHTML = `<p>No data available for ${character}</p>`;
    return;
  }

  tables.forEach((tableData, index) => {
    const table = document.createElement("table");

    //headers
    const headerRow = document.createElement("tr");
    tableData.headers.forEach((header) => {
      const th = document.createElement("th");
      th.innerHTML = header;
      headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    //rows
    tableData.rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");

        //this might add the notation class - we'll see. 
        if (cell.includes("notation")) {
          td.classList.add("notation");
        }

        td.innerHTML = cell;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });

    container.appendChild(table);
  });
}

document.getElementById("playerOneSelection").addEventListener("change", (event) => {
  const selectedCharacter = event.target.value;
  if (data[selectedCharacter]) {
    renderTables(selectedCharacter, "playerOneContainer");
  }
});

document.getElementById("playerTwoSelection").addEventListener("change", (event) => {
  const selectedCharacter = event.target.value;
  if (data[selectedCharacter]) {
    renderTables(selectedCharacter, "playerTwoContainer");
  }
});

//Test area for Character Data

// Template: {
//    image: ""
//    moves:[
//   {
//     headers:["Term", "Notation", "Input"],
//     rows:[

//     ],
//   },
//   {
//     headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
//     rows:[

//     ],
//   },
//   {
//     headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
//     rows:[

//     ],
//   },
// ],
// };

const data = {
  Alisa: [//{
    // image: "./Assets/Characters/Alisa.png",
    //moves: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Single Boot", "SBT", `<p class = notation>d2</p>`],
        ["Double Boot", "DBT", `<img class="notation" src="./Assets/Input-Notations/assets_generic/R9_DES.png"><p class = notation>d1</p>`],
        ["Destructive Form", `<img class="notation" src="./Assets/Input-Notations/assets_generic/R9_DES.png">`, `<p class = notation>s8</p>`],
        ["Backup", `<img class="notation" src="./Assets/Input-Notations/assets_generic/R9_BKP.png">`, `<p class = notation>z1</p>`],
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[
        [`<p class = notation>7</p>`, "Quick jab to start offence", "10", "High", "+1", ""],
        [`<p class = notation>a7</p>`, "Mid Poke with good range", "15", "Mid", "-5", ""],
        [`<p class = notation>z1</p>`, "Key low poke to harass the opponent", "16", "Low", "-13", ""],
        [`<p class = notation>x9</p>`, "Good keepout and whiff punisher", "16", "Mid", "-9", ""],
        [`<p class = notation>s1</p>`, "Long ranged low, mix it with your other approach tools", "23", "Low", "-10", ""],
        [`<p class = notation>a1</p>`, "Homing attack with great range and pushback on block", "20", "Mid", "-8", ""],
        [`<img class="notation" src="./Assets/Input-Notations/assets_generic/R5_03_WS.png">8`, "Homing attack from crouch, Mix it with FC1+2", "20", "Mid", "-8",""],
        [`<p class = notation>ddD8</p>`, "Approach attack, usefule to pressure the opponent", "18", "Mid", "-4", ""   ],
        [`<img class="notation" src="./Assets/Input-Notations/assets_generic/R9_DES.png">`, "Explore this stance to form and aggressive gameplan", "-", "-", "-", "-"],
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = notation>a4</p>`, "Parries high attacks", "-", "-", "-"],
        [`<p class = notation>a8</p>`, "Power Crush", "19", "Mid", "-13"],
        [`<p class = notation>q9</p>`, "Power Crush", "16", "High", "-9"]
        ],
      },
    ],
  Asuka: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Naniwa Gusto", "NWG", "Hitting the opponent with certain moves"],
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[
        [`<p class = notation>7</p>`, "Single jab to check situations, use its extenstions to stop them from challenging it","10", "High", "-2", ""],
        [`<p class = notation>x7</p>`, "Mid poke to harass opponents", "13", "Mid", "-3", ""],
        [`<p class = notation>a1</p>`, `Keepout launcher, hit confirmable into B.343`, "16", "Mid", "-", ""],
        [`<p class = notation>a3</p>`, "A knee attack to fish for a counterhit launch", "15", "Mid", "-7", ""],
        [`<p class = notation>e1</p>`, "Jumping conuterhit launcher, good for keepout", "20", "Mid", "-3", ""],
        [`<p class = notation>z1</p>`, "Low poke to annoy the enemy and make them press into your defensive tools", "20", "Mid", "-", ""],
        [`<p class = notation><img class = "notation" src = "./Assets/Input-Notations/assets_generic/R5_03_WS.png">z9</p>`, "Low poke to annoy the enemy and make them press into your defensive buttons", "20", "Mid", "-", ""],
        [`<p class = notation><img class = "notation" src = "./Assets/Input-Notations/assets_generic/R5_03_WS.png">8</p>`, "Can be used for approaching, launches on counterhit", "21", "Mid", "-2", ""],
        [`<p class = notation>d3</p>`, "Useful against opponents that are side stepping", "19", "High", "+3", ""],
        [`<p class = notation>d1<img class = "notation" src = "./Assets/Input-Notations/assets_generic/R7_40_HOLD.PNG"></p>`, 
          "Becomes an unblockable when fully held, Very useful against opponents getting off the ground",
          "70",
          "Unblockable Mid",
          "Knockdown",
          ""
        ],
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = notation>a4</p>`, "Reversal", "5", "SP", "N/A"],
        [`<p class = notation>a6</p>`, "Reversal", "5", "SP", "N/A"],
        [`<p class = notation>z8</p>`, "Has a low parry effect", "42", "Mid Mid", "+10"],
        [`<p class = notation>aM</p>`, "Has a kick parry effect", "24", "Mid", "-9"],
        [`<p class = notation>dM</p>`, "Has a punch parry effect", "23", "High", "0"]

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
}