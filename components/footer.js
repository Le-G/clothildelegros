class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-white/70 uppercase tracking-widest space-y-3">
            <p>© 2026 MAÎTRE CLOTHILDE LEGROS - MENTIONS LÉGALES - BARREAU DE PARIS</p>
            <p class="tracking-wider">SIREN 911 854 974 — TVA FR34 911 854 974</p>
        </div>`;
    }
}
customElements.define('main-footer', MainFooter);
