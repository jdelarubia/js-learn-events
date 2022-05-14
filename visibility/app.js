import { EventManager } from '../utils/eventmanager.js'

const pinkpanther = document.querySelector('#pinkpanther')
const toggleBtn = document.querySelector('#toggleBtn')
const removeBtn = document.querySelector('#removeBtn')

const callback = (event) => {
  event.preventDefault()
  const rabbit = event.currentTarget
  rabbit.style.visibility = ['', 'visible'].includes(rabbit.style.visibility)
    ? 'hidden'
    : 'visible'
}
const manager = new EventManager(pinkpanther, 'toggle', callback)
manager.attach(toggleBtn, 'click', false)
removeBtn.addEventListener('click', manager.remove.bind(manager)) // <- .bind() important if not inside a lambda
