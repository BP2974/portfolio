$(document).ready(function(){
    
    const content1 = document.querySelector('.content1')
    const path1 = document.querySelector('.path1')
    const path1Length = path1.getTotalLength()
    console.log(path1Length)
    console.log(content1.offsetHeight)

    path1.style.strokeDasharray  = path1Length
    path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.5, content1, path1Length)

    function calcDashoffset(scrollY, element, length) {
        const ratio = (scrollY - element.offsetTop) / element.offsetHeight
        const value = length - (length * ratio)
        console.log(value)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler() {
        const scrollY = window.scrollY + (window.innerHeight * 0.5)
        path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
    }

    window.addEventListener('scroll', scrollHandler)
})
    

