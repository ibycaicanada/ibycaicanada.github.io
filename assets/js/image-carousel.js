document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    let currentIndex = 0;

    // 自动轮播函数
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    // 更新轮播位置
    function updateCarousel() {
        const offset = -currentIndex * 100; // 偏移百分比
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // 手动切换到上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    // 手动切换到下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    // 将函数挂载到全局对象
    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;

    // 自动轮播间隔3秒
    setInterval(autoSlide, 3000);
});
