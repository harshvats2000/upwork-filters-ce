// popup.js
chrome.runtime.onMessage.addListener((message) => {
  const hiddenCountElement = document.getElementById("hiddenCount");
  if (hiddenCountElement) {
    hiddenCountElement.textContent = `Number of hidden sections: ${message.hiddenCount}`;
  }
});
