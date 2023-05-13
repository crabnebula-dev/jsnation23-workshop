const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    newWindow: () => ipcRenderer.send('new-window')
})