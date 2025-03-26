# fosAVG – Fachnotendurchschnittsrechner für die FOS Hessen

**fosAVG** ist eine schlanke, plattformübergreifende Desktop-Anwendung zur Berechnung der Fachnote gemäß der **Verordnung über die Abschlussprüfung in der Fachoberschule Hessen (§ 26 FOSchulAPrO HE)**.  
Die App wurde mit **Electron**, **HTML**, **CSS (Bootstrap)** und **JavaScript** entwickelt.

---

## 📌 Funktionen

- Berechnung der Fachnote basierend auf Unterrichts-, schriftlicher und optional mündlicher Prüfungsleistung
- Automatische Gewichtung gemäß § 26 FOSchulAPrO HE
- Tooltip- und Popover-Hinweise für eine intuitive Bedienung
- Berechnung mit und ohne mündliche Prüfungsnote
- Automatische Rundung auf ganze Punkte
- Simulation verschiedener Szenarien
- Plattformübergreifend: **macOS** (Mac App Store) und **Windows** (Portable)

---

## 📸 Screenshots

*(Optional: Hier kannst du später App-Screenshots einfügen)*

---

## 🛠️ Installation

### macOS
1. Im Mac App Store nach "fosAVG" suchen
2. App installieren
3. Starten und nutzen!

### Windows
1. Entpackten Build aus dem `dist/win-unpacked`-Ordner kopieren
2. `fosAVG.exe` ausführen

---

## 📋 Systemanforderungen

- macOS 15.3 oder höher (Sonoma)
- Windows 10 oder höher (x64/ARM64)
- Keine Internetverbindung erforderlich

---

## ⚖️ Lizenz

Dieses Projekt steht unter der **MIT License**.  
Siehe Datei [`LICENSE`](./LICENSE) für Details.

---

## 👨‍💻 Entwickler

**Holger Sebastiao**  
Version 2.0.1 – Stand: März 2025

---

## 📎 Weitere Informationen

Die Grundlage der Berechnungslogik basiert auf der offiziellen Verordnung:  
[§ 26 FOSchulAPrO HE – Hessenrecht](https://www.rv.hessenrecht.hessen.de/bshe/document/hevr-FOSchulAPrOHEV3P26)

---

## 🔧 Entwicklung

### Build-Prozess
1. Repository klonen
2. `npm install --verbose --insecure` ausführen
3. `npm start` für Entwicklungsumgebung
4. `npm run dist` für Build

Die App kann ohne spezielle Zertifikate oder Profile gebaut und ausgeführt werden. Die in der `package.json` referenzierten Signing-Dateien werden nur für die Veröffentlichung im Mac App Store benötigt und sind nicht im Repository enthalten.

---

> Feedback, Pull Requests oder Verbesserungsvorschläge sind willkommen!
