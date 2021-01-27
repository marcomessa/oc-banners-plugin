export default class Modal {
  constructor(trigger) {
    this.trigger = trigger
    this.prepareVars()
  }

  prepareVars() {
    this.overlay = document.createElement('div')
    this.overlay.dataset.mmesModalOverlay = true
    this.overlay.classList.add('fade-in')
    this.modal = document.querySelector('[data-mmes-modal]')
    this.closeButton = document.querySelector('[data-mmes-modal-close]')
  }

  appendOverlay() {
    document.body.appendChild(this.overlay);
  }

  initEvents() {
    this.boundClose = evt => this.close(evt)
    this.overlay.addEventListener('click', this.boundClose)
  }

  removeEvents() {
    this.overlay.removeEventListener('click', () => this.boundClose())
  }

  open() {
    this.appendOverlay()
    this.initEvents()
  }

  close() {
    this.removeEvents()
    document.body.removeChild(this.overlay)
    document.body.removeChild(this.modal)
  }
}
