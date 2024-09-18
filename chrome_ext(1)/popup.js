document.addEventListener("DOMContentLoaded", function() {
    const getTitleButton = document.getElementById("get-title");
    const titleParagraph = document.getElementById("title");

    getTitleButton.addEventListener("click", function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const activeTab = tabs[0];
            const title = activeTab.title;
            titleParagraph.innerText = title;
        });
    });
});