'use strict'
/* eslint-disable no-new */
/* global chrome, QRCode */

chrome.tabs.getSelected(null, tab => {
  const { url } = tab
  const formattedUrl = url
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/[\W_]+/g, ' ')
    .replace(/ /g, '-')
    .replace(/-$/, '')
    .toLowerCase()

  const chatNgenLink = `https://chatngen.com/#/${formattedUrl}`

  const genQr = () => {
    document.getElementById('qrLink').href = chatNgenLink

    new QRCode('qrcode', {
      text: chatNgenLink,
      width: 296,
      height: 296,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.L
    })
  }

  const loadQr = () => {
    genQr()
    window.removeEventListener('load', loadQr, false)
  }

  document.readyState === 'complete'
    ? genQr()
    : window.addEventListener('load', loadQr)
})
