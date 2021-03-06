<template>
  <v-app>
    <titlebar color="#ea4200" v-if="$route.params.room">
      <div class="titleLeft headline text-uppercase white--text" slot="left">
        <v-flex v-if="$vuetify.breakpoint.smAndUp">
          <router-link to="/">
            <v-img
              src="logo.svg"
              width="174"
              height="32"
            />
          </router-link>
        </v-flex>
        <v-flex v-else>
          <v-img
            src="favicon-white.svg"
            width="32"
            height="32"
          />
        </v-flex>
      </div>
      <div class="titleRight" slot="right">
        <v-flex class="peerId">
          <v-text-field
            placeholder="Enter Nickname"
            @change="$store.commit('merge', { id: { nickname: arguments[0] } })"
            :value="$store.state.id.nickname"
            class="transparent"
            color="white"
            prepend-icon="alternate_email"
            solo
            flat
            dark
            hide-details
          />
        </v-flex>
      </div>
    </titlebar>
    <titlebar color="#ea4200" v-else>
      <div slot="right">
        <v-btn href="https://github.com/rtbz/chatngen/raw/master/extension/browser-extensions.zip" class="downloadLink transparent text--white" flat dark>
          Get Extension
          <v-icon class="ml-2">cloud_download</v-icon>
        </v-btn>
      </div>
    </titlebar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import ipfsConfig from '@/config/ipfs'
import { startIpfs } from '@/utils/ipfs'
import Titlebar from '@/components/Titlebar'
import { EventBus } from '@/plugins/events'

export default {
  components: {
    Titlebar
  },
  data() {
    return {
      node: null,
      room: null,
      currentRoom: null,
      newMessages: 0,
      isActive: true,
      identity: {
        peerId: null
      }
    }
  },
  methods: {
    incoming(payload) {
      const { from: peerId, data: dataBuffer } = payload
      try {
        const { nickname, msg } = JSON.parse(dataBuffer.toString())
        EventBus.$emit('incoming', JSON.stringify({ peerId, nickname, msg }))

        if (msg && !this.isActive) this.newMessages += 1

        if (this.newMessages)
          document.title = `chatNGEN: ${this.newMessages} New`
      } catch (err) {
        console.error(err)
      }
    },
    changeRoom(room) {
      if (this.currentRoom)
        this.node.pubsub.unsubscribe(`chatngen-${this.currentRoom}`)
      this.node.pubsub.subscribe(`chatngen-${room}`, data => {
        this.incoming(data)
      })
      this.currentRoom = room
    },
    publish(msg) {
      this.node.pubsub.publish(
        `chatngen-${this.room}`,
        Buffer.from(
          JSON.stringify({
            nickname: this.$store.state.id.nickname,
            msg
          })
        ),
        err => {
          if (err) console.error(err)
        }
      )
    },
    heartBeat() {
      this.publish(null)
    }
  },
  mounted: async function() {
    this.room = this.$route.params.room

    const { node, identity } = await startIpfs(ipfsConfig)
    this.node = node
    this.identity.peerId = identity.id

    EventBus.$on('send', msg => this.publish(msg))

    this.changeRoom(this.room)

    window.setInterval(() => this.heartBeat(), 10 * 1000)
    window.addEventListener('focus', () => {
      this.isActive = true
      this.newMessages = 0

      document.title = 'chatNGEN'
    })
    window.addEventListener('blur', () => {
      this.isActive = false
    })
  },
  watch: {
    '$route.params.room': function(room) {
      this.changeRoom(room)
    }
  }
}
</script>

<style>
a {
  color: inherit !important;
  text-decoration: none;
}
.mono {
  font-family: 'monospace';
}
.downloadLink > .v-btn__content {
  color: white !important;
}
</style>

<style scoped>
.titleRight >>> .v-input__slot {
  background: transparent;
}
.titleRight >>> .peerId {
  font-family: monospace;
}
</style>
