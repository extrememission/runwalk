let intervalID;
let alertTimer = 0;  // Time in seconds for the alerts to trigger
let isRunning = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const statusMessage = document.getElementById('statusMessage');

const firstAlertSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
const secondAlertSound = new Audio('https://www.soundjay.com/button/beep-10.wav');

// Function to update the status message
function updateStatus(message) {
  statusMessage.textContent = message;
}

// Function to play alerts at specified times
function startAlerts() {
  isRunning = true;
  alertTimer = 90; // Start timer at 90 seconds
  updateStatus("Timer started. Alerts will sound every 90s and 30s.");

  // Set an interval that triggers every second
  intervalID = setInterval(() => {
    alertTimer--;

    // Trigger first alert at 90 seconds
    if (alertTimer === 0) {
      firstAlertSound.play();
      alertTimer = 30; // Reset timer to 30 seconds for the next alert
    } 
    
    // Trigger second alert at 30 seconds
    else if (alertTimer === 0) {
      secondAlertSound.play();
      alertTimer = 90; // Reset back to 90 seconds
    }
  }, 1000);
}

// Function to stop the alerts
function stopAlerts() {
  clearInterval(intervalID);
  isRunning = false;
  updateStatus("Timer stopped.");
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Event listeners for the start and stop buttons
startButton.addEventListener('click', () => {
  if (!isRunning) {
    startButton.disabled = true;
    stopButton.disabled = false;
    startAlerts();
  }
});

stopButton.addEventListener('click', () => {
  if (isRunning) {
    stopAlerts();
  }
});
