chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    removed: 0
  });
})


chrome.webNavigation.onDOMContentLoaded.addListener(({
  tabId
}) => {
  chrome.scripting.executeScript({
    target: {
      tabId
    },
    function: newpage,
  })
})

async function newpage() {
  // Normal Google ads
  var ads = document.getElementsByClassName("uEierd")
  // Tophead Google ads
  var topads = document.getElementsByClassName("Pm5mre")
  // Side Google ads
  var sideads = document.getElementsByClassName("cu-container")
  if (window.location.href.includes("www.google.com")) {
    for (i in topads) {
      try {
        topads[0].remove()
        chrome.storage.sync.set({removed: (await chrome.storage.sync.get("removed")).removed + 1})
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
    for (i in ads) {
      try {
        ads[0].remove()
        chrome.storage.sync.set({removed: (await chrome.storage.sync.get("removed")).removed + 1})
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
    for (i in sideads) {
      try {
        sideads[0].remove()
        chrome.storage.sync.set({removed: (await chrome.storage.sync.get("removed")).removed + 1})
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
  }
}