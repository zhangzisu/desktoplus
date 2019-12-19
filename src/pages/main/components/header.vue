<template>
  <div class="header" style="-webkit-app-region: drag">
    <div @click="dev" class="item" style="-webkit-app-region: no-drag">
      <b-icon icon="settings" size="32px" type="is-white"/>
    </div>
    <div @click="minimize" class="item" style="-webkit-app-region: no-drag">
      <b-icon icon="minus" size="32px" type="is-white"/>
    </div>
    <div @click="maximize" class="item" style="-webkit-app-region: no-drag">
      <b-icon icon="plus" size="32px" type="is-white"/>
    </div>
    <div @click="close" class="item" style="-webkit-app-region: no-drag">
      <b-icon icon="close" size="32px" type="is-white"/>
    </div>
  </div>
</template>

<script>
import { remote } from 'electron'

export default {
  name: 'Header',
  methods: {
    dev () {
      remote.getCurrentWindow().webContents.openDevTools()
    },
    minimize () {
      remote.getCurrentWindow().minimize()
    },
    maximize () {
      const win = remote.getCurrentWindow()
      if (win.isMaximized()) {
        win.restore()
      } else {
        win.maximize()
      }
    },
    close () {
      remote.getCurrentWindow().close()
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0,0,0,0.3);
}
.item {
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  transition: 0.3s;
}
.item:hover {
  background: rgba(0,0,0,0.5);
}
</style>