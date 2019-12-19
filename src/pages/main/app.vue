<template>
  <div>
  </div>
</template>

<script>
import { remote } from 'electron'

export default {
  mounted () {
    remote.getCurrentWindow().webContents.openDevTools()
  }
}
</script>

<style>
#app {
  margin: 5px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
