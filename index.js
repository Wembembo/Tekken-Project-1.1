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
        ["Double Boot", "DBT", `<img alt="Double Boot" class="notation" src="./Assets/Input-Notations/assets_generic/R9_DES.png"><p class = notation>d1</p>`],
        ["Destructive Form", `<img alt="Destructive Form" class="notation" src="./Assets/Input-Notations/assets_generic/R9_DES.png">`, `<p class = notation>s8</p>`],
        ["Backup", `<img alt="Backup" class="notation" src="./Assets/Input-Notations/assets_generic/R9_BKP.png">`, `<p class = notation>z1</p>`],
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[
        [`<p class = notation>7</p>`, "Quick jab to start offence", "10", "High", "+1", "-"],
        [`<p class = notation>a7</p>`, "Mid Poke with good range", "15", "Mid", "-5", "-"],
        [`<p class = notation>z1</p>`, "Key low poke to harass the opponent", "16", "Low", "-13", "-"],
        [`<p class = notation>x9</p>`, "Good keepout and whiff punisher", "16", "Mid", "-9", "-"],
        [`<p class = notation>s1</p>`, "Long ranged low, mix it with your other approach tools", "23", "Low", "-10", "-"],
        [`<p class = notation>a1</p>`, "Homing attack with great range and pushback on block", "20", "Mid", "-8", "-"],
        [`<img alt="While Standing" class="notation" src="./Assets/Input-Notations/assets_generic/R5_03_WS.png">8`, "Homing attack from crouch, Mix it with FC1+2", "20", "Mid", "-8","-"],
        [`<p class = notation>ddD8</p>`, "Approach attack, usefule to pressure the opponent", "18", "Mid", "-4", ""   ],
        [`<img alt="Destuctive Form" class="notation" src="./Assets/Input-Notations/assets_generic/R9_DES.png">`, "Explore this stance to form and aggressive gameplan", "-", "-", "-", "-"],
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
        ["Libertador", 
          `<img alt="Libertador" class="notation" src="./Assets/Input-Notations/assets_generic/R9_LIB.png">`, 
          `<p class = notation>d2</p>`
      ],
      [
        "Backturn",
        `<img alt="Backturn" class="notation" src="./Assets/Input-Notations/assets_generic/R5_02_BT.png">`,
        `<p class = notation>a2</p>`
      ],
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[
        [`<p class = notation>7</p>`, "Useful to start offense and check situations", "10", "High", "+1", ""],
        [`<p class = notation>x7</p>`, "Mid poke to harass the opponent, has extentions", "13", "Mid", "-3", ""],
        [`<p class = notation>z1</p>`, "Low pokes to mix with your fast mid attacks", "16", "Low", "-7", ""],
        [`<p class = notation>z3</p>`, "Low pokes to mix with your fast mid attacks", "19", "Low", "-14", ""],
        [`<p class = notation>x1</p>`, "Mid counterhit launcher", "17", "Mid", "-5", ""],
        [`<p class = notation>e3</p>`, "Safe low crushing launcher", "24", "Mid", "-8", ""],
        [`<p class = notation>dD2</p>`, "Pressure button that goes into stance", "21", "Mid, Mid", "+4", ""],
        [`<p class = notation>ddD19</p>`, "Approaching attack to start your offense", "10", "Mid High", "+2", ""],        
      ]
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = notation>e7</p>`, "Has punch parry properties", "18", "High", "-9"],   
        [`<img alt="Libertador" class="notation" src = "./Assets/Input-Notations/assets_generic/R9_LIB.png">`,
          "Automatically evades high and low attacks", "-", "-", "-"
        ],
        [`<p class = notation>z2</p>`,  "A low crushing kick that starts with a sway", "26", "Mid", "-16"], 
      ]
    },
  ],
  Bryan: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Backsway", "QCB", `<p class = "notation">sza</p>`],
        ["Snake Eyes", "SE", "Granted upon hitting certain moves or taunts"],
        ["Jet Upper", "-", `<p class "notation">da9</p>`],
        ["Taunt", "Taunt", `<p class "notation">K</p>`],
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[[`<p class = "notation">7</p>`, "Quick jab with strong follow-ups", "10", "High", "+1", "-"],
      [`<p class = "notation">x9</p>`, "Mid poke with useful follow-ups", "13", "Mid", "-6", "-"],
      [`<p class =  "notation">2</p>`, "Long range counter hit launcher for keepout", "18", "Mid", "-13", "-"],
      [`<p class = "notation">w3</p>`, "Low crushing launcher, useful for keepout", "-", "-", "-", "-"],
      [`<p class = "notation">sza7</p>`, "Strong backsway option", "-", "-", "-","-"],
      [`<p class = "notation">sza1</p>`, "Strong low poke for harassing the enemy", "-", "-", "-", "-"],
      [`<p class = "notation">dd3</p>`, "Homing attack, useful for discouraging sidesteps at mid range", "24", "Mid", "-13", "-"],
      [`<p class = "notation">K</p>`, "Enters Snake Eyes and can be used to break enemy guard", "28", "Mid, Unblockable", "N/A", "-"],
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = "notation">a4</p>`, "Has parry properties", "-", "-", "-"],
        [`<p class = "notation">a6</p>`, "Has parry properties", "-", "-", "-"],
        [`<p class = "notation">dd8</p>`, "During SE only, Has parry properties", "-", "-", "-"],
        [`<p class = "notation">d8</p>`, "Power Crush", "20", "High", "-8"]
      ],
    },
  ],
  Claudio: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Starburst", `<img alt="Starburst" class = "notation" src = "./Assets/Input-Notations/assets_generic/R9_STB.png">`, "Hit the enemy with certain moves to build stocks of this"]
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[        
        [`<p class = "notation">7</p>`, "Quick jab to start offence and check situations", "10", "High", "+1", "-"],
        [`<p class = "notation">a7</p>`, "Homing attack, great for space control", "18", "Mid", "-5", "-"],
        [`<p class = "notation">a1</p>`, "Mid poke with extentions to discourage retaliation", "13", "Mid", "-4", "-"],
        [`<p class = "notation">x9</p>`, "Quick counterhit launcer", "14", "Mid", "-18", "-"],
        [`<p class = "notation"><img alt="SideStep" class = "notation" src="./Assets/Input-Notations/assets_generic/R5_05_SS.png">3</p>`,
          "Low poke for pressure", "20", "Low", "-12", "-"
        ],
        [`<p class = "notation"><img alt="While Rising" class="notation" src="./Assets/Input-Notations/assets_generic/R5_03_WR.png">9</p>`,
          "Very strong approach tool",
          "13", "High", "+7", "-"
        ],
        [`<p class = "notation">dd3</p>`, "Safe mid approach with counterhit proprerites", "15", "Mid", "-13", "-"],
        [`<p class = "notation">x9</p>`, "Mid with extensions, great for wall pressure", "14", "Mid", "-13", "-"],  
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = "notation">a2</p>`, "Evasive attack", "29", "Mid", "-14"],
        [`<p class = "notation">a8</p>`, "Power Crush", "22", "Mid", "-13"],
      ],
    },
  ],
  Clive: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["PHS", "Phoenix Step/Stance", `<p class = "notation">d3</p>`],
        ["BHT", "Bahamut", `<p class = "notation">2</p>`],
        ["Updraft", "Updraft", "During Jump"]
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[        
      [`<p class = "notation">7</p>`, "Quick jab to start offence", "10", "High", "+1", "-"],
      [`<p class = "notation">x7</p>`, "Mid poke to harass the opponent", "14", "Mid", "-3", "-"],
      [`<p class = "notation">s7</p>`, "Low poke to harass the opponent", "18", "Low", "-13", "-"],
      [`<p class = "notation">z3</p>`, "Counterhit launching sweep", "19", "Low", "-18", "-"],
      [`<p class = "notation">a9D</p>`, "Very long range high attack that can shift into PHX", "20", "High", "-4", "-"],
      [`<p class = "notation">a3</p>`, "Good button to deal with grounded opponents", "18", "Mid", "9", "-"],
      [`<p class = "notation">dd9</p>`, "Safe ranged attack to build your Zantetsuken", "21", "Mid", "-7", "-"],
      ["PHX", "Learn your stance options for mixing the opponent, especially after a blocked b+2F, you can start PHX", "-", "-", "-", "-"]
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = "notation">a8</p>`, "Power Crush", "24", "Mid", "-14"],
        [`<p class = "notation">2</p>`, "Has low parry properties", "-", "-", "-"],
        [`<p class = "notation">a1</p>`, "Parry, can be followed up with 2 or 1+2 on successful parry", "-", "-", "-"],
      ],
    },
  ],
  Devil: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Fly", `<img alt="Fly" class = "notation", src = "./Assets/Input-Notations/assets_generic/R9_FLY.png">`, `<p class = "notation">2</p>`],
        ["Mourning Crow", "MCR", `<p class = "notation">d1</p>`],
        ["Crouch Dash", `<img alt = "Crouch Dash" class="notation" src="./Assets/Input-Notations/assets_generic/R9_CD_All.png">`, `<p class = "notation">d5sx</p>`],
        ["Electric Wind God Fist", `<img alt= "Electric Wind God Fist" class="notation" src="./Assets/Input-Notations/assets_generic/R9_EWGF.png">`,`<p class = "notation">d5sx9</p>`],
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[
        [`<p class = "notation">7_779</p>`, "Jab to start offence, the full string can be hit confirmed", "10, 13", "High High High Mid", "+1 -17", "- -"],
        [`<p class = "notation">x7</p>`, "Quick mid to check the opponent", "13", "Mid", "-6", "-"],
        [`<p class = "notation">s1</p>`, "Low poke to harass the opponent", "18", "Low","-12", "-"],
        [`<p class = "notation">z9</p>`, "Low poke to harass the opponent", "21", "Low","-13", "-"],
        [`<p class = "notation">a3</p>`, "Use it against grounded opponents", "17", "Mid", "-8", "-"],
        [`<p class = "notation">e7</p>`, "Projectile that goes into stance", "21", "High", "+11", "-"],
        [`<img alt = "Electric Wind God Fist" class = "notation" src="./Assets/Input-Notations/assets_generic/R9_EWGF.png">`, 
          "High launching attack that is useful in many situations", 
          "14", 
          "High", 
          "+5", 
          "-"],
        [`<p class = "notation"><img alt="Crouch Dash" class = "notation" src="./Assets/Input-Notations/assets_generic/R9_CD_All.png">8</p>`,
          "Homing attack to discourage sidestep on  your approach",
          "25",
          "Mid, Special Mid", 
          "+2",
          "-"
        ],
        [`<p class = "notation"><img alt = "Crouch Dash" class = "notation" src="./Assets/Input-Notations/assets_generic/R9_CD_All.png">38</p>`,
          "Strong but risky low", 
          "29",
          "Low, Special Mid",
          "N/A", "-"
        ]
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class="notation">a4</p>`, "Has power crush properties", "-", "-", "-"],
        [`<p class="notation">a6</p>`, "Has power crush properties", "-", "-", "-"],
        [`<p class="notation">s7</p>`, "Power crush", "18", "Mid", "-14"]
      ],
    },
  ],
  Dragunov: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Sneak", 
        `<img alt="Sneak" class = "notation" src="./Assets/Input-Notations/assets_generic/R9_SNK_Dragunov.png">`,
        `<p class="notation">sxd</p>`]
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[
        [`<p class = "notation">7</p>`, "Jab to check situations and start your pressure", "10", "High", "+1", "-"],
        [`<p class = "notation">x7</p>`, 
          "Quick mid attack to check situatoins, df+1,4 can be used to catch opponents challenging this on block",
          "13",
          "Mid",
          "-2", 
          "-"
        ],
        [`<p class = "notation">s9</p>`, "A low that opens up many strategies", "18", "Low", "-13", "-"],
        [`<p class = "notation">ddD9</p>`, "Approaching and pressure tool that launches on counter hit", "15", "Mid", "+4", "-"],
        [`<p class = "notation">a8</p>`, "Pressure tool for when you are in close range", "22", "Mid", "+6", "-"],
        [`<p class = "notation">z2</p>`, "A risky low that allows you to keep pressure on hit", "20", "Low", "-31", "-"],
        [`<p class = "notation"><img alt="Full crouch" class="notation" src="./Assets/Input-Notations/assets_generic/R5_02_FC.png">x73</p>`,
          "Quick low from full crouch, shifts into SNK",
          "16",
          "Low, Mid",
          "N/A",
          "-"
        ],
        ["Throws", 
          "Use his command throw to harass the opponent and open their defence. They're great against power crushes",
          "-",
          "-",
          "-",
          "-"]
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = "notation">a4</p>`, "Reversal", "N/A", "SP", "N/A"],
        [`<p class = "notation">a6</p>`, "Reversal", "N/A", "SP", "N/A"],
        [`<p class = "notation">s8</p>`, "Parries low attacks", "N/A", "SP", "N/A"],
        [`<p class = "notation">8</p>`, "Power crush", "21", "Mid", "-14"] 
      ],
    },
  ],
  Eddy: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Relax Stance", 
          `<img alt = "Relax Stance" class = "notation" src = "./Assets/Input-Notations/assets_generic/R9_RLX.png">`,
          `<p class = "notation">s2</p>`
        ],
        ["Handstand Position"
          ,`<img alt="hand stand stance" class = "notation" src="./Assets/Input-Notations/assets_generic/R9_HSP.png">`,
          `<p class = "notation">d8</p>`],
        ["Mandinga", "MND", "Hit the opponent with certain moves to raise the level of Mandinga (up to 2)"],
      ],
    },
    {
      headers:["Input", "Description", "Startup Frames", "Attack Level", "+/- On Block", "Counter Options"],
      rows:[
        [`<p class = "notation">7</p>`, "Jab to check situations and start pressure", "10", "High", "+1", "-"],
        [`<p class = "notation">x9</p>`, "Quick mid to check situations and harass the opponent", "14", "Mid", "+6", "-"],
        [`<p class = "notation">a11</p>`, "Counterhit confirmable launcher", "26", "Mid Mid", "-15", "-"],
        [`<p class = "notation">s1</p>`, "Low poke with counterhit properties", "21", "Low", "-14", "-"],
        [`<p class = "notation">dd1</p>`, "Low poke with counterhit properties", "21", "Low", "-14", "-"],
        [`<p class = "notation">e3</p>`, "Homing attack, shifts into RLX on hit", "22", "Mid", "-9", "-"],
        [`<p class = "notation">ddD1</p>`, "Approaching tool, Shifts into HSP", "25", "Mid", "+8", "-"],
        [`<p class = "notation"><img alt="Sidestep" class = "notation" src="./Assets/Input-Notations/assets_generic/R5_05_SS.png">1</p>`,
          "Useful to approach at mid range, shifts into RLX stance",
          "25",
          "Mid",
          "0",
          "-"
        ],
        [`<p class = "notation"><img alt="Sidestep" class="notation" src="./Assets/Input-Notations/assets_generic/R5_05_SS.png">2</p>`,
          "Stong Keepout tool",
          "25", 
          "Mid",
          "0",
          "-"
        ]
      ],
    },
    {
      headers: ["Input", "Decription", "Startup Frames", "Attack Level", "+/- On Block"],
      rows:[
        [`<p class = "notation">z8</p>`, "Evasive Attack", "20", "Mid Mid", "-6"],
        [`<p class = "notation">e9</p>`, "Sideways evasion", "22", "Mid", "-9"],
        [`<p class = "notation">a2</p>`, "High, heat engaging, powercrush", "20", "High", "-9"],
      ],
    },
  ],
  Feng: [
    {
      headers:["Term", "Notation", "Input"],
      rows:[
        ["Back Kenpo", `<img alt="Back Kenpo" class="notation" src="./Assets/Input-Notations/assets_generic/R9_BKP.png">`, `<p class = "notation">a2</p>`],
        ["Backturn", `<img alt="Backturn" class="notation" src="./Assets/Input-Notations/assets_generic/R5_02_BT.png">`, `<p class = "notation">a[13]</p>`],
        ["Shifting Clouds", `<img alt="Shifting Clouds" class="notation" src="./Assets/Input-Notations/assets_generic/R9_STC.png">`, `<p class = "notation">d2</p>`]
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
          `<img alt="Electric Wind God Fist" class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "d5sx9",
        ],
        [
          "Crouch Dash",
          `<img alt="Crouch Dash" class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_Jin.png'>`,
          "d5sx",
        ],
        [
          "Zen",
          `<img alt="Zen" class='notation' src='./Assets/Input-Notations/assets_generic/R9_ZEN.png'>`,
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
          `<img alt="Electric Wind God Fist" class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
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
          `<img alt="Heat" class='notation' src='./Assets/Input-Notations/assets_generic/R5_01_HEAT.png'>`,
        ],
        [
          "Crouch Dash",
          `<img alt="Crouch Dash" class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_All.png'>`,
          "d5sx",
        ],
        [
          "Electric Wind God Fist",
          `<img alt="Electric Wind God Fist" class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "d5sx9",
        ],
        [
          "Hellsweep",
          `<img alt="Hellsweep" class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_All.png'>37`,
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
          `<img alt="Electric Wind God Fist" class='notation' src='./Assets/Input-Notations/assets_generic/R9_EWGF.png'>`,
          "High launching attack useful in many situations",
          "11", "High", "+5", ""
        ],
        [
          `<img alt="Crouch Dash" class='notation' src='./Assets/Input-Notations/assets_generic/R9_CD_All.png'>37`,
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
