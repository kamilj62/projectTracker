// Save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var tableEl = $('.table');
var projectFormEl = $("#project-form");
var projectNameEl = $('#project-name-input');
var projectTypeEl = $('#project-type-input');
var projectDateEL = $('#project-date-input');


// Things to execute upon loading the page
function init() {
	// display current date and time
	displayTime();
	// start timer to update time every second
	setInterval(displayTime, 1000);
	// render saved project data, if any
	printProjectData();
}

init();

// Handle displaying the time
function displayTime() {
	// TODO: use dayjs format method to display the current date and time
	var now = dayjs()
	timeDisplayEl.text(now);
}

// Get project data from local storage and display it
function printProjectData() {
	// TODO: clear current projects on the page
	// TODO: get project from localStorage
	var projectsSaved = localStorage.getItem('projects');

	if (projectsSaved) {
		projectsSaved = JSON.parse(projectsSaved);
	}
	else {
		projectsSaved = [];
	}

	// TODO: loop through each project and create a table row for each project. Don't forget to append your new row to the table in DOM
	for (let i = 0; i < projectsSaved.length; i++) {
		var row = document.createElement("tr");
		var tdName = document.createElement("td");
		var tdType = document.createElement("td");
		var tdDate = document.createElement("td");
        tdName.textContent = projectsSaved[i].projectName;
		tdType.textContent = projectsSaved[i].projectType;
		tdDate.textContent = projectsSaved[i].projectDate;
		row.append(tdName);
		row.append(tdType);
		row.append(tdDate);
        tableEl.append(row);
		
	}
}

// Add a project to local storage and display the updated project data
function handleProjectFormSubmit(event) {
	event.preventDefault();

	// TODO: read user input from the form and bundle it in a new project object

	var project = {
		projectName: projectNameEl.val(),
		projectType: projectTypeEl.val(),
		projectDate: projectDateEL.val()
	}

	// TODO: retrieve the current array of projects from local storage, add the new project object to it and, save the updated array of projects to local storage
	var projectsSaved = localStorage.getItem('projects');

	if (projectsSaved) {
		projectsSaved = JSON.parse(projectsSaved);
	}
	else {
		projectsSaved = [];
	}
	
	projectsSaved.push(project);

	localStorage.setItem('projects', JSON.stringify(projectsSaved));


	// TODO: re-render the saved project data

	printProjectData();
	// TODO: clear the form inputs
		projectNameEl.val("");
		projectTypeEl.val("");
		projectDateEL.val("");

}

// TODO: Add a 'submit' event listener on the new project modal form
projectFormEl.on('submit', handleProjectFormSubmit);
// BONUS
// Remove a project from local storage and display the updated project data
function handleDeleteProject() {
	// YOUR CODE
}

// Use jQuery event delegation to listen for clicks on dynamically added delete buttons.
// YOUR CODE

