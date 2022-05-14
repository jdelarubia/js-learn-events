/**
 * eventmanager.js
 * Simple class to help managing simple events associated to DOM elements.
 */

export class EventManager {
  /**
   * @param {HTMLElement} elem - element to attach the event to
   * @param {String} toEvent - name of the Event to be listened to
   * @param {Function} callback - function to be attached to the event
   */
  constructor(elem, toEvent, callback) {
    this.elem = elem
    this.toEvent = toEvent
    this.callback = callback //.bind(this)
    this.suscribe()
  }

  /**
   * Launches toEvent every time fromEvent is triggered over elem
   * @param {HTMLElement} triggerElement - element to trigger toEvent
   * @param {String} fromEvent - name of the triggering Event over elem, ie click, mouseover...
   * @param {Boolean} propagate - false to stopPropagation; true is the default
   */
  attach(triggerElement, fromEvent, propagate = true) {
    triggerElement.addEventListener(fromEvent, (event) => {
      event.preventDefault()
      if (!propagate) event.stopPropagation()
      let customEvent = new CustomEvent(this.toEvent, {
        bubbles: true,
        composed: true,
        cancelable: true, // without that flag preventDefault doesn't work
      })
      this.elem.dispatchEvent(customEvent)
    })
  }

  /**
   * Attach callback to elem.
   */
  suscribe() {
    this.elem.addEventListener(this.toEvent, this.callback, false)
  }

  /**
   * Removes the callback associated to toEvent from elem.
   */
  remove() {
    this.elem.removeEventListener(this.toEvent, this.callback)
    delete this.callback
  }
}
