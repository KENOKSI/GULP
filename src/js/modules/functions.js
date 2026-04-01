export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQV2p7AABxwAADtcAAQUxQSDqFjRH8L08Vo1WgOXLlRIkQ8A//85oGAHS/X726BujP3Tqa9L3Ievxug4Yv84E1w/9k8A==";
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.body.classList.add(className);
    });
}