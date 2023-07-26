// landigpage.js

$(document).ready(function () {
  $(".btn-confirm").on("click", function () {
    const checkedToggles = $(".form-check-input:checked");
    if (checkedToggles.length === 0) {
      $("#noToggleModal").modal("show");
    } else {
      const selectedLabels = checkedToggles
        .map(function () {
          return $(this).next().text();
        })
        .get()
        .join(",");

      window.location.href =
        "./confirm.html?selectedLabels=" +
        encodeURIComponent(selectedLabels);
    }
  });

  // funktion aufrufen 
  updateSelectedExams();
});

