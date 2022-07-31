class ButtonCount extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        
        let count = 0;
        let btn = document.createElement('button');
        btn.style = 'padding: 2rem; margin: 3rem;';

        btn.innerHTML = `<p> ${count} clicks </p>`;


        btn.addEventListener('click', () => {
            count++;
            btn.innerHTML = `<p> ${count} clicks </p>`;
        });

        this.shadowRoot.append(btn);
    }
}

customElements.define('button-count', ButtonCount);