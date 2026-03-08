(function() {
    'use strict';

    // ── Inject CSS ──
    var css = document.createElement('style');
    css.textContent =
        '.side-nav{position:fixed;top:0;right:0;width:280px;height:100vh;background:#fff;border-left:1px solid #e5e5e5;box-shadow:-4px 0 20px rgba(0,0,0,0.06);z-index:1000;overflow-y:auto;transform:translateX(100%);transition:transform .3s ease;font-family:"Source Sans Pro","Segoe UI",sans-serif;}' +
        '.side-nav.open{transform:translateX(0);}' +
        '.side-nav-toggle{position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:1001;width:32px;height:72px;background:#2c5530;color:#fff;border:none;border-radius:8px 0 0 8px;cursor:pointer;font-size:.7rem;font-weight:700;writing-mode:vertical-rl;text-orientation:mixed;letter-spacing:2px;transition:right .3s ease,background .2s;display:flex;align-items:center;justify-content:center;box-shadow:-2px 0 10px rgba(0,0,0,0.1);padding:0;}' +
        '.side-nav-toggle:hover{background:#1e3a22;}' +
        '.side-nav-toggle.shifted{right:280px;}' +
        '.side-nav-hdr{padding:14px 16px;border-bottom:1px solid #e5e5e5;background:linear-gradient(135deg,#2c5530 0%,#4a7c59 100%);color:#fff;position:sticky;top:0;z-index:2;}' +
        '.side-nav-hdr h3{font-family:"Source Sans Pro",sans-serif;font-size:.8rem;font-weight:700;margin:0;text-align:left;color:#fff;text-transform:uppercase;letter-spacing:2px;}' +
        '.side-nav-grp{padding:12px 0 6px;}' +
        '.side-nav-grp-title{padding:0 16px;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#d4a574;margin-bottom:4px;}' +
        '.side-nav-link{display:block;padding:4px 16px;color:#555;text-decoration:none;font-size:.8rem;line-height:1.4;transition:background .15s,color .15s;border-left:3px solid transparent;}' +
        '.side-nav-link:hover{background:rgba(44,85,48,0.06);color:#2c5530;}' +
        '.side-nav-link.active-page{color:#2c5530;font-weight:700;background:rgba(44,85,48,0.08);border-left-color:#2c5530;}' +
        '.side-nav-link.sec-link{padding-left:28px;font-size:.76rem;color:#777;}' +
        '.side-nav-link.sec-link:hover{color:#2c5530;}' +
        '.side-nav-link.sec-link.active-sec{color:#2c5530;font-weight:600;border-left-color:#d4a574;}' +
        '.side-nav-sep{height:1px;background:#e5e5e5;margin:6px 16px;}' +
        '@media(max-width:768px){.side-nav{width:260px;}.side-nav-toggle.shifted{right:260px;}}' +
        '@media print{.side-nav,.side-nav-toggle{display:none!important;}}';
    document.head.appendChild(css);

    // ── Page map ──
    var pages = [
        { group: 'Documents principaux', items: [
            { href: 'Brand-v4-summary.html', label: 'Synth\u00e8se Ex\u00e9cutive' },
            { href: 'Brand-Strategie-v4.html', label: 'Plateforme de Marque' }
        ]},
        { group: 'D\u00e9clinaisons', items: [
            { href: 'Brand-v4-narrative.html', label: 'Narrative & Tone' },
            { href: 'Brand-v4-scenarios.html', label: '3 Sc\u00e9narios' },
            { href: 'Brand-v4-voice-chart.html', label: 'Voice Chart' },
            { href: 'Brand-v4-charte-produit.html', label: 'Charte Produit' },
            { href: 'Brand-v4-homepage.html', label: 'Template Homepage' },
            { href: 'Brand-v4-landing.html', label: 'Template Landing' }
        ]},
        { group: 'Exemples', items: [
            { href: 'exemple-fiche-produit.html', label: 'Fiche Produit' },
            { href: 'exemple-landing-allergies.html', label: 'Landing Allergies' },
            { href: 'exemple-homepage.html', label: 'Homepage' }
        ]}
    ];

    // ── Build toggle button ──
    var toggle = document.createElement('button');
    toggle.className = 'side-nav-toggle';
    toggle.textContent = 'MENU';

    // ── Build nav panel ──
    var nav = document.createElement('nav');
    nav.className = 'side-nav';

    nav.innerHTML = '<div class="side-nav-hdr"><h3>Menu</h3></div>';

    // Current file
    var currentFile = (location.pathname.split('/').pop() || '').toLowerCase();

    // Page groups
    pages.forEach(function(group) {
        var grp = document.createElement('div');
        grp.className = 'side-nav-grp';
        var title = document.createElement('div');
        title.className = 'side-nav-grp-title';
        title.textContent = group.group;
        grp.appendChild(title);

        group.items.forEach(function(item) {
            var a = document.createElement('a');
            a.className = 'side-nav-link';
            a.href = item.href;
            a.textContent = item.label;
            if (currentFile === item.href.toLowerCase()) {
                a.classList.add('active-page');
            }
            grp.appendChild(a);
        });
        nav.appendChild(grp);
    });

    // Separator
    var sep = document.createElement('div');
    sep.className = 'side-nav-sep';
    nav.appendChild(sep);

    // Sections container
    var secGrp = document.createElement('div');
    secGrp.className = 'side-nav-grp';
    var secTitle = document.createElement('div');
    secTitle.className = 'side-nav-grp-title';
    secTitle.textContent = 'Sur cette page';
    secGrp.appendChild(secTitle);
    nav.appendChild(secGrp);

    // Insert into DOM
    document.body.appendChild(nav);
    document.body.appendChild(toggle);

    // ── Open / close helpers ──
    var isOpen = false;

    function openNav() {
        isOpen = true;
        nav.classList.add('open');
        toggle.classList.add('shifted');
    }

    function closeNav() {
        isOpen = false;
        nav.classList.remove('open');
        toggle.classList.remove('shifted');
    }

    // ── Toggle on click ──
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (isOpen) { closeNav(); } else { openNav(); }
    });

    // ── Build intra-page section links ──
    var sections = [];
    var idx = 0;
    document.querySelectorAll('section > h2, .part-header > h2').forEach(function(h2) {
        var parent = h2.closest('section') || h2.closest('.part-header');
        if (!parent) return;

        if (!parent.id) parent.id = 'nav-s-' + idx++;

        var text = h2.textContent.replace(/\s+/g, ' ').trim();
        if (text.length > 38) text = text.substring(0, 36) + '\u2026';

        var link = document.createElement('a');
        link.className = 'side-nav-link sec-link';
        link.href = '#' + parent.id;
        link.textContent = text;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.innerWidth < 1400) closeNav();
        });
        secGrp.appendChild(link);
        sections.push({ el: parent, link: link });
    });

    // ── Scroll spy ──
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                var scrollY = window.scrollY + 150;
                var active = null;
                for (var i = sections.length - 1; i >= 0; i--) {
                    if (sections[i].el.offsetTop <= scrollY) {
                        active = sections[i];
                        break;
                    }
                }
                sections.forEach(function(s) { s.link.classList.remove('active-sec'); });
                if (active) active.link.classList.add('active-sec');
                ticking = false;
            });
            ticking = true;
        }
    });
})();
