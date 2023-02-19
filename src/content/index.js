function setInnerText(element, content) {
  if (typeof element.innerText === 'string') {
    element.innerText = content
  } else {
    element.textContent = content
  }
}
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
          // const node = document.createElement('div')
          // node.className = 'admin-info'
          // node.style.position = 'fixed'
          // node.style.top = '0'
          // node.style.width = '100%'
          // node.style.background = 'white'
          // node.style.height = '100px'
          // node.style.zIndex = '9999'
          // node.innerHTML = JSON.stringify(res.data.list[0])

          var theadDatas = [
            '国家',
            '创建时间',
            '邮箱',
            '昵称',
            '电话号码',
            '会员',
            '注册设备',
            '注册来源',
            '注册方式',
            'uid',
          ]
          // tbody数据
          var tbodyDatas = res.data && res.data.list
          const gs = document.querySelector('.Bu')
          console.log(tbodyDatas)
          // 创建table
          var table = document.createElement('table')
          table.border = '1px'
          table.style.textAlign = 'center'
          // document.body.appendChild(table)
          gs.appendChild(table)
          table.className = 'admin-info'
          table.style.position = 'absolute'
          table.style.top = '0'
          table.style.width = '100%'
          table.style.background = 'white'
          table.style.height = '100px'
          table.style.zIndex = '9999'
          table.style.opacity = '0.75'
          table.style.transition = 'opacity 1s;'
          // 创建thead
          var thead = document.createElement('thead')
          table.appendChild(thead)

          // 创建thead中的tr
          var tr = document.createElement('tr')
          tr.style.height = '40px'
          tr.style.backgroundColor = 'lightblue'
          thead.appendChild(tr)
          // 创建thead中的th
          for (var i = 0; i < theadDatas.length; i++) {
            var th = document.createElement('th')
            th.style.padding = '5px 20px'
            // th.innerText = theadDatas[i];
            // 使用common.js中的innerText兼容性处理函数
            setInnerText(th, theadDatas[i])
            tr.appendChild(th)
          }
          // 创建tbody
          var tbody = document.createElement('tbody')
          table.appendChild(tbody)
          table.addEventListener('click', () => {
            table.style.opacity = '0'
            setTimeout(() => {
              table.style.display = 'none'
            }, 1000)
          })
          // 创建tbody中的tr td
          for (var i = 0; i < tbodyDatas.length; i++) {
            // 创建tbody中的tr
            tr = document.createElement('tr')
            tbody.appendChild(tr)
            // 创建tbody中的td
            var tdData = tbodyDatas[i]
            for (var key in tdData) {
              if (key !== 'headerImg') {
                var td = document.createElement('td')
                setInnerText(td, tdData[key])
                tr.appendChild(td)
              }
            }
            // 创建td中的删除链接
            td = document.createElement('td')
            tr.appendChild(td)
            var link = document.createElement('a')
            link.href = 'javascript:void(0)'
            setInnerText(link, '删除')
            td.appendChild(link)
            link.onclick = removeTr
          }
          // link点击事件
          function removeTr() {
            // 找到要删除的行
            tr = this.parentNode.parentNode
            tbody.removeChild(tr)
            // this.parentNode.parentNode.remove(); // 浏览器兼容性问题
            return false
          }
        },
      )
    }, 1000)
  })
} else {
  afterWindowLoaded()
}

function afterWindowLoaded() {
  //Everything that needs to happen after the window is fully loaded.
}
