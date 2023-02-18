console.info('chrome-ext template-vue-js background script')


chrome.contextMenus.create({
  id: "wikid",
  contexts: ["selection"],
  title: "Search '%s' on Wikipedia",
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {

  if (info.menuItemId == "wikid") {
    console.info(info,'----info')
    console.log("Attempting to search for " + info.selectionText + "...");
    const formattedWord = info.selectionText
      .replace(/'/g, "%27")
      .replace(/ /g, "_");
    chrome.tabs.create({
      url: "https://en.wikipedia.org/wiki/" + formattedWord,
    });
    console.log("Successfully searched for " + info.selectionText + "!");
  }
});


console.info(chrome.webRequest,'---webRquest')
chrome.webRequest.onCompleted.addListener(
  function(details) {

    console.log(details,'----detals')
    const parsedUrl = new URL(details.url);

    // if (currentUrl && currentUrl.indexOf(parsedUrl.pathname) > -1 && tabId) {
    //   chrome.tabs.sendMessage(tabId, { type: MessageType.PAGE_RENDERED });
    // }
  },
  { urls: ['*://*.github.com/*'] }
);


