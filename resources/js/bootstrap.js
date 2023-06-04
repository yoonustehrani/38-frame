/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// import axios from 'axios';
// window.axios = axios;

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });


function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
      .toString()
      .split('')
      .map(x => farsiDigits[x])
      .join('');
  }

const animateCSS = (element, animation, prefix = 'animate__') => {
    // We create a Promise and return it
    return new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = element;
        node.classList.add(`${prefix}animated`, animationName);
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
          event.stopPropagation();
          node.classList.remove(`${prefix}animated`, animationName);
          resolve(node);
        }
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
}


document.addEventListener('DOMContentLoaded', function() {
    let elements = document.getElementsByClassName('pointer-menu-item')
    const hideElement = element => element.classList.add('hidden')
    const unHideElement = element => element.classList.remove('hidden')
    const deActive = element => element.classList.remove('active')
    Array.from(elements).map((elem, i) => {
        elem.addEventListener('pointerenter', ({currentTarget}) => {
            Array.from(currentTarget.closest('ul')?.querySelectorAll(`li.active`)).map(deActive)
            currentTarget.classList.add('active')
            const subMenuItemsDiv = currentTarget.closest('ul').nextElementSibling
            let allCurrentlyActive = subMenuItemsDiv.querySelectorAll(`ul:not(.hidden, :nth-child(${i + 1}))`)
            Array.from(allCurrentlyActive).map(hideElement)
            unHideElement(subMenuItemsDiv.children.item(i))
        })
    })
    document.querySelectorAll('li > a[data-has-sub]').forEach(element => {
        let pointerClassNames = 'before:rotate-180'.split(' ')
        element.addEventListener('pointerup', ({currentTarget}) => {
            let {classList} = currentTarget.nextElementSibling
            pointerClassNames.map(cls => currentTarget.parentNode.classList.toggle(cls))
            if (! classList.contains('grid-important')) {
                classList.add('grid-important')
                animateCSS(currentTarget.nextElementSibling, 'fadeIn')
                return
            }
            animateCSS(currentTarget.nextElementSibling, 'fadeOut').then(node => node.classList.remove('grid-important'))
        })
        element.addEventListener('pointerenter', ({currentTarget}) => {
            let list = currentTarget.parentNode.classList
            pointerClassNames.map(cls => list.remove(cls))
            let {classList} = currentTarget.nextElementSibling
            classList.remove('animate__animated', 'animate__fadeOut')
            if (! classList.contains('grid-important')) {
                classList.add('grid-important')
                animateCSS(currentTarget.nextElementSibling, 'fadeIn')
                return
            }
            currentTarget.parentNode.addEventListener('pointerleave', ({currentTarget}) => {
                let list = currentTarget.classList
                pointerClassNames.map(cls => list.add(cls))
                animateCSS(currentTarget.querySelector('div'), 'fadeOut').then(node => node.classList.remove('grid-important'))
                // animateCSS(currentTarget.querySelector('div'), 'fadeOut').then(node => {
                //     let menuBodyDiv = currentTarget.querySelector('div')
                //     menuBodyDiv.classList.remove('grid')
                //     menuBodyDiv.classList.add('hidden')
                // })
            }, {once: true})
        })
    })

    // counters

    Array.from(document.querySelectorAll('span[data-count-to]')).map(element => {
        let countTo = Number(element.getAttribute('data-count-to'))
        let each = (countTo / 100) * (Math.ceil(Math.random() * 10) + 3)
        let current = 0
        let thisinterval = setInterval(() => {
            current += each
            if (current >= countTo) {
                current = countTo
                clearInterval(thisinterval)
            }
            
            element.innerHTML = toFarsiNumber(Math.ceil(current)) + '+'
        }, 100);
    })
    
})