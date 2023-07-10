// const element = document.querySelector(".js-choice");
// const element2 = document.querySelector(".js-choice-2");

// const choices = new Choices(element, element2, {
//    searchEnabled: false,
//    itemSelectText: "",
// });



const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function (item) {
         item.classList.remove('active');
      });
      tabItems.forEach(function (item) {
         item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
   })
});

const tabGridsBtn = document.querySelectorAll(".grid-item-btn");
const tabGridItems = document.querySelectorAll(".grid-item");

tabGridsBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabGridsBtn.forEach(function (item) {
         item.classList.remove('active');
      });
      tabGridItems.forEach(function (item) {
         item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
   })
});

const tabBottom = document.querySelectorAll(".tabs-bottom-btn");
const tabBottomBtn = document.querySelectorAll(".tab-bottom__item");

tabBottom.forEach(function (item) {
   item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabBottom.forEach(function (item) {
         item.classList.remove('active');
      });
      tabBottomBtn.forEach(function (item) {
         item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
   })
});




const swiper = new Swiper('.swiper', {

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});


let select = function () {
   let selectHeader = document.querySelectorAll('.select__header');
   let selectItem = document.querySelectorAll('.select__item');

   selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
   });

   selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
   });

   function selectToggle() {
      this.parentElement.classList.toggle('is-active');
   }

   function selectChoose() {
      let text = this.innerText,
         select = this.closest('.select'),
         currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

   }

};


select();