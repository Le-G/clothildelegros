class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-center text-xs text-gray-500 uppercase tracking-widest">
            © 2024 Maître Clothilde Legros - Mentions Légales - Barreau de Paris
        </div>`;
    }
}
customElements.define('main-footer', MainFooter);
