async function add_counter() {
    var removed = await chrome.storage.sync.get("removed")
    document.getElementById("counter").innerHTML = removed.removed
}
add_counter()