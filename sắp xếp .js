const selectEl = document.getElementById("sort");
const itemsEl = document.querySelectorAll(".catagory-right-content-item");

selectEl.addEventListener("change", (event) => {
  const sortBy = event.target.value;
  const sortedItems = Array.from(itemsEl).sort((a, b) => {
    return b.getAttribute(`data-${sortBy}`) - a.getAttribute(`data-${sortBy}`);
  });
  sortedItems.forEach((item) => {
    item.parentNode.insertBefore(item, item.parentNode.lastChild.previousSibling);
  });
});
