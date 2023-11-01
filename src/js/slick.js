$(document).ready(function(){
    $(".logo-list").slick({
      slidesToShow: 6, // so luong anh hien thi
      infinite: true, // "true" chay vo tan, "false" co han
      arrows : false, // "false" bo 2 nut trai phai, thay vao do la vuot
      autoplay: false, // chay tu dong
      draggable: true, // khong cho vuot nua
      dots: false, // hien thi vi tri anh

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true, // chay tu dong
            autoplaySpeed: 2000, // set time
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });