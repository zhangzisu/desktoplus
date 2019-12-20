<template>
  <div class="container">
    <b-button @click="closeWp">Close wallpaper</b-button>
  </div>
</template>

<script>
import { closeWallpaperWindow } from '@/pages/main/rpc'

export default {
  name: 'Home',
  methods: {
    closeWp () {
      closeWallpaperWindow()
    }
  }
}
</script>
