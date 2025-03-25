document.addEventListener("DOMContentLoaded", () => {
  const formular = document.getElementById("notenFormular");
  const ergebnisDiv = document.getElementById("ergebnis");

  formular.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Verbesserte Eingabefeld-Verarbeitung
    const unterrichtInput = document.getElementById("unterrichtsnote").value.trim();
    const schriftlichInput = document.getElementById("schriftlich").value.trim();
    const muendlichInput = document.getElementById("muendlich").value.trim();
    
    const unterrichtsnote = unterrichtInput !== "" ? parseFloat(unterrichtInput) : NaN;
    const schriftlich = schriftlichInput !== "" ? parseFloat(schriftlichInput) : NaN;
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
        "<br><small>Berechnung: (3×Unterricht + 2×schriftlich + 1×mündlich) / 6</small>" +
        "<br><small class='text-secondary'>Gemäß § 26 VOFOS: \"In Fächern, in denen sowohl schriftlich als auch mündlich geprüft wurde, ist die Unterrichtsleistung dreifach, die schriftliche Prüfungsleistung zweifach und die mündliche Prüfungsleistung einfach zu gewichten.\"</small></div>";
    } else if (!isNaN(schriftlich) && isNaN(muendlich)) {
      const fachnote = (unterrichtsnote + schriftlich) / 2;
      const aktuelleNote = Math.round(fachnote);
      ausgabeHTML += "<div class='alert alert-info'><strong>Fachnote ohne mündliche Prüfung:</strong> " + fachnote.toFixed(2) +
        " Punkte (gerundet: " + aktuelleNote + ")" +
        "<br><small>Berechnung: (Unterricht + schriftlich) / 2</small>" +
        "<br><small class='text-secondary'>Gemäß § 26 VOFOS: \"In Fächern, in denen nur schriftlich geprüft wurde, sind Unterrichtsleistung und schriftliche Prüfungsleistung gleichgewichtet. In Zweifelsfällen überwiegt die Unterrichtsleistung.\"</small></div>";

      // Simulation mit mündlichen Noten
      ausgabeHTML += "<h5 class='mt-4'>Simulation: Mögliche Fachnoten bei mündlicher Prüfung</h5>";
      
      // Hinzugefügter Hinweis zur Simulation
      ausgabeHTML += "<div class='alert alert-info'><small>Hinweis: Eine zusätzliche mündliche Prüfung würde nach folgender Formel berechnet:</small>" +
        "<br><small class='text-secondary'>Gemäß § 26 VOFOS: \"In Fächern, in denen sowohl schriftlich als auch mündlich geprüft wurde, ist die Unterrichtsleistung dreifach, die schriftliche Prüfungsleistung zweifach und die mündliche Prüfungsleistung einfach zu gewichten.\"</small></div>";
      
      ausgabeHTML += "<table class='table table-sm table-bordered mt-2'><thead><tr><th>Mdl. Punkte</th><th>Durchschnitt</th><th>Gerundet</th></tr></thead><tbody>";
      for (let i = 0; i <= 15; i++) {
        const simNote = ((3 * unterrichtsnote) + (2 * schriftlich) + i) / 6;
        const gerundet = Math.round(simNote);
        const rowClass = gerundet >= 5 ? "table-success" : "table-danger";
        ausgabeHTML += `<tr class="${rowClass}"><td>${i}</td><td>${simNote.toFixed(2)}</td><td>${gerundet}</td></tr>`;
      }
      ausgabeHTML += "</tbody></table>";
    } else if (isNaN(schriftlich) && !isNaN(muendlich)) {
      const fachnote = ((4 * unterrichtsnote) + muendlich) / 5;
      ausgabeHTML += "<div class='alert alert-info'><strong>Fachnote:</strong> " + fachnote.toFixed(2) +
        " Punkte (gerundet: " + Math.round(fachnote) + ")" +
        "<br><small>Berechnung: (4×Unterricht + 1×mündlich) / 5</small>" +
        "<br><small class='text-secondary'>Gemäß § 26 VOFOS: \"In Fächern, in denen nur mündlich geprüft wurde, ist die Unterrichtsleistung vierfach und die mündliche Prüfungsleistung einfach zu gewichten.\"</small></div>";
    } else {
      // Nur Unterrichtsleistung - direkte Übernahme der Note
      ausgabeHTML += "<div class='alert alert-info'><strong>Fachnote (nur Unterrichtsleistung):</strong> " + 
        unterrichtsnote + " Punkte" +
        "<br><small>Hinweis: In Fächern ohne Prüfungspflicht wird die Unterrichtsleistung direkt übernommen.</small>" +
        "<br><small class='text-secondary'>Gemäß § 26 VOFOS: Bei Fächern ohne Prüfungspflicht wird die Unterrichtsleistung direkt als Fachnote übertragen.</small></div>";
      
      // Simulation mit mündlichen Noten
      ausgabeHTML += "<h5 class='mt-4'>Simulation: Mögliche Fachnoten bei mündlicher Prüfung</h5>";
      ausgabeHTML += "<div class='alert alert-info'><small>Hinweis: Eine freiwillige mündliche Prüfung würde nach folgender Formel berechnet:</small>" +
        "<br><small class='text-secondary'>Gemäß § 26 VOFOS: \"In Fächern, in denen nur mündlich geprüft wurde, ist die Unterrichtsleistung vierfach und die mündliche Prüfungsleistung einfach zu gewichten.\"</small></div>";
      ausgabeHTML += "<table class='table table-sm table-bordered mt-2'><thead><tr><th>Mdl. Punkte</th><th>Durchschnitt</th><th>Gerundet</th></tr></thead><tbody>";
      for (let i = 0; i <= 15; i++) {
        const simNote = ((4 * unterrichtsnote) + i) / 5;
        const gerundet = Math.round(simNote);
        const rowClass = gerundet >= 5 ? "table-success" : "table-danger";
        ausgabeHTML += `<tr class="${rowClass}"><td>${i}</td><td>${simNote.toFixed(2)}</td><td>${gerundet}</td></tr>`;
      }
      ausgabeHTML += "</tbody></table>";
    }

    ergebnisDiv.innerHTML = ausgabeHTML;
  });

  formular.addEventListener("reset", () => {
    ergebnisDiv.innerHTML = "";
  });
});

