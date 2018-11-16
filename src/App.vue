<template>
  <v-app>
    <titlebar>
      <div class="headline text-uppercase" slot="left">
        <span>chat</span>
        <span class="font-weight-light">NGEN</span>
      </div>
      <div slot="right">
        <v-btn flat>Oh snap</v-btn>
      </div>
    </titlebar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Titlebar from '@/components/Titlebar'

export default {
  components: {
    Titlebar
  },
  data() {
    return {
      ipfs: {
        node: null,
        config: {
          config: {
            Addresses: {
              Swarm: [
                '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
              ]
            }
          },
          EXPERIMENTAL: {
            pubsub: true
          }
        }
      }
    }
  },
  mounted: async function() {
    this.ipfs.node = new window.Ipfs(this.ipfs.config)
    const id = await this.ipfs.id()
    console.log(id)
  }
}
</script>
