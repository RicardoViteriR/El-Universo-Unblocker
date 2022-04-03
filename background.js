// this is the background code...

// listen for our browerAction to be clicked
// chrome.browserAction.onClicked.addListener(function (tab) {
//   // for the current tab, inject the "inject.js" file & execute it
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        file: ["./index.js"],
      })
      .then(() => {
        console.log("INJECTED THE FOREGROUND STYLES.");
      })
      .catch((err) => console.log(err));
  }
});
