reloadAllReminders();
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