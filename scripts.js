const item_container = document.querySelectorAll(".row");
console.log();
const items = document.querySelectorAll(".col");

let draggedItem = null;

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  // Drag start event
  item.addEventListener("dragstart", function () {
    console.log("Drag Start");
    draggedItem = item;
    setTimeout(function () {
      draggedItem.style.display = "none";
    }, 0);
  });

  // Drag End event
  item.addEventListener("dragend", function () {
    console.log("Drag end");
    setTimeout(function () {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < item_container.length; j++) {
    const container = item_container[j];

    container.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    container.addEventListener("dragenter", function (e) {
      e.preventDefault();
    });

    container.addEventListener("drop", function (e) {
      let isDrag = true;
      const allCol = this.querySelectorAll(".col");
      for (let el = 0; el < allCol.length; el++) {
        if (allCol[el].classList.value === draggedItem.classList.value) {
          isDrag = false;
        }
      }
      if (isDrag) {
        this.append(draggedItem);
      }
    });
  }
}
