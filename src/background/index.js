console.info('chrome-ext template-vue-js background script')

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  const email = req.email
  console.log(email)
  let options = {
    method: 'POST', //post请求
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      page: 1,
      pageSize: 10,
      email: 'sung@fastmail.com',
    }),
  }
  fetch('https://admin.updf.cn/api/updf/user/getUserList', options)
    .then((response) => response.text())
    .then((text) => {
      sendResponse(text)
      // sendResponse({ frame: 'ok' })
      console.log(text, '--text')
      return true
    })
    .catch((error) => {
      console.log(error)
    })

  // sendResponse({ frame: 'ok' })
  // // console.log(text, '--text')
  return true

  // bg---->content
  // chrome.tabs.query(
  //   {
  //     active: true,
  //     currentWindow: true,
  //   },
  //   (tabs) => {
  //     let message = {
  //       //这里的内容就是发送至content-script的内容
  //       info: '收到吗',
  //     }
  //     console.log(tabs, '---tab')
  //     chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
  //       console.log('bg=>content')
  //       console.log(res)
  //     })
  //   },
  // )
})
