chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "grabThumbnail",
      title: "Get YouTube Thumbnail",
      contexts: ["link"],
      targetUrlPatterns: ["*://www.youtube.com/watch*"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "grabThumbnail") {
      const url = new URL(info.linkUrl);
      const videoId = url.searchParams.get("v");
      if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        chrome.tabs.create({ url: thumbnailUrl });
      }
    }
  });
  
