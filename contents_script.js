// ① background => contents_script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  if (request.greeting == "hello")
    sendResponse({farewell: "goodbye"});
});

// chrome.runtime.sendMessage({greeting: "to-background"}, function(response) {
//   console.log(response.farewell);
// });
chrome.runtime.sendMessage({greeting: "to-popup"}, function(response) {
  console.log(response.farewell);
});