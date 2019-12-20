<template>
  <div class="container">
    <b-button @click="closeWp">Close wallpaper</b-button>
    <b-button @click="detachWp">Detach wallpaper</b-button>
    <b-button @click="attachWp">Attach wallpaper</b-button>
  </div>
</template>

<script>
import { closeWallpaperWindow, detachWallpaperWindow, attachWallpaperWindow } from '@/pages/main/ipc'

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
    }
  }
}
</script>
