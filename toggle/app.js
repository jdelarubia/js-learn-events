import { EventManager } from '../utils/eventmanager.js'

const div = document.querySelector('#box')
const feedback = document.querySelector('#feedback')
const manager = new EventManager(div, 'toggleColor', () => {
  div.style.backgroundColor = ['blue', ''].includes(div.style.backgroundColor)
    ? 'red'
    : 'blue'
})
manager.attach(div, 'click', 'toggleColor')
document.addEventListener('click', (event) => {
  const didClickInside = div.contains(event.target)
  if (!didClickInside) manager.remove()
  feedback.innerHTML = `user did click ${
    didClickInside ? 'inside' : 'outside'
  } the box`
})
