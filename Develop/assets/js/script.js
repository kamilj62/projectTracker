// Save reference to important DOM elements
var timeDisplayEl = $('#time-display');

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
}

// Get project data from local storage and display it
function printProjectData() {
	// TODO: clear current projects on the page
	// TODO: get projects from localStorage
	// TODO: loop through each project and create a table row for each project. Don't forget to append your new row to the table in DOM
}

// Add a project to local storage and display the updated project data
function handleProjectFormSubmit(event) {
	event.preventDefault();

	// TODO: read user input from the form and bundle it in a new project object

	// TODO: retrieve the current array of projects from local storage, add the new project object to it and, save the updated array of projects to local storage

	// TODO: re-render the saved project data

	// TODO: clear the form inputs
}

// TODO: Add a 'submit' event listener on the new project modal form

// BONUS
// Remove a project from local storage and display the updated project data
function handleDeleteProject() {
	// YOUR CODE
}

// Use jQuery event delegation to listen for clicks on dynamically added delete buttons.
// YOUR CODE
