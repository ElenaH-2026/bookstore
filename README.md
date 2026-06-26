# ![Book Icon](/assets/book-icon-40px.png) Bookstore

<div align="center">
        
![Lernprojekt](https://img.shields.io/badge/Lernprojekt-Frontend-00939b?style=for-the-badge)
<img width="12" />
![Projektstatus](https://img.shields.io/badge/Projektstatus-abgeschlossen_im_März_2026-009600?style=for-the-badge)

</div>

<div align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
</div>
<img/>
<div align="center">
        
**Bookstore** ist eine interaktive Web-Applikation zur dynamischen Präsentation und Verwaltung einer vielseitigen Buchsammlung.
<br>Durch eine strukturierte JavaScript-Datenverwaltung und ein modulares Template-System werden alle Inhalte komplett dynamisch generiert und nahtlos im DOM gerendert.
<br>Nutzer können in Echtzeit interaktive Likes vergeben sowie eigene Rezensionen verfassen, die dank LocalStorage-Persistenz auch nach dem Neuladen der Seite dauerhaft erhalten bleiben.

</div>
        
![Screenshot des Bookstore](/assets/screenshot-readme.jpg)


<div align="center">
        
🌐 Live-Ansicht meines Projekts: 👉 [Bookstore](https://elenah-2026.github.io/bookstore/)

</div>

## 👩‍💻 Entwicklerin

<div align="center">

### ![Avatar Elena](/assets/elena-avatar-80px.png) Elena Hiener

</div>

<div align="center">
      
📧 Email: [hiener.elena@web.de](mailto:hiener.elena@web.de)
<img width="12" />
🔗 LinkedIn: [elena-hiener](https://de.linkedin.com/in/elena-hiener)
<img width="12" />
🐙 GitHub: [ElenaH-2026](https://github.com/ElenaH-2026)

</div>


## 📑 Inhaltsverzeichnis

⚙️ [Voraussetzungen](#️-voraussetzungen)
- 💻 [Laufzeitumgebung](#-laufzeitumgebung)
- 🎨 [Frontend-Technologien (UI)](#-frontend-technologien-ui)
- 💾 [Datenquelle / Schnittstelle](#-datenquelle--schnittstelle)

🚀 [Quickstart](#-quickstart)

🛠️ [Usage](#️-usage)
- 🗂️ [Projektstruktur](#-projektstruktur)
- 🌟 [Features](#-features)

📝 [Lizenz](#-lizenz)


## ⚙️ Voraussetzungen

### 💻 Laufzeitumgebung

*Für dieses Projekt ist keine spezielle Laufzeitumgebung erforderlich.*

### 🎨 Frontend-Technologien (UI)
<div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo"  />
</div>

| Technologie | Aufgabe |
| --- | --- |
| HTML5 | Struktur der App |
| CSS3+ | Design und die visuelle Gestaltung |
| JavaScript ES6+ | Dynamik und Interaktivität |

### 💾 Datenquelle / Schnittstelle

fiktive Bücher-Informationen --> als Objekt in scripts\books.js


## 🚀 Quickstart

1. Repository klonen:

```bash
git clone https://github.com/ElenaH-2026/bookstore.git
```

2. In das Verzeichnis wechseln:

```bash
cd bookstore
```

3. Starte deinen lokalen Entwicklungsserver:
```text
z.B. Live Server in VS Code
```

4. Öffne danach die URL im Browser auf deinem Computer:
```text
http://localhost:<live-server-port>
```

5. Oder öffne die URL im Browser auf deiner virtuellen Maschine:
```text
http://<deine_ip>:<live-server-port>
```


## 🛠️ Usage

### 📁 Projektstruktur

```text
.
│   .gitignore
│   README.md
│   LICENSE.md
│   index.html
│   script.js
│   style.css
│   
├───assets/
│                 
└───scripts/
        templates.js
        books.js
```

### 🌟 Features

| Feature | Zusatzinformation |
| --- | --- |
| 🎨 Modulares Template-System | *Saubere Trennung von HTML-Struktur (via JS-Templates) und Daten-Arrays für ein strukturiertes Befüllen der UI* |
| 📝 Strukturierte Datenverwaltung | *Einsatz von verschachtelten JavaScript-Objekten zur sauberen Organisation von Buchtiteln, Preisen, Autoren, Likes und Kommentaren* |
| 📚 Dynamisches DOM-Rendering | *Bücher und deren Details werden komplett über JavaScript aus einer Array-Objektstruktur generiert und im DOM platziert* |
| ❤️ Interaktives Like-System | *Klick auf das Herz-Icon erhöht den Like-Zähler des jeweiligen Buches dynamisch und aktualisiert die Anzeige live* |
| 💬 Live-Kommentarfunktion | *Nutzer können Rezensionen (Text und optional Name) verfassen, die direkt in das Daten-Array des Buches gepusht und sofort gerendert werden* |
| 🧹 Formular-Reset | *Eingabefelder für Kommentare werden nach dem erfolgreichen Absenden automatisch geleert* |
| 💾 LocalStorage-Persistenz | *Abgegebene Likes und Kommentare gehen beim Neuladen der Seite nicht verloren, sondern werden im Browser zwischengespeichert* |
| 🛠️ Event-Driven UI | *Benutzerinteraktionen (Clicks, Inputs) lösen gezielte Funktionen aus, ohne dass die gesamte Seite neu geladen werden muss* |



## 📝 Lizenz

> [!NOTE] 
> Dieses Projekt ist ein reines Übungsprojekt und ist zu Lernzwecken im Zuge meiner Weiterbildung bei der [Developer Akademie](https://developerakademie.com) entstanden.
> <br>Die fiktiven Bücherinformationen wurden von der Developer Akademie zur Verfügung gestellt.

> [!IMPORTANT]
> Details zur Lizenz findest du in der [LICENSE.md](https://github.com/ElenaH-2026/bookstore?tab=License-1-ov-file).
