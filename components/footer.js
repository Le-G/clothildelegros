class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-white/70 uppercase tracking-widest">
            © 2024 MAÎTRE CLOTHILDE LEGROS - MENTIONS LÉGALES - BARREAU DE PARIS
        </div>`;
    }
}
customElements.define('main-footer', MainFooter);
