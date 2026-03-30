import '../css/style.css'
import AOS from 'aos'
import { createIcons, Leaf, FileText, ArrowDown, ChevronDown, ChevronsDown, Flower2, Sparkles, Mail, Phone } from 'lucide'

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Init AOS
    AOS.init({
        duration: 900,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
    })

    // Init Lucide icons - robust version for Vite
    createIcons({
        icons: {
            leaf: Leaf,
            'file-text': FileText,
            'arrow-down': ArrowDown,
            'chevron-down': ChevronDown,
            'chevrons-down': ChevronsDown,
            'flower-2': Flower2,
            sparkles: Sparkles,
            mail: Mail,
            phone: Phone,
        },
    })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
