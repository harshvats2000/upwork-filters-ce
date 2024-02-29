// content.js
const checkSections = () => {
  const sections = document.querySelectorAll("section[data-ev-sublocation=job_feed_tile]");
  let hiddenCount = 0;

  sections.forEach((section) => {
    const clientSpendingElement = section.querySelector(
      'small[data-test="client-spendings"] span[data-test="formatted-amount"]'
    );

    console.log(clientSpendingElement.innerText.trim());
    if (clientSpendingElement && clientSpendingElement.innerText.trim() === "$0") {
      section.style.display = "none";
      hiddenCount++;
    }
  });

  // Send message to background script with the count of hidden sections
  chrome.runtime.sendMessage({ hiddenCount });
};

// Initial check
checkSections();

// Periodically check every 2 seconds
setInterval(checkSections, 2000);
