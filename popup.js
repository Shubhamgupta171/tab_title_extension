document.addEventListener('DOMContentLoaded', function() {
    var extractBtn = document.getElementById('extractBtn');
    var titleContainer = document.getElementById('titleContainer');
  
    extractBtn.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var tabTitle = tab.title;
        titleContainer.textContent = 'Title of the current tab: ' + tabTitle;
      });
    });
  });
  