<template>
  <q-header elevated class="bg-blue-grey-8">
    <q-toolbar>
      <q-toolbar-title>Turaco Board</q-toolbar-title>
      <q-btn
          style="background: transparent;"
          flat
          router
          :to="{ name: 'Login' }"
      >
        <span>Logout</span>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
</script>
<style lang="scss" scoped>
</style>
