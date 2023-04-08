chrome.contextMenus.create({
    title: "Send text to my extension",
    contexts: ["selection"],
    onclick: function(info) {
        var selectedText = info.selectionText;
        selectedText="https://fakeornot.vercel.app/?search="+selectedText;
        window.open(selectedText); 
    }
});