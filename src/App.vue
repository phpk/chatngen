<template>
  <v-app>
    <titlebar>
      <div class="headline text-uppercase" slot="left">
        <span>Title</span>
        <span class="font-weight-light">Bar</span>
      </div>
      <div slot="right">
        <v-btn flat>App</v-btn>
      </div>
    </titlebar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Titlebar from '@/components/Titlebar'

export default {
  components: {
    Titlebar
  }
}
</script>
