(function() {
  // Tema persistente
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') document.documentElement.classList.add('light');

  const toggle = document.getElementById('themeToggle');
  toggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    const mode = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
  });

  // Fecha/hora
  const dateEl = document.getElementById('date');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = `Fecha: ${now.toLocaleDateString()} · Hora: ${now.toLocaleTimeString()}`;
  }

  // Contador
  const countEl = document.getElementById('count');
  const incBtn = document.getElementById('incBtn');
  const resetBtn = document.getElementById('resetBtn');
  let count = parseInt(localStorage.getItem('count') || '0', 10);
  function render() { if (countEl) countEl.textContent = String(count); }
  render();
  incBtn?.addEventListener('click', () => { count++; localStorage.setItem('count', String(count)); render(); });
  resetBtn?.addEventListener('click', () => { count = 0; localStorage.setItem('count', '0'); render(); });

  // Formulario simple
  const form = document.getElementById('demoForm');
  const greeting = document.getElementById('greeting');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = /** @type {HTMLInputElement} */(document.getElementById('name')).value.trim();
    if (!name) return;
    greeting.textContent = `¡Hola, ${name}! 🎉 Tu sitio está listo para GitHub Pages.`;
    form.reset();
  });
})();
