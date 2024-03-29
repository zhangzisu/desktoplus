// @ts-check
'use strict'

import { join } from 'path'
import { BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { setBlurBehind } from 'electron-wallpaper-napi'

/* global __static */

/** @type {BrowserWindow} */
let win
/** @type {number} */
let wid

export function createMainWindow () {
  closeMainWindow()

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
    frame: false,
    // @ts-ignore
    icon: join(__static, 'logo.png')
  })

  setBlurBehind(win, 0x14800020)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'index.html')
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  const id = win.id
  wid = id

  win.on('closed', () => {
    if (wid === id) win = null
  })
}

export function closeMainWindow () {
  win && win.close()
}
