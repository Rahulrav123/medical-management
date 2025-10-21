function addDoctor() {
  const name = document.getElementById('docName').value;
  const specialty = document.getElementById('specialty').value;
  if (!name || !specialty) return alert('Fill all fields');

  const doctors = JSON.parse(localStorage.getItem('doctors') || '[]');
  doctors.push({ id: Date.now(), name, specialty });
  localStorage.setItem('doctors', JSON.stringify(doctors));
  loadDoctors();
}

function loadDoctors() {
  const list = document.getElementById('doctorList');
  const doctors = JSON.parse(localStorage.getItem('doctors') || '[]');
  list.innerHTML = '';
  doctors.forEach(d => {
    const li = document.createElement('li');
    li.innerHTML = `${d.name} (${d.specialty}) 
      <button onclick="deleteDoctor(${d.id})">Delete</button>`;
    list.appendChild(li);
  });
}

function deleteDoctor(id) {
  const doctors = JSON.parse(localStorage.getItem('doctors') || '[]');
  localStorage.setItem('doctors', JSON.stringify(doctors.filter(d => d.id !== id)));
  loadDoctors();
}

loadDoctors();
