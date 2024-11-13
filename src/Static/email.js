function copyEmail() {
  const emailText = document.querySelector(".email").innerText;
  navigator.clipboard
    .writeText(emailText)
    .then(() => {
      const copyButton = document.querySelector(".copy-button");
      copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(() => {
        copyButton.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
