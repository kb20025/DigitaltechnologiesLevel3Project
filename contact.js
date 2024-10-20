const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout');


registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  
  if (username) {
    localStorage.setItem('username', username);  
    alert('Registration successful! You can now log in.');
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    alert('Please enter a valid name.');
  }
});


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginName = document.getElementById('login-name').value;
  const storedName = localStorage.getItem('username');

  if (loginName === storedName) {
    welcomeMessage.innerHTML = `Welcome, ${storedName}!`;
    loginForm.style.display = 'none';
    welcomeMessage.style.display = 'block';
    logoutButton.style.display = 'block';
  } else {
    alert('Name not found. Please register.');
  }
});


logoutButton.addEventListener('click', () => {
  localStorage.removeItem('username');
  welcomeMessage.style.display = 'none';
  logoutButton.style.display = 'none';
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});