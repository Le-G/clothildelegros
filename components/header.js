class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-center w-8 h-8 mr-4 -ml-2">
                    <span class="block w-5 h-0.5 bg-gray-800 mb-1"></span>
                    <span class="block w-5 h-0.5 bg-gray-800 mb-1"></span>
                    <span class="block w-5 h-0.5 bg-gray-800"></span>
                </button>
                <div class="text-xl font-bold tracking-widest serif uppercase text-gray-800">
                    <a href="/">Clothilde Legros</a>
                </div>
                <div class="hidden md:flex space-x-6 text-xs uppercase tracking-widest font-semibold text-gray-600">
                    <a href="/#accueil" class="hover:text-black">Accueil</a>
                    <a href="/#le-cabinet" class="hover:text-black">Cabinet</a>
                    <a href="/#domaines" class="hover:text-black">Domaines</a>
                    <a href="/#honoraires" class="hover:text-black">Honoraires</a>
                    <a href="/#presse" class="hover:text-black">Presse</a>
                    <a href="/#contact" class="hover:text-black">Contact</a>
                </div>
                <a href="tel:0680109505" class="bg-red-700 text-white px-5 py-2 text-xs uppercase font-bold tracking-tighter">
                    Urgence 24/7
                </a>
            </div>
            <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100">
                <div class="flex flex-col px-6 py-4 space-y-4 text-sm uppercase tracking-widest font-semibold text-gray-600">
                    <a href="/#accueil" class="hover:text-black">Accueil</a>
                    <a href="/#le-cabinet" class="hover:text-black">Cabinet</a>
                    <a href="/#domaines" class="hover:text-black">Domaines</a>
                    <a href="/#honoraires" class="hover:text-black">Honoraires</a>
                    <a href="/#presse" class="hover:text-black">Presse</a>
                    <a href="/#contact" class="hover:text-black">Contact</a>
                </div>
            </div>
        </nav>`;

        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }
}
customElements.define('main-header', MainHeader);
