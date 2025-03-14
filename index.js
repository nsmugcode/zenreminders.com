fetch('./reminders.json')
.then(response => response.json())
.then(data => loadReminder(data))
.catch(error => console.log(error))

function loadReminder(remindersArray){
	// Load random reminder
	let reminder = remindersArray[getRandomInt(remindersArray.length)]
	document.getElementById('reminder-text').innerHTML = reminder["Content"]
	document.getElementById('reminder-source').innerHTML = ""+reminder["Source Author"]+"<br>"+reminder["Source Title"]
}
function getRandomInt(max){
	return Math.floor(Math.random() * max)
}
