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
