<template>
  <v-layout class="chatNgen grey lighten-2" fill-height column>
    <v-tabs
      v-model="tab"
      class="tabs grey darken-1"
      slider-color="#ea4200"
      dark
    >
      <v-tab><v-icon>chat</v-icon></v-tab>
      <v-tab><v-icon>people</v-icon></v-tab>
      <v-layout
        style="height:48px"
        class="font-weight-bold white--text ml-2 mr-2"
        justify-center
        align-end
        column
      >
        <div class="caption ml-2 mr-2 roomLabel" v-if="tab === 0">#{{$route.params.room}}</div>
        <div class="caption ml-2 mr-2" v-else>
          {{ peers.length || 1 }} Peer{{ peers.length > 1 ? 's' : '' }}
        </div>
      </v-layout>
      <v-tab-item>
        <v-card flat>
          <v-layout fill-height column>
            <v-layout ref="chatBox" class="chatBox" column>
              <v-spacer />
              <div v-for="(msg, idx) in messages" :key="`msg-${idx}-${lastUpdate}`">
                <v-divider />
                <div class="pa-2">
                  <v-layout column>
                    <v-layout wrap>
                      <div class="font-weight-bold">
                        @{{ msg.nickname || 'Guest' }}
                      </div>
                      <v-spacer />
                      <v-layout justify-end class="caption" style="font-size:0.75em">
                        {{ timeAgo(msg.ts) }}
                      </v-layout>
                    </v-layout>
                    <div class="mono" style="font-size:0.75em">
                      {{ msg.peerId }}
                    </div>
                  </v-layout>
                  <div>{{ msg.msg }}</div>
                </div>
              </div>
            </v-layout>
            <v-divider />
            <div>
              <v-layout>
                <v-text-field
                  placeholder="Message"
                  v-model="msg"
                  @keyup.enter.native="send"
                  ref="messageInput"
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
            <template v-for="(peer, idx) in peers">
              <v-list-tile :key="`peer-${ idx }`">
                <v-layout column>
                <div class="font-weight-bold">
                  @{{ peer.nickname || 'Guest' }}
                </div>
                <div class="caption" style="font-size:0.75em">{{ peer.peerId }}</div>
                </v-layout>
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
      tab: 0,
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
      this.peers = this.peers.filter(peer => peer.ts >= expire)
    }
  },
  mounted() {
    this.$refs.messageInput.focus()
    EventBus.$on('incoming', data => {
      const ts = Date.now()

      try {
        const { peerId, nickname, msg } = JSON.parse(data)
        this.registerPeer({ peerId, nickname, ts })
        this.updatePeer(peerId)
        if (msg) {
          this.messages.push({ ts, peerId, nickname, msg })
          this.$nextTick(() => {
            const chatBox = this.$refs.chatBox
            chatBox.scrollTop = chatBox.scrollHeight
          })
        }
      } catch (err) {
        console.error(err)
      }

      this.lastUpdate = ts
    })

    window.setInterval(() => {
      this.lastUpdate = Date.now()
      this.clearInactivePeers()
    }, 15 * 1000)
  },
  watch: {
    '$route.params.room': function(room) {
      this.messages = []
      this.peers = []
    }
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
  height: calc(100vh - 145px);
  overflow-y: scroll;
}
.chatNgen >>> .roomLabel {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: right;
}
.chatNgen >>> .v-tabs__container {
  max-width: 100vw;
}
</style>
