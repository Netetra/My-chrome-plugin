'use strict';

function del() {
    document.body.innerHTML=document.body.innerHTML.replace(/\$ /g,'');
    window.alert("$にサヨナラを!")
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: del
    });
});
