// 3_1_3 Refactor the imperative solution without React - Refactored to use explicit state management similar to React
let state = {
    isEditing: false,
    firstName: 'Jane',
    lastName: 'Jacobs'
};

const form = document.getElementById('form');
const editButton = document.getElementById('editButton');
const firstNameInput = document.getElementById('firstNameInput');
const firstNameText = document.getElementById('firstNameText');
const lastNameInput = document.getElementById('lastNameInput');
const lastNameText = document.getElementById('lastNameText');
const helloText = document.getElementById('helloText');

function updateDOM() {
    // Update button text based on state
    editButton.textContent = state.isEditing ? 'Save Profile' : 'Edit Profile';
    
    // Show/hide elements based on state
    if (state.isEditing) {
        firstNameText.style.display = 'none';
        lastNameText.style.display = 'none';
        firstNameInput.style.display = '';
        lastNameInput.style.display = '';
    } else {
        firstNameText.style.display = '';
        lastNameText.style.display = '';
        firstNameInput.style.display = 'none';
        lastNameInput.style.display = 'none';
    }
    
    // Update displayed names
    firstNameText.textContent = state.firstName;
    lastNameText.textContent = state.lastName;
    
    // Update greeting message
    helloText.textContent = `Hello, ${state.firstName} ${state.lastName}!`;
}

function handleFormSubmit(e) {
    e.preventDefault();
    state.isEditing = !state.isEditing;
    updateDOM();
}

function handleFirstNameChange(e) {
    state.firstName = e.target.value;
    updateDOM();
}

function handleLastNameChange(e) {
    state.lastName = e.target.value;
    updateDOM();
}

// Initialize the DOM based on initial state
updateDOM();

// Attach event listeners
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;