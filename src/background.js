'use strict'

import { join } from 'path'
import { app, protocol, Tray, Menu } from 'electron'
import { createMainWindow } from '@/background/main.js'
import { createWallpaperWindow } from '@/background/wallpaper.js'

/* global __static */

const isDevelopment = process.env.NODE_ENV !== 'production'

/** @type {Tray} */
let tray
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

function createTray() {
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Reload Main', click: () => { createMainWindow() } },
    { label: 'Reload Wallpaper', click: () => { createWallpaperWindow() } },
    { label: 'Quit', click: () => { app.quit() } }
  ])
  tray = new Tray(join(__static, 'favicon.ico'))
  tray.setContextMenu(contextMenu)
  tray.on('double-click', () => {
    createMainWindow()
  })
}

if (app.requestSingleInstanceLock()) {
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    createMainWindow()
  })

  app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
      try {
        // await installVueDevtools()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Vue Devtools failed to install:', e.toString())
      }
    }
    createWallpaperWindow()
    createMainWindow()
    createTray()
  })

  if (isDevelopment) {
    if (process.platform === 'win32') {
      process.on('message', data => {
        if (data === 'graceful-exit') {
          app.quit()
        }
      })
    } else {
      process.on('SIGTERM', () => {
        app.quit()
      })
    }
  }
} else {
  app.exit()
}
