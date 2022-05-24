var ads = document.getElementsByClassName("uEierd")
async function rmads(){
    for (i in ads) {
        try {
        ads[0].remove()
        browser.storage.local.set({removed: (await chrome.storage.local.get("removed")).removed + 1})
        } catch (err) {
        // Tried to delete element that doesnt exist
        }
    }
}
rmads()