'use strict'

/* eslint-disable no-new */
/* global chrome */

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.getSelected(null, tab => {
    const { url } = tab
    const formattedUrl = url
      .replace(/[\W_]+/g, ' ')
      .replace(/ /g, '-')
      .replace(/-$/, '')

    const chatNgenLink = `https://chatngen.com/#/${formattedUrl}`

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
