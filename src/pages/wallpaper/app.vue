<template>
  <div class="main">
    <div class="clock">
      {{ time }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    time: '',
    timeout: null
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
.main {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.clock {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 10em;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(255, 255, 255, 0.7);
}
</style>