<template>
  <div>
    <z-header />
    <main>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </nav>
      <section class="section">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </section>
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
.navbar {
  min-height: 3.25rem;
  align-items: stretch;
  display: flex;
}
.navbar-item, .navbar-link {
    align-items: center;
    display: flex !important;
}
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
