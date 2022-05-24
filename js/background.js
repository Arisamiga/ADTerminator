chrome.runtime.onInstalled.addListener(() => {
  browser.storage.local.set({
    removed: 0
  });
})