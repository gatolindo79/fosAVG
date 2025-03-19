const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1050,
    resizable: false, // alternativ: true, wenn Fenstergröße veränderbar sein soll
    icon: process.platform === 'darwin'
      ? path.join(__dirname, 'resources', 'icon.icns')
      : path.join(__dirname, 'resources', 'fosAVG_icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOS: neues Fenster öffnen, wenn keins mehr offen ist
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // macOS-typisches Verhalten: App bleibt offen, bis explizit beendet
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
