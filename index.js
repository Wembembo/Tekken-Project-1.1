"use strict";

const characters = [
    "Alisa", "Anna", "Armour", "Asuka", "Azucena", "Bob", "Bryan", "Claudio", "Clive",
    "Devil", "Dragunov", "Eddy", "Fahkumram", "Feng", "Heihachi", "Hwoarang",
    "Jack", "Jin", "Jun", "Kazuya", "King", "Kuma", "Lars", "Law", "Lee",
    "Leo", "Leroy", "Lidia", "Lili", "Nina", "Panda", "Paul", "Raven",
    "Reina", "Rodger", "Shaheen", "Steve", "Victor", "Xiaoyu", "Yoshimitsu", "Zafina",
];

/**
 * Fetches character data from external JSON files and renders tables.
 * @param {string} character - The name of the character selected.
 * @param {string} containerID - The ID of the div (playerOneContainer or playerTwoContainer).
 */
async function renderTables(character, containerID) {
    const container = document.getElementById(containerID);
    if (!container) return;

    container.innerHTML = "<p>Loading data...</p>";

    try {
        // Fetches the file based on character name. 
        const response = await fetch(`./char_data/${character}.json`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const characterData = await response.json();
        container.innerHTML = ""; // Clear loading message

        // Section titles mapping
        const sectionTitles = [
            "Key Terminology",
            "Important Moves",
            (character === "King" || character === "Lars") ? "Command Grabs" : "Defensive Options"
        ];

        // Process move_tables from the fetched JSON
        characterData.move_tables.forEach((tableData, index) => {
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "character-table-section";

            const heading = document.createElement("h2");
            heading.innerText = sectionTitles[index] || "Additional Data";
            tableWrapper.appendChild(heading);

            const table = document.createElement("table");

            // Build Headers
            const headerRow = document.createElement("tr");
            tableData.headers.forEach(headerText => {
                const th = document.createElement("th");
                th.innerHTML = headerText;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);

            // Build Rows
            tableData.rows.forEach(rowData => {
                const tr = document.createElement("tr");
                rowData.forEach(cellText => {
                    const td = document.createElement("td");
                    // Add notation class if the cell contains notation markers
                    if (cellText.includes("notation")) {
                        td.classList.add("notation");
                    }
                    td.innerHTML = cellText;
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });

            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);
        });

    } catch (error) {
        console.error("Could not fetch character data:", error);
        container.innerHTML = `<p class="error">Data for ${character} could not be loaded. Please ensure ${character}.json exists in the /char_data/ folder.</p>`;
    }
}

async function showMatch() {
    const p1 = document.getElementById("playerOneSelection").value;
    const p2 = document.getElementById("playerTwoSelection").value;
    const videoContainer = document.getElementById("videoContainer");
    
    videoContainer.innerHTML = "<p>Finding best match replay...</p>";

    // Priority 1: Check your local 'matches' library (if included in your project)
    if (typeof matches !== 'undefined' && matches[p1] && matches[p1][p2] && matches[p1][p2].length > 0) {
        displayVideo(matches[p1][p2][0]);
        return;
    }

    // Priority 2: Fallback to YouTube API search
    try {
        await fetchYouTubeMatch(p1, p2);
    } catch (error) {
        videoContainer.innerHTML = "<p>Error loading video.</p>";
        console.error(error);
    }
}

async function fetchYouTubeMatch(p1, p2) {
    const API_KEY = 'API KEY HERE'; // Replace with your actual YouTube Data API key
    const query = `Tekken 8 ${p1} vs ${p2} pro match`;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error && data.error.errors[0].reason === 'quotaExceeded') {
        document.getElementById("videoContainer").innerHTML = 
            "<p class='error'>Daily search limit reached. Please try again tomorrow or check back later!</p>";
        return;
    }

    if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        displayVideo(`https://www.youtube.com/embed/${videoId}`);
    } else {
        document.getElementById("videoContainer").innerHTML = "<p>No matches found for this pair.</p>";
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

// Event Listeners initialization
document.addEventListener("DOMContentLoaded", () => {
    const p1Select = document.getElementById("playerOneSelection");
    const p2Select = document.getElementById("playerTwoSelection");
    const findMatchBtn = document.getElementById("findMatchButton");

    p1Select.addEventListener("change", (e) => {
        renderTables(e.target.value, "playerOneContainer");
    });

    p2Select.addEventListener("change", (e) => {
        renderTables(e.target.value, "playerTwoContainer");
    });

    if (findMatchBtn) {
        findMatchBtn.addEventListener("click", showMatch);
    }
});
