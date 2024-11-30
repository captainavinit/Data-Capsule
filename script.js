// Select DOM elements
const idInput = document.querySelector('.user-input');
const passwordInput = document.querySelector('.password-input');
const usernameInput = document.querySelector('.username-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');

const idDisplay = document.querySelector('.id-display');
const passwordPrompt = document.querySelector('.password-prompt');
const loginPrompt = document.querySelector('#login-prompt');
const signUpPrompt = document.querySelector('#sign-up-prompt');
const confirmPasswordPrompt = document.querySelector('#confirm-password-prompt');

const switchToSignUpBtn = document.querySelector('.switch-to-sign-up');
const switchToLoginBtn = document.querySelector('.switch-to-login');

// Function to handle login ID input
function handleIDInput(event) {
    if (event.key === 'Enter' && idInput.value.trim() !== '') {
        idDisplay.innerHTML = `└─$ <span class="id-prompt">ID entered:</span> <span class="id-display">${idInput.value}</span>`;
        idDisplay.style.display = 'block';
        idInput.style.display = 'none';
        passwordPrompt.style.display = 'block';
        passwordInput.style.display = 'block';
        passwordInput.focus();
    }
}

// Function to handle login password input
function handlePasswordInput(event) {
    if (event.key === 'Enter' && passwordInput.value.trim() !== '') {
        alert('Login successful!');
        // Add authentication logic here (e.g., backend API call)
    }
}

// Switch to the Sign-Up form
function switchToSignUp() {
    switchToLoginBtn.style.display = 'block';
    switchToSignUpBtn.style.display = 'none';
    signUpPrompt.style.display = 'block';
    usernameInput.style.display = 'block';
    confirmPasswordPrompt.style.display = 'block';
    confirmPasswordInput.style.display = 'block';

    // Hide login fields
    loginPrompt.style.display = 'none';
    idInput.style.display = 'none';
    passwordPrompt.style.display = 'none';
    passwordInput.style.display = 'none';
}

// Switch back to the Login form
function switchToLogin() {
    switchToSignUpBtn.style.display = 'block';
    switchToLoginBtn.style.display = 'none';
    signUpPrompt.style.display = 'none';
    usernameInput.style.display = 'none';
    confirmPasswordPrompt.style.display = 'none';
    confirmPasswordInput.style.display = 'none';

    // Show login fields
    loginPrompt.style.display = 'block';
    idInput.style.display = 'block';
    passwordPrompt.style.display = 'none';
    passwordInput.style.display = 'none';
    idInput.focus();
}

// Function to handle password confirmation in the sign-up form
function handleConfirmPasswordInput(event) {
    if (event.key === 'Enter') {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            alert('Sign-up successful!');
            // Add logic to save user data here (e.g., backend API call)
        } else {
            alert('Passwords do not match. Please try again.');
            confirmPasswordInput.value = ''; // Clear the confirmation password
            confirmPasswordInput.focus();
        }
    }
}

// Event listeners for input fields and buttons
idInput.addEventListener('keydown', handleIDInput);
passwordInput.addEventListener('keydown', handlePasswordInput);
confirmPasswordInput.addEventListener('keydown', handleConfirmPasswordInput);

switchToSignUpBtn.addEventListener('click', switchToSignUp);
switchToLoginBtn.addEventListener('click', switchToLogin);
