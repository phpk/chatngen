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
      <v-layout justify-center>
        <v-btn
          @click="showLink = !showLink"
          class="transparent"
          color="white"
          flat
        >
          {{ showLink ? 'Hide' : 'Share' }}
          Link <v-icon class="ml-1">link</v-icon>
        </v-btn>
        <v-btn
          @click="showEmbedGen = !showEmbedGen"
          class="transparent"
          color="white"
          flat
        >
          {{ showEmbedGen ? 'Hide' : 'Get' }}
          Embed <v-icon class="ml-1">code</v-icon>
        </v-btn>
      </v-layout>
      <v-layout
        style="border: 2px solid #fff; border-radius: 4px"
        class="pa-4 mt-3"
        v-if="showLink"
        column
      >
        <div class="headline white--text mb-2">Share link</div>
        <v-text-field
          label="URL"
          :value="roomLink()"
          color="white"
          @focus="$event.target.setSelectionRange(0, $event.target.value.length)"
          @click="$event.target.setSelectionRange(0, $event.target.value.length)"
          readonly
          hide-details
          dark
        />
        <div class="mt-2" id="shareQr"></div>
      </v-layout>
      <v-layout
        style="border: 2px solid #fff; border-radius: 4px"
        class="pa-4 mt-3"
        v-if="showEmbedGen"
        column
      >
        <div class="headline white--text mb-2">Generate An Embed Code</div>
        <v-layout>
          <v-text-field
            label="Width"
            v-model="embed.width"
            color="white"
            class="mr-2"
            hide-details
            dark
          />
          <v-text-field
            label="Height"
            v-model="embed.height"
            class="ml-2"
            color="white"
            hide-details
            dark
          />
        </v-layout>
        <v-textarea
          label="Embed Code"
          prepend-inner-icon="code"
          class="mt-3 white--text mono"
          color="white"
          @focus="$event.target.setSelectionRange(0, $event.target.value.length)"
          @click="$event.target.setSelectionRange(0, $event.target.value.length)"
          :value="genEmbed()"
          readonly
          dark
          box
          hide-details
        />
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      embed: {
        defaults: {
          width: 720,
          height: 460
        },
        width: 720,
        height: 460
      },
      qrCode: null,
      showLink: false,
      showEmbedGen: false,
      room: null
    }
  },
  methods: {
    createQr() {
      this.qrCode = new window.QRCode('shareQr', {
        text: this.roomLink(),
        width: 296,
        height: 296,
        colorDark: '#ffffff',
        colorLight: 'transparent',
        correctLevel: window.QRCode.CorrectLevel.L
      })
    },
    updateQr() {
      this.qrCode.clear()
      this.qrCode.makeCode(this.roomLink())
    },
    redrawQr() {
      this.qrCode ? this.updateQr() : this.createQr()
    },
    formatRoom(room) {
      return (room || 'lobby')
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/[\W_]+/g, ' ')
        .replace(/ /g, '-')
        .replace(/-$/, '')
        .toLowerCase()
    },
    roomLink() {
      return `https://chatngen.com/#/${this.formatRoom(this.room)}`
    },
    genEmbed() {
      const w = parseInt(this.embed.width, 10) || this.embed.defaults.width
      const h = parseInt(this.embed.height, 10) || this.embed.defaults.height
      return `<iframe width="${w}" height="${h}" src="${this.roomLink()}" frameborder="0"></iframe>`
    },
    joinRoom() {
      this.$router.push(this.formatRoom(this.room))
      this.room = null
    }
  },
  mounted() {
    this.$refs.roomInput.focus()
  },
  watch: {
    room() {
      if (this.showLink) this.redrawQr()
    },
    showLink(val) {
      if (val) this.$nextTick(() => this.redrawQr())
    }
  }
}
</script>
