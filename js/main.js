const productContainers = [...document.querySelectorAll('.container-produto')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function openNav(){
    document.getElementById("myNav").style.width = '100%';
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
}
