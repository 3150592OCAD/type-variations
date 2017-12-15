const stylesheets = 20
const navigation = document.createElement('nav')
const cssLink = document.createElement('link')
const links = []
const paddedNum = (num) => '00'.concat(String(num)).slice(-2)

cssLink.setAttribute('rel','stylesheet')
cssLink.setAttribute('href', 'variation/static/css/style00.css')
for (let i = stylesheets; i--;) links.push(document.createElement('a'))

document.addEventListener("DOMContentLoaded", event=> {
	document.head.append(cssLink)
	let header = document.getElementsByTagName('header')[0]
	if(typeof header == 'undefined'){
		header = document.createElement('header')
		document.body.prepend(header)
	}
	window.addEventListener("resize",(e)=>{
		document.getElementsByTagName('main')[0].setAttribute('style', `margin-top:${header.offsetHeight + 10}px;`)
	})
	links.forEach((link,i)=>{
		link.setAttribute('data-source',`variation/static/css/style${paddedNum(i)}.css`)
		link.innerHTML = paddedNum(i+1)
		link.addEventListener('click',(e)=>{
			document.getElementsByTagName('main')[0].setAttribute('style', `margin-top:${header.offsetHeight + 10}px;`)
			cssLink.setAttribute('href', e.target.getAttribute('data-source'))
		})
		header.append(link)
	})
})