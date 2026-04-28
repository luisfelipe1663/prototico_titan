function toggleMenu() {
        document.getElementById("menu").classList.toggle("active");
    }

    const sobreNos = document.querySelector(".sobrenos-home");

    const observerSobre = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                sobreNos.classList.add("animar");
            }
        });
    }, {
        threshold: 0.3
    });

    if (sobreNos) {
        observerSobre.observe(sobreNos);
    }
    const planos = document.querySelectorAll(
    ".plano_basico, .plano_avancado, .plano_premium"
);

const observerPlanos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            // anima um por vez
            planos.forEach((plano, index) => {
                setTimeout(() => {
                    plano.classList.add("animar");
                }, index * 300);
            });

            observerPlanos.disconnect(); // roda só uma vez
        }
    });
}, {
    threshold: 0.3
});

const secaoPlanos = document.querySelector(".caixa-planos_home");

if (secaoPlanos) {
    observerPlanos.observe(secaoPlanos);
}