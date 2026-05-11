export function tabNav() {
  document
    .querySelectorAll(".content-show-hide-container")
    .forEach((container) => {
      const tabs = container.querySelectorAll(".header-nav .tabItem");
      const contentBoxes = container.querySelectorAll(".tabContent");

      // On load, hide all content boxes except the first one
      contentBoxes.forEach((box, index) => {
        if (index !== 0) {
          box.classList.add("hide");
        } else {
          box.classList.add("active");
        }
      });

      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          // Remove 'active' class from all tabs and add to the clicked one
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          // Hide all content boxes and show the matching one
          contentBoxes.forEach((box, boxIndex) => {
            if (boxIndex === index) {
              box.classList.remove("hide");
              box.classList.add("active");
            } else {
              box.classList.add("hide");
              box.classList.remove("active");
            }
          });
        });
      });
    });
}
