async function add_counter() {
  var removed = await browser.storage.local.get("removed");
  var removed_side = await browser.storage.local.get("removed_side");
  var removed_top = await browser.storage.local.get("removed_top");
  var removed_normal = await browser.storage.local.get("removed_normal");
  var element = document.createElement("div");
  element.setAttribute("id", "types");
  document.getElementById("counter").textContent = removed.removed;
  element.textContent =
    " Overall Ads: " + removed.removed + "\r\n";
  element.textContent +=
    " Side Ads: " + removed_side.removed_side + "\r\n";
  element.textContent +=
    " Top Ads: " + removed_top.removed_top + "\r\n";
  element.textContent +=
    " Search Ads: " + removed_normal.removed_normal + "\r\n";
    document.getElementById("adsdetails").appendChild(element);
}
add_counter();
