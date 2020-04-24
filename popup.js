console.log('あああああ');

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender)
    console.log(sender.tab.url);
    if (request.greeting == "from-contentscript")
      sendResponse({farewell: "im popup"});
    if (request.greeting == "from-background")
      sendResponse({farewell: "im popup"});
  });
