async function add_counter() {
    var removed = await chrome.storage.sync.get("removed")
    document.getElementById("counter").innerHTML = removed.removed
    console.log(removed)
}
add_counter()