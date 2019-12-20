import { ipcRenderer } from 'electron'

/**
 *
 * @param {string} channel
 * @param  {any[]} args
 */
function sendWallpaperCmd (channel, ...args) {
  ipcRenderer.send('wallpaper-cmd', channel, ...args)
}

export function closeWallpaperWindow () {
  sendWallpaperCmd('close')
}
