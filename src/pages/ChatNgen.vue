<template>
  <v-layout class="grey lighten-2" fill-height column>
    <v-layout class="red">
      cooool
    </v-layout>
    <div class="white">
      <v-layout>
        <v-text-field
          placeholder="Message"
          solo
          flat
          hide-details
        />
        <v-btn icon>
          <v-icon color="text--grey">chat</v-icon>
        </v-btn>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'ChatNgen',
  components: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>
