function addPatient() {
  const name = document.getElementById('patientName').value;
  const age = document.getElementById('age').value;
  if (!name || !age) return alert('Fill all fields');

  const patients = JSON.parse(localStorage.getItem('patients') || '[]');
  patients.push({ id: Date.now(), name, age });
  localStorage.setItem('patients', JSON.stringify(patients));
  loadPatients();
}

function loadPatients() {
  const list = document.getElementById('patientList');
  const patients = JSON.parse(localStorage.getItem('patients') || '[]');
  list.innerHTML = '';
  patients.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `${p.name}, Age: ${p.age} 
      <button onclick="deletePatient(${p.id})">Delete</button>`;
    list.appendChild(li);
  });
}

function deletePatient(id) {
  const patients = JSON.parse(localStorage.getItem('patients') || '[]');
  localStorage.setItem('patients', JSON.stringify(patients.filter(p => p.id !== id)));
  loadPatients();
}

loadPatients();
