const ExtensionService = {

  /**
   * Send message to Extension background page
   * @param message
   * @param callback
   * @returns {*}
   */
  sendMessage: function(message, callback) {
      //console.log("sendMessage", message);
      return chrome.runtime.sendMessage.apply(chrome, arguments);
  },

  getResourceUrl: function(resourceName) {
      //console.log("getResourceUrl", resourceName);
      return chrome.extension.getURL.apply(chrome, arguments);
  },

  getLocalizedMessage: function(messageName) {
      //console.log("getLocalizedMessage", messageName);
      return chrome.i18n.getMessage.apply(chrome, arguments);
  },
  tabsSendMessage: function(id, message, callback) {
      //console.log("getLocalizedMessage", messageName);
      return chrome.tabs.sendMessage.apply(chrome, arguments);
  },

  /**
   * Incoming message from Extension background page
   */
  onMessage: {
      addListener: function(func) {
          chrome.runtime.onMessage.addListener.apply(chrome.runtime.onMessage, arguments);
      }

  },
};

export default ExtensionService;