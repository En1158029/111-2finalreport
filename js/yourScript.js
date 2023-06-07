// 按鈕點擊事件處理函式
function showImage() {
    var imageContainer = document.getElementById("imageContainer");

    // 清空圖片容器
    imageContainer.innerHTML = "";

    // 圖片 URL 陣列
    var imageUrls = [
        "images/寶石1.jpg",
        "images/寶石2.jpg",
        "images/寶石3.jpg"
        // 添加更多圖片的 URL
    ];

    // 迭代圖片 URL 陣列
    for (var i = 0; i < imageUrls.length; i++) {
        var imageUrl = imageUrls[i];

        // 創建圖片元素
        var image = document.createElement("img");
        image.src = imageUrl;

        // 插入圖片到容器中
        imageContainer.appendChild(image);
    }
}

// 綁定按鈕點擊事件
var sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", showImage);

