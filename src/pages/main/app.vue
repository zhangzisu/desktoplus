<template>
  <div>
    <z-header/>
  </div>
</template>

<script>
import ZHeader from '@/pages/main/components/header.vue'

export default {
  components: {
    ZHeader
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
