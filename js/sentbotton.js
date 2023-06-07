var sendButton = document.getElementById("sendButton");

// 綁定點擊事件處理程序
sendButton.addEventListener("click", function () {
    var imageContainer = document.getElementById("imageContainer");

    // 圖片 URL 清單
    var imageUrls = [
        "圖片1的URL",
        "圖片2的URL",
        "圖片3的URL"
        // 添加更多圖片的 URL
    ];

    // 迴圈創建並插入圖片元素
    for (var i = 0; i < imageUrls.length; i++) {
        var imageUrl = imageUrls[i];

        // 創建圖片元素
        var image = document.createElement("img");
        image.src = imageUrl;

        // 插入圖片到容器中
        imageContainer.appendChild(image);
    }
});
