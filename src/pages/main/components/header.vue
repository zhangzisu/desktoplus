<template>
  <div class="header" style="-webkit-app-region: drag">
    <div class="title">
      DesktoPlus
    </div>
    <div class="item" style="-webkit-app-region: no-drag" @click="dev">
      <b-icon icon="settings" type="is-white" />
    </div>
    <div class="item" style="-webkit-app-region: no-drag" @click="minimize">
      <b-icon icon="minus" type="is-white" />
    </div>
    <div class="item" style="-webkit-app-region: no-drag" @click="maximize">
      <b-icon icon="plus" type="is-white" />
    </div>
    <div class="item close" style="-webkit-app-region: no-drag" @click="close">
      <b-icon icon="close" type="is-white" />
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
  user-select: none;
}
.item {
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  transition: 0.3s;
}
.item:hover {
  background: rgba(0, 0, 0, 0.5);
}
.close:hover {
  background: rgba(192, 57, 43, 0.5);
}
.item:active {
  background: rgba(0, 0, 0, 1);
  transform: scale(0.96);
}
.title {
  flex-grow: 1;
  margin: 0 !important;
  text-align: center;
  font-size: 16px;
  color: white;
}
</style>
