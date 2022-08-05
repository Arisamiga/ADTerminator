async function add_counter() {
  var removed = await chrome.storage.sync.get("removed");
  var removed_side = await chrome.storage.sync.get("removed_side");
  var removed_top = await chrome.storage.sync.get("removed_top");
  var removed_normal = await chrome.storage.sync.get("removed_normal");
  document.getElementById("counter").innerHTML = removed.removed;
  document.getElementById("types").innerHTML =
    "Overall Ads: " +
    removed.removed +
    "<br> Side Ads: " +
    removed_side.removed_side +
    "<br> Top Ads: " +
    removed_top.removed_top +
    "<br> Search Ads: " +
    removed_normal.removed_normal;
}
add_counter();
