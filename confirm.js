$(document).ready(function () {
  // Function to get selected exam labels from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const selectedLabels = urlParams.get("selectedLabels");

  // Array to hold selected exam labels
  let labelsArray = selectedLabels ? selectedLabels.split(",") : [];

  // Function to populate the selected exams list dynamically
  const selectedExamsList = $(".selectedExamsList");

  function updateSelectedExamsList() {
    selectedExamsList.empty();
    labelsArray.forEach((label) => {
      const examBox = $("<div>").addClass("exam-box");
      const listItem = $("<li>").text(label);
      const unregisterBtn = $("<button>").addClass("btn btn-danger btn-sm unregister").text("Abmelden");
      listItem.append(unregisterBtn);
      examBox.append(listItem);
      selectedExamsList.append(examBox);
    });
  }

  updateSelectedExamsList();

  // Von Einsicht abmelden
  selectedExamsList.one('click', '.unregister', function (event) {
    event.preventDefault(); // verhindert standardverhalten von button

    const listItem = $(this).closest("li");
    const exam = listItem.text().trim(); // holt exam label von liste
    const confirmed = window.confirm('Möchten Sie sich wirklich von der Prüfung "' + exam + '" abmelden?');
    if (confirmed) {
      // entfernt exam label aus array
      labelsArray = labelsArray.filter((label) => label !== exam);
      // speichert array in localStorage
      localStorage.setItem('selectedExams', JSON.stringify(labelsArray));
      // aktualisiert liste
      listItem.closest(".exam-box").remove();
    }
  });
});

