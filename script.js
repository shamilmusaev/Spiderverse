const tabs = document.querySelectorAll(".tab__item");
const content = document.querySelectorAll(".container");

// Убираем весь контент и удаляем активный класс
function hideContent() {
  content.forEach((item) => {
    item.style.display = "none";
  });

  tabs.forEach((item) => {
    item.classList.remove("tab__item_active");
  });
}

// Делаем так чтобы стоял контент и активный класс по умолчанию. В данном случае первый контент и соответствнно первый таб.
function showContent(i = 1) {
  content[i].style.display = "flex";
  tabs[i].classList.add("tab__item_active");
}

hideContent();
showContent();

  
tabs.forEach((item) => {                                            //Табы разбиваем на массив вызвав через foreach
  item.addEventListener("click", (event) => {                       //По нажатию на один из этих табов вызови событие
    if (event.target) {                                             //Если мы нажимаем на кнопку таба
      tabs.forEach((item, index) => {                               //Снова разбиваем на массив вызывая при этом табы и индекс табов
        if (event.target == item) {                                 //Если тот элемент который мы кликнули совпадает с тем который нам нужен 
            hideContent();                                          //Скрой остальной контент
            showContent(index);                                     //Покажи тот контент который нам нужен по индексу  
        }
      });
    }
  });
});
