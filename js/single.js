reloadAllReminders();
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