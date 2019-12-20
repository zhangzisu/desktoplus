<template>
  <div class="container">
    <b-button @click="closeWp">Close wallpaper</b-button>
    <b-button @click="detachWp">Detach wallpaper</b-button>
    <b-button @click="attachWp">Attach wallpaper</b-button>
    <b-button @click="openDev">Open DevTools</b-button>
  </div>
</template>

<script>
import { closeWallpaperWindow, detachWallpaperWindow, attachWallpaperWindow, WallpaperWindowOpenDevTools } from '@/pages/main/ipc'

export default {
  name: 'Home',
  methods: {
    closeWp () {
      closeWallpaperWindow()
    },
    detachWp () {
      detachWallpaperWindow()
    },
    attachWp () {
      attachWallpaperWindow()
    },
    openDev () {
      WallpaperWindowOpenDevTools()
    }
  }
}
</script>
