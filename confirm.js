$(document).ready(function () {
  // holt exam label von url
  const urlParams = new URLSearchParams(window.location.search);
  const selectedLabels = urlParams.get("selectedLabels");

  // array für exam label
  let labelsArray = selectedLabels ? selectedLabels.split(",") : [];

  // funkition für liste der ausgewählten prüfungen
  const selectedExamsList = $(".selectedExamsList");

  function updateSelectedExamsList() {
    selectedExamsList.empty();
    labelsArray = labelsArray.filter((label, index, self) => self.indexOf(label) === index); // entfernt doppelte einträge
    labelsArray.forEach((label) => {
      const examBox = $("<div>").addClass("exam-box");
      const listItem = $("<li>").text(label);
      const unregisterBtn = $("<button>").addClass("btn btn-danger btn-sm unregister").text("Abmelden");
      listItem.append(unregisterBtn);
      examBox.append(listItem);
      selectedExamsList.append(examBox);
    });
  }

  // funktion aufrufen
  updateSelectedExamsList();

  // funktion um sich von prüfung abzumelden
  selectedExamsList.on('click', '.unregister', function (event) {
    event.preventDefault(); // vermeidet standardeingabe von button

    const listItem = $(this).closest("li");
    const exam = listItem.text().trim(); // holt exam label von liste
    const confirmed = window.confirm('Möchten Sie sich wirklich von der Prüfung "' + exam + '" abmelden?');
    if (confirmed) {
      // entfernt ausgeählte prüfung aus array
      labelsArray = labelsArray.filter((label) => label !== exam);
      // speichert array in localStorage
      localStorage.setItem('selectedExams', JSON.stringify(labelsArray));
      // aktualisiert liste
      listItem.closest(".exam-box").remove();
    }
  });
});
