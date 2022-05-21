chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    removed: 0
  });
})


chrome.webNavigation.onCompleted.addListener(({
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
  var ads = document.getElementsByClassName("uEierd")
  if (window.location.href.includes("www.google.com")) {
    for (i in ads) {
      try {
        ads[0].remove()
        chrome.storage.sync.set({removed: (await chrome.storage.sync.get("removed")).removed + 1})
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
  }
}