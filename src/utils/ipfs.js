export const startIpfs = config =>
  new Promise((resolve, reject) => {
    const node = new window.Ipfs(config)
    node.on('ready', () => {
      node.id((err, identity) => {
        if (err) return reject(err)
        resolve({ node, identity })
      })
    })
  })
