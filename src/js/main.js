import '../css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createIcons, FileText, ArrowDown } from 'lucide';

// Initialize AOS (PRD spec)
AOS.init({
  once: true,
  duration: 800
});

// Initialize Lucide Icons
createIcons({
  icons: {
    FileText,
    ArrowDown
  }
});

// Smooth scroll untuk CTA
document.querySelector('a[href="#our-product"]')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#our-product').scrollIntoView({ behavior: 'smooth' });
});
