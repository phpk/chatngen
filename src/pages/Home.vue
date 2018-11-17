<template>
  <v-layout style="background:#ff4800" justify-center align-center fill-height>
    <div>
      <v-layout column>
        <v-img
          src="/logo.svg"
          width="600"
          height="110"
        />
        <v-layout class="mt-3" >
          <v-text-field
            @keyup.enter.native="joinRoom"
            label="What Room?"
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
      this.$router.push(this.room)
      this.room = null
    }
  },
  mounted() {
    new window.QRCode(document.getElementById('qrcode'), {
      text: 'test',
      width: 128,
      height: 128,
      colorDark: '#fff',
      colorLight: 'transparent',
      correctLevel: window.QRCode.CorrectLevel.H
    })
  }
}
</script>
