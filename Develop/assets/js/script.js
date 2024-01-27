// Save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var tableEl = $('.table');
var projectFormEl = $("#project-form");
var projectNameEl = $('#project-name-input');
var projectTypeEl = $('#project-type-input');
var projectDateEL = $('#project-date-input');
var projectDeleteEl = $('.btn');


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
	tableEl.empty();
	
	var projectsSaved = localStorage.getItem('projects');
  
	if (projectsSaved) {
	  projectsSaved = JSON.parse(projectsSaved);
	} else {
	  projectsSaved = [];
	}

  
	for (let i = 0; i < projectsSaved.length; i++) {
	  var row = document.createElement("tr");
	  var tdName = document.createElement("td");
	  var tdType = document.createElement("td");
	  var tdDate = document.createElement("td");
	  var button = document.createElement('button');
	  button.textContent = 'X';
	  button.classList.add('btnonClik');
  
	  tdName.textContent = projectsSaved[i].projectName;
	  tdType.textContent = projectsSaved[i].projectType;
	  tdDate.textContent = projectsSaved[i].projectDate;
  
	  row.append(tdName);
	  row.append(tdType);
	  row.append(tdDate);
	  row.append(button);
  
	  tableEl.append(row);
	}
  }

// Add a project to local storage and display the updated project data
function handleProjectFormSubmit(event) {
	event.preventDefault();
  
	var project = {
	  projectName: projectNameEl.val(),
	  projectType: projectTypeEl.val(),
	  projectDate: projectDateEL.val(),
	}
  
	var projectsSaved = localStorage.getItem('projects');

	if (projectsSaved) {
		projectsSaved = JSON.parse(projectsSaved);
	} else {
		projectsSaved = [];
	}

	projectsSaved.push(project);
	localStorage.setItem('projects', JSON.stringify(projectsSaved));
  
	printProjectData();
  
	projectNameEl.val("");
	projectTypeEl.val("");
	projectDateEL.val("");
  }

// TODO: Add a 'submit' event listener on the new project modal form
projectFormEl.on('submit', handleProjectFormSubmit);

// BONUS
// Remove a project from local storage and display the updated project data


function handleDeleteProject(event) {
    event.preventDefault();
    var projectIndex = $(event.target).closest('tr').index();
    var projectsSaved = localStorage.getItem('projects');
    if (projectsSaved) {
        projectsSaved = JSON.parse(projectsSaved);
        projectsSaved.splice(projectIndex, 1);
        projectsSaved.pop();
        localStorage.setItem('projects', JSON.stringify(projectsSaved));
        printProjectData();
    }
}

$('.btnonClick').on('click', handleDeleteProject);

// function handleDelete(event) {
// 	event.preventDefault();
	
// 	// Get the clicked delete button
// 	var deleteButton = $(event.target);
	
// 	// Get the parent element of the delete button
// 	var listItem = deleteButton.closest('tr');
	
// 	// Remove the list item from the DOM
// 	listItem.remove();
//   }

//$('.project-today').on('click', '.delete-button', handleDelete);