<template>
  <v-layout style="background:#ff4800" justify-center align-center fill-height>
    <div>
      <v-layout column align-center>
        <router-link to="/lobby">
          <v-img
            src="logo.svg"
            width="350"
            height="64"
          />
        </router-link>
        <router-link to="/lobby">
          <v-img class="mt-4" width="350" height="260" src="dudes.svg" />
        </router-link>
        <v-layout style="width:100%" class="mt-2">
          <v-text-field
            @keyup.enter.native="joinRoom"
            ref="roomInput"
            color="white"
            label="Which room do you want to enter?"
            placeholder="Lobby"
            v-model="room"
            dark
            hide-details
          />
          <v-btn @click="joinRoom" class="mb-0 mr-0" large icon dark>
            <v-icon large>meeting_room</v-icon>
          </v-btn>
        </v-layout>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      room: null
    }
  },
  methods: {
    joinRoom() {
      const formattedRoom = this.room || 'lobby'
        .replace(/^https?:\/\//, '')
        .replace(/[\W_]+/g, ' ')
        .replace(/ /g, '-')
        .replace(/-$/, '')
        .toLowerCase()
      this.$router.push(formattedRoom)
      this.room = null
    }
  },
  mounted() {
    this.$refs.roomInput.focus()
  }
}
</script>
