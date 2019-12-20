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

export function detachWallpaperWindow () {
  sendWallpaperCmd('detach')
}

export function attachWallpaperWindow () {
  sendWallpaperCmd('attach')
}

export function WallpaperWindowOpenDevTools () {
  sendWallpaperCmd('dev')
}
