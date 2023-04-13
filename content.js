// Listen for a message from the extension popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "roll") {
      // Extract the roll data from the message
      var rollData = request.rollData;
      
      // Send the roll data to Roll20
      // TODO: Implement Roll20 API integration here
    }
  });  