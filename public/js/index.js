//href untuk semua navbar ke setiap id (NAVBAR)
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll untuk semua anchor yang menuju id (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === "#") {
                // Kalau linknya hanya #, scroll ke atas
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});



