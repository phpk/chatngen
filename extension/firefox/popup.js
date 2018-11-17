'use strict'
/* eslint-disable no-new */
/* global browser, QRCode */

browser.tabs.query({ currentWindow: true, active: true }).then(res => {
  const [tab] = res
  const { url } = tab
  const formattedUrl = url
    .replace(/^https?:\/\//, '')
    .replace(/[\W_]+/g, ' ')
    .replace(/ /g, '-')
    .replace(/-$/, '')
    .toLowerCase()

  const chatNgenLink = `https://chatngen.com/#/${formattedUrl}`

  window.addEventListener('load', () => {
    document.getElementById('qrLink').href = chatNgenLink

    new QRCode('qrcode', {
      text: chatNgenLink,
      width: 296,
      height: 296,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.L
    })
  })
})
