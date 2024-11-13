document.addEventListener("DOMContentLoaded", () => {
  // Select all checkboxes
  const panels = document.querySelectorAll(".panel");

  // Add click event listeners to each checkbox
  panels.forEach((panel) => {
    panel.addEventListener("change", () => {
      // Close all other panels when one is opened
      panels.forEach((otherPanel) => {
        if (otherPanel !== panel) {
          otherPanel.checked = false;
        }
      });
    });
  });
});
