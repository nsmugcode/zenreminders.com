reloadReminders();
function reloadReminders() {
	fetch('./reminders.json')
	.then(response => response.json())
	.then(data => loadReminder(data))
	.catch(error => console.log(error))
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
