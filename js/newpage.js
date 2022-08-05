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
          removed_side: (await chrome.storage.local.get("removed_side"))
            .removed_side,
          removed_top:
            (await chrome.storage.local.get("removed_top")).removed_top + 1,
          removed_normal: (await chrome.storage.local.get("removed_normal"))
            .removed_normal,
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
          removed_side: (await chrome.storage.local.get("removed_side"))
            .removed_side,
          removed_top: (await chrome.storage.local.get("removed_top"))
            .removed_top,
          removed_normal:
            (await chrome.storage.local.get("removed_normal")).removed_normal +
            1,
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
          removed_side:
            (await chrome.storage.local.get("removed_side")).removed_side + 1,
          removed_top: (await chrome.storage.local.get("removed_top"))
            .removed_top,
          removed_normal: (await chrome.storage.local.get("removed_normal"))
            .removed_normal,
        });
      } catch (err) {
        // Tried to delete element that doesnt exist
      }
    }
}
rmads();
