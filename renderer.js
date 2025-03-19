document.addEventListener("DOMContentLoaded", () => {
    const formular = document.getElementById("notenFormular");
    const ergebnisDiv = document.getElementById("ergebnis");
  
    formular.addEventListener("submit", (e) => {
      e.preventDefault();
      const unterrichtsnote = parseFloat(document.getElementById("unterrichtsnote").value);
      const schriftlich = parseFloat(document.getElementById("schriftlich").value);
      const muendlichInput = document.getElementById("muendlich").value.trim();
      const muendlich = muendlichInput !== "" ? parseFloat(muendlichInput) : NaN;
  
      if (isNaN(unterrichtsnote)) {
        ergebnisDiv.innerHTML = "<div class='alert alert-danger'>Bitte die Unterrichtsnote eingeben.</div>";
        return;
      }
  
      let ausgabeHTML = "";
  
      if (!isNaN(schriftlich) && !isNaN(muendlich)) {
        const fachnote = ((3 * unterrichtsnote) + (2 * schriftlich) + muendlich) / 6;
        ausgabeHTML += "<div class='alert alert-info'><strong>Fachnote:</strong> " + fachnote.toFixed(2) +
          " Punkte (gerundet: " + Math.round(fachnote) + ")" +
          "<br><small>Berechnung: (3×Unterricht + 2×schriftlich + 1×mündlich) / 6</small></div>";
      } else if (!isNaN(schriftlich) && isNaN(muendlich)) {
        const fachnote = (unterrichtsnote + schriftlich) / 2;
        ausgabeHTML += "<div class='alert alert-info'><strong>Fachnote ohne mündliche Prüfung:</strong> " + fachnote.toFixed(2) +
          " Punkte (gerundet: " + Math.round(fachnote) + ")" +
          "<br><small>Berechnung: (Unterricht + schriftlich) / 2</small></div>";
  
        // Simulation mit mündlichen Noten
        ausgabeHTML += "<h5 class='mt-4'>Simulation: Mögliche Fachnoten bei mündlicher Prüfung</h5>";
        ausgabeHTML += "<table class='table table-sm table-bordered mt-2'><thead><tr><th>Mdl. Punkte</th><th>Durchschnitt</th><th>Gerundet</th></tr></thead><tbody>";
        for (let i = 0; i <= 15; i++) {
          const simNote = ((3 * unterrichtsnote) + (2 * schriftlich) + i) / 6;
          const gerundet = Math.round(simNote);
          const rowClass = gerundet >= 5 ? "table-success" : "";
          ausgabeHTML += `<tr class="${rowClass}"><td>${i}</td><td>${simNote.toFixed(2)}</td><td>${gerundet}</td></tr>`;
        }
        ausgabeHTML += "</tbody></table>";
      } else if (isNaN(schriftlich) && !isNaN(muendlich)) {
        const fachnote = ((4 * unterrichtsnote) + muendlich) / 5;
        ausgabeHTML += "<div class='alert alert-info'><strong>Fachnote:</strong> " + fachnote.toFixed(2) +
          " Punkte (gerundet: " + Math.round(fachnote) + ")" +
          "<br><small>Berechnung: (4×Unterricht + 1×mündlich) / 5</small></div>";
      } else {
        ausgabeHTML = "<div class='alert alert-danger'>Bitte geben Sie mindestens zusätzlich eine Prüfungsnote ein (schriftlich oder mündlich).</div>";
      }
  
      ergebnisDiv.innerHTML = ausgabeHTML;
    });
  
    formular.addEventListener("reset", () => {
      ergebnisDiv.innerHTML = "";
    });
  });