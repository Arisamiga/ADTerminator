async function rmads() {
  // Normal Google ads
  var ads = document.getElementsByClassName("uEierd");
  // Tophead Google ads
  var topads = document.getElementsByClassName("Pm5mre");
  // Side Google ads
  var sideads = document.getElementsByClassName("cu-container");
    for (i in topads) {
      try {
        topads[0].remove();
        browser.storage.local.set({
          removed: (await chrome.storage.local.get("removed")).removed + 1,
        });
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
    for (i in ads) {
      try {
        ads[0].remove();
        browser.storage.local.set({
          removed: (await chrome.storage.local.get("removed")).removed + 1,
        });
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
    for (i in sideads) {
      try {
        sideads[0].remove();
        browser.storage.local.set({
          removed: (await chrome.storage.local.get("removed")).removed + 1,
        });
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
}
rmads();
