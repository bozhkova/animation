(function () {
    window.onload = function () {
        var canvas = document.getElementById('field'),
            ctx = canvas.getContext('2d'),
            x = 10, // curent position
            updateX = 9,
            currentImgIndex = 0,
            img = document.getElementsByTagName('img');
                
        function animationFrame() {
            ctx.clearRect(0, 0, 1024, 500);
            var currentImg = img[currentImgIndex];
            ctx.drawImage(currentImg, x, 370, 30, 60);
            x += updateX;
            if (x > 1024) {
                x = 0;
            }
            if (currentImgIndex == 7) {
                currentImgIndex = 0;
            }
            else {
                currentImgIndex++;
            };
            setTimeout(animationFrame, 100);
        }
        animationFrame();
    }
}());
