// @ts-check
'use strict'

import { BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { setBlurBehind } from 'electron-wallpaper-napi'

/** @type {BrowserWindow} */
let win

export function createMainWindow() {
  if (win) return

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
    frame: false
  })

  setBlurBehind(win, 0x14800020)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'index.html')
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}

export function closeMainWindow() {
  if (!win) return
  win.close()
}