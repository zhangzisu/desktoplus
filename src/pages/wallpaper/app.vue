<template>
  <div class="main">
    <wallpaper />
    <clock />
  </div>
</template>

<script>
import Wallpaper from '@/pages/wallpaper/components/wallpaper.vue'
import Clock from '@/pages/wallpaper/components/clock.vue'

export default {
  name: 'App',
  components: {
    Wallpaper,
    Clock
  }
}
</script>

<style scoped>
.main {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
