import { ipcRenderer, remote } from 'electron'

const win = remote.getCurrentWindow()

ipcRenderer.on('close', () => {
  win.close()
})
