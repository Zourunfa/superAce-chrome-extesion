console.info('chrome-ext template-vue-js content script')

// alert(123)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    alert(JSON.stringify(request))
    console.log(request,sender)
    var _dom = document.getElementsByClassName('data')
    var _data = [];
    for (var i = 0; i < _dom.length; i++) {
      _data.push(_dom[i].innerHTML)
    }
    sendResponse(_dom)
  
});
export { }
