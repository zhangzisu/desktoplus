<template>
  <div class="wallpaper" :style="style">
    <div class="wallpaper-detail">
      {{ copyright }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallpaper',
  data: () => ({
    img: '',
    copyright: '',
    style: {},
    interval: null
  }),
  mounted () {
    this.loadImg()
    this.interval = setInterval(() => {
      this.loadImg()
    }, 5 * 1000)
  },
  beforeDestroy () {
    this.interval && clearInterval(this.interval)
  },
  methods: {
    loadImg () {
      const id = Math.floor(Math.random() * 8)
      fetch(`https://bing.biturl.top/?resolution=1920&format=json&index=${id}&mkt=en-US`)
        .then(res => res.json())
        .then(res => {
          this.style.backgroundImage = `url('${res.url}')`
          this.copyright = res.copyright
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
}
</style>
