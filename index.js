"use strict";
const characters = [
    "Alisa", 
    "Anna", 
    "Armour", 
    "Asuka", 
    "Azucena", 
    "Bob", 
    "Bryan", 
    "Claudio", 
    "Clive", 
    "Devil", 
    "Dragunov", 
    "Eddy", 
    "Fahkumram", 
    "Feng", 
    "Heihachi", 
    "Hwoarang", 
    "Jack", 
    "Jin", 
    "Jun", 
    "Kazuya", 
    "King", 
    "Kuma", 
    "Kunimitsu",
    "Lars", 
    "Law", 
    "Lee", 
    "Leo", 
    "Leroy", 
    "Lidia", 
    "Lili",
    "Miary", 
    "Nina", 
    "Panda", 
    "Paul", 
    "Raven", 
    "Reina", 
    "Rodger", 
    "Shaheen", 
    "Steve", 
    "Victor",
    "Xiaoyu", 
    "Yoshimitsu", 
    "Zafina"
];

function updatePortrait(character, bgID) {
    const bgElement = document.getElementById(bgID);
    if (!bgElement) return;
    bgElement.classList.remove('portrait-visible');
    setTimeout(() => {
        const imagePath = `./Assets/Characters/${character}.webp`;
        bgElement.style.backgroundImage = `url('${imagePath}')`;
        bgElement.classList.add('portrait-visible');
    }, 800);
}

async function renderTables(character, containerID) {
    const container = document.getElementById(containerID);
    if (!container) return;
    container.innerHTML = "<p>Loading data...</p>";
    try {
        const response = await fetch(`./char_data/${character}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const characterData = await response.json();
        container.innerHTML = "";
        const sectionTitles = ["Key Terminology", "Important Moves", (character === "King" || character === "Lars") ? "Command Grabs" : "Defensive Options"];
        characterData.move_tables.forEach((tableData, index) => {
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "character-table-section";
            const heading = document.createElement("h2");
            heading.innerText = sectionTitles[index] || "Additional Data";
            tableWrapper.appendChild(heading);
            const table = document.createElement("table");
            const headerRow = document.createElement("tr");
            tableData.headers.forEach(headerText => {
                const th = document.createElement("th");
                th.innerHTML = headerText;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            tableData.rows.forEach(rowData => {
                const tr = document.createElement("tr");
                rowData.forEach(cellText => {
                    const td = document.createElement("td");
                    if (cellText.includes("notation")) td.classList.add("notation");
                    td.innerHTML = cellText;
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);
        });
    } catch (error) {
        container.innerHTML = `<p class="error">Data for ${character} could not be loaded.</p>`;
    }
}

async function showMatch() {
    const p1 = document.getElementById("playerOneSelection").value;
    const p2 = document.getElementById("playerTwoSelection").value;
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "<p>Finding best match replay...</p>";
    try {
        const query = `Tekken 8 ${p1} vs ${p2} pro match`;
        const API_KEY = 'YOUR_API_HERE'; //API KEY GOES HERE
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            displayVideo(`https://www.youtube.com/embed/${videoId}`);
        } else {
            videoContainer.innerHTML = "<p>No matches found.</p>";
        }
    } catch (error) {
        videoContainer.innerHTML = "<p>Error loading video.</p>";
    }
}

function displayVideo(url) {
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `${url}?autoplay=1`;
    iframe.allowFullscreen = true;
    iframe.allow = "autoplay; encrypted-media; fullscreen";
    videoContainer.appendChild(iframe);
}

document.addEventListener("DOMContentLoaded", () => {
    const p1Select = document.getElementById("playerOneSelection");
    const p2Select = document.getElementById("playerTwoSelection");
    const findMatchBtn = document.getElementById("findMatchButton");
    p1Select.addEventListener("change", (e) => {
        const char = e.target.value;
        renderTables(char, "playerOneContainer");
        updatePortrait(char, "p1-bg");
    });
    p2Select.addEventListener("change", (e) => {
        const char = e.target.value;
        renderTables(char, "playerTwoContainer");
        updatePortrait(char, "p2-bg");
    });
    if (findMatchBtn) findMatchBtn.addEventListener("click", showMatch);
});