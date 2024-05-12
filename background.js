chrome.webRequest.onCompleted.addListener(
    function(details) {
      if (details.type === "media") {
        chrome.storage.local.get({mediaFiles: []}, function(data) {
          const mediaFiles = data.mediaFiles || [];
          mediaFiles.push(details.url);
          chrome.storage.local.set({mediaFiles});
        });
      }
    },
    { urls: ["<all_urls>"] }
  );
  