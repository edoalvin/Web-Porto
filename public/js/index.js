//href untuk semua navbar ke setiap id (NAVBAR)
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll untuk semua anchor yang menuju id (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === "# ") {
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

VANTA.NET({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x777777,
  backgroundColor: 0x0,
  points: 10.00,
  maxDistance: 19.00,
  spacing: 18.00,
  showDots: true
})


