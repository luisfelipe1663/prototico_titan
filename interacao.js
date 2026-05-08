function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

/* ANIMAÇÃO SOBRE NÓS */
const sobreNos = document.querySelector(".sobrenos-home");

const observerSobre = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            sobreNos.classList.add("animar");
            observerSobre.disconnect();
        }
    });
}, {
    threshold: 0.3
});

if (sobreNos) {
    observerSobre.observe(sobreNos);
}

/* ANIMAÇÃO PLANOS */
const planos = document.querySelectorAll(
    ".plano_basico, .plano_avancado, .plano_premium"
);

const observerPlanos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            planos.forEach((plano, index) => {
                setTimeout(() => {
                    plano.classList.add("animar");
                }, index * 300);
            });

            observerPlanos.disconnect();
        }
    });
}, {
    threshold: 0.3
});

const secaoPlanos = document.querySelector(".caixa-planos_home");

if (secaoPlanos) {
    observerPlanos.observe(secaoPlanos);
}

/* ANIMAÇÃO SERVIÇOS */
const servicos = document.querySelectorAll(".animar-servico");

const observerServicos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            servicos.forEach((servico, index) => {
                setTimeout(() => {
                    servico.classList.add("ativo");
                }, index * 250);
            });

            observerServicos.disconnect();
        }
    });
}, {
    threshold: 0.2
});

servicos.forEach((servico) => {
    observerServicos.observe(servico);
});
