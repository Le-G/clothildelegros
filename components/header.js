class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div class="text-xl font-bold tracking-widest serif uppercase text-gray-800">
                    <a href="index.html">Clothilde Legros</a>
                </div>
                <div class="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-semibold text-gray-600">
                    <a href="index.html#accueil" class="hover:text-black">Accueil</a>
                    <a href="index.html#le-cabinet" class="hover:text-black">Le Cabinet</a>
                    <a href="index.html#domaines" class="hover:text-black">Domaines d'intervention</a>
                    <a href="index.html#honoraires" class="hover:text-black">Honoraires</a>
                    <a href="index.html#contact" class="hover:text-black">Contact</a>
                </div>
                <a href="tel:0680109505" class="bg-red-700 text-white px-5 py-2 text-xs uppercase font-bold tracking-tighter">
                    Urgence 24/7
                </a>
            </div>
        </nav>`;
    }
}
customElements.define('main-header', MainHeader);
