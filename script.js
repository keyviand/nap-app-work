const STORAGE_KEY = "bloodSugarEntries";

const entryForm = document.getElementById("entryForm");
const entriesBody = document.getElementById("entriesBody");
const emptyMessage = document.getElementById("emptyMessage");
const printBtn = document.getElementById("printBtn");
const exportBtn = document.getElementById("exportBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const clearFormBtn = document.getElementById("clearForm");

const readingInput = document.getElementById("reading");
const ateSomethingInput = document.getElementById("ateSomething");
const foodInput = document.getElementById("food");
const mealTimeInput = document.getElementById("mealTime");
const mealDateInput = document.getElementById("mealDate");
const notesInput = document.getElementById("notes");

function getEntries() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function formatDateTime(isoString) {
  return new Date(isoString).toLocaleString();
}

function renderEntries() {
  const entries = getEntries();
  entriesBody.innerHTML = "";

  if (entries.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  entries.forEach((entry, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${formatDateTime(entry.readingDateTime)}</td>
      <td>${entry.reading}</td>
      <td>${entry.ateSomething}</td>
      <td>${entry.food || "-"}</td>
      <td>${entry.mealDate || "-"}</td>
      <td>${entry.mealTime || "-"}</td>
      <td>${entry.notes || "-"}</td>
      <td><button class="delete-btn" data-index="${index}">Delete</button></td>
    `;

    entriesBody.appendChild(row);
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", () => {
      deleteEntry(Number(button.dataset.index));
    });
  });
}

function deleteEntry(index) {
  const entries = getEntries();
  entries.splice(index, 1);
  saveEntries(entries);
  renderEntries();
}

function clearForm() {
  entryForm.reset();
}

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const reading = readingInput.value.trim();
  const ateSomething = ateSomethingInput.value;
  const food = foodInput.value.trim();
  const mealTime = mealTimeInput.value;
  const mealDate = mealDateInput.value;
  const notes = notesInput.value.trim();

  if (!reading) {
    alert("Please enter a blood sugar reading.");
    return;
  }

  const newEntry = {
    reading,
    ateSomething,
    food,
    mealTime,
    mealDate,
    notes,
    readingDateTime: new Date().toISOString()
  };

  const entries = getEntries();
  entries.unshift(newEntry);
  saveEntries(entries);
  renderEntries();
  clearForm();
});

clearFormBtn.addEventListener("click", clearForm);

printBtn.addEventListener("click", () => {
  window.print();
});

exportBtn.addEventListener("click", () => {
  const entries = getEntries();

  if (entries.length === 0) {
    alert("No entries to export.");
    return;
  }

  const headers = [
    "Reading Date/Time",
    "Reading",
    "Ate Something",
    "Food / Drink",
    "Meal Date",
    "Meal Time",
    "Notes"
  ];

  const rows = entries.map((entry) => [
    formatDateTime(entry.readingDateTime),
    entry.reading,
    entry.ateSomething,
    entry.food || "",
    entry.mealDate || "",
    entry.mealTime || "",
    entry.notes || ""
  ]);

  const csvContent = [headers, ...rows]
    .map((row) =>
      row
        .map((value) => `"${String(value).replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "blood-sugar-entries.csv";
  link.click();

  URL.revokeObjectURL(url);
});

deleteAllBtn.addEventListener("click", () => {
  const confirmed = confirm("Delete all saved entries?");
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  renderEntries();
});

renderEntries();
