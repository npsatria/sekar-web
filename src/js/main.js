// --- Internationalization (i18n) Logic ---
const translations = {
    en: {
        hero_sub: "Hair Mask",
        hero_desc: "SEKAR (Smooth, Essential and Repairing): Hair Mask Formulated from Canang Waste with Balsam (Impatiens balsamina) Extract and Pandan (Pandanus amaryllifolius) as Natural Fragrance to Strengthen and Moisturize Hair",
        btn_lab: "Lab Report",
        btn_more: "Discover More",
        product_label: "Our Product",
        product_desc: `SEKAR is a natural hair mask formulated from
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">canang waste</a>,
            enriched with <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link italic-link">Impatiens balsamina</a> (balsam flower) extract and
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link italic-link">Pandanus amaryllifolius</a> (pandan) as the aroma, these ingredients are rich in
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">flavonoids</a>,
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">tannins</a>,
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">saponins</a>, and
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">glycosides</a>,
            which provide antioxidant, antibacterial, and strengthening effects to support healthier, more resilient hair.<br><br>
            Designed as a safe, eco-friendly, and affordable alternative to chemical based hair treatments, SEKAR helps
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">reduce hair loss</a>,
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">improve moisture balance</a>, and
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">enhance overall hair condition</a>.
            This innovative formulation not only promotes effective hair care but also supports the sustainable use of
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">local resources</a> by transforming
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">ceremonial waste</a> into a valuable and functional product.`,
        journey_label: "Journey of SEKAR",
        step_1: "Harvest",
        step_2: "Extract",
        step_3: "Formulate",
        step_4: "Package",
        footer_sub: "Natural Hair Mask · Bali",
        footer_copy: "© 2026 SEKAR. All rights reserved."
    },
    id: {
        hero_sub: "Masker Rambut",
        hero_desc: "SEKAR (Smooth, Essential and Repairing): Masker rambut berbahan baku limbah canang dengan ekstrak bunga pacar air (Impatiens balsamina) dan aroma pandan (Pandanus amaryllifolius) sebagai wewangian alami untuk memperkuat dan melembapkan rambut.",
        btn_lab: "Laporan Lab",
        btn_more: "Temukan Lebih",
        product_label: "Produk Kami",
        product_desc: `SEKAR adalah masker rambut alami yang diformulasikan dari 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">limbah canang</a>, 
            diperkaya dengan ekstrak <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link italic-link">Impatiens balsamina</a> (pacar air) dan 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link italic-link">Pandanus amaryllifolius</a> (pandan) sebagai aroma alami. Bahan-bahan ini kaya akan 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">flavonoid</a>, 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">tannin</a>, 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">saponin</a>, dan 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">glikosida</a>, 
            yang memberikan efek antioksidan, antibakteri, dan penguatan untuk rambut yang lebih sehat dan kuat.<br><br>
            Dirancang sebagai alternatif yang aman, ramah lingkungan, dan terjangkau dibandingkan perawatan rambut kimia, SEKAR membantu 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">mengurangi kerontokan</a>, 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">menyeimbangkan kelembapan</a>, dan 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">meningkatkan kesehatan rambut secara menyeluruh</a>. 
            Formulasi inovatif ini tidak hanya merawat rambut tetapi juga mendukung penggunaan berkelanjutan dari 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">sumber daya lokal</a> dengan mengolah 
            <a href="https://docs.google.com/document/d/1uEUlkMvXZN6uKXPdrrk5s54KLQas7smE/edit" target="_blank" class="science-link">limbah canang</a> menjadi produk fungsional.`,
        journey_label: "Perjalanan SEKAR",
        step_1: "Panen",
        step_2: "Ekstraksi",
        step_3: "Formulasi",
        step_4: "Kemasan",
        footer_sub: "Masker Rambut Alami · Bali",
        footer_copy: "© 2026 SEKAR. Hak Cipta Dilindungi."
    }
}

window.changeLanguage = (lang) => {
    // Save preference
    localStorage.setItem('sekar_lang', lang);
    
    // Update elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Apply fade out-in transition effect
            el.style.opacity = '0';
            setTimeout(() => {
                if (key.includes('desc')) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
                el.style.opacity = '1';
                el.style.transition = 'opacity 0.4s ease';
            }, 300);
        }
    });

    // Update buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Init AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 40,
        easing: 'ease-out-cubic',
        mirror: false
    })

    // Init Lucide icons
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
    });

    // Check for saved language or browser default (fallback to 'en')
    const savedLang = localStorage.getItem('sekar_lang') || 'en';
    window.changeLanguage(savedLang);
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return; // Skip if just "#"
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
