// ── ANIMAÇÃO DE ENTRADA DOS ELEMENTOS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .produto-info, .cta-final, .hero-content')
  .forEach(el => {
    el.classList.add('oculto');
    observer.observe(el);
  });


// ── CONTADOR DE ESTOQUE (URGÊNCIA) ──
const estoque = document.querySelector('.badge');
if (estoque) {
  estoque.textContent = '⚡ Apenas 4 unidades disponíveis — Frete grátis em Ribeirão Preto';
}


// ── BOTÃO WHATSAPP FLUTUANTE ──
const btnFloat = document.createElement('a');
btnFloat.href = 'https://wa.me/5516993012143';
btnFloat.target = '_blank';
btnFloat.className = 'whatsapp-float';
btnFloat.textContent = '💬';
btnFloat.title = 'Falar no WhatsApp';
document.body.appendChild(btnFloat);


// ── SMOOTH SCROLL NOS LINKS INTERNOS ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});