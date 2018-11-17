browser.tabs.query({currentWindow: true, active: true}).then(res => {
  const [ tab ] = res
  const { url } = tab
  const urlHash = sjcl.codec.hex.fromBits(
    sjcl.hash.sha256.hash(
      url.replace(/(^\w+:|^)\/\//, '')
        .replace(/\/$/, '')
    )
  )
  
  const chatNgenLink = `http://192.168.0.200:8081/${urlHash}`

  window.addEventListener('load', function () {
    document.getElementById('qrLink').href = chatNgenLink

    new QRCode('qrcode', {
      text: chatNgenLink,
      width: 296,
      height: 296,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.L
    })
  })
})