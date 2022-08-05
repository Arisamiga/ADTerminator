chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    removed: 0,
    removed_side: 0,
    removed_top: 0,
    removed_normal: 0,
  });
});

chrome.webNavigation.onDOMContentLoaded.addListener(({ tabId }) => {
  chrome.scripting.executeScript({
    target: {
      tabId,
    },
    function: newpage,
  });
});

async function newpage() {
  // Normal Google ads
  var ads = document.getElementsByClassName("uEierd");
  // Tophead Google ads
  var topads = document.getElementsByClassName("Pm5mre");
  // Side Google ads
  var sideads = document.getElementsByClassName("cu-container");
  if (window.location.href.includes("www.google.com")) {
    for (i in topads) {
      try {
        topads[0].remove();
        chrome.storage.sync.set({
          removed: (await chrome.storage.sync.get("removed")).removed + 1,
          removed_side: (await chrome.storage.sync.get("removed_side"))
            .removed_side,
          removed_top:
            (await chrome.storage.sync.get("removed_top")).removed_top + 1,
          removed_normal: (await chrome.storage.sync.get("removed_normal"))
            .removed_normal,
        });
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
    for (i in ads) {
      try {
        ads[0].remove();
        chrome.storage.sync.set({
          removed: (await chrome.storage.sync.get("removed")).removed + 1,
          removed_side: (await chrome.storage.sync.get("removed_side"))
            .removed_side,
          removed_top: (await chrome.storage.sync.get("removed_top"))
            .removed_top,
          removed_normal:
            (await chrome.storage.sync.get("removed_normal")).removed_normal +
            1,
        });
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
    for (i in sideads) {
      try {
        sideads[0].remove();
        chrome.storage.sync.set({
          removed: (await chrome.storage.sync.get("removed")).removed + 1,
          removed_side:
            (await chrome.storage.sync.get("removed_side")).removed_side + 1,
          removed_top: (await chrome.storage.sync.get("removed_top"))
            .removed_top,
          removed_normal: (await chrome.storage.sync.get("removed_normal"))
            .removed_normal,
        });
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
  }
}
