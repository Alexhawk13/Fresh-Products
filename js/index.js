if (document.documentElement.clientWidth < 700) {
    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          watchOverflow: true,
    })
}