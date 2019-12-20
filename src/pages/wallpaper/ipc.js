import { ipcRenderer, remote } from 'electron'
import { detachWindow, attachWindow } from 'electron-wallpaper-napi'

const win = remote.getCurrentWindow()

ipcRenderer.on('close', () => {
  win.close()
})

ipcRenderer.on('detach', () => {
  detachWindow(win)
})

ipcRenderer.on('attach', () => {
  attachWindow(win)
})

ipcRenderer.on('dev', () => {
  win.webContents.openDevTools()
})
