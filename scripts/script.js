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
