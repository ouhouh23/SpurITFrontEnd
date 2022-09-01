const collapsibleItems = document.querySelectorAll('.collapsible')

collapsibleItems.forEach(element => {
    const showButton = element.querySelector('.collapsible__action--hidden')
    const hideButton = element.querySelector('.collapsible__action--visible')
    const content = element.querySelector('.collapsible__content')
    const contentHeight = content.offsetHeight
    const keyframes = [
    {
        height: 0,
        opacity: 0
    },
    {
        height: contentHeight.toString() + 'px',
        opacity: 1
    }]

    const options = {
        duration: 300,
        easing: 'ease-in',
        fill: 'forwards' 
    }

    const animation = content.animate(keyframes, options)
    animation.commitStyles()
    animation.pause()

    const toggleAnimation = () => {
        animation.play()
        animation.finished.then(() => {
            animation.reverse()
            animation.pause()
        });
    }

    hideButton.style.display = 'none'
    element.style.overflow = 'hidden'

    showButton.addEventListener('click', () => {
        toggleAnimation()
        showButton.style.display = 'none'
        hideButton.style.display = 'block'
    })

    hideButton.addEventListener('click', () => {
        toggleAnimation()
        showButton.style.display = 'block'
        hideButton.style.display = 'none'
    })
})




// Template responsive and tested in Chrome, Firefox, Edge.
