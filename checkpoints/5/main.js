const { app, BrowserWindow, ipcMain, protocol } = require('electron')
const path = require('path')
const url = require('url')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, allowServiceWorkers: true, stream: true, } }
])

app.whenReady().then(() => {
  ipcMain.on('new-window', () => {
    createWindow()
  })

  protocol.registerFileProtocol('app', (request, callback) => {
    const filePath = url.fileURLToPath('file://' + request.url.slice('app://'.length))
    callback(filePath)
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})