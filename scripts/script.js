// Função para redireiconar para demais páginas
function goTo(page, element) {
  window.location.href = page;
}

// Função para ativar menu responsivo
function toggleMenu() {
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) return;

  const menu = document.querySelector("nav");
  if (!menu) return;
  menu.classList.toggle("mobile-open");
}

// Abre uma nova página ao clicar no botão "ver mais" ou no título do livro
function openBookPage(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// Fecha o menu responsivo ao clicar fora dele
window.addEventListener("click", (event) => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  if (nav.classList.contains("mobile-open")) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickNavBtn = event.target.closest(".nav-btn");

    if (!isClickInsideNav && !isClickNavBtn) {
      nav.classList.remove("mobile-open");
    }
  }
});
