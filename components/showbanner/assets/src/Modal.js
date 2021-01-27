export default class Modal {
  constructor(properties) {
    this.properties = properties
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
    document.removeEventListener('mouseleave', this.boundOnMouseLeaveDocument)
  }

  init() {
    switch (this.properties.trigger) {
      case "0": // on load
        this.show()
        break;
      case "1": //on mouse exit
        this.boundOnMouseLeaveDocument = evt => this.onMouseLeaveDocument(evt)
        document.addEventListener('mouseleave', this.boundOnMouseLeaveDocument)
        break;
    }
  }

  show() {
    this.appendOverlay()
    this.initEvents()
    this.modal.classList.add('fade-in-slide-in')
  }

  close() {
    this.removeEvents()
    document.body.removeChild(this.overlay)
    document.body.removeChild(this.modal)
  }

  onMouseLeaveDocument() {
    this.show()
  }
}
