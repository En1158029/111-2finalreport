function showImage() {
    var imageContainer = document.getElementById("image-container");
    var imageUrl = "圖片的URL"; // 替換為您的圖片URL

    // 創建一個新的圖片元素
    var image = document.createElement("img");
    image.src = imageUrl;

    // 插入圖片到區域中
    imageContainer.appendChild(image);
}
