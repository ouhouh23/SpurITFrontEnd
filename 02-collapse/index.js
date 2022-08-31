const showButton = document.querySelector('.collapsible__action--hidden')
const hideButton = document.querySelector('.collapsible__action--visible')
const content = document.querySelector('.collapsible__content')
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
const keyframesReverse = [
{
	height: contentHeight.toString() + 'px',
	opacity: 1
},
{
	height: 0,
	opacity: 0
}]

hideButton.style.display = 'none'
content.style.display = 'none'

showButton.onclick = () => {
	content.style.display = 'block'
	content.animate(keyframes, 300)
	showButton.style.display = 'none'
	hideButton.style.display = 'block'
}

hideButton.onclick = () => {
    content.animate(keyframesReverse, 300).onfinish = () => {
    	content.style.display = 'none'
    	hideButton.style.display = 'none'
	    showButton.style.display = 'block'
    }
}

// Template responsive and tested in Chrome, Firefox, Edge, Safari.
