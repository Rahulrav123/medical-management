function showRegister() {
  document.querySelector('.form-container').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
}

function showLogin() {
  document.querySelector('.form-container').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
}

function register() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const role = document.getElementById('regRole').value;

  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.email === email)) {
    alert("User already exists!");
    return;
  }

  users.push({ name, email, password, role });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Registration successful! Please login.");
  showLogin();
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid credentials!");
    return;
  }

  localStorage.setItem('loggedUser', JSON.stringify(user));
  window.location.href = 'dashboard.html';
}
