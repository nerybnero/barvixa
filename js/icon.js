window.addEventListener("click", function(click){
    if(click.target.closest('.menu__icon')){
        const menu = document.querySelector('.menu');
        const body = document.querySelector('body');
        if (click.target.closest('.menu__icon')) {
            menu.classList.toggle('menu-open');
            body.classList.toggle('lock');
          }
    }
})

function saveCurrentScale() {
    localStorage.setItem('savedScale', document.body.style.transform);
  }
  
  // Функция для восстановления масштаба
  function restoreScale() {
    const savedScale = localStorage.getItem('savedScale');
    if (savedScale) {
      document.body.style.transform = savedScale;
    }
  }
  
  // Вызываем функцию сохранения текущего масштаба при загрузке страницы
  saveCurrentScale();
  
  // Вызываем функцию восстановления масштаба при изменении ориентации
  window.onorientationchange = function() {
    restoreScale();
  };