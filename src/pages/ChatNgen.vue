<template>
  <v-layout class="chatNgen grey lighten-2" fill-height column>
    <v-layout class="chatBox" column>
      <v-spacer />
      <div v-for="(msg, idx) in messages" :key="`msg-${idx}`">
        <div>
          <span class="font-weight-bold" v-if="msg.nickname">
            {{ msg.nickname }}
          </span>
          <span class="mono">{{ msg.peerId }}</span>
        </div>
        <div>{{ msg.msg }}</div>
        <v-divider />
      </div>
    </v-layout>
    <div class="white">
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
</template>

<script>
import { EventBus } from '@/plugins/events'

export default {
  name: 'ChatNgen',
  components: {},
  data() {
    return {
      msg: null,
      messages: []
    }
  },
  methods: {
    send() {
      EventBus.$emit('send', this.msg)
      this.msg = null
    }
  },
  mounted() {
    EventBus.$on('incoming', data => {
      try {
        const { peerId, nickname, msg } = JSON.parse(data)
        this.messages.push({ ts: Date.now(), peerId, nickname, msg })
      } catch (err) {
        console.error(err)
      }
    })
  }
}
</script>

<style scoped>
.chatNgen >>> .chatBox {
  overflow-y: scroll;
}
.mono {
  font-family: 'monospace';
}
</style>