// Am Ende der Datei
document.getElementById("versionInfoButton").addEventListener("click", function() {
  // Electron-spezifischer Code für einen "Über"-Dialog
  const { shell } = require('electron');
  shell.openPath('./CHANGELOG.md');
  
  // Alternative: Öffne einen Dialog mit Versionsinfos
  /*
  const { dialog } = require('electron').remote;
  dialog.showMessageBox({
    type: 'info',
    title: 'Änderungen in Version 1.1.1',
    message: 'Was ist neu in fosAVG 1.1.1',
    detail: '• Unterstützung für Fächer ohne Prüfungspflicht\n• Verbesserte Simulationstabellen\n• Detaillierte Verordnungszitate\n• Farbkodierung für Bestehensgrenze (5 Punkte)',
    buttons: ['OK']
  });
  */
});

// Version-Information
// Auskommentiert, da Versionsinfos bereits im Footer und Modal vorhanden sind
// Alternativ könnte dies beim Start oder Update angezeigt werden
/*
document.addEventListener('DOMContentLoaded', () => {
  const { dialog } = require('@electron/remote');
  dialog.showMessageBox({
    type: 'info',
    title: 'Version 1.1.1',
    message: 'Änderungen in dieser Version:',
    detail: '• Unterstützung für Fächer ohne Prüfungspflicht\n' +
            '• Simulationstabelle für mündliche Prüfungen bei Fächern ohne Prüfungspflicht\n' +
            '• Zitierung der relevanten Paragraphen der VOFOS bei jeder Berechnungsmethode\n' +
            '• Verbesserte Farbkodierung in Simulationstabellen\n' +
            '• Konsistentes Hinweisformat für alle Berechnungsmethoden',
    buttons: ['OK']
  });
});
*/
