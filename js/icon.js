window.addEventListener("click", function(click){
    if(click.target.closest('.menu__icon')){
        const menuIcon = document.querySelector('.menu__icon');
        menuIcon.classList.toggle('--active');
    }
})