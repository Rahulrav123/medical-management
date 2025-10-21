function populateDropdowns() {
  const patients = JSON.parse(localStorage.getItem('patients') || '[]');
  const doctors = JSON.parse(localStorage.getItem('doctors') || '[]');
  const pSel = document.getElementById('patientSelect');
  const dSel = document.getElementById('doctorSelect');
  pSel.innerHTML = patients.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
  dSel.innerHTML = doctors.map(d => `<option value="${d.name}">${d.name} (${d.specialty})</option>`).join('');
}

function bookAppointment() {
  const patient = document.getElementById('patientSelect').value;
  const doctor = document.getElementById('doctorSelect').value;
  const date = document.getElementById('dateTime').value;
  if (!patient || !doctor || !date) return alert('Fill all fields');

  const appts = JSON.parse(localStorage.getItem('appointments') || '[]');
  appts.push({ id: Date.now(), patient, doctor, date });
  localStorage.setItem('appointments', JSON.stringify(appts));
  loadAppointments();
}

function loadAppointments() {
  const list = document.getElementById('apptList');
  const appts = JSON.parse(localStorage.getItem('appointments') || '[]');
  list.innerHTML = '';
  appts.forEach(a => {
    const li = document.createElement('li');
    li.textContent = `${a.patient} → ${a.doctor} at ${a.date}`;
    list.appendChild(li);
  });
}

populateDropdowns();
loadAppointments();
