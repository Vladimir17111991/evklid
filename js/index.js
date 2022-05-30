document.addEventListener('DOMContentLoaded', function () {

  $(function () {
    $("#accordion").accordion({
      heightStyle: 'content'
    });
  });

  //слайд картинок в hero

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {

      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      // a11y: true,
          // paginationBulletMessage: 'Перейти на слайд {{index}}',
      },
      // swiperOptions: {
          // ARIA

      // }

      // paginationBulletMessage: 'Слайд № {{index}}',



    // },

  });
  // let b = document.querySelectorAll('.swiper-pagination-bullet');
  // let count =0;
  //   b.forEach(function(it){
  //       count++;
  //         let string = "Слайд № " + count;
  //         $(it).attr('aria-label',string);
  // })


  //добавляем подсветку на текущий элемент, при этом, предыдущие элементы теряют подсветку
  let result;
  document.querySelectorAll('.how__item-button').forEach(function (itemButton) {
    itemButton.addEventListener('click', function (event) {
      if (result) {
        result.classList.remove('btn-delegation')
      }
      result = event.target
      result.classList.add('btn-delegation')
      console.log(result)

      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.how__step').forEach(function (stepButton) {
        stepButton.classList.remove('how__step-active')
      });
      //удаление класса видимости дисплея на картинку
      document.querySelectorAll('.step-image').forEach(function (stepImage) {
        stepImage.classList.remove('how__step-active')
      });
      //добавление класса видимости соответствующему таргету
      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (currTarget) {
        currTarget.classList.add('how__step-active')
      });
    })
  });
  const menu = document.querySelector('#menu')
  const search = document.querySelector('.header__search')

  //добавляем клик на кнопку открытия бургера
  document.querySelector('#burger').addEventListener('click', function () {
    menu.classList.toggle('is-active')
  });

  //добавляем клик на кнопку закрытия бургера
  document.querySelector('.burger-close').addEventListener('click', function () {
    menu.classList.toggle('is-active')
  });

  //добавляем клик на кнопку закрытия поискового окна
  document.querySelector('#btn-close').addEventListener('click', function () {
    search.classList.add('search-close')
  });

  //добавляем клик на кнопку открытия поискового окна
  document.querySelector('#btn-open').addEventListener('click', function () {
    search.classList.remove('search-close')
  });

  // document.querySelector('#cl').addEventListener('click',function(param){
  //   param.g
  // })
});
