<template>
  <div class="app-g-footer">ⓒ {{ new Date().getFullYear() }} Turaco</div>
</template>
<script>
  export default {
    name: 'BaseFooter'
  }
</script>
<style scoped lang="scss">
  .app-g-footer {
    font-size: 11px;
    color: var(--gray6);
    padding: 20px 0 10px;
    line-height: 13px;
  }
</style>
