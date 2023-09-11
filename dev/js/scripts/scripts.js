class CustomTr extends HTMLTableRowElement {
  constructor() {
    super();
    this.btn = this.querySelector('.lc-table__btn');

    if (this.btn) {
      this.btn.addEventListener('click', this.clickHandler.bind(this));
    }
  }

  clickHandler() {
    this.btn.onclick = this.classList.toggle('_open');
  }
}

customElements.define('custom-tr', CustomTr, { extends: 'tr' });
