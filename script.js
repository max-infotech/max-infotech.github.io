const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

let currentLanguage = 'en';
const languageToggle = document.getElementById('languageToggle');
languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ne' : 'en';
  document.documentElement.lang = currentLanguage === 'ne' ? 'ne' : 'en';
  document.querySelectorAll('[data-en][data-ne]').forEach(el => {
    const value = el.dataset[currentLanguage];
    if (value !== undefined) el.innerHTML = value;
  });
  languageToggle.textContent = currentLanguage === 'en' ? 'नेपाली' : 'English';
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const service = document.getElementById('serviceType').value;
  const message = document.getElementById('customerMessage').value.trim();
  const intro = currentLanguage === 'ne' ? 'नमस्ते Max InfoTech, मलाई सेवा आवश्यक छ।' : 'Hello Max InfoTech, I would like to request a service.';
  const body = `${intro}\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDetails: ${message || '-'}`;
  window.open(`https://wa.me/9779820730150?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
});
