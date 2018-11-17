'use strict'
/* eslint-disable no-new */
/* global browser */

browser.tabs.query({ currentWindow: true, active: true }).then(res => {
  const [tab] = res
  const { url } = tab
  const formattedUrl = url
    .replace(/[\W_]+/g, ' ')
    .replace(/ /g, '-')
    .replace(/-$/, '')

  const chatNgenLink = `https://chatngen.com/#/${formattedUrl}`

  window.addEventListener('load', () => {
    document.getElementById('qrLink').href = chatNgenLink

    new window.QRCode('qrcode', {
      text: chatNgenLink,
      width: 296,
      height: 296,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.L
    })
  })
})
