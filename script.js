document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const closeButton = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    function openMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Legal modal
    const legalOpen = document.getElementById('legal-open');
    const legalClose = document.getElementById('legal-close');
    const legalModal = document.getElementById('legal-modal');
    const legalOverlay = document.getElementById('legal-overlay');

    function openLegal() {
        legalModal.classList.remove('hidden');
        legalModal.classList.add('open');
        legalOverlay.classList.remove('hidden');
        legalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLegal() {
        legalModal.classList.add('hidden');
        legalModal.classList.remove('open');
        legalOverlay.classList.add('hidden');
        legalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    legalOpen.addEventListener('click', openLegal);
    legalClose.addEventListener('click', closeLegal);
    legalOverlay.addEventListener('click', closeLegal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !legalModal.classList.contains('hidden')) closeLegal();
    });
});
