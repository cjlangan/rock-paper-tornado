// Select the input field and button
const { exec } = require('child_process');
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the button
submitButton.addEventListener('click', () => {
    // Get the value of the input field
    const inputValue = userInput.value;
    
    // Print the input value to the console
    console.log('User input:', inputValue);

    // Execute a C program
    // exec('./hello');
});

