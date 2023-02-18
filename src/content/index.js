// import { ElMessage } from 'element-plus'

if (document.readyState !== 'complete') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const sendEmailNode = document.querySelectorAll('.gD')[0]
      const emailInfo = sendEmailNode.getAttribute('email')

      console.log(emailInfo, '---emailInfo')

      // 发消息给bg
      chrome.runtime.sendMessage(
        {
          email: emailInfo,
        },
        (response) => {
          // 答复
          // alert(res)
          console.log(response, '---答复')
          let res = JSON.parse(response)
          const node = document.createElement('div')
          node.className = 'admin-info'
          node.style.position = 'fixed'
          node.style.top = '0'
          node.style.width = '100%'
          node.style.background = 'white'
          node.style.height = '100px'
          node.style.zIndex = '9999'
          node.innerHTML = JSON.stringify(res.data.list[0])

          // sendEmailNode.appendChild(node)
          document.body.appendChild(node)

          console.log(node)
          //       chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
          //         const email = req.info
          //         console.log(email)
          //         sendResponse({ status: 'ok' })

          // return true;
          //       })
        },
      )
    }, 3000)
  })
} else {
  afterWindowLoaded()
}

function afterWindowLoaded() {
  //Everything that needs to happen after the window is fully loaded.
}
