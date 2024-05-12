chrome.storage.local.get({mediaFiles: []}, function(data) {
    const mediaFiles = data.mediaFiles || [];
    const mediaList = document.getElementById('mediaList');
    mediaList.innerHTML = ''; // Clear previous list
    mediaFiles.forEach(function(mediaFile, index) {
      const listItem = document.createElement('li');
      listItem.textContent = "Media " + (index + 1);
  
      const downloadButton = document.createElement('button');
      downloadButton.textContent = 'Download';
      downloadButton.addEventListener('click', function() {
        chrome.downloads.download({ url: mediaFile });
      });
  
      listItem.appendChild(downloadButton);
      mediaList.appendChild(listItem);
    });
  });
  