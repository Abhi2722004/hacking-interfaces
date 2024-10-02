 
const personData = {
    wait001: "wait",
    wait0002:"wait000002",
    Fetch0001: "wait......................[Fetch Government Id.....#22221xnxmkks......] .......code run",
    age: 21,
    Fetch0022: "wait......................[Father Details on Server.....#code911112......] .......code run",
    Father: " Santosh namdev ",
    Fetch22210: "wait......................[#Location on Server.....#20236426###......] .......code run",
    Fetch0002: "wait......................",
   Current_location: "Aish Bagh Gali No. 03, House No. 865, Bhopal, Madhya Pradesh ",
    Fetch000011: "wait......................[Phone Number on Server.....#code911112......] .......code run",
    phone: "India +917987684024",
    Fetch05556: "wait......................[Email address On Server......#5555####2513......] .......code run",
    Fetch00012: "wait......................[#22221xnxmkks......] .......code run",
    email: "vivek11namdev2030@gmail.com",
    Fetch01222: "wait......................[IP Address On Server......##code 888000000000......] .......code run",
    Fetch: "wait......................[#####0000000......] .......code run",
    ip: "192.168.1.100",
    Fetch0001256: "wait......................[Card Number on Server.....#code911112......] .......code run",
    ATM: "5896 **** 7512",
    Fetch0012548: "wait......................[Pin Number on Server.....#code911112......] .......code run",
    Code: "**47",
    Fetch012563: "wait......................[Phone Number on Server.....#code911112......] .......code run",
    phone: "India +917987684024",
    
};

const terminalOutput = document.getElementById('output');
const hackButton = document.getElementById('hackButton');
const userNameInput = document.getElementById('userName');

hackButton.addEventListener('click', function() {
    const userName = userNameInput.value.trim();

    if (userName) {
        terminalOutput.textContent = '';  // Clear output before running
        personData.name = userName;  // Add user's name to the data
        displayDataHackerStyle(personData);
    } else {
        alert("Please enter the user's name first!");
    }
});

function displayDataHackerStyle(data) {
    const keys = Object.keys(data);
    let index = 0;

    const interval = setInterval(() => {
        if (index < keys.length) {
            const key = keys[index];
            const value = data[key];
            terminalOutput.textContent += `${key.toUpperCase()}: ${value}\n`;
            index++;
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll to the bottom
        } else {
            clearInterval(interval);  // Stop the interval once all data is displayed
        }
    }, 1000); // Display each piece of data every second
}
