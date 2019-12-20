<template>
  <div class="clock">
    {{ time }}
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data: () => ({
    time: '',
    interval: null
  }),
  mounted () {
    this.updateTime()
    this.timeout = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  beforeDestroy () {
    this.timeout && clearInterval(this.timeout)
  },
  methods: {
    updateTime () {
      const now = new Date()
      const hou = now.getHours().toString().padStart(2, '0')
      const min = now.getMinutes().toString().padStart(2, '0')
      const sec = now.getSeconds().toString().padStart(2, '0')
      this.time = `${hou}:${min}:${sec}`.toUpperCase()
    }
  }
}
</script>

<style scoped>
.clock {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 10rem;
  line-height: 7rem;
  padding-top: 0.6rem;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}
</style>
