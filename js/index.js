reloadReminders();

// Check for previous mode, and toggle if it was dark
let previousModeCookie = document.cookie
if (previousModeCookie.includes("dark")) {
	toggleEyeMode();
}

function reloadReminders() {
	fetch('./reminders.json')
	.then(response => response.json())
	.then(data => loadReminder(data))
	.catch(error => console.log(error))
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
	const daysToExpire = new Date(2147483647 * 1000).toUTCString();
	document.cookie = "color-mode = "+colorMode+"; expires="+daysToExpire;
}
function loadReminder(remindersArray){
	let randomIndex = getRandomInt(remindersArray.length)
	// Load random reminder
	let reminder = remindersArray[randomIndex]
	let reminderURL = reminder["Source URL"]
	document.getElementById('reminder-text').innerHTML = reminder["Content"]
	var sourceLinkTitle = reminder["Source Title"]
	var permalink = "/single.html?id="+randomIndex
	if (reminderURL.length > 0){
		sourceLinkTitle = "<a href='"+reminderURL+"'>"+reminder["Source Title"]+"</a>"
	}
	document.getElementById('reminder-source').innerHTML = ""+reminder["Source Author"]+"<br>"+sourceLinkTitle+"<br><br><a href='"+permalink+"'>Permalink</a>";
}
function getRandomInt(max){
	return Math.floor(Math.random() * max)
}
