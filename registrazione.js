// Funzione per salvare il valore in localStorage
function saveToLocalStorage() {
  const nameInput = document.getElementById("nameInput").value;
  localStorage.setItem("savedName", nameInput);
  displaySavedValue();
}

// Funzione per rimuovere il valore da localStorage
function removeFromLocalStorage() {
  localStorage.removeItem("savedName");
  displaySavedValue();
}

// Funzione per visualizzare il valore salvato precedentemente
function displaySavedValue() {
  const savedValueSpan = document.getElementById("savedValue");
  const savedName = localStorage.getItem("savedName");

  if (savedName) {
    savedValueSpan.textContent = savedName;
  } else {
    savedValueSpan.textContent = "";
  }
}

document
  .getElementById("saveButton")
  .addEventListener("click", saveToLocalStorage);
document
  .getElementById("removeButton")
  .addEventListener("click", removeFromLocalStorage);

displaySavedValue();

// ESERCIZIO 2

function updateCounter() {
  let counterValue = sessionStorage.getItem("counterValue");

  if (counterValue === null) {
    counterValue = 0;
  } else {
    counterValue = parseInt(counterValue, 10) + 1;
  }

  sessionStorage.setItem("counterValue", counterValue);

  document.getElementById("counter").textContent = counterValue;

  setTimeout(updateCounter, 1000);
}

updateCounter();
