document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "./assets/images/banner-image1.png",
        "./assets/images/banner-image2.png",
        "./assets/images/banner-image3.png",
        "./assets/images/banner-image4.png"
    ];

    const bannerWrapper = document.querySelector('.banner_wrapper');
    const bannerImage = document.querySelector('.banner_wrapper img');
    let currentIndex = 0;

    // 初始化容器样式，确保只显示一张图片
    bannerWrapper.style.overflow = 'hidden';
    bannerWrapper.style.whiteSpace = 'nowrap';
    bannerWrapper.style.position = 'relative';

    // 动态创建一个滚动容器，插入所有图片
    const carouselContainer = document.createElement('div');
    carouselContainer.style.display = 'flex';
    carouselContainer.style.transition = 'transform 1s ease-in-out';
    carouselContainer.style.width = `${images.length * 100}%`;

    images.forEach((src) => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.style.width = `${100 / images.length}%`;
        imgElement.style.flexShrink = '0';
        imgElement.alt = 'Banner';
        carouselContainer.appendChild(imgElement);
    });

    // 清空 bannerWrapper 原内容，并插入滚动容器
    bannerWrapper.innerHTML = '';
    bannerWrapper.appendChild(carouselContainer);

    // 滚动逻辑
    const scrollImages = () => {
        currentIndex = (currentIndex + 1) % images.length; // 切换到下一个图片索引
        carouselContainer.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
    };

    // 初始化滚动
    setInterval(scrollImages, 3000);
});
