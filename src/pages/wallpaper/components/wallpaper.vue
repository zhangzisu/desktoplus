<template>
  <div class="wallpaper" :style="style">
    <div class="wallpaper-detail">
      {{ copyright }}
      <b-progress size="is-large" :value="timer" :show-value="false" />
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Wallpaper',
  data: () => ({
    img: '',
    copyright: '',
    style: {},
    interval: null,
    timer: 50
  }),
  mounted () {
    this.loadImg()
  },
  methods: {
    loadImg () {
      const id = Math.floor(Math.random() * 8)
      fetch(`https://bing.biturl.top/?resolution=1920&format=json&index=${id}&mkt=en-US`)
        .then(res => res.json())
        .then(res => {
          this.style.backgroundImage = `url('${res.url}')`
          this.copyright = res.copyright
          this.timer = 0
          anime({
            targets: this,
            timer: 100,
            duration: 60000,
            easing: 'easeInQuad',
            complete: () => {
              this.timer = undefined
              this.loadImg()
            }
          })
        })
    }
  }
}
</script>

<style scoped>
.wallpaper {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  transition: 1s;
}
.wallpaper-detail {
  position: absolute;
  z-index: -1;
  bottom: 48px;
  right: 12px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1rem;
  width: 30rem;
}
</style>
