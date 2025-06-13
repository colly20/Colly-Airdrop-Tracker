document.addEventListener("DOMContentLoaded", loadAirdrops);

function saveAirdrop() {
    const name = document.getElementById("airdropName").value;
    const link = document.getElementById("airdropLink").value;

    if (!name || !link) return;

    let airdrops = JSON.parse(localStorage.getItem("airdrops")) || [];
    airdrops.push({ name, link });
    localStorage.setItem("airdrops", JSON.stringify(airdrops));
    loadAirdrops();
}

function loadAirdrops() {
    const savedAirdrops = document.getElementById("savedAirdrops");
    savedAirdrops.innerHTML = "";
    let airdrops = JSON.parse(localStorage.getItem("airdrops")) || [];

    airdrops.forEach((airdrop, index) => {
        savedAirdrops.innerHTML += `
            <tr>
                <td>${airdrop.name}</td>
                <td><a href="${airdrop.link}" target="_blank">${airdrop.link}</a></td>
                <td><button onclick="removeAirdrop(${index})">❌ Remove</button></td>
            </tr>
        `;
    });
}

function removeAirdrop(index) {
    let airdrops = JSON.parse(localStorage.getItem("airdrops")) || [];
    airdrops.splice(index, 1);  // Removes selected entry
    localStorage.setItem("airdrops", JSON.stringify(airdrops));
    loadAirdrops();
}
