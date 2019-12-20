// @ts-check
'use strict'

import { BrowserWindow, screen } from 'electron'
import { attachWindow } from 'electron-wallpaper-napi'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

/** @type {BrowserWindow} */
let win

export function createWallpaperWindow() {
  win && win.close()
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  win = new BrowserWindow({
    width,
    height,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
    frame: false
  })

  attachWindow(win)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'wallpaper.html')
  } else {
    createProtocol('app')
    win.loadURL('app://./wallpaper.html')
  }

  win.on('closed', () => {
    win = null
  })
}

export function closeWallpaperWindow() {
  if (!win) return
  win.close()
}