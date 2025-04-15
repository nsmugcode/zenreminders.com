reloadReminders();
function reloadReminders() {
	fetch('./reminders.json')
	.then(response => response.json())
	.then(data => loadReminder(data))
	.catch(error => console.log(error))
}
function loadReminder(remindersArray){
	// Load random reminder
	let reminder = remindersArray[getRandomInt(remindersArray.length)]
	let reminderURL = reminder["Source URL"]
	document.getElementById('reminder-text').innerHTML = reminder["Content"]
	var sourceLinkTitle = reminder["Source Title"]
	if (reminderURL.length > 0){
		sourceLinkTitle = "<a href='"+reminderURL+"'>"+reminder["Source Title"]+"</a>"
	}
	document.getElementById('reminder-source').innerHTML = ""+reminder["Source Author"]+"<br>"+sourceLinkTitle
}
function getRandomInt(max){
	return Math.floor(Math.random() * max)
}
