<template>
  <div className="app-area">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.splash-view {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
}

.app-area {
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
