<template>
  <v-layout class="chatNgen grey lighten-2" fill-height column>
    <v-tabs class="tabs grey darken-1" dark>
      <v-tab>Chat</v-tab>
      <v-tab>Peers ({{ peers.length }})</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-layout fill-height column>
            <v-layout class="chatBox" column>
              <v-spacer />
              <div v-for="(msg, idx) in messages" :key="`msg-${idx}-${lastUpdate}`">
                <div>
                  <span class="font-weight-bold" v-if="msg.nickname">
                    {{ msg.nickname }}
                  </span>
                  <span class="mono">{{ msg.peerId }}</span>
                  <span class="caption">&nbsp;({{ timeAgo(msg.ts) }})</span>
                </div>
                <div>{{ msg.msg }}</div>
                <v-divider v-if="idx < messages.length" />
              </div>
            </v-layout>
            <v-divider />
            <div>
              <v-layout>
                <v-text-field
                  placeholder="Message"
                  v-model="msg"
                  @keyup.enter.native="send"
                  solo
                  flat
                  hide-details
                />
                <v-btn @click="send" icon>
                  <v-icon color="text--grey">chat</v-icon>
                </v-btn>
              </v-layout>
            </div>
          </v-layout>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-list class="pt-0">
            <v-list-tile class="mt-0 grey darken-1 white--text">
              <span class="font-weight-bold">#{{$route.params.room}}</span>
            </v-list-tile>
            <template v-for="(peer, idx) in peers">
              <v-list-tile :key="`peer-${ idx }`">
                <span class="font-weight-bold">{{ peer.nickname }}</span>
                <span>&nbsp;({{ peer.peerId }})</span>
              </v-list-tile>
              <v-divider :key="`div-${ idx }`" />
            </template>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs> 
  </v-layout>
</template>

<script>
import { EventBus } from '@/plugins/events'
import timeago from 'timeago.js'

export default {
  name: 'ChatNgen',
  components: {},
  data() {
    return {
      msg: null,
      messages: [],
      peers: [],
      lastUpdate: Date.now()
    }
  },
  methods: {
    send() {
      EventBus.$emit('send', this.msg)
      this.msg = null
    },
    timeAgo(ts) {
      return timeago().format(ts)
    },
    registerPeer(peerObj) {
      const peerExists = this.peers.filter(
        peer => peer.peerId === peerObj.peerId
      ).length
      if (!peerExists) this.peers.push(peerObj)
    },
    updatePeer(peerId) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].peerId === peerId) this.peers[i].ts = Date.now()
      }
    },
    clearInactivePeers() {
      const expire = Date.now() - 30 * 1000
      this.peers = this.peers.filter(peer => peer.ts <= expire)
    }
  },
  mounted() {
    EventBus.$on('incoming', data => {
      const ts = Date.now()

      try {
        const { peerId, nickname, msg } = JSON.parse(data)
        this.registerPeer({ peerId, nickname, ts })
        this.updatePeer(peerId)
        if (msg) this.messages.push({ ts, peerId, nickname, msg })
      } catch (err) {
        console.error(err)
      }

      this.lastUpdate = ts
    })

    window.setInterval(() => {
      this.lastUpdate = Date.now()
      this.clearInactivePeers()
    }, 15 * 1000)
  }
}
</script>

<style scoped>
.chatNgen >>> .tabs,
.chatNgen >>> .v-window,
.chatNgen >>> .v-window__container,
.chatNgen >>> .v-window-item,
.chatNgen >>> .v-card {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.chatNgen >>> .v-window {
  height: 100%;
}
.chatNgen >>> .chatBox {
  overflow-y: scroll;
}
</style>
