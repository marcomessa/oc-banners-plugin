export default class Modal {
  constructor(properties) {
    this.properties = properties
    this.prepareVars()
  }

  prepareVars() {
    this.hasBeenClosed = this.getCookie(this.properties.cookieName)
    this.overlay = document.createElement('div')
    this.overlay.dataset.mmesModalOverlay = '1'
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
    this.closeButton.addEventListener('click', this.boundClose)
  }

  removeEvents() {
    this.overlay.removeEventListener('click', () => this.boundClose())
    this.closeButton.removeEventListener('click', this.boundClose)
    document.removeEventListener('mouseleave', this.boundOnMouseLeaveDocument)
  }

  init() {
    if (!this.hasBeenClosed) {
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
  }

  show() {
    if (!this.hasBeenClosed) {
      this.appendOverlay()
      this.initEvents()
      this.modal.classList.add('fade-in-slide-in')
    }
  }

  close() {
    if (this.properties.useCookie === '1') {
      this.setCookie(
        this.properties.cookieName,
        true,
        this.properties.cookieDuration
      )
    }

    this.removeEvents()
    document.body.removeChild(this.overlay)
    document.body.removeChild(this.modal)
  }

  onMouseLeaveDocument() {
    this.show()
  }

  /**
   * https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
   * @param name
   * @returns {*|null}
   */
  getCookie(name) {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }

  /**
   * https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
   * @param name
   * @param value
   * @param days
   */
  setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  }

  /**
   * https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
   * @param name
   */
  deleteCookie(name) {
    setCookie(name, '', -1);
  }
}
