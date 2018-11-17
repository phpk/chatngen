<template>
  <v-app>
    <titlebar v-if="$route.params.room">
      <div class="titleLeft headline text-uppercase" slot="left">
        <v-flex v-if="$vuetify.breakpoint.smAndUp">
          <router-link to="/">
            <span>chat</span>
            <span class="font-weight-light">NGEN</span>
          </router-link>
        </v-flex>
        <v-flex v-else>
          <v-img
            src="/favicon.svg"
            width="32"
            height="32"
          />
        </v-flex>
      </div>
      <div class="titleRight" slot="right">
        <v-flex class="peerId">
          <v-text-field
            :placeholder="identity.peerId"
            v-model="identity.nickname"
            prepend-icon="alternate_email"
            solo
            flat
            hide-details
          />
        </v-flex>
      </div>
    </titlebar>
    <titlebar color="#ea4200" v-else>
      <div slot="right">
        <v-btn href="https://github.com/rtbz/chatngen/raw/master/extension/browser-extensions.zip" class="downloadLink transparent text--white" flat dark>Download Extension</v-btn>
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
      identity: {
        peerId: null,
        nickname: null
      }
    }
  },
  methods: {
    incoming(payload) {
      const { from: peerId, data: dataBuffer } = payload
      try {
        const { nickname, msg } = JSON.parse(dataBuffer.toString())
        EventBus.$emit('incoming', JSON.stringify({ peerId, nickname, msg }))
      } catch (err) {
        console.error(err)
      }
    },
    publish(msg) {
      this.node.pubsub.publish(
        this.room,
        Buffer.from(JSON.stringify({ nickname: this.identity.nickname, msg })),
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

    this.node.pubsub.subscribe(this.room, data => {
      this.incoming(data)
    })

    EventBus.$on('send', msg => this.publish(msg))

    window.setInterval(() => this.heartBeat, 10 * 1000)
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
.downloadLink > .v-btn__content { color: white !important }
</style>

<style scoped>
.titleRight >>> .peerId {
  font-family: monospace;
}
</style>
