<template>
  <v-toolbar dense flat app>
    <v-toolbar-title>
      <slot name="left" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="right" />
  </v-toolbar>
</template>

<script>
export default {}
</script>

<style>
</style>
