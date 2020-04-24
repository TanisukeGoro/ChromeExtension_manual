const sendMessage = function(message, callback) {
    return chrome.runtime.sendMessage.apply(chrome, arguments);
}

const getResourceUrl = function(resourceName) {
    return chrome.extension.getURL.apply(chrome, arguments);
}

const getLocalizedMessage = function(messageName) {
    return chrome.i18n.getMessage.apply(chrome, arguments);
}
const tabsSendMessage = function(id, message, callback) {
    return chrome.tabs.sendMessage.apply(chrome, arguments);
}

const allTabsQuery = function(callback) {
  return chrome.tabs.query({}, callback);
}

/**
 * Incoming message from Extension background page
 */
const addListener = function(func) {
    chrome.runtime.onMessage.addListener.apply(chrome.runtime.onMessage, arguments);
}

// ① background => contents_script
allTabsQuery(function(tabs) {
  let sendId = 0;
  if (sendId !== 0) tabsSendMessage(sendId, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  }); 
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "to-background")
      sendResponse({farewell: "im background"});
    if (request.greeting == "hello")
      sendResponse({farewell: "im background"})
  });

chrome.runtime.sendMessage({greeting: "from-background"}, function(response) {
  console.log(response.farewell);
});