// @ts-check
'use strict'

import { join } from 'path'
import { BrowserWindow, screen } from 'electron'
import { attachWindow } from 'electron-wallpaper-napi'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

/* global __static */

/** @type {BrowserWindow} */
let win
/** @type {number} */
let wid

export function createWallpaperWindow () {
  closeWallpaperWindow()
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  win = new BrowserWindow({
    width,
    height,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
    frame: false,
    // @ts-ignore
    icon: join(__static, 'logo.png')
  })

  attachWindow(win)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'wallpaper.html')
  } else {
    createProtocol('app')
    win.loadURL('app://./wallpaper.html')
  }

  const id = win.id
  wid = id

  win.on('closed', () => {
    if (wid === id) win = null
  })
}

export function closeWallpaperWindow () {
  win && win.close()
}

/**
 * @param {string} channel
 * @param {any[]} args
 */
export function sendWallpaperWindow (channel, ...args) {
  win && win.webContents.send(channel, ...args)
}
