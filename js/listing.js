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
	.then(data => renderAllReminders(data))
	.catch(error => console.log(error))
}
function renderAllReminders(remindersArray) {
	var allRemindersDOM = ""
	for (reminder of remindersArray) {
		console.log(reminder)
		let reminderURL = reminder["Source URL"]
		var sourceLinkTitle = reminder["Source Title"]

		var reminderCardDOM = '<div class="zen-content main-content">'
		reminderCardDOM += '<h2 id="reminder-text">'+reminder["Content"]+'</h2>';
		
		if (reminderURL != null && reminderURL.length > 0){
			sourceLinkTitle = "<a href='"+reminderURL+"'>"+sourceLinkTitle+"</a>"
		}
		reminderCardDOM += '<p id="reminder-source">'+reminder["Source Author"]+"<br>"+sourceLinkTitle+'</div>';
		allRemindersDOM += reminderCardDOM;
	}
	document.getElementById('zen-listing-count').innerHTML = remindersArray.length
	document.getElementById('zen-listing').innerHTML = allRemindersDOM
}