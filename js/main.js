document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
    
    mobileMenuButton.addEventListener('click', function() {
        // Переключаем классы для меню и оверлея
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        this.classList.toggle('active');
        
        // Блокируем прокрутку страницы
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    overlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenuButton.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

function handleLogoClick(event) {
    event.preventDefault();
    // Ваш код для обработки клика по логотипу
}
window.handleLogoClick = handleLogoClick;