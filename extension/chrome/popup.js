'use strict'

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.getSelected(null, tab =>{
    const { url } = tab
    const urlHash = sjcl.codec.hex.fromBits(
      sjcl.hash.sha256.hash(
        url.replace(/(^\w+:|^)\/\//, '')
          .replace(/\/$/, '')
      )
    )
    
    const chatNgenLink = `http://192.168.0.200:8081/${urlHash}`

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

