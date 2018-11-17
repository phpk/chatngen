'use strict'

/* eslint-disable no-new */
/* global chrome, QRCode */

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.getSelected(null, tab => {
    const { url } = tab
    const formattedUrl = url
      .replace(/^https?:\/\//, '')
      .replace(/[\W_]+/g, ' ')
      .replace(/ /g, '-')
      .replace(/-$/, '')
      .toLowerCase()

    const chatNgenLink = `https://chatngen.com/#/${formattedUrl}`

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
