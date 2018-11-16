<template>
  <v-app>
    <titlebar>
      <div class="titleLeft headline text-uppercase" slot="left">
        <span>chat</span>
        <span class="font-weight-light">NGEN</span>
      </div>
      <div class="titleRight" slot="right">
        <v-flex v-if="$vuetify.breakpoint.smAndUp" class="peerId">
          <v-text-field
            placeholder="Nickname"
            v-model="identity.nickname"
            solo
            flat
            hide-details
          />
        </v-flex>
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

export default {
  components: {
    Titlebar
  },
  data() {
    return {
      ipfs: {
        node: null
      },
      identity: {
        peerId: null,
        nickname: null
      }
    }
  },
  mounted: async function() {
    const { node, identity } = await startIpfs(ipfsConfig)
    this.node = node
    this.identity.peerId = identity.id


  }
}
</script>

<style scoped>
.titleRight >>> .peerId {
  font-family: monospace
}
</style>

