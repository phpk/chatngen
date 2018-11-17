<template>
  <v-toolbar :color="color" dense flat app>
    <v-toolbar-title>
      <slot name="left" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="right" />
  </v-toolbar>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style>
</style>
