async function add_counter() {
    var removed = await browser.storage.local.get("removed")
    document.getElementById("counter").textContent = removed.removed
}
add_counter()