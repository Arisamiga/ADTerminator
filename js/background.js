chrome.runtime.onInstalled.addListener(() => {
  browser.storage.local.set({
    removed: 0,
    removed_side: 0,
    removed_top: 0,
    removed_normal: 0,
  });
})