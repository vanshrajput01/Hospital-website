let swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    // autoplayHoverPause : true,
    // effect : "coverflow",
    grabCursor : true,
    centeredSliders : true,
    slidesPerView : "auto",
    slidesPerView: 1,
    spaceBetween: 30,
    // coverflowEffect : {
    //   rotate : 0,
    //   stretch : 0,
    //   depth : 300,
    //   modifier : 1,
    //   sideShadows : false

    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });