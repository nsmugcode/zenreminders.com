reloadAllReminders();

// Check for previous mode, and toggle if it was dark
let previousModeCookie = document.cookie
if (previousModeCookie.includes("dark")) {
	toggleEyeMode();
}
function toggleEyeMode() {
	var colorMode = "light"
	let mainBody = document.getElementById('main-content-body');
	if (mainBody.classList.contains('dark-mode')) {
		document.getElementById('main-content-body').classList.remove("dark-mode");
	}else {
		colorMode = "dark";
		document.getElementById('main-content-body').classList.add("dark-mode");
	}
	// Save current mode to a cookie
	document.cookie = "color-mode = "+colorMode
}


function reloadAllReminders() {
	fetch('./reminders.json')
	.then(response => response.json())
	.then(data => renderRequestedReminder(data))
	.catch(error => console.log(error))
}
function renderRequestedReminder(remindersArray) {
	var allRemindersDOM = ""
	
	let urlParms = new URLSearchParams(document.location.search);
	let reminderIndex = urlParms.get("id");
	// Assign random by default
	var finalReminder = remindersArray[getRandomInt(remindersArray.length)]
	if (reminderIndex != null) {
		// Check for inbounds index
		if (reminderIndex >= 0 && reminderIndex <= remindersArray.length-1) {
			finalReminder = remindersArray[reminderIndex];	
		}
	}
	// Render Reminder	
	let reminderURL = finalReminder["Source URL"]
	document.getElementById('reminder-text').innerHTML = finalReminder["Content"]
	var sourceLinkTitle = finalReminder["Source Title"]
	if (reminderURL.length > 0){
		sourceLinkTitle = "<a href='"+reminderURL+"'>"+finalReminder["Source Title"]+"</a>"
	}
	document.getElementById('reminder-source').innerHTML = ""+finalReminder["Source Author"]+"<br>"+sourceLinkTitle
}
function getRandomInt(max){
	return Math.floor(Math.random() * max)
}