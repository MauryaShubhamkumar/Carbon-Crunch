document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const authButtons = document.querySelector('.auth-buttons');


    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        nav.classList.toggle('active');
        authButtons.classList.toggle('active');
    });


    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove('active');
            authButtons.classList.remove('active');
        }
    });

  
    if (!document.querySelector('#mobile-menu-styles')) {
        const style = document.createElement('style');
        style.id = 'mobile-menu-styles'; 
        style.textContent = `
            @media (max-width: 768px) {
                nav, .auth-buttons {
                    display: none;
                    transition: all 0.3s ease;
                }

                nav.active, .auth-buttons.active {
                    display: block;
                    position: absolute;
                    top: 80px;
                    left: 0;
                    right: 0;
                    background: white;
                    padding: 20px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                    z-index: 100;
                }

                nav.active ul {
                    flex-direction: column;
                    gap: 15px;
                }

                .auth-buttons.active {
                    top: 250px;
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }
});