<template>
  <div>
    <z-header/>
    <main>
    </main>
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
main {
  position: absolute;
  top: 32px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.5);
  overflow-y: scroll;
}
.test {
  width: 100px;
  height: 2000px;
}
</style>
